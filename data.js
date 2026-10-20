// ===== DỮ LIỆU SẢN PHẨM =====
// Format tiền VND
function formatPrice(n) { return Number(n).toLocaleString('vi-VN') + '₫'; }

// Chuyển đến trang chi tiết
function goToDetail(id) { localStorage.setItem('currentProduct', id); window.location.href = 'product-detail.html'; }

// Render card sản phẩm
function renderProductCard(p) {
  return `<div class="product-card" onclick="goToDetail(${p.id})">
    <div class="product-img">${p.emoji}</div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="stars">${'⭐'.repeat(Math.floor(p.rating))} (${p.reviews})</div>
      <div class="price-row">
        <span class="price">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
      </div>
      <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})">+ Giỏ hàng</button>
    </div>
  </div>`;
}

// ===== GIỎ HÀNG =====
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); updateCartBadge(); }
function updateCartBadge() {
  const total = getCart().reduce((s,i) => s+i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => { el.textContent = total; el.style.display = total>0?'inline':'none'; });
}
function addToCart(productId, qty=1, color='', size='') {
  const p = PRODUCTS.find(x => x.id===productId); if(!p) return;
  const key=`${productId}-${color}-${size}`;
  const cart=getCart(); const ex=cart.find(i=>i.key===key);
  if(ex) ex.qty+=qty; else cart.push({key,id:productId,name:p.name,price:p.price,emoji:p.emoji,color,size,qty});
  saveCart(cart); showToast('Đã thêm vào giỏ hàng! 🛒');
}
function showToast(msg) {
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1f3864;color:white;padding:12px 24px;border-radius:25px;font-size:0.9rem;z-index:9999;font-family:Open Sans,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,0.2);';document.body.appendChild(t);}
  t.textContent=msg; t.style.display='block'; clearTimeout(t._t); t._t=setTimeout(()=>{t.style.display='none';},2500);
}

// ===== SINH SẢN PHẨM =====
const CAT_DATA = {
  thoitrang: {
    emoji: ['👕','👗','👖','🧥','👔','🧣','🧤','👜','👒','🕶️','👟','🧦'],
    prefixes: ['Áo Thun','Váy','Quần Jeans','Áo Khoác','Áo Polo','Khăn','Găng Tay','Túi Xách','Mũ','Kính','Giày','Tất'],
    brands: ['Zara','H&M','Uniqlo','Local Brand','Fashion Hub','Lady Style','Urban Wear','Denim Co.','Trendy VN','Style Shop'],
    suffixes: ['Nam Basic','Nữ Dáng A','Slim Fit','Unisex','Cao Cấp','Thể Thao','Dạo Phố','Công Sở','Hè 2026','Xuân Thu'],
    minP: 80000, maxP: 1500000
  },
  dientuchomay: {
    emoji: ['📱','💻','⌚','🎧','📷','🖥️','⌨️','🖱️','🔋','📡','🎮','📺'],
    prefixes: ['iPhone','Samsung Galaxy','Laptop Dell','Tai Nghe Sony','Máy Ảnh Canon','Màn Hình','Bàn Phím','Chuột','Pin Sạc Dự Phòng','Router WiFi','Gamepad','Tivi'],
    brands: ['Apple','Samsung','Dell','Sony','Canon','LG','Logitech','Anker','TP-Link','Xiaomi','ASUS','Acer'],
    suffixes: ['Pro','Ultra','Max','Lite','Plus','SE','Standard','Gaming','Mini','HD'],
    minP: 200000, maxP: 35000000
  },
  lamdep: {
    emoji: ['💄','🧴','✨','🌸','💅','🧖','🪥','🧼','💆','🧹','🫧','🌺'],
    prefixes: ['Son Môi','Kem Dưỡng','Serum','Nước Hoa','Phấn Nền','Mascara','Toner','Sữa Rửa Mặt','Mặt Nạ','Dầu Gội','Kem Chống Nắng','Nước Tẩy Trang'],
    brands: ['MAC','Anessa','La Roche-Posay','Chanel','Innisfree','The Face Shop','Laneige','Bioderma','CeraVe','Cetaphil','Estee Lauder','Shiseido'],
    suffixes: ['SPF50+','Dưỡng Ẩm','Trắng Da','Chống Lão Hoá','Kiểm Soát Dầu','Dưỡng Môi','Phục Hồi','Làm Sáng','Tươi Mát','Collagen'],
    minP: 50000, maxP: 3000000
  },
  sach: {
    emoji: ['📚','📖','📗','📕','📘','📙','📓','📔','📒','📃','🗒️','📜'],
    prefixes: ['Đắc Nhân Tâm','Nhà Giả Kim','Atomic Habits','Sapiens','Tư Duy Nhanh','Người Giàu Nhất','Dám Nghĩ Lớn','Bí Mật','Nghĩ Giàu Làm Giàu','Trí Tuệ Cảm Xúc','Khởi Nghiệp','Lãnh Đạo'],
    brands: ['NXB Tổng Hợp','NXB Trẻ','NXB Hội Nhà Văn','NXB Lao Động','NXB Thế Giới','Alpha Books','First News','Nhã Nam','Đinh Tị','Đông A'],
    suffixes: ['','– Bìa Cứng','– Tái Bản','– Phiên Bản Đặc Biệt','– Best Seller','– Tặng Bookmark','(Combo 2 cuốn)','– In Màu','– Bản Dịch Mới',''],
    minP: 45000, maxP: 350000
  },
  thethao: {
    emoji: ['👟','🏸','⚽','🥊','🚴','🏋️','🎾','🏊','⛷️','🧘','🏇','🎿'],
    prefixes: ['Giày Nike','Vợt Cầu Lông','Bóng Đá','Găng Tay Boxing','Xe Đạp','Tạ Tay','Vợt Tennis','Kính Bơi','Ván Trượt','Thảm Yoga','Gậy Golf','Ván Trượt Tuyết'],
    brands: ['Nike','Yonex','Adidas','Everlast','Trek','Fitness Pro','Wilson','Speedo','Decathlon','Lululemon','Under Armour','Puma'],
    suffixes: ['Air Max','Astrox 99','FIFA Quality','Pro','Touring','Dumbell Set','Roland Garros','Racing','Street','Premium','Tour','Alpine'],
    minP: 150000, maxP: 25000000
  }
};

const FEATURED_IDS = [1, 91, 181, 271, 361, 451];

// Sinh toàn bộ sản phẩm
const PRODUCTS = (function() {
  const list = [];
  let id = 1;
  const cats = Object.keys(CAT_DATA);
  const PER_CAT = 200; // 200 * 5 = 1000

  cats.forEach(cat => {
    const d = CAT_DATA[cat];
    for (let i = 0; i < PER_CAT; i++) {
      const pIdx = i % d.prefixes.length;
      const bIdx = i % d.brands.length;
      const sIdx = i % d.suffixes.length;
      const eIdx = i % d.emoji.length;
      const varNum = Math.floor(i / d.prefixes.length) + 1;
      const name = `${d.prefixes[pIdx]} ${d.suffixes[sIdx]}${varNum > 1 ? ' v'+varNum : ''}`.trim();
      const basePrice = d.minP + Math.floor(Math.random() * (d.maxP - d.minP));
      const hasDiscount = Math.random() > 0.4;
      const price = hasDiscount ? Math.round(basePrice * (0.65 + Math.random()*0.25)) : basePrice;
      const oldPrice = hasDiscount ? basePrice : null;
      const rating = +(4.3 + Math.random() * 0.7).toFixed(1);
      const reviews = Math.floor(50 + Math.random() * 3000);
      const sold = Math.floor(100 + Math.random() * 15000);
      list.push({ id: id++, name, category: cat, price, oldPrice, emoji: d.emoji[eIdx], rating, reviews, sold, seller: d.brands[bIdx] });
    }
  });
  return list;
})();
