// ===== PICK&PAY – DỮ LIỆU SẢN PHẨM =====
function formatPrice(n) { return Number(n).toLocaleString('vi-VN') + '₫'; }
function goToDetail(id) { localStorage.setItem('currentProduct', id); window.location.href = 'product-detail.html'; }
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
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(c) { localStorage.setItem('cart', JSON.stringify(c)); updateCartBadge(); }
function updateCartBadge() {
  const t = getCart().reduce((s,i) => s+i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => { el.textContent = t; el.style.display = t>0?'inline':'none'; });
}
function addToCart(id, qty=1, color='', size='') {
  const p = PRODUCTS.find(x => x.id===id); if(!p) return;
  const key=`${id}-${color}-${size}`, cart=getCart(), ex=cart.find(i=>i.key===key);
  if(ex) ex.qty+=qty; else cart.push({key,id,name:p.name,price:p.price,emoji:p.emoji,color,size,qty});
  saveCart(cart); showToast('Đã thêm vào giỏ hàng! 🛒');
}
function showToast(msg) {
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#2C2C2C;color:white;padding:12px 24px;border-radius:25px;font-size:0.9rem;z-index:9999;font-family:Open Sans,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,0.2);';document.body.appendChild(t);}
  t.textContent=msg; t.style.display='block'; clearTimeout(t._t); t._t=setTimeout(()=>t.style.display='none',2500);
}

// ===== SINH SẢN PHẨM THỰC TẾ =====
// Giá theo thị trường VN 2026
const PRODUCT_TEMPLATES = {
  thoitrang: [
    {n:'Áo Thun Nam Uniqlo Basic',e:'👕',min:199000,max:399000},
    {n:'Áo Thun Nữ Oversize',e:'👕',min:150000,max:280000},
    {n:'Quần Jeans Nam Slim',e:'👖',min:350000,max:699000},
    {n:'Quần Jeans Nữ Ống Đứng',e:'👖',min:320000,max:650000},
    {n:'Áo Khoác Denim Unisex',e:'🧥',min:450000,max:900000},
    {n:'Áo Khoác Gió Thể Thao',e:'🧥',min:280000,max:550000},
    {n:'Váy Hoa Dáng A Midi',e:'👗',min:250000,max:550000},
    {n:'Váy Wrap Linen',e:'👗',min:280000,max:480000},
    {n:'Áo Polo Nam Cotton',e:'👔',min:220000,max:450000},
    {n:'Áo Sơ Mi Trắng Công Sở',e:'👔',min:280000,max:550000},
    {n:'Chân Váy Ngắn Xếp Ly',e:'🩱',min:180000,max:350000},
    {n:'Quần Short Nam Kaki',e:'🩲',min:160000,max:320000},
    {n:'Áo Hoodie Nỉ Unisex',e:'👕',min:280000,max:520000},
    {n:'Quần Tây Nam Công Sở',e:'👖',min:380000,max:750000},
    {n:'Đầm Liền Thân Dự Tiệc',e:'👗',min:450000,max:950000},
    {n:'Áo Ba Lỗ Thể Thao',e:'👕',min:120000,max:250000},
    {n:'Bộ Pyjama Họa Tiết',e:'👕',min:220000,max:420000},
    {n:'Áo Len Cổ Lọ Mỏng',e:'🧶',min:250000,max:480000},
    {n:'Quần Lửng Nữ Vải Đũi',e:'👖',min:200000,max:380000},
    {n:'Áo Crop Top Nữ',e:'👕',min:120000,max:250000},
  ],
  dientuchomay: [
    {n:'Samsung Galaxy A55 5G',e:'📱',min:8490000,max:9990000},
    {n:'iPhone 15 128GB',e:'📱',min:19900000,max:22990000},
    {n:'Xiaomi Redmi Note 13',e:'📱',min:4490000,max:5990000},
    {n:'OPPO Reno 11',e:'📱',min:7990000,max:9490000},
    {n:'Vivo V30 Lite',e:'📱',min:5490000,max:6990000},
    {n:'Laptop Acer Aspire 5',e:'💻',min:12500000,max:15900000},
    {n:'Laptop Dell Inspiron 15',e:'💻',min:14900000,max:19900000},
    {n:'MacBook Air M2 256GB',e:'💻',min:27900000,max:29900000},
    {n:'Laptop Lenovo IdeaPad 3',e:'💻',min:11500000,max:14500000},
    {n:'Tai Nghe JBL Tune 520BT',e:'🎧',min:890000,max:1190000},
    {n:'Tai Nghe Sony WH-1000XM5',e:'🎧',min:5990000,max:7490000},
    {n:'Tai Nghe AirPods Pro 2',e:'🎧',min:5490000,max:6490000},
    {n:'Tai Nghe Baseus Bowie E13',e:'🎧',min:290000,max:490000},
    {n:'Apple Watch Series 9',e:'⌚',min:10990000,max:12990000},
    {n:'Samsung Galaxy Watch 6',e:'⌚',min:5490000,max:7490000},
    {n:'Xiaomi Smart Band 8',e:'⌚',min:890000,max:1290000},
    {n:'Máy Ảnh Canon EOS M50',e:'📷',min:9900000,max:13500000},
    {n:'Pin Sạc Anker 20000mAh',e:'🔋',min:490000,max:790000},
    {n:'Chuột Logitech MX Master 3',e:'🖱️',min:1290000,max:1890000},
    {n:'Bàn Phím Cơ Akko 3068',e:'⌨️',min:1190000,max:1890000},
  ],
  lamdep: [
    {n:'Son MAC Ruby Woo 3g',e:'💄',min:480000,max:650000},
    {n:'Son Dưỡng Laneige Lip Mask',e:'💋',min:290000,max:390000},
    {n:'Kem Chống Nắng Anessa SPF50+',e:'🧴',min:320000,max:480000},
    {n:'Kem Dưỡng Ẩm CeraVe 236ml',e:'🧴',min:280000,max:420000},
    {n:'Serum Vitamin C Paula\'s Choice',e:'✨',min:890000,max:1290000},
    {n:'Toner Cosrx Low pH Good Morning',e:'🫧',min:220000,max:350000},
    {n:'Sữa Rửa Mặt La Roche-Posay',e:'🫧',min:290000,max:420000},
    {n:'Mặt Nạ Mediheal NMF 10 Miếng',e:'🧖',min:120000,max:180000},
    {n:'Phấn Nền Maybelline Fit Me',e:'💅',min:180000,max:290000},
    {n:'Mascara Maybelline Sky High',e:'👁️',min:180000,max:280000},
    {n:'Nước Hoa Chanel Coco Mademoiselle 50ml',e:'🌸',min:2500000,max:3200000},
    {n:'Nước Hoa Dior Sauvage 100ml',e:'🌸',min:2800000,max:3500000},
    {n:'Nước Hoa Jo Malone Wood Sage',e:'🌸',min:1900000,max:2500000},
    {n:'Dầu Gội Pantene Pro-V 650ml',e:'🧴',min:95000,max:145000},
    {n:'Kem Dưỡng Mắt L\'Oréal Revitalift',e:'✨',min:350000,max:520000},
    {n:'Tẩy Trang Bioderma 500ml',e:'🫧',min:280000,max:420000},
    {n:'Phấn Phủ Innisfree No-Sebum',e:'💄',min:220000,max:320000},
    {n:'Kem BB Cushion ESPOIR',e:'💅',min:480000,max:680000},
    {n:'Xịt Khoáng Evian 300ml',e:'💦',min:150000,max:220000},
    {n:'Lăn Khử Mùi Dove 40ml',e:'🧴',min:55000,max:85000},
  ],
  sach: [
    {n:'Đắc Nhân Tâm – Dale Carnegie',e:'📚',min:68000,max:85000},
    {n:'Nhà Giả Kim – Paulo Coelho',e:'📖',min:72000,max:88000},
    {n:'Atomic Habits – James Clear',e:'📗',min:89000,max:110000},
    {n:'Sapiens – Yuval Noah Harari',e:'📕',min:105000,max:135000},
    {n:'Tư Duy Nhanh và Chậm',e:'📘',min:92000,max:115000},
    {n:'Người Giàu Nhất Thành Babylon',e:'📙',min:55000,max:72000},
    {n:'Dám Nghĩ Lớn – David Schwartz',e:'📚',min:78000,max:98000},
    {n:'Khéo Ăn Nói Sẽ Có Được Thiên Hạ',e:'📖',min:85000,max:108000},
    {n:'Bí Mật Của May Mắn',e:'📗',min:65000,max:82000},
    {n:'Người Không Thể Thiếu',e:'📕',min:88000,max:112000},
    {n:'Nghĩ Giàu Làm Giàu – Napoleon Hill',e:'📘',min:75000,max:95000},
    {n:'Zero to One – Peter Thiel',e:'📙',min:98000,max:125000},
    {n:'Start With Why – Simon Sinek',e:'📚',min:92000,max:118000},
    {n:'Tuổi Trẻ Đáng Giá Bao Nhiêu',e:'📖',min:62000,max:78000},
    {n:'Cho Tôi Xin Một Vé Đi Tuổi Thơ',e:'📗',min:55000,max:70000},
    {n:'Số Đỏ – Vũ Trọng Phụng',e:'📕',min:45000,max:65000},
    {n:'Không Gia Đình – Hector Malot',e:'📘',min:58000,max:78000},
    {n:'Harry Potter Tập 1 – J.K. Rowling',e:'📙',min:88000,max:115000},
    {n:'Mật Mã Da Vinci – Dan Brown',e:'📚',min:92000,max:118000},
    {n:'Cây Cam Ngọt Của Tôi',e:'📖',min:72000,max:92000},
  ],
  thethao: [
    {n:'Giày Nike Air Force 1 White',e:'👟',min:1590000,max:1990000},
    {n:'Giày Adidas Ultraboost 22',e:'👟',min:2290000,max:2990000},
    {n:'Giày Puma RS-X Reinvention',e:'👟',min:1290000,max:1690000},
    {n:'Giày Nike Revolution 6',e:'👟',min:890000,max:1290000},
    {n:'Giày Converse Chuck Taylor',e:'👟',min:790000,max:1090000},
    {n:'Vợt Cầu Lông Yonex Astrox 88S',e:'🏸',min:1890000,max:2890000},
    {n:'Vợt Cầu Lông Victor Thruster K',e:'🏸',min:1290000,max:1990000},
    {n:'Vợt Tennis Wilson Clash 100',e:'🎾',min:3290000,max:4990000},
    {n:'Bóng Đá Adidas UEFA 2024',e:'⚽',min:380000,max:580000},
    {n:'Bóng Rổ Spalding NBA',e:'🏀',min:490000,max:790000},
    {n:'Tạ Tay 5kg x2 Nhựa PVC',e:'🏋️',min:250000,max:380000},
    {n:'Thảm Tập Yoga TPE 6mm',e:'🧘',min:280000,max:450000},
    {n:'Bó Gối Thể Thao McDavid',e:'🦵',min:180000,max:320000},
    {n:'Bình Nước Thể Thao 750ml',e:'🥤',min:85000,max:150000},
    {n:'Túi Gym Adidas 30L',e:'🎒',min:490000,max:790000},
    {n:'Găng Tay Boxing Everlast Pro',e:'🥊',min:380000,max:690000},
    {n:'Xe Đạp Tập Thể Dục Tại Nhà',e:'🚴',min:3500000,max:6500000},
    {n:'Dây Nhảy Tốc Độ Cao',e:'🪢',min:95000,max:180000},
    {n:'Áo Thể Thao Nike Dri-FIT',e:'👕',min:380000,max:650000},
    {n:'Quần Short Tập Gym Adidas',e:'🩲',min:290000,max:490000},
  ]
};

const BRANDS = {
  thoitrang: ['Uniqlo','Zara','H&M','Local Brand','Canifa','Owen','Nem Fashion','JUNO','Coolmate','Routine'],
  dientuchomay: ['Samsung','Apple','Xiaomi','OPPO','Dell','Lenovo','Acer','Sony','JBL','Logitech'],
  lamdep: ['MAC','Laneige','Anessa','CeraVe','La Roche-Posay','Mediheal','Maybelline','Chanel','Dior','Innisfree'],
  sach: ['NXB Tổng Hợp','NXB Trẻ','First News','Alpha Books','Nhã Nam','Đinh Tị','Đông A','NXB Hội Nhà Văn','Fahasa','Tiki Book'],
  thethao: ['Nike','Adidas','Puma','Yonex','Victor','Wilson','Spalding','Everlast','Decathlon','Under Armour']
};

const PRODUCTS = (function() {
  const list = [];
  let id = 1;
  const PER_CAT = 200;
  Object.keys(PRODUCT_TEMPLATES).forEach(cat => {
    const templates = PRODUCT_TEMPLATES[cat];
    const brands = BRANDS[cat];
    for (let i = 0; i < PER_CAT; i++) {
      const t = templates[i % templates.length];
      const brandIdx = Math.floor(i / templates.length) % brands.length;
      const varNum = Math.floor(i / templates.length);
      const name = varNum === 0 ? t.n : `${t.n} (${['Đen','Trắng','Đỏ','Xanh Navy','Hồng','Xám','Kem','Tím'][varNum % 8]})`;
      const basePrice = t.min + Math.floor(Math.random() * (t.max - t.min));
      const hasDiscount = Math.random() > 0.45;
      const price = hasDiscount ? Math.round(basePrice * 0.8) : basePrice;
      const oldPrice = hasDiscount ? basePrice : null;
      list.push({
        id: id++, name, category: cat, price, oldPrice,
        emoji: t.e, rating: +(4.2 + Math.random()*0.8).toFixed(1),
        reviews: Math.floor(30 + Math.random()*2500),
        sold: Math.floor(50 + Math.random()*12000),
        seller: brands[brandIdx]
      });
    }
  });
  return list;
})();

const FEATURED_IDS = [1, 201, 401, 601, 801, 15];
