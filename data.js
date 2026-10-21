// ===== PICK&PAY – DỮ LIỆU SẢN PHẨM =====
function formatPrice(n) { return Number(n).toLocaleString('vi-VN') + '₫'; }
function goToDetail(id) { localStorage.setItem('currentProduct', id); window.location.href = 'product-detail.html'; }
function renderProductCard(p) {
  const discPct = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
  return `<div class="product-card" onclick="goToDetail(${p.id})" style="position:relative;">
    ${discPct>0?`<div style="position:absolute;top:10px;left:10px;background:#e53935;color:white;font-size:0.7rem;font-weight:800;padding:3px 8px;border-radius:6px;z-index:1;font-family:Montserrat,sans-serif;">-${discPct}%</div>`:''}
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

// ===== SẢN PHẨM CÓ GIÁ & NGƯỜI BÁN THỰC TẾ =====
// Mỗi sản phẩm gắn đúng nhãn hiệu và giá thị trường VN 2026.
// variants: mảng {label, priceDelta} – giá thay đổi theo lựa chọn màu/dung lượng/size
const PRODUCT_CATALOG = [
  // ==================== THỜI TRANG ====================
  { id:1,  cat:'thoitrang', name:'Áo Thun Nam Uniqlo UT Basic',       e:'👕', basePrice:299000,  seller:'Uniqlo Vietnam',    rating:4.8, reviews:1240, sold:8500,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:20000},{label:'XXL',pd:20000}] },
  { id:2,  cat:'thoitrang', name:'Quần Jeans Nam Levi\'s 511 Slim',    e:'👖', basePrice:890000,  seller:'Levi\'s Vietnam',   rating:4.7, reviews:680,  sold:3200,
    variants:[{label:'29',pd:0},{label:'30',pd:0},{label:'31',pd:0},{label:'32',pd:0},{label:'33',pd:0},{label:'34',pd:0}] },
  { id:3,  cat:'thoitrang', name:'Áo Khoác Denim Nam Zara',            e:'🧥', basePrice:699000,  seller:'Zara Vietnam',      rating:4.6, reviews:430,  sold:1800,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:0}] },
  { id:4,  cat:'thoitrang', name:'Váy Hoa Midi Nữ Zara',               e:'👗', basePrice:549000,  seller:'Zara Vietnam',      rating:4.7, reviews:520,  sold:2200,
    variants:[{label:'XS',pd:-50000},{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:5,  cat:'thoitrang', name:'Áo Polo Nam Lacoste Slim Fit',       e:'👔', basePrice:1290000, seller:'Lacoste Vietnam',   rating:4.9, reviews:890,  sold:4100,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:50000}] },
  { id:6,  cat:'thoitrang', name:'Áo Hoodie Nỉ Uniqlo',                e:'👕', basePrice:499000,  seller:'Uniqlo Vietnam',    rating:4.8, reviews:1100, sold:6300,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:30000},{label:'XXL',pd:30000}] },
  { id:7,  cat:'thoitrang', name:'Quần Tây Nam Owen Classic',          e:'👖', basePrice:450000,  seller:'Owen',              rating:4.6, reviews:380,  sold:1500,
    variants:[{label:'28',pd:0},{label:'29',pd:0},{label:'30',pd:0},{label:'31',pd:0},{label:'32',pd:0}] },
  { id:8,  cat:'thoitrang', name:'Đầm Wrap Nữ H&M',                   e:'👗', basePrice:399000,  seller:'H&M Vietnam',       rating:4.5, reviews:290,  sold:1100,
    variants:[{label:'XS',pd:0},{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:9,  cat:'thoitrang', name:'Áo Sơ Mi Công Sở Canifa',            e:'👔', basePrice:350000,  seller:'Canifa',            rating:4.6, reviews:540,  sold:2800,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:0}] },
  { id:10, cat:'thoitrang', name:'Áo Thun Nữ Oversize Coolmate',       e:'👕', basePrice:199000,  seller:'Coolmate',          rating:4.7, reviews:2100, sold:12000,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:10000}] },
  { id:11, cat:'thoitrang', name:'Quần Short Nam Kaki Routine',        e:'🩲', basePrice:299000,  seller:'Routine',           rating:4.5, reviews:310,  sold:1400,
    variants:[{label:'28',pd:0},{label:'30',pd:0},{label:'32',pd:0},{label:'34',pd:0}] },
  { id:12, cat:'thoitrang', name:'Áo Len Cổ Lọ Uniqlo Merino',        e:'🧶', basePrice:599000,  seller:'Uniqlo Vietnam',    rating:4.8, reviews:720,  sold:3100,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:13, cat:'thoitrang', name:'Chân Váy Xếp Ly Midi JUNO',         e:'👗', basePrice:320000,  seller:'JUNO',              rating:4.6, reviews:480,  sold:2100,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:0}] },
  { id:14, cat:'thoitrang', name:'Áo Khoác Gió Nike Windrunner',      e:'🧥', basePrice:1290000, seller:'Nike Vietnam',      rating:4.8, reviews:560,  sold:2400,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:100000}] },
  { id:15, cat:'thoitrang', name:'Áo Crop Top Nữ H&M',                e:'👕', basePrice:199000,  seller:'H&M Vietnam',       rating:4.4, reviews:340,  sold:1600,
    variants:[{label:'XS',pd:0},{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:16, cat:'thoitrang', name:'Quần Jeans Nữ Ống Đứng Levi\'s',    e:'👖', basePrice:790000,  seller:'Levi\'s Vietnam',   rating:4.7, reviews:590,  sold:2700,
    variants:[{label:'25',pd:0},{label:'26',pd:0},{label:'27',pd:0},{label:'28',pd:0},{label:'29',pd:0}] },
  { id:17, cat:'thoitrang', name:'Bộ Pyjama Dài Tay Cotton Canifa',    e:'👕', basePrice:350000,  seller:'Canifa',            rating:4.6, reviews:420,  sold:1900,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:18, cat:'thoitrang', name:'Áo Ba Lỗ Thể Thao Adidas',          e:'👕', basePrice:450000,  seller:'Adidas Vietnam',    rating:4.7, reviews:280,  sold:1200,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:0}] },
  { id:19, cat:'thoitrang', name:'Váy Liền Thân Công Sở Nem Fashion',  e:'👗', basePrice:520000,  seller:'Nem Fashion',       rating:4.5, reviews:310,  sold:1400,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
  { id:20, cat:'thoitrang', name:'Áo Thun Polo Nam Fred Perry',        e:'👔', basePrice:850000,  seller:'Fred Perry VN',     rating:4.8, reviews:260,  sold:980,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:50000}] },

  // ==================== ĐIỆN TỬ ====================
  { id:201, cat:'dientuchomay', name:'Samsung Galaxy S24 Ultra',         e:'📱', basePrice:29990000, seller:'Samsung Official',  rating:4.9, reviews:2100, sold:5800,
    variants:[{label:'256GB',pd:0},{label:'512GB',pd:3000000},{label:'1TB',pd:6000000}] },
  { id:202, cat:'dientuchomay', name:'iPhone 15 Pro Max 256GB',          e:'📱', basePrice:33990000, seller:'Apple Vietnam',     rating:4.9, reviews:3200, sold:8100,
    variants:[{label:'256GB',pd:0},{label:'512GB',pd:4000000},{label:'1TB',pd:8000000}] },
  { id:203, cat:'dientuchomay', name:'Xiaomi 14 Ultra',                  e:'📱', basePrice:22990000, seller:'Xiaomi Vietnam',    rating:4.8, reviews:890,  sold:2100,
    variants:[{label:'256GB',pd:0},{label:'512GB',pd:2000000}] },
  { id:204, cat:'dientuchomay', name:'Samsung Galaxy A55 5G 128GB',      e:'📱', basePrice:8990000,  seller:'Samsung Official',  rating:4.7, reviews:1540, sold:7200,
    variants:[{label:'128GB',pd:0},{label:'256GB',pd:1000000}] },
  { id:205, cat:'dientuchomay', name:'OPPO Reno 11 5G',                  e:'📱', basePrice:9490000,  seller:'OPPO Vietnam',      rating:4.6, reviews:620,  sold:2800,
    variants:[{label:'128GB',pd:0},{label:'256GB',pd:1000000}] },
  { id:206, cat:'dientuchomay', name:'Xiaomi Redmi Note 13 Pro',         e:'📱', basePrice:6490000,  seller:'Xiaomi Vietnam',    rating:4.7, reviews:1200, sold:5400,
    variants:[{label:'128GB',pd:0},{label:'256GB',pd:500000}] },
  { id:207, cat:'dientuchomay', name:'Laptop Dell XPS 15 i7',            e:'💻', basePrice:35990000, seller:'Dell Vietnam',      rating:4.9, reviews:420,  sold:980,
    variants:[{label:'16GB RAM/512GB',pd:0},{label:'32GB RAM/1TB',pd:8000000}] },
  { id:208, cat:'dientuchomay', name:'MacBook Air M3 256GB',             e:'💻', basePrice:29990000, seller:'Apple Vietnam',     rating:4.9, reviews:860,  sold:2300,
    variants:[{label:'256GB 8GB RAM',pd:0},{label:'512GB 16GB RAM',pd:5000000}] },
  { id:209, cat:'dientuchomay', name:'Laptop Lenovo ThinkPad X1 Carbon', e:'💻', basePrice:28500000, seller:'Lenovo Vietnam',    rating:4.8, reviews:310,  sold:720,
    variants:[{label:'16GB/512GB',pd:0},{label:'32GB/1TB',pd:6000000}] },
  { id:210, cat:'dientuchomay', name:'Laptop Asus Zenbook 14 OLED',      e:'💻', basePrice:22990000, seller:'Asus Vietnam',      rating:4.8, reviews:540,  sold:1400,
    variants:[{label:'16GB/512GB',pd:0},{label:'32GB/1TB',pd:4000000}] },
  { id:211, cat:'dientuchomay', name:'Laptop Acer Aspire 5 i5',          e:'💻', basePrice:13990000, seller:'Acer Vietnam',      rating:4.6, reviews:870,  sold:3200,
    variants:[{label:'8GB/256GB',pd:0},{label:'16GB/512GB',pd:2000000}] },
  { id:212, cat:'dientuchomay', name:'Tai Nghe Sony WH-1000XM5',         e:'🎧', basePrice:7490000,  seller:'Sony Vietnam',      rating:4.9, reviews:1800, sold:6100,
    variants:[{label:'Đen',pd:0},{label:'Bạc',pd:0},{label:'Trắng',pd:0}] },
  { id:213, cat:'dientuchomay', name:'AirPods Pro 2 (USB-C)',            e:'🎧', basePrice:6490000,  seller:'Apple Vietnam',     rating:4.8, reviews:2400, sold:9200,
    variants:[{label:'Trắng',pd:0}] },
  { id:214, cat:'dientuchomay', name:'Tai Nghe JBL Live 660NC',          e:'🎧', basePrice:1990000,  seller:'JBL Vietnam',       rating:4.7, reviews:690,  sold:3100,
    variants:[{label:'Đen',pd:0},{label:'Trắng',pd:0},{label:'Xanh',pd:0}] },
  { id:215, cat:'dientuchomay', name:'Tai Nghe Sony WF-C700N',           e:'🎧', basePrice:2990000,  seller:'Sony Vietnam',      rating:4.7, reviews:530,  sold:2200,
    variants:[{label:'Đen',pd:0},{label:'Trắng',pd:0},{label:'Lavender',pd:0}] },
  { id:216, cat:'dientuchomay', name:'Apple Watch Series 9 41mm',        e:'⌚', basePrice:10990000, seller:'Apple Vietnam',     rating:4.9, reviews:1100, sold:4200,
    variants:[{label:'41mm Nhôm',pd:0},{label:'45mm Nhôm',pd:1000000},{label:'41mm Thép',pd:4000000}] },
  { id:217, cat:'dientuchomay', name:'Samsung Galaxy Watch 6 Classic',   e:'⌚', basePrice:7490000,  seller:'Samsung Official',  rating:4.7, reviews:680,  sold:2800,
    variants:[{label:'43mm',pd:0},{label:'47mm',pd:500000}] },
  { id:218, cat:'dientuchomay', name:'Xiaomi Smart Band 8 Pro',          e:'⌚', basePrice:1390000,  seller:'Xiaomi Vietnam',    rating:4.6, reviews:1400, sold:7800,
    variants:[{label:'Đen',pd:0},{label:'Trắng',pd:0},{label:'Vàng',pd:0}] },
  { id:219, cat:'dientuchomay', name:'Pin Sạc Anker 24000mAh 140W',      e:'🔋', basePrice:890000,   seller:'Anker Vietnam',     rating:4.8, reviews:920,  sold:5600,
    variants:[{label:'Đen',pd:0},{label:'Trắng',pd:0}] },
  { id:220, cat:'dientuchomay', name:'Chuột Logitech MX Master 3S',      e:'🖱️', basePrice:1990000,  seller:'Logitech Vietnam',  rating:4.9, reviews:760,  sold:3400,
    variants:[{label:'Đen',pd:0},{label:'Trắng/Xám',pd:0},{label:'Hồng',pd:0}] },

  // ==================== LÀM ĐẸP ====================
  { id:401, cat:'lamdep', name:'Son MAC Ruby Woo 3g',                  e:'💄', basePrice:600000,   seller:'MAC Cosmetics VN',   rating:4.9, reviews:3100, sold:14000,
    variants:[{label:'Ruby Woo (Đỏ)',pd:0},{label:'Chili (Đỏ cam)',pd:0},{label:'Velvet Teddy (Nude)',pd:0}] },
  { id:402, cat:'lamdep', name:'Son Dưỡng Laneige Lip Sleeping Mask',  e:'💋', basePrice:390000,   seller:'Laneige Vietnam',    rating:4.8, reviews:4200, sold:18000,
    variants:[{label:'Berry (20g)',pd:0},{label:'Vanilla (20g)',pd:0},{label:'Apple Lime (20g)',pd:0},{label:'Gummy Bear (25g)',pd:50000}] },
  { id:403, cat:'lamdep', name:'Kem Chống Nắng Anessa SPF50+ PA++++',  e:'🧴', basePrice:450000,   seller:'Anessa Vietnam',     rating:4.9, reviews:5600, sold:25000,
    variants:[{label:'60ml',pd:0},{label:'90ml',pd:100000},{label:'120ml',pd:180000}] },
  { id:404, cat:'lamdep', name:'Kem Dưỡng Ẩm CeraVe Moisturizing',    e:'🧴', basePrice:350000,   seller:'CeraVe Vietnam',     rating:4.8, reviews:2800, sold:12000,
    variants:[{label:'177ml',pd:0},{label:'340ml',pd:150000},{label:'454ml',pd:250000}] },
  { id:405, cat:'lamdep', name:'Serum Vitamin C Paula\'s Choice 15%',  e:'✨', basePrice:1290000,  seller:'Paula\'s Choice VN', rating:4.8, reviews:1100, sold:4800,
    variants:[{label:'30ml',pd:0},{label:'60ml',pd:600000}] },
  { id:406, cat:'lamdep', name:'Toner Cosrx Low pH Good Morning',      e:'🫧', basePrice:280000,   seller:'Cosrx Vietnam',      rating:4.7, reviews:3400, sold:16000,
    variants:[{label:'150ml',pd:0},{label:'300ml',pd:150000}] },
  { id:407, cat:'lamdep', name:'Sữa Rửa Mặt La Roche-Posay Toleriane', e:'🫧', basePrice:390000,  seller:'La Roche-Posay VN',  rating:4.8, reviews:1900, sold:8500,
    variants:[{label:'150ml',pd:0},{label:'400ml',pd:200000}] },
  { id:408, cat:'lamdep', name:'Mặt Nạ Mediheal NMF 10 Miếng',        e:'🧖', basePrice:150000,   seller:'Mediheal Vietnam',   rating:4.8, reviews:6700, sold:35000,
    variants:[{label:'10 miếng',pd:0},{label:'20 miếng',pd:130000},{label:'30 miếng',pd:240000}] },
  { id:409, cat:'lamdep', name:'Phấn Nền Maybelline Fit Me Matte',     e:'💅', basePrice:230000,   seller:'Maybelline VN',      rating:4.6, reviews:2100, sold:9800,
    variants:[{label:'N21 Nude Beige',pd:0},{label:'N120 Classic Ivory',pd:0},{label:'N230 Natural Buff',pd:0},{label:'N310 Sun Beige',pd:0}] },
  { id:410, cat:'lamdep', name:'Mascara Maybelline Sky High',           e:'👁️', basePrice:259000,  seller:'Maybelline VN',      rating:4.7, reviews:3800, sold:17000,
    variants:[{label:'Đen',pd:0},{label:'Nâu',pd:0},{label:'Đen Lấp Lánh',pd:20000}] },
  { id:411, cat:'lamdep', name:'Nước Hoa Chanel No.5 EDP 50ml',       e:'🌸', basePrice:3200000,  seller:'Chanel Beauty VN',   rating:4.9, reviews:890,  sold:2100,
    variants:[{label:'50ml',pd:0},{label:'100ml',pd:2000000},{label:'200ml',pd:4500000}] },
  { id:412, cat:'lamdep', name:'Nước Hoa Dior Sauvage EDT 100ml',     e:'🌸', basePrice:3500000,  seller:'Dior Beauty VN',     rating:4.9, reviews:1200, sold:3400,
    variants:[{label:'60ml EDT',pd:-500000},{label:'100ml EDT',pd:0},{label:'200ml EDT',pd:1800000},{label:'100ml EDP',pd:500000}] },
  { id:413, cat:'lamdep', name:'Nước Hoa Jo Malone Wood Sage & Sea',  e:'🌸', basePrice:2800000,  seller:'Jo Malone VN',       rating:4.8, reviews:540,  sold:1200,
    variants:[{label:'30ml',pd:-800000},{label:'100ml',pd:0},{label:'175ml',pd:1200000}] },
  { id:414, cat:'lamdep', name:'Dầu Gội Pantene Pro-V Repair & Care', e:'🧴', basePrice:115000,   seller:'Pantene Vietnam',    rating:4.5, reviews:1800, sold:9200,
    variants:[{label:'380ml',pd:0},{label:'650ml',pd:60000},{label:'1.2L',pd:130000}] },
  { id:415, cat:'lamdep', name:'Serum Retinol La Roche-Posay B3',     e:'✨', basePrice:780000,   seller:'La Roche-Posay VN',  rating:4.7, reviews:730,  sold:2900,
    variants:[{label:'30ml',pd:0},{label:'40ml',pd:150000}] },
  { id:416, cat:'lamdep', name:'Tẩy Trang Bioderma Sensibio 500ml',   e:'🫧', basePrice:420000,   seller:'Bioderma Vietnam',   rating:4.9, reviews:4100, sold:19000,
    variants:[{label:'250ml',pd:-120000},{label:'500ml',pd:0},{label:'1L',pd:280000}] },
  { id:417, cat:'lamdep', name:'Phấn Phủ Innisfree No Sebum Powder',  e:'💄', basePrice:290000,   seller:'Innisfree Vietnam',  rating:4.7, reviews:2300, sold:11000,
    variants:[{label:'5g',pd:0},{label:'10g',pd:90000}] },
  { id:418, cat:'lamdep', name:'Kem Cushion LANEIGE Neo Foundation',  e:'💅', basePrice:620000,   seller:'Laneige Vietnam',    rating:4.7, reviews:980,  sold:4200,
    variants:[{label:'N21 Light Beige',pd:0},{label:'N23 Natural Beige',pd:0},{label:'N25 Warm Beige',pd:0}] },
  { id:419, cat:'lamdep', name:'Xịt Khoáng Evian Facial Spray 300ml', e:'💦', basePrice:210000,   seller:'Evian Vietnam',      rating:4.6, reviews:1400, sold:6800,
    variants:[{label:'50ml',pd:-130000},{label:'150ml',pd:-70000},{label:'300ml',pd:0}] },
  { id:420, cat:'lamdep', name:'Kem Chống Nắng Skin Aqua UV SPF50+',  e:'🧴', basePrice:180000,   seller:'Skin Aqua VN',       rating:4.7, reviews:3200, sold:15000,
    variants:[{label:'25g',pd:0},{label:'40g',pd:60000}] },

  // ==================== SÁCH ====================
  { id:601, cat:'sach', name:'Đắc Nhân Tâm – Dale Carnegie',           e:'📚', basePrice:79000,    seller:'Fahasa',             rating:4.9, reviews:8900, sold:45000,
    variants:[{label:'Bìa mềm thường',pd:0},{label:'Bìa cứng đặc biệt',pd:50000}] },
  { id:602, cat:'sach', name:'Nhà Giả Kim – Paulo Coelho',              e:'📖', basePrice:82000,    seller:'Tiki Book',          rating:4.8, reviews:5200, sold:28000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng tái bản',pd:40000}] },
  { id:603, cat:'sach', name:'Atomic Habits – James Clear',             e:'📗', basePrice:99000,    seller:'Alpha Books',        rating:4.9, reviews:6100, sold:32000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng',pd:45000}] },
  { id:604, cat:'sach', name:'Sapiens – Lược Sử Loài Người',            e:'📕', basePrice:129000,   seller:'NXB Thế Giới',       rating:4.8, reviews:3400, sold:18000,
    variants:[{label:'Bìa mềm 1 tập',pd:0},{label:'Bìa cứng đặc biệt',pd:80000}] },
  { id:605, cat:'sach', name:'Tư Duy Nhanh và Chậm – Daniel Kahneman', e:'📘', basePrice:109000,   seller:'Nhã Nam',            rating:4.8, reviews:2800, sold:14000,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:606, cat:'sach', name:'Người Giàu Nhất Thành Babylon',           e:'📙', basePrice:65000,    seller:'NXB Lao Động',       rating:4.7, reviews:4100, sold:22000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng',pd:35000}] },
  { id:607, cat:'sach', name:'Dám Nghĩ Lớn – David J. Schwartz',       e:'📚', basePrice:88000,    seller:'First News',         rating:4.7, reviews:2900, sold:16000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng tái bản',pd:40000}] },
  { id:608, cat:'sach', name:'Zero to One – Peter Thiel',               e:'📙', basePrice:115000,   seller:'NXB Thế Giới',       rating:4.8, reviews:1800, sold:9500,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:609, cat:'sach', name:'Start With Why – Simon Sinek',            e:'📚', basePrice:105000,   seller:'Alpha Books',        rating:4.8, reviews:1500, sold:8200,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:610, cat:'sach', name:'Tuổi Trẻ Đáng Giá Bao Nhiêu – Rosie',   e:'📖', basePrice:72000,    seller:'NXB Hội Nhà Văn',    rating:4.6, reviews:5400, sold:31000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Tái bản có bổ sung',pd:20000}] },
  { id:611, cat:'sach', name:'Cho Tôi Xin Một Vé Đi Tuổi Thơ',        e:'📗', basePrice:68000,    seller:'NXB Trẻ',            rating:4.7, reviews:4800, sold:27000,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:612, cat:'sach', name:'Harry Potter Tập 1 – J.K. Rowling',      e:'📙', basePrice:109000,   seller:'NXB Trẻ',            rating:4.9, reviews:7200, sold:38000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng màu',pd:80000}] },
  { id:613, cat:'sach', name:'Mật Mã Da Vinci – Dan Brown',             e:'📚', basePrice:105000,   seller:'Đinh Tị',            rating:4.7, reviews:3100, sold:17000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng',pd:50000}] },
  { id:614, cat:'sach', name:'Cây Cam Ngọt Của Tôi – José Mauro',      e:'📖', basePrice:85000,    seller:'Nhã Nam',            rating:4.9, reviews:6800, sold:36000,
    variants:[{label:'Bìa mềm thường',pd:0},{label:'Bìa cứng đặc biệt',pd:60000}] },
  { id:615, cat:'sach', name:'Nghĩ Giàu Làm Giàu – Napoleon Hill',     e:'📘', basePrice:79000,    seller:'NXB Lao Động',       rating:4.7, reviews:3600, sold:20000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng',pd:40000}] },
  { id:616, cat:'sach', name:'Số Đỏ – Vũ Trọng Phụng',                e:'📕', basePrice:58000,    seller:'NXB Hội Nhà Văn',    rating:4.8, reviews:2900, sold:15000,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:617, cat:'sach', name:'Không Gia Đình – Hector Malot',          e:'📘', basePrice:69000,    seller:'NXB Trẻ',            rating:4.7, reviews:1800, sold:9800,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:618, cat:'sach', name:'Đừng Bao Giờ Đi Ăn Một Mình',           e:'📗', basePrice:95000,    seller:'First News',         rating:4.6, reviews:1200, sold:6800,
    variants:[{label:'Bìa mềm',pd:0}] },
  { id:619, cat:'sach', name:'Rich Dad Poor Dad – Robert Kiyosaki',    e:'📙', basePrice:99000,    seller:'Alpha Books',        rating:4.8, reviews:4200, sold:23000,
    variants:[{label:'Bìa mềm',pd:0},{label:'Bìa cứng tái bản',pd:50000}] },
  { id:620, cat:'sach', name:'The Psychology of Money – M. Housel',    e:'📚', basePrice:109000,   seller:'Fahasa',             rating:4.8, reviews:2100, sold:11000,
    variants:[{label:'Bìa mềm',pd:0}] },

  // ==================== THỂ THAO ====================
  { id:801, cat:'thethao', name:'Giày Nike Air Force 1 \'07 White',    e:'👟', basePrice:1890000,  seller:'Nike Vietnam',       rating:4.9, reviews:5600, sold:28000,
    variants:[{label:'36',pd:-100000},{label:'37',pd:0},{label:'38',pd:0},{label:'39',pd:0},{label:'40',pd:0},{label:'41',pd:0},{label:'42',pd:0},{label:'43',pd:100000}] },
  { id:802, cat:'thethao', name:'Giày Adidas Ultraboost 22',           e:'👟', basePrice:2790000,  seller:'Adidas Vietnam',     rating:4.8, reviews:3200, sold:14000,
    variants:[{label:'36',pd:-100000},{label:'37',pd:0},{label:'38',pd:0},{label:'39',pd:0},{label:'40',pd:0},{label:'41',pd:0},{label:'42',pd:0},{label:'43',pd:0}] },
  { id:803, cat:'thethao', name:'Giày Converse Chuck Taylor All Star',  e:'👟', basePrice:1090000,  seller:'Converse Vietnam',   rating:4.7, reviews:4100, sold:19000,
    variants:[{label:'36',pd:0},{label:'37',pd:0},{label:'38',pd:0},{label:'39',pd:0},{label:'40',pd:0},{label:'41',pd:0},{label:'42',pd:0}] },
  { id:804, cat:'thethao', name:'Giày Nike Revolution 7',              e:'👟', basePrice:1290000,  seller:'Nike Vietnam',       rating:4.6, reviews:1800, sold:8200,
    variants:[{label:'36',pd:0},{label:'37',pd:0},{label:'38',pd:0},{label:'39',pd:0},{label:'40',pd:0},{label:'41',pd:0},{label:'42',pd:0}] },
  { id:805, cat:'thethao', name:'Giày Puma Suede Classic XXI',         e:'👟', basePrice:1490000,  seller:'Puma Vietnam',       rating:4.6, reviews:1100, sold:5200,
    variants:[{label:'36',pd:0},{label:'37',pd:0},{label:'38',pd:0},{label:'39',pd:0},{label:'40',pd:0},{label:'41',pd:0},{label:'42',pd:0}] },
  { id:806, cat:'thethao', name:'Vợt Cầu Lông Yonex Astrox 88S Pro',  e:'🏸', basePrice:3290000,  seller:'Yonex Vietnam',      rating:4.9, reviews:680,  sold:2800,
    variants:[{label:'4U G5 (Nhẹ hơn)',pd:0},{label:'3U G4 (Nặng hơn)',pd:200000}] },
  { id:807, cat:'thethao', name:'Vợt Cầu Lông Victor Thruster K 9000', e:'🏸', basePrice:2490000,  seller:'Victor Vietnam',     rating:4.8, reviews:420,  sold:1800,
    variants:[{label:'3U G5',pd:0},{label:'4U G5',pd:0}] },
  { id:808, cat:'thethao', name:'Vợt Tennis Wilson Clash 100 V2',      e:'🎾', basePrice:4290000,  seller:'Wilson Vietnam',     rating:4.8, reviews:290,  sold:980,
    variants:[{label:'4 3/8 tay cầm',pd:0},{label:'4 1/2 tay cầm',pd:0}] },
  { id:809, cat:'thethao', name:'Bóng Đá Adidas UCL Pro 2024',         e:'⚽', basePrice:590000,   seller:'Adidas Vietnam',     rating:4.7, reviews:840,  sold:4200,
    variants:[{label:'Size 4',pd:-50000},{label:'Size 5',pd:0}] },
  { id:810, cat:'thethao', name:'Bóng Rổ Spalding NBA Official Game',  e:'🏀', basePrice:690000,   seller:'Spalding Vietnam',   rating:4.7, reviews:520,  sold:2600,
    variants:[{label:'Size 5',pd:-50000},{label:'Size 6',pd:-30000},{label:'Size 7',pd:0}] },
  { id:811, cat:'thethao', name:'Tạ Tay Điều Chỉnh được 20kg Bowflex', e:'🏋️', basePrice:4990000, seller:'Bowflex Vietnam',    rating:4.9, reviews:310,  sold:1100,
    variants:[{label:'Bộ 1 tạ (10kg)',pd:-2000000},{label:'Bộ 2 tạ (20kg)',pd:0}] },
  { id:812, cat:'thethao', name:'Thảm Yoga Manduka PRO 6mm',           e:'🧘', basePrice:2990000,  seller:'Manduka Vietnam',    rating:4.9, reviews:420,  sold:1800,
    variants:[{label:'Đen',pd:0},{label:'Tím',pd:0},{label:'Xanh',pd:0}] },
  { id:813, cat:'thethao', name:'Xe Đạp Thể Thao Asama 26"',           e:'🚴', basePrice:3490000,  seller:'Asama Sport',        rating:4.6, reviews:290,  sold:980,
    variants:[{label:'Size M',pd:0},{label:'Size L',pd:200000}] },
  { id:814, cat:'thethao', name:'Túi Gym Nike Brasilia 9.5 Duffel',    e:'🎒', basePrice:990000,   seller:'Nike Vietnam',       rating:4.7, reviews:680,  sold:3200,
    variants:[{label:'S – 30L',pd:-100000},{label:'M – 41L',pd:0},{label:'L – 60L',pd:200000}] },
  { id:815, cat:'thethao', name:'Găng Tay Boxing Everlast Pro Style',  e:'🥊', basePrice:590000,   seller:'Everlast Vietnam',   rating:4.6, reviews:390,  sold:1700,
    variants:[{label:'10 oz',pd:0},{label:'12 oz',pd:50000},{label:'14 oz',pd:100000}] },
  { id:816, cat:'thethao', name:'Áo Thi Đấu Nike Dri-FIT',             e:'👕', basePrice:590000,   seller:'Nike Vietnam',       rating:4.7, reviews:1100, sold:5400,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:50000}] },
  { id:817, cat:'thethao', name:'Dây Nhảy Tốc Độ Reebok Speed',       e:'🪢', basePrice:280000,   seller:'Reebok Vietnam',     rating:4.6, reviews:590,  sold:2900,
    variants:[{label:'3m',pd:0},{label:'3.5m',pd:30000}] },
  { id:818, cat:'thethao', name:'Bình Nước Thể Thao Hydro Flask 621ml',e:'🥤', basePrice:650000,   seller:'Hydro Flask VN',     rating:4.8, reviews:780,  sold:3800,
    variants:[{label:'Đen',pd:0},{label:'Xanh Navy',pd:0},{label:'Đỏ',pd:0},{label:'Cam',pd:0}] },
  { id:819, cat:'thethao', name:'Quần Short Tập Gym Adidas Pacer 3S',  e:'🩲', basePrice:490000,   seller:'Adidas Vietnam',     rating:4.6, reviews:760,  sold:3600,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0},{label:'XL',pd:0}] },
  { id:820, cat:'thethao', name:'Bộ Dụng Cụ Bơi Speedo Arena Pro',    e:'🏊', basePrice:890000,   seller:'Speedo Vietnam',     rating:4.7, reviews:310,  sold:1300,
    variants:[{label:'S',pd:0},{label:'M',pd:0},{label:'L',pd:0}] },
];

// Nhân bản để đủ số lượng (mỗi danh mục ~200 sp)
const PRODUCTS = (function(){
  const base = PRODUCT_CATALOG;
  const extra = [];
  const cats = ['thoitrang','dientuchomay','lamdep','sach','thethao'];
  // Tính số sản phẩm gốc mỗi danh mục
  const countPerCat = {};
  cats.forEach(c => countPerCat[c] = base.filter(p=>p.cat===c).length);
  let nextId = 2000;
  cats.forEach(cat => {
    const catProds = base.filter(p=>p.cat===cat);
    const needed = 200 - catProds.length;
    const variants_colors = ['Đen','Trắng','Đỏ','Xanh Navy','Hồng Đất','Xám Khói','Vàng Kem','Tím Oải Hương','Bạc','Be Sáng'];
    for(let i=0;i<needed;i++){
      const src = catProds[i % catProds.length];
      const cv = variants_colors[Math.floor(i/catProds.length)%variants_colors.length];
      const priceVar = 0.85 + Math.random()*0.25;
      const newPrice = Math.round(src.basePrice * priceVar / 1000) * 1000;
      extra.push({
        id: nextId++,
        cat: src.cat, name: src.name+' – '+cv,
        e: src.e, basePrice: newPrice,
        seller: src.seller,
        rating: +(4.2+Math.random()*0.8).toFixed(1),
        reviews: Math.floor(20+Math.random()*1000),
        sold: Math.floor(20+Math.random()*5000),
        variants: src.variants
      });
    }
  });
  return [...base,...extra].map(p=>({
    id:p.id, name:p.name, category:p.cat,
    price:p.basePrice,
    oldPrice: Math.random()>0.45 ? Math.round(p.basePrice/0.8/1000)*1000 : null,
    emoji:p.e, rating:p.rating, reviews:p.reviews, sold:p.sold,
    seller:p.seller, variants:p.variants||[]
  }));
})();

const FEATURED_IDS = [801, 201, 401, 601, 1, 212];
