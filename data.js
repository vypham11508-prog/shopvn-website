// ===== DỮ LIỆU SẢN PHẨM TOÀN TRANG =====
const PRODUCTS = [
  // THỜI TRANG
  { id: 1, name: "Áo Thun Nam Basic", category: "thoitrang", price: 189000, oldPrice: 250000, emoji: "👕", rating: 4.8, reviews: 312, sold: 1840, seller: "Fashion Hub" },
  { id: 2, name: "Váy Hoa Nữ Dáng A", category: "thoitrang", price: 320000, oldPrice: null, emoji: "👗", rating: 4.7, reviews: 198, sold: 920, seller: "Lady Style" },
  { id: 3, name: "Quần Jeans Slim Fit", category: "thoitrang", price: 450000, oldPrice: 600000, emoji: "👖", rating: 4.9, reviews: 540, sold: 3200, seller: "Denim Co." },
  { id: 4, name: "Áo Khoác Denim Unisex", category: "thoitrang", price: 580000, oldPrice: 750000, emoji: "🧥", rating: 4.6, reviews: 87, sold: 430, seller: "Urban Wear" },
  { id: 5, name: "Áo Polo Nam Cao Cấp", category: "thoitrang", price: 280000, oldPrice: null, emoji: "👔", rating: 4.7, reviews: 203, sold: 1100, seller: "Smart Men" },
  { id: 6, name: "Chân Váy Midi Linen", category: "thoitrang", price: 265000, oldPrice: 350000, emoji: "👗", rating: 4.5, reviews: 145, sold: 670, seller: "Linen Look" },

  // ĐIỆN TỬ
  { id: 7, name: "iPhone 16 Pro Max", category: "dientuchomay", price: 29900000, oldPrice: 33000000, emoji: "📱", rating: 4.9, reviews: 1024, sold: 5600, seller: "Apple Store VN" },
  { id: 8, name: "Samsung Galaxy S25", category: "dientuchomay", price: 22500000, oldPrice: 25000000, emoji: "📱", rating: 4.8, reviews: 876, sold: 4200, seller: "Samsung Official" },
  { id: 9, name: "Laptop Dell XPS 15", category: "dientuchomay", price: 35000000, oldPrice: null, emoji: "💻", rating: 4.9, reviews: 432, sold: 980, seller: "Dell Vietnam" },
  { id: 10, name: "Tai Nghe Sony WH-1000XM5", category: "dientuchomay", price: 6500000, oldPrice: 8000000, emoji: "🎧", rating: 4.8, reviews: 654, sold: 2300, seller: "Sony Store" },
  { id: 11, name: "Apple Watch Series 10", category: "dientuchomay", price: 12000000, oldPrice: 14000000, emoji: "⌚", rating: 4.7, reviews: 321, sold: 1500, seller: "Apple Store VN" },
  { id: 12, name: "Máy Ảnh Canon EOS R50", category: "dientuchomay", price: 18500000, oldPrice: null, emoji: "📷", rating: 4.9, reviews: 187, sold: 420, seller: "Canon VN" },

  // LÀM ĐẸP
  { id: 13, name: "Son Môi MAC Ruby Woo", category: "lamdep", price: 520000, oldPrice: 650000, emoji: "💄", rating: 4.9, reviews: 2100, sold: 8900, seller: "MAC Cosmetics" },
  { id: 14, name: "Kem Chống Nắng Anessa SPF50+", category: "lamdep", price: 380000, oldPrice: null, emoji: "🧴", rating: 4.8, reviews: 1560, sold: 6700, seller: "Anessa VN" },
  { id: 15, name: "Serum Vitamin C La Roche-Posay", category: "lamdep", price: 650000, oldPrice: 750000, emoji: "✨", rating: 4.7, reviews: 890, sold: 3400, seller: "La Roche-Posay" },
  { id: 16, name: "Nước Hoa Chanel No.5", category: "lamdep", price: 2800000, oldPrice: 3200000, emoji: "🌸", rating: 4.9, reviews: 450, sold: 1200, seller: "Chanel Beauty" },
  { id: 17, name: "Bộ Trang Điểm NYX Professional", category: "lamdep", price: 420000, oldPrice: null, emoji: "💅", rating: 4.6, reviews: 340, sold: 1800, seller: "NYX Store" },
  { id: 18, name: "Mặt Nạ Collagen Mediheal", category: "lamdep", price: 145000, oldPrice: 180000, emoji: "🧖", rating: 4.8, reviews: 2300, sold: 12000, seller: "Mediheal VN" },

  // SÁCH
  { id: 19, name: "Đắc Nhân Tâm – Dale Carnegie", category: "sach", price: 68000, oldPrice: 85000, emoji: "📚", rating: 4.9, reviews: 4500, sold: 25000, seller: "NXB Tổng Hợp" },
  { id: 20, name: "Nhà Giả Kim – Paulo Coelho", category: "sach", price: 72000, oldPrice: null, emoji: "📖", rating: 4.8, reviews: 3200, sold: 18000, seller: "NXB Hội Nhà Văn" },
  { id: 21, name: "Atomic Habits – James Clear", category: "sach", price: 95000, oldPrice: 120000, emoji: "📗", rating: 4.9, reviews: 2800, sold: 15000, seller: "NXB Lao Động" },
  { id: 22, name: "Sapiens – Lược Sử Loài Người", category: "sach", price: 110000, oldPrice: null, emoji: "📕", rating: 4.8, reviews: 1900, sold: 9800, seller: "NXB Thế Giới" },
  { id: 23, name: "Tư Duy Nhanh và Chậm", category: "sach", price: 88000, oldPrice: 105000, emoji: "📘", rating: 4.7, reviews: 1200, sold: 6500, seller: "NXB Lao Động" },
  { id: 24, name: "Người Giàu Có Nhất Thành Babylon", category: "sach", price: 55000, oldPrice: null, emoji: "📙", rating: 4.6, reviews: 980, sold: 5200, seller: "NXB Tổng Hợp" },

  // THỂ THAO
  { id: 25, name: "Giày Nike Air Max 270", category: "thethao", price: 1850000, oldPrice: 2500000, emoji: "👟", rating: 4.9, reviews: 312, sold: 2840, seller: "Nike Official" },
  { id: 26, name: "Vợt Cầu Lông Yonex Astrox 99", category: "thethao", price: 3200000, oldPrice: null, emoji: "🏸", rating: 4.8, reviews: 245, sold: 980, seller: "Yonex VN" },
  { id: 27, name: "Bóng Đá Adidas FIFA Quality", category: "thethao", price: 650000, oldPrice: 800000, emoji: "⚽", rating: 4.7, reviews: 430, sold: 2100, seller: "Adidas Store" },
  { id: 28, name: "Găng Tay Boxing Everlast", category: "thethao", price: 480000, oldPrice: null, emoji: "🥊", rating: 4.6, reviews: 187, sold: 760, seller: "Everlast VN" },
  { id: 29, name: "Xe Đạp Touring Trek 520", category: "thethao", price: 18500000, oldPrice: 22000000, emoji: "🚴", rating: 4.9, reviews: 98, sold: 320, seller: "Trek Vietnam" },
  { id: 30, name: "Bộ Tạ Tay 10kg Dumbell", category: "thethao", price: 320000, oldPrice: null, emoji: "🏋️", rating: 4.7, reviews: 560, sold: 3400, seller: "Fitness Pro" },
];

// Sản phẩm nổi bật trang chủ (featured)
const FEATURED_IDS = [25, 7, 13, 19, 2, 27];

// Format tiền VND
function formatPrice(n) {
  return n.toLocaleString('vi-VN') + '₫';
}

// Render card sản phẩm
function renderProductCard(p, onclick = '') {
  const actionOnclick = onclick || `goToDetail(${p.id})`;
  return `
    <div class="product-card" onclick="${actionOnclick}">
      <div class="product-img">${p.emoji}</div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="stars">${'⭐'.repeat(Math.floor(p.rating))} (${p.reviews})</div>
        <div class="price-row">
          <span class="price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">+ Giỏ hàng</button>
      </div>
    </div>`;
}

// Chuyển đến trang chi tiết
function goToDetail(id) {
  localStorage.setItem('currentProduct', id);
  window.location.href = 'product-detail.html';
}

// ===== GIỎ HÀNG =====
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline' : 'none';
  });
}
function addToCart(productId, qty = 1, color = '', size = '') {
  const cart = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const key = `${productId}-${color}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, id: productId, name: product.name, price: product.price, emoji: product.emoji, color, size, qty });
  }
  saveCart(cart);
  showToast('Đã thêm vào giỏ hàng! 🛒');
}
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1f3864;color:white;padding:12px 24px;border-radius:25px;font-size:0.9rem;z-index:9999;font-family:Open Sans,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,0.2);';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.display = 'none'; }, 2500);
}
