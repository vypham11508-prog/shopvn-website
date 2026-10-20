// ===== DỮ LIỆU ĐỊA CHỈ VIỆT NAM =====
const vietnamData = {
  "Hà Nội": {
    "Ba Đình": ["Phúc Xá","Trúc Bạch","Vĩnh Phúc","Cống Vị","Liễu Giai","Nguyễn Trung Trực","Quán Thánh","Ngọc Hà","Điện Biên","Đội Cấn","Ngọc Khánh","Kim Mã","Giảng Võ","Thành Công"],
    "Hoàn Kiếm": ["Phúc Tân","Đồng Xuân","Hàng Mã","Hàng Buồm","Hàng Đào","Hàng Bồ","Cửa Đông","Lý Thái Tổ","Hàng Bạc","Hàng Gai","Chương Dương","Hàng Trống","Hàng Bài","Tràng Tiền","Trần Hưng Đạo","Phan Chu Trinh"],
    "Cầu Giấy": ["Nghĩa Đô","Nghĩa Tân","Mai Dịch","Dịch Vọng","Dịch Vọng Hậu","Quan Hoa","Yên Hòa","Trung Hòa"],
    "Đống Đa": ["Cát Linh","Văn Miếu","Quốc Tử Giám","Láng Thượng","Ô Chợ Dừa","Văn Chương","Hàng Bột","Khâm Thiên","Thổ Quan","Nam Đồng","Trung Phụng","Khương Thượng","Ngã Tư Sở","Thịnh Quang","Láng Hạ"],
    "Hai Bà Trưng": ["Nguyễn Du","Bạch Đằng","Phạm Đình Hổ","Lê Đại Hành","Đồng Nhân","Đống Mác","Thanh Lương","Thanh Nhàn","Cầu Dền","Bách Khoa","Quỳnh Lôi","Bạch Mai","Quỳnh Mai","Vĩnh Tuy","Minh Khai"],
    "Hoàng Mai": ["Thanh Trì","Vĩnh Hưng","Định Công","Mai Động","Tương Mai","Đại Kim","Tân Mai","Hoàng Văn Thụ","Giáp Bát","Lĩnh Nam","Thịnh Liệt","Trần Phú","Hoàng Liệt","Yên Sở"],
    "Thanh Xuân": ["Nhân Chính","Thượng Đình","Khương Trung","Khương Mai","Thanh Xuân Trung","Phương Đình","Thanh Xuân Bắc","Thanh Xuân Nam","Kim Giang","Hạ Đình","Khương Đình"],
    "Hà Đông": ["Nguyễn Trãi","Mỗ Lao","Văn Quán","Vạn Phúc","Yết Kiêu","Quang Trung","La Khê","Phú La","Phúc La","Hà Cầu","Yên Nghĩa","Kiến Hưng","Phú Lương","Dương Nội","Đồng Mai","Biên Giang"],
    "Long Biên": ["Thượng Thanh","Ngọc Thụy","Giang Biên","Đức Giang","Việt Hưng","Gia Thụy","Bồ Đề","Sài Đồng","Long Biên","Thạch Bàn","Phúc Đồng","Cự Khối"],
    "Tây Hồ": ["Phú Thượng","Nhật Tân","Tứ Liên","Quảng An","Xuân La","Bưởi","Yên Phụ","Thụy Khuê"]
  },
  "TP. Hồ Chí Minh": {
    "Quận 1": ["Bến Nghé","Bến Thành","Cầu Kho","Cầu Ông Lãnh","Cô Giang","Đa Kao","Nguyễn Cư Trinh","Nguyễn Thái Bình","Phạm Ngũ Lão","Tân Định"],
    "Quận 3": ["Võ Thị Sáu","Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14"],
    "Quận 7": ["Bình Thuận","Phú Mỹ","Phú Thuận","Tân Hưng","Tân Kiểng","Tân Phong","Tân Phú","Tân Quy","Tân Thuận Đông","Tân Thuận Tây"],
    "Bình Thạnh": ["Phường 1","Phường 2","Phường 3","Phường 5","Phường 6","Phường 7","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 17","Phường 19","Phường 21","Phường 22","Phường 24","Phường 25","Phường 26","Phường 27","Phường 28"],
    "Gò Vấp": ["Phường 1","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16","Phường 17"],
    "Tân Bình": ["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15"],
    "Thủ Đức": ["Linh Xuân","Bình Chiểu","Linh Trung","Tam Bình","Tam Phú","Hiệp Bình Phước","Hiệp Bình Chánh","Linh Chiểu","Linh Đông","Bình Thọ","Trường Thọ","Long Bình","Long Thạnh Mỹ","Tân Phú","Hiệp Phú","Tăng Nhơn Phú A","Tăng Nhơn Phú B","Phước Long B","Phước Long A","Trường Thạnh","Phú Hữu","An Khánh","Bình Trưng Tây","Bình Trưng Đông"],
    "Quận 12": ["Thạnh Xuân","Thạnh Lộc","Hiệp Thành","Thới An","Tân Chánh Hiệp","An Phú Đông","Tân Thới Hiệp","Trung Mỹ Tây","Tân Hưng Thuận","Đông Hưng Thuận","Tân Thới Nhất"]
  },
  "Đà Nẵng": {
    "Hải Châu": ["Thạch Thang","Thanh Bình","Thuận Phước","Hải Châu 1","Hải Châu 2","Phước Ninh","Hòa Thuận Tây","Hòa Thuận Đông","Nam Dương","Bình Hiên","Bình Thuận","Hòa Cường Bắc","Hòa Cường Nam"],
    "Thanh Khê": ["Tam Thuận","Thanh Khê Tây","Thanh Khê Đông","Xuân Hà","Tân Chính","Chính Gián","Vĩnh Trung","Thạc Gián","An Khê","Hòa Khê"],
    "Sơn Trà": ["An Hải Bắc","Phước Mỹ","An Hải Tây","An Hải Đông","Mân Thái","Nại Hiên Đông","Thọ Quang"],
    "Ngũ Hành Sơn": ["Mỹ An","Khuê Mỹ","Hòa Quý","Hòa Hải"],
    "Liên Chiểu": ["Hòa Hiệp Bắc","Hòa Hiệp Nam","Hòa Khánh Bắc","Hòa Khánh Nam","Hòa Minh"],
    "Cẩm Lệ": ["Khuê Trung","Hòa Thọ Tây","Hòa Thọ Đông","Hòa An","Hòa Phát","Hòa Xuân"]
  },
  "Hải Phòng": {
    "Hồng Bàng": ["Quán Toan","Hùng Vương","Sở Dầu","Thượng Lý","Hạ Lý","Minh Khai","Trại Chuối","Hoàng Văn Thụ","Phan Bội Châu","Phạm Hồng Thái"],
    "Lê Chân": ["An Biên","An Dương","Trần Nguyên Hãn","Hồ Nam","Lê Lợi","Vĩnh Niệm","Dư Hàng Kênh","Kênh Dương","Đông Hải","Niệm Nghĩa","Nghĩa Xá","Dư Hàng","Hàng Kênh","Đồng Quốc Bình","Trần Thành Ngọ"],
    "Ngô Quyền": ["Máy Tơ","Vạn Mỹ","Cầu Đất","Lạch Tray","Đổng Quốc Bình","Máy Chai","Đông Khê","Lê Lợi","Gia Viên","Lạc Viên","Cầu Tre","Đằng Giang","Đằng Lâm","Văn Đẩu","Đổng Quốc Bình"]
  },
  "Cần Thơ": {
    "Ninh Kiều": ["Cái Khế","An Hòa","Thới Bình","An Nghiệp","An Cư","Tân An","An Phú","Xuân Khánh","Hưng Lợi","An Khánh","An Bình"],
    "Ô Môn": ["Châu Văn Liêm","Thới Hòa","Thới Long","Long Hưng","Thới An","Phước Thới","Trường Lạc"],
    "Bình Thủy": ["Long Hòa","Long Tuyền","Thới An Đông","Bình Thủy","Trà An","Trà Nóc","An Thới","Bùi Hữu Nghĩa"]
  }
};

// Tạo dữ liệu phường cho các tỉnh còn lại (generic)
const otherProvinces = ["An Giang","Bà Rịa - Vũng Tàu","Bắc Giang","Bắc Kạn","Bạc Liêu","Bắc Ninh","Bến Tre","Bình Định","Bình Dương","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Đắk Lắk","Đắk Nông","Điện Biên","Đồng Nai","Đồng Tháp","Gia Lai","Hà Giang","Hà Nam","Hà Tĩnh","Hải Dương","Hậu Giang","Hòa Bình","Hưng Yên","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lâm Đồng","Lạng Sơn","Lào Cai","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thừa Thiên Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];

// Dữ liệu quận/huyện cho các tỉnh còn lại
const provinceDistricts = {
  "An Giang": ["Long Xuyên","Châu Đốc","An Phú","Châu Phú","Châu Thành","Chợ Mới","Phú Tân","Thoại Sơn","Tịnh Biên","Tri Tôn"],
  "Bà Rịa - Vũng Tàu": ["Vũng Tàu","Bà Rịa","Châu Đức","Côn Đảo","Đất Đỏ","Long Điền","Tân Thành","Xuyên Mộc"],
  "Bắc Giang": ["Bắc Giang","Hiệp Hòa","Lạng Giang","Lục Nam","Lục Ngạn","Sơn Động","Tân Yên","Việt Yên","Yên Dũng","Yên Thế"],
  "Bắc Kạn": ["Bắc Kạn","Ba Bể","Bạch Thông","Chợ Đồn","Chợ Mới","Na Rì","Ngân Sơn","Pác Nặm"],
  "Bạc Liêu": ["Bạc Liêu","Đông Hải","Giá Rai","Hòa Bình","Hồng Dân","Phước Long","Vĩnh Lợi"],
  "Bắc Ninh": ["Bắc Ninh","Từ Sơn","Gia Bình","Lương Tài","Quế Võ","Thuận Thành","Tiên Du","Yên Phong"],
  "Bến Tre": ["Bến Tre","Ba Tri","Bình Đại","Châu Thành","Chợ Lách","Giồng Trôm","Mỏ Cày Bắc","Mỏ Cày Nam","Thạnh Phú"],
  "Bình Định": ["Quy Nhơn","An Lão","An Nhơn","Hoài Ân","Hoài Nhơn","Phù Cát","Phù Mỹ","Tây Sơn","Tuy Phước","Vân Canh","Vĩnh Thạnh"],
  "Bình Dương": ["Thủ Dầu Một","Bàu Bàng","Bắc Tân Uyên","Bến Cát","Dầu Tiếng","Dĩ An","Phú Giáo","Tân Uyên","Thuận An"],
  "Bình Phước": ["Đồng Xoài","Bình Long","Phước Long","Bù Đăng","Bù Đốp","Bù Gia Mập","Chơn Thành","Đồng Phú","Hớn Quản","Lộc Ninh","Phú Riềng"],
  "Bình Thuận": ["Phan Thiết","La Gi","Bắc Bình","Đức Linh","Hàm Tân","Hàm Thuận Bắc","Hàm Thuận Nam","Phú Quí","Tánh Linh","Tuy Phong"],
  "Cà Mau": ["Cà Mau","Cái Nước","Đầm Dơi","Năm Căn","Ngọc Hiển","Phú Tân","Thới Bình","Trần Văn Thời","U Minh"],
  "Cao Bằng": ["Cao Bằng","Bảo Lạc","Bảo Lâm","Hà Quảng","Hạ Lang","Hòa An","Nguyên Bình","Quảng Hòa","Thạch An","Trùng Khánh"],
  "Đắk Lắk": ["Buôn Ma Thuột","Buôn Đôn","Cư Kuin","Cư M'gar","Ea H'leo","Ea Kar","Ea Súp","Krông Ana","Krông Bông","Krông Pắc","Lắk","M'Đrắk"],
  "Đắk Nông": ["Gia Nghĩa","Cư Jút","Đắk Glong","Đắk Mil","Đắk R'Lấp","Đắk Song","Krông Nô","Tuy Đức"],
  "Điện Biên": ["Điện Biên Phủ","Điện Biên","Mường Chà","Mường Lay","Tuần Giáo","Tủa Chùa"],
  "Đồng Nai": ["Biên Hòa","Long Khánh","Cẩm Mỹ","Định Quán","Long Thành","Nhơn Trạch","Tân Phú","Thống Nhất","Trảng Bom","Vĩnh Cửu","Xuân Lộc"],
  "Đồng Tháp": ["Cao Lãnh","Sa Đéc","Hồng Ngự","Châu Thành","Lai Vung","Lấp Vò","Tam Nông","Tân Hồng","Tháp Mười","Thanh Bình"],
  "Gia Lai": ["Pleiku","An Khê","Ayun Pa","Chư Sê","Đắk Đoa","Đức Cơ","Ia Grai","Kbang","Krông Pa","Mang Yang","Phú Thiện"],
  "Hà Giang": ["Hà Giang","Bắc Mê","Bắc Quang","Đồng Văn","Mèo Vạc","Quản Bạ","Vị Xuyên","Yên Minh"],
  "Hà Nam": ["Phủ Lý","Bình Lục","Duy Tiên","Kim Bảng","Lý Nhân","Thanh Liêm"],
  "Hà Tĩnh": ["Hà Tĩnh","Hồng Lĩnh","Cẩm Xuyên","Can Lộc","Đức Thọ","Hương Khê","Kỳ Anh","Nghi Xuân","Thạch Hà"],
  "Hải Dương": ["Hải Dương","Chí Linh","Bình Giang","Cẩm Giàng","Gia Lộc","Kim Thành","Kinh Môn","Nam Sách","Ninh Giang","Thanh Hà","Tứ Kỳ"],
  "Hậu Giang": ["Vị Thanh","Ngã Bảy","Châu Thành","Châu Thành A","Long Mỹ","Phụng Hiệp","Vị Thủy"],
  "Hòa Bình": ["Hòa Bình","Cao Phong","Đà Bắc","Kim Bôi","Lạc Sơn","Lương Sơn","Mai Châu","Tân Lạc","Yên Thủy"],
  "Hưng Yên": ["Hưng Yên","Ân Thi","Khoái Châu","Kim Động","Mỹ Hào","Phù Cừ","Tiên Lữ","Văn Giang","Văn Lâm","Yên Mỹ"],
  "Khánh Hòa": ["Nha Trang","Cam Ranh","Ninh Hòa","Cam Lâm","Diên Khánh","Khánh Sơn","Khánh Vĩnh","Vạn Ninh"],
  "Kiên Giang": ["Rạch Giá","Hà Tiên","An Biên","Châu Thành","Giang Thành","Giồng Riềng","Hòn Đất","Phú Quốc","Tân Hiệp","Vĩnh Thuận"],
  "Kon Tum": ["Kon Tum","Đắk Glei","Đắk Hà","Đắk Tô","Kon Plông","Ngọc Hồi","Sa Thầy","Tu Mơ Rông"],
  "Lai Châu": ["Lai Châu","Mường Tè","Phong Thổ","Sìn Hồ","Tam Đường","Tân Uyên","Than Uyên"],
  "Lâm Đồng": ["Đà Lạt","Bảo Lộc","Bảo Lâm","Cát Tiên","Di Linh","Đơn Dương","Đức Trọng","Lạc Dương","Lâm Hà"],
  "Lạng Sơn": ["Lạng Sơn","Bắc Sơn","Bình Gia","Cao Lộc","Chi Lăng","Đình Lập","Hữu Lũng","Lộc Bình","Tràng Định","Văn Quan"],
  "Lào Cai": ["Lào Cai","Bắc Hà","Bảo Thắng","Bảo Yên","Bát Xát","Mường Khương","Sa Pa","Văn Bàn"],
  "Long An": ["Tân An","Kiến Tường","Bến Lức","Cần Đước","Cần Giuộc","Châu Thành","Đức Hòa","Mộc Hóa","Tân Hưng","Tân Thạnh","Vĩnh Hưng"],
  "Nam Định": ["Nam Định","Giao Thủy","Hải Hậu","Nam Trực","Nghĩa Hưng","Trực Ninh","Vụ Bản","Xuân Trường","Ý Yên"],
  "Nghệ An": ["Vinh","Cửa Lò","Thái Hòa","Hoàng Mai","Anh Sơn","Con Cuông","Diễn Châu","Đô Lương","Hưng Nguyên","Nam Đàn","Nghi Lộc","Quỳnh Lưu","Tân Kỳ","Thanh Chương","Yên Thành"],
  "Ninh Bình": ["Ninh Bình","Tam Điệp","Gia Viễn","Hoa Lư","Kim Sơn","Nho Quan","Yên Khánh","Yên Mô"],
  "Ninh Thuận": ["Phan Rang-Tháp Chàm","Bác Ái","Ninh Hải","Ninh Phước","Ninh Sơn","Thuận Bắc","Thuận Nam"],
  "Phú Thọ": ["Việt Trì","Phú Thọ","Cẩm Khê","Đoan Hùng","Hạ Hòa","Lâm Thao","Phù Ninh","Tam Nông","Thanh Ba","Thanh Sơn","Yên Lập"],
  "Phú Yên": ["Tuy Hòa","Sông Cầu","Đồng Xuân","Đông Hòa","Phú Hòa","Sơn Hòa","Tây Hòa","Tuy An"],
  "Quảng Bình": ["Đồng Hới","Ba Đồn","Bố Trạch","Lệ Thủy","Minh Hóa","Quảng Ninh","Quảng Trạch","Tuyên Hóa"],
  "Quảng Nam": ["Tam Kỳ","Hội An","Bắc Trà My","Đại Lộc","Điện Bàn","Duy Xuyên","Hiệp Đức","Nam Giang","Núi Thành","Phú Ninh","Quế Sơn","Thăng Bình","Tiên Phước"],
  "Quảng Ngãi": ["Quảng Ngãi","Đức Phổ","Ba Tơ","Bình Sơn","Mộ Đức","Nghĩa Hành","Sơn Hà","Sơn Tịnh","Trà Bồng","Tư Nghĩa"],
  "Quảng Ninh": ["Hạ Long","Cẩm Phả","Uông Bí","Móng Cái","Đông Triều","Quảng Yên","Ba Chẽ","Bình Liêu","Cô Tô","Đầm Hà","Hải Hà","Tiên Yên","Vân Đồn"],
  "Quảng Trị": ["Đông Hà","Quảng Trị","Cam Lộ","Cồn Cỏ","Gio Linh","Hải Lăng","Hướng Hóa","Triệu Phong","Vĩnh Linh"],
  "Sóc Trăng": ["Sóc Trăng","Châu Thành","Cù Lao Dung","Kế Sách","Long Phú","Mỹ Tú","Mỹ Xuyên","Ngã Năm","Thạnh Trị","Trần Đề","Vĩnh Châu"],
  "Sơn La": ["Sơn La","Bắc Yên","Mai Sơn","Mộc Châu","Mường La","Phù Yên","Sông Mã","Thuận Châu","Yên Châu"],
  "Tây Ninh": ["Tây Ninh","Bến Cầu","Châu Thành","Dương Minh Châu","Gò Dầu","Hòa Thành","Tân Biên","Tân Châu","Trảng Bàng"],
  "Thái Bình": ["Thái Bình","Đông Hưng","Hưng Hà","Kiến Xương","Quỳnh Phụ","Thái Thụy","Tiền Hải","Vũ Thư"],
  "Thái Nguyên": ["Thái Nguyên","Sông Công","Phổ Yên","Định Hóa","Đại Từ","Đồng Hỷ","Phú Bình","Phú Lương","Võ Nhai"],
  "Thanh Hóa": ["Thanh Hóa","Bỉm Sơn","Sầm Sơn","Bá Thước","Cẩm Thủy","Đông Sơn","Hà Trung","Hậu Lộc","Hoằng Hóa","Lang Chánh","Nga Sơn","Ngọc Lặc","Nông Cống","Quảng Xương","Thạch Thành","Thiệu Hóa","Thọ Xuân","Triệu Sơn","Tĩnh Gia","Yên Định"],
  "Thừa Thiên Huế": ["Huế","Hương Thủy","Hương Trà","A Lưới","Nam Đông","Phong Điền","Phú Lộc","Phú Vang","Quảng Điền"],
  "Tiền Giang": ["Mỹ Tho","Gò Công","Cai Lậy","Cái Bè","Châu Thành","Chợ Gạo","Gò Công Đông","Gò Công Tây","Tân Phú Đông","Tân Phước"],
  "Trà Vinh": ["Trà Vinh","Duyên Hải","Càng Long","Cầu Kè","Cầu Ngang","Châu Thành","Tiểu Cần","Trà Cú"],
  "Tuyên Quang": ["Tuyên Quang","Chiêm Hóa","Hàm Yên","Lâm Bình","Na Hang","Sơn Dương","Yên Sơn"],
  "Vĩnh Long": ["Vĩnh Long","Bình Minh","Bình Tân","Long Hồ","Mang Thít","Tam Bình","Trà Ôn","Vũng Liêm"],
  "Vĩnh Phúc": ["Vĩnh Yên","Phúc Yên","Bình Xuyên","Lập Thạch","Sông Lô","Tam Đảo","Tam Dương","Vĩnh Tường","Yên Lạc"],
  "Yên Bái": ["Yên Bái","Nghĩa Lộ","Lục Yên","Mù Cang Chải","Trạm Tấu","Trấn Yên","Văn Chấn","Văn Yên","Yên Bình"]
};

// Phường generic cho các quận/huyện chưa có data chi tiết
function generateWards(districtName) {
  const prefixes = ["Phường","Phường","Phường","Xã","Xã","Thị trấn"];
  const names = ["1","2","3","4","5","6","7","8","9","10",
    districtName + " A", districtName + " B",
    "Trung Tâm","Đông","Tây","Nam","Bắc","Mới","Cũ","Thắng Lợi"];
  return [...new Set(names.map((n,i) => (i < 10 ? "Phường " : "") + n))].slice(0, 10);
}

// ===== NGÂN HÀNG VIỆT NAM =====
const vietnamBanks = [
  "Vietcombank (VCB)","VietinBank (CTG)","BIDV","Agribank","MBBank","Techcombank",
  "ACB","VPBank","TPBank","Sacombank","HDBank","VIB","OCB","MSB","SHB","SeABank",
  "Eximbank","LienVietPostBank","Nam A Bank","Bac A Bank","KienlongBank",
  "VietBank","PG Bank","CBBank","OceanBank","GPBank","Saigonbank","Viet A Bank",
  "Indovina Bank","HSBC Việt Nam","Standard Chartered VN","ANZ Việt Nam",
  "Citibank Việt Nam","Shinhan Bank VN","Woori Bank VN","UOB Việt Nam",
  "Public Bank VN","Kookmin Bank VN","NongHyup Bank VN","IBK Việt Nam",
  "VRB (Việt - Nga)","Viet Capital Bank","SaigonBank","BaoViet Bank",
  "NCB (National Citizen Bank)","Dong A Bank","ABBank","Bamboo Finance (Finhay)"
];

// ===== HÀM KHỞI TẠO DROPDOWN =====

// Lấy danh sách quận/huyện theo tỉnh
function getDistricts(province) {
  const data = vietnamData[province];
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    return Object.keys(data);
  }
  return provinceDistricts[province] || [];
}

// Lấy danh sách phường/xã theo tỉnh + quận
function getWards(province, district) {
  const data = vietnamData[province];
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    return data[district] || generateWards(district);
  }
  return generateWards(district);
}

// Khởi tạo dropdown 2 cấp: tỉnh → quận
function initProvinceDropdown(provinceSelectId, districtSelectId) {
  const provinceSelect = document.getElementById(provinceSelectId);
  const districtSelect = document.getElementById(districtSelectId);
  if (!provinceSelect || !districtSelect) return;

  const allProvinces = [...Object.keys(vietnamData), ...Object.keys(provinceDistricts)]
    .filter((v,i,a) => a.indexOf(v) === i)
    .sort((a,b) => {
      if (a === "Hà Nội") return -1; if (b === "Hà Nội") return 1;
      if (a === "TP. Hồ Chí Minh") return -1; if (b === "TP. Hồ Chí Minh") return 1;
      if (a === "Đà Nẵng") return -1; if (b === "Đà Nẵng") return 1;
      return a.localeCompare(b, 'vi');
    });

  provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
  allProvinces.forEach(p => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = p;
    provinceSelect.appendChild(opt);
  });

  districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
  districtSelect.disabled = true;

  provinceSelect.addEventListener('change', function() {
    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    if (this.value) {
      getDistricts(this.value).forEach(d => {
        const opt = document.createElement('option');
        opt.value = opt.textContent = d;
        districtSelect.appendChild(opt);
      });
      districtSelect.disabled = false;
    } else {
      districtSelect.disabled = true;
    }
    // Reset ward nếu có
    const wardId = districtSelect.id.replace('district','ward').replace('District','Ward');
    const wardSel = document.getElementById(wardId);
    if (wardSel) { wardSel.innerHTML = '<option value="">Chọn phường/xã</option>'; wardSel.disabled = true; }
  });
}

// Khởi tạo dropdown 3 cấp: tỉnh → quận → phường
function initFullAddressDropdown(provinceId, districtId, wardId) {
  initProvinceDropdown(provinceId, districtId);

  const provinceSelect = document.getElementById(provinceId);
  const districtSelect = document.getElementById(districtId);
  const wardSelect = document.getElementById(wardId);
  if (!wardSelect) return;

  wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
  wardSelect.disabled = true;

  districtSelect.addEventListener('change', function() {
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    if (this.value && provinceSelect.value) {
      getWards(provinceSelect.value, this.value).forEach(w => {
        const opt = document.createElement('option');
        opt.value = opt.textContent = w;
        wardSelect.appendChild(opt);
      });
      wardSelect.disabled = false;
    } else {
      wardSelect.disabled = true;
    }
  });
}

// Khởi tạo dropdown ngân hàng
function initBankDropdown(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = '<option value="">Chọn ngân hàng</option>';
  vietnamBanks.forEach(b => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = b;
    sel.appendChild(opt);
  });
}
