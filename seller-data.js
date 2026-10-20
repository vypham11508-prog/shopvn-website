// ===== DỮ LIỆU NGƯỜI BÁN =====

// --- SẢN PHẨM ---
function getSellerProducts() {
  const stored = localStorage.getItem('seller_products');
  if (stored) return JSON.parse(stored);
  const defaults = [
    { id:'sp1', name:'Giày Nike Air Force 1 White', category:'Thể thao', price:1590000, stock:48, sold:2840, status:'active', hidden:false, emoji:'👟', desc:'Giày Nike Air Force 1 phiên bản màu trắng classic, chất liệu da cao cấp, đế su dày dặn.' },
    { id:'sp2', name:'Áo Thun Nam Uniqlo Basic', category:'Thời trang', price:299000, stock:3, sold:1205, status:'low', hidden:false, emoji:'👕', desc:'Áo thun cổ tròn basic chất cotton 100%, thoáng mát, nhiều màu sắc.' },
    { id:'sp3', name:'Samsung Galaxy A55 5G', category:'Điện tử', price:8990000, stock:0, sold:892, status:'out', hidden:false, emoji:'📱', desc:'Samsung Galaxy A55 5G RAM 8GB, bộ nhớ 128GB, màn hình AMOLED 6.6 inch.' },
    { id:'sp4', name:'Son MAC Ruby Woo 3g', category:'Làm đẹp', price:480000, stock:67, sold:3102, status:'active', hidden:false, emoji:'💄', desc:'Son lì MAC Ruby Woo màu đỏ thuần classic, không lem, bền màu suốt ngày.' },
  ];
  localStorage.setItem('seller_products', JSON.stringify(defaults));
  return defaults;
}
function saveSellerProducts(list) { localStorage.setItem('seller_products', JSON.stringify(list)); }

// --- ĐƠN HÀNG ---
function getSellerOrders() {
  const stored = localStorage.getItem('seller_orders');
  if (stored) return JSON.parse(stored);

  const today = new Date();
  function daysAgo(n) {
    const d = new Date(today); d.setDate(today.getDate()-n);
    return d.toLocaleDateString('vi-VN');
  }

  const SAMPLE_ORDERS = [
    // PENDING (5)
    { id:'#PNP2610001', customer:'Nguyễn Văn An', phone:'0901234567', address:'12 Lê Lợi, Quận 1, TP.HCM', date:daysAgo(0), status:'pending', items:[{emoji:'👟',name:'Giày Nike Air Force 1',qty:1,price:1590000}], total:1590000 },
    { id:'#PNP2610002', customer:'Trần Thị Bình', phone:'0912345678', address:'45 Nguyễn Huệ, Hoàn Kiếm, Hà Nội', date:daysAgo(0), status:'pending', items:[{emoji:'📱',name:'Samsung Galaxy A55',qty:1,price:8990000},{emoji:'🎧',name:'Tai nghe JBL T520BT',qty:1,price:890000}], total:9880000 },
    { id:'#PNP2610003', customer:'Lê Minh Cường', phone:'0923456789', address:'78 Trần Phú, Hải Châu, Đà Nẵng', date:daysAgo(1), status:'pending', items:[{emoji:'💄',name:'Son MAC Ruby Woo',qty:2,price:480000}], total:960000 },
    { id:'#PNP2610004', customer:'Phạm Thu Hà', phone:'0934567890', address:'23 Lý Tự Trọng, Ninh Kiều, Cần Thơ', date:daysAgo(1), status:'pending', items:[{emoji:'👗',name:'Váy Hoa Midi Zara',qty:1,price:459000}], total:459000 },
    { id:'#PNP2610005', customer:'Hoàng Văn Em', phone:'0945678901', address:'56 Đinh Tiên Hoàng, Bình Thạnh, TP.HCM', date:daysAgo(2), status:'pending', items:[{emoji:'📚',name:'Atomic Habits',qty:1,price:89000},{emoji:'📖',name:'Đắc Nhân Tâm',qty:1,price:68000}], total:157000 },
    // PACKING (4)
    { id:'#PNP2609006', customer:'Vũ Thị Phương', phone:'0956789012', address:'89 Nguyễn Trãi, Thanh Xuân, Hà Nội', date:daysAgo(2), status:'packing', items:[{emoji:'👕',name:'Áo Thun Nam Uniqlo',qty:3,price:299000}], total:897000 },
    { id:'#PNP2609007', customer:'Đặng Quốc Hùng', phone:'0967890123', address:'12 Võ Thị Sáu, Quận 3, TP.HCM', date:daysAgo(3), status:'packing', items:[{emoji:'⌚',name:'Xiaomi Smart Band 8',qty:1,price:890000}], total:890000 },
    { id:'#PNP2609008', customer:'Ngô Thị Lan', phone:'0978901234', address:'34 Lê Duẩn, Hải Châu, Đà Nẵng', date:daysAgo(3), status:'packing', items:[{emoji:'🧴',name:'Kem Chống Nắng Anessa',qty:2,price:380000},{emoji:'🫧',name:'Toner Cosrx',qty:1,price:220000}], total:980000 },
    { id:'#PNP2609009', customer:'Bùi Đức Thắng', phone:'0989012345', address:'67 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội', date:daysAgo(4), status:'packing', items:[{emoji:'💻',name:'Laptop Acer Aspire 5',qty:1,price:12990000}], total:12990000 },
    // SHIPPING (4)
    { id:'#PNP2608010', customer:'Đinh Thị Mai', phone:'0990123456', address:'90 Nguyễn Văn Cừ, Long Biên, Hà Nội', date:daysAgo(5), status:'shipping', items:[{emoji:'👟',name:'Giày Adidas Ultraboost',qty:1,price:2290000}], total:2290000 },
    { id:'#PNP2608011', customer:'Tạ Văn Nam', phone:'0901234568', address:'23 Điện Biên Phủ, Bình Thạnh, TP.HCM', date:daysAgo(6), status:'shipping', items:[{emoji:'🏸',name:'Vợt Cầu Lông Yonex',qty:1,price:1890000},{emoji:'⚽',name:'Bóng Đá Adidas',qty:1,price:380000}], total:2270000 },
    { id:'#PNP2608012', customer:'Lương Thị Oanh', phone:'0912345679', address:'45 Lê Văn Sỹ, Phú Nhuận, TP.HCM', date:daysAgo(7), status:'shipping', items:[{emoji:'🌸',name:'Nước Hoa Chanel CoCo 50ml',qty:1,price:2500000}], total:2500000 },
    { id:'#PNP2608013', customer:'Phan Anh Quân', phone:'0923456790', address:'78 Nguyễn Tất Thành, Hải Châu, Đà Nẵng', date:daysAgo(8), status:'shipping', items:[{emoji:'📷',name:'Máy Ảnh Canon EOS M50',qty:1,price:9900000}], total:9900000 },
    // DELIVERED (5)
    { id:'#PNP2607014', customer:'Cao Thị Quỳnh', phone:'0934567891', address:'12 Hoàng Diệu, Hải Châu, Đà Nẵng', date:daysAgo(10), status:'delivered', items:[{emoji:'💄',name:'Son MAC Ruby Woo',qty:1,price:480000},{emoji:'💅',name:'Phấn Nền Maybelline',qty:1,price:180000}], total:660000 },
    { id:'#PNP2607015', customer:'Lý Văn Rạng', phone:'0945678902', address:'56 Pasteur, Quận 3, TP.HCM', date:daysAgo(12), status:'delivered', items:[{emoji:'👖',name:'Quần Jeans Nam Slim',qty:2,price:550000}], total:1100000 },
    { id:'#PNP2607016', customer:'Trương Thị Sen', phone:'0956789013', address:'90 Đinh Lễ, Hoàn Kiếm, Hà Nội', date:daysAgo(15), status:'delivered', items:[{emoji:'💻',name:'MacBook Air M2 256GB',qty:1,price:27900000}], total:27900000 },
    { id:'#PNP2607017', customer:'Mai Văn Tùng', phone:'0967890124', address:'34 Trần Văn Ơn, Ninh Kiều, Cần Thơ', date:daysAgo(18), status:'delivered', items:[{emoji:'⌚',name:'Apple Watch Series 9',qty:1,price:10990000}], total:10990000 },
    { id:'#PNP2607018', customer:'Hồ Thị Uyên', phone:'0978901235', address:'67 CMT8, Tân Bình, TP.HCM', date:daysAgo(20), status:'delivered', items:[{emoji:'🏋️',name:'Tạ Tay 5kg x2',qty:1,price:280000},{emoji:'🧘',name:'Thảm Yoga TPE',qty:1,price:320000}], total:600000 },
    // CANCELLED (2)
    { id:'#PNP2606019', customer:'Nguyễn Văn Vinh', phone:'0989012346', address:'23 Lê Hồng Phong, Ba Đình, Hà Nội', date:daysAgo(22), status:'cancelled', items:[{emoji:'📱',name:'iPhone 15 128GB',qty:1,price:19900000}], total:19900000 },
    { id:'#PNP2606020', customer:'Bùi Thị Xuân', phone:'0901234569', address:'45 Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM', date:daysAgo(25), status:'cancelled', items:[{emoji:'🎧',name:'Sony WH-1000XM5',qty:1,price:5990000}], total:5990000 },
  ];
  localStorage.setItem('seller_orders', JSON.stringify(SAMPLE_ORDERS));
  return SAMPLE_ORDERS;
}
function saveSellerOrders(list) { localStorage.setItem('seller_orders', JSON.stringify(list)); }

// RATINGS
function getSellerReviews() {
  return [
    { user:'Nguyễn Văn An', product:'Giày Nike Air Force 1', stars:5, text:'Giày đẹp, đúng size, giao hàng nhanh. Rất hài lòng!', date:'18/10/2026' },
    { user:'Trần Thị Bình', product:'Samsung Galaxy A55', stars:5, text:'Máy chạy mượt, pin trâu, camera đẹp. Mua lần thứ 2 rồi.', date:'17/10/2026' },
    { user:'Lê Minh Cường', product:'Son MAC Ruby Woo', stars:4, text:'Son đẹp, màu chuẩn, lên môi đẹp. Chỉ hơi khô một chút.', date:'16/10/2026' },
    { user:'Phạm Thu Hà', product:'Váy Hoa Midi Zara', stars:5, text:'Vải đẹp, form chuẩn, mặc thoải mái. Giao hàng nhanh!', date:'15/10/2026' },
    { user:'Hoàng Văn Em', product:'Atomic Habits', stars:5, text:'Sách hay, nội dung bổ ích, in đẹp. Đáng đọc!', date:'14/10/2026' },
    { user:'Vũ Thị Phương', product:'Áo Thun Nam Uniqlo', stars:4, text:'Chất vải tốt, mặc mát, nhưng size hơi nhỏ hơn thường.', date:'13/10/2026' },
    { user:'Đặng Quốc Hùng', product:'Xiaomi Smart Band 8', stars:5, text:'Đồng hồ đẹp, nhiều tính năng, giá tốt. Rất đáng tiền!', date:'12/10/2026' },
    { user:'Ngô Thị Lan', product:'Kem Chống Nắng Anessa', stars:5, text:'Kem xịn, không bết dính, bảo vệ da tốt. Dùng nhiều lần rồi.', date:'11/10/2026' },
    { user:'Bùi Đức Thắng', product:'Laptop Acer Aspire 5', stars:4, text:'Laptop chạy nhanh, màn hình đẹp. Bàn phím hơi cứng.', date:'10/10/2026' },
    { user:'Đinh Thị Mai', product:'Giày Adidas Ultraboost', stars:5, text:'Giày siêu nhẹ, chạy bộ rất êm. Đóng gói đẹp.', date:'09/10/2026' },
    { user:'Tạ Văn Nam', product:'Vợt Cầu Lông Yonex', stars:5, text:'Vợt chuẩn hãng, cầm chắc tay, đánh tốt. Rất hài lòng!', date:'08/10/2026' },
    { user:'Lương Thị Oanh', product:'Nước Hoa Chanel CoCo', stars:5, text:'Hàng chính hãng, mùi thơm đúng như mong đợi. Đóng hộp đẹp.', date:'07/10/2026' },
    { user:'Phan Anh Quân', product:'Máy Ảnh Canon EOS M50', stars:4, text:'Máy chụp đẹp, dễ dùng. Giao hàng an toàn, đóng gói kỹ.', date:'06/10/2026' },
    { user:'Cao Thị Quỳnh', product:'Son MAC Ruby Woo', stars:5, text:'Son đỉnh, màu đỏ rất đẹp, bền màu cả ngày. Love it!', date:'05/10/2026' },
    { user:'Lý Văn Rạng', product:'Quần Jeans Nam', stars:3, text:'Chất vải ổn, nhưng đường may chưa được đều. Vẫn dùng được.', date:'04/10/2026' },
    { user:'Trương Thị Sen', product:'MacBook Air M2', stars:5, text:'MacBook xịn, chạy siêu mượt, pin 15 tiếng. Đúng hàng chính hãng!', date:'03/10/2026' },
  ];
}
