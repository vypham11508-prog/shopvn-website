// ===== AUTH & USER MANAGEMENT =====

function getUser() {
  return JSON.parse(localStorage.getItem('shopvn_user') || 'null');
}
function saveUser(user) {
  localStorage.setItem('shopvn_user', JSON.stringify(user));
}
function logout() {
  localStorage.removeItem('shopvn_user');
  window.location.href = 'index.html';
}

// ===== ĐIỂM THÀNH VIÊN =====
const MEMBER_TIERS = [
  { name: 'Bạc',       min: 0,        max: 2000000,  icon: '🥈', color: '#9e9e9e' },
  { name: 'Vàng',      min: 2000000,  max: 10000000, icon: '🥇', color: '#FFD54F' },
  { name: 'Kim Cương', min: 10000000, max: Infinity,  icon: '💎', color: '#64b5f6' }
];

function getTier(spent) {
  for (let i = MEMBER_TIERS.length - 1; i >= 0; i--) {
    if (spent >= MEMBER_TIERS[i].min) return MEMBER_TIERS[i];
  }
  return MEMBER_TIERS[0];
}

function getNextTier(spent) {
  for (let i = 0; i < MEMBER_TIERS.length; i++) {
    if (spent < MEMBER_TIERS[i].max) return MEMBER_TIERS[i + 1] || null;
  }
  return null;
}

// ===== VOUCHERS =====
const SYSTEM_VOUCHERS = [
  { code: 'WELCOME10', desc: 'Giảm 10% cho đơn đầu tiên', type: 'percent', value: 10, minOrder: 0,       exp: '31/12/2026', new: true },
  { code: 'NEWBIE50K', desc: 'Giảm 50.000₫ cho người mới', type: 'fixed',   value: 50000, minOrder: 200000, exp: '31/12/2026', new: true },
  { code: 'FREESHIP',  desc: 'Miễn phí vận chuyển',        type: 'ship',    value: 0,     minOrder: 0,       exp: '31/12/2026', new: false },
  { code: 'SALE20',    desc: 'Giảm 20% tối đa 200K',       type: 'percent', value: 20,    minOrder: 500000, exp: '31/12/2026', new: false },
  { code: 'SHOPVN10',  desc: 'Giảm 10% mọi đơn hàng',      type: 'percent', value: 10,    minOrder: 0,       exp: '31/12/2026', new: false },
  { code: 'VIP30',     desc: 'Giảm 30% cho thành viên Vàng', type: 'percent', value: 30, minOrder: 1000000, exp: '31/12/2026', new: false },
  { code: 'GIAM100K',  desc: 'Giảm 100.000₫ đơn từ 500K',  type: 'fixed',   value: 100000, minOrder: 500000, exp: '31/12/2026', new: false },
];

function getSavedVouchers() {
  return JSON.parse(localStorage.getItem('saved_vouchers') || '[]');
}
function saveVoucher(code) {
  const saved = getSavedVouchers();
  if (!saved.includes(code)) { saved.push(code); localStorage.setItem('saved_vouchers', JSON.stringify(saved)); }
}
function getVoucherByCode(code) {
  return SYSTEM_VOUCHERS.find(v => v.code === code.toUpperCase());
}
function calcVoucherDiscount(code, subtotal, shipFee) {
  const v = getVoucherByCode(code);
  if (!v || subtotal < v.minOrder) return 0;
  if (v.type === 'percent') return Math.min(Math.round(subtotal * v.value / 100), 200000);
  if (v.type === 'fixed') return v.value;
  if (v.type === 'ship') return shipFee;
  return 0;
}

// ===== RENDER HEADER NAV =====
function renderHeaderNav(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const user = getUser();
  if (user) {
    const tier = getTier(user.spent || 0);
    el.innerHTML = `
      <a href="cart.html">🛒 Giỏ hàng <span class="badge cart-badge">0</span></a>
      <a href="orders.html">📦 Đơn hàng</a>
      <div class="member-points">${tier.icon} ${(user.points||0).toLocaleString()} điểm <span class="tag">${tier.name}</span></div>
      <div class="user-dropdown">
        <button class="btn-login" onclick="toggleUserMenu()">${user.shopName ? '🏪' : '👤'} ${user.name} ▾</button>
        <div class="user-menu" id="user-menu">
          ${user.shopName ? `<a href="seller-dashboard.html">🏪 Quản lý gian hàng</a><div class="menu-divider"></div>` : `<a href="seller-register.html">🏪 Đăng ký bán hàng</a><div class="menu-divider"></div>`}
          <a href="member.html">⭐ Điểm thành viên</a>
          <a href="vouchers.html">🎟️ Voucher của tôi</a>
          <a href="orders.html">📦 Đơn hàng</a>
          <div class="menu-divider"></div>
          <a href="#" onclick="logout()">🚪 Đăng xuất</a>
        </div>
      </div>`;
  } else {
    el.innerHTML = `
      <a href="cart.html">🛒 Giỏ hàng <span class="badge cart-badge">0</span></a>
      <a href="orders.html">📦 Đơn hàng</a>
      <div class="member-points">⭐ 0 điểm <span class="tag">Bạc</span></div>
      <a href="login.html" class="btn-login">Đăng nhập</a>`;
  }
}

function toggleUserMenu() {
  const m = document.getElementById('user-menu');
  if (m) m.classList.toggle('open');
}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.user-dropdown')) {
    document.querySelectorAll('.user-menu').forEach(m => m.classList.remove('open'));
  }
});
