# Mộc Tái Sinh - Danh Thiếp Số

Một ứng dụng danh thiếp số chuyên nghiệp được xây dựng bằng Next.js và Tailwind CSS, lấy cảm hứng từ thiết kế của Linktree nhưng được tùy chỉnh hoàn toàn cho công ty Mộc Tái Sinh.

## ✨ Tính năng chính

### 🎯 Tab Chính
- **Lưu liên hệ**: Tạo file .vcf để lưu vào danh bạ điện thoại
- **QR Code**: Hiển thị mã QR để chia sẻ thông tin liên hệ
- **Thông tin liên hệ**: Điện thoại, email, website với khả năng click để gọi/gửi mail
- **Mạng xã hội**: Facebook, Zalo, Instagram, Website

### 📸 Tab Album
- Hiển thị album ảnh hành trình của công ty
- Grid layout responsive
- Placeholder cho ảnh thực tế

### 💳 Tab Thanh toán
- QR Code thanh toán MoMo
- Thông tin tài khoản ngân hàng
- Hỗ trợ chuyển khoản

### ℹ️ Tab Thông tin
- Địa chỉ công ty
- Giờ làm việc
- Quy mô công ty
- Cam kết dịch vụ

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:3000

### Build production
```bash
npm run build
npm start
```

## 🛠️ Công nghệ sử dụng

- **Next.js 14** - Framework React với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **QRCode.react** - Tạo mã QR

## 📱 Responsive Design

- Thiết kế mobile-first
- Tối ưu cho mọi kích thước màn hình
- Touch-friendly interface

## 🎨 Tùy chỉnh

### Thay đổi thông tin công ty
Chỉnh sửa object `companyInfo` trong file `src/components/BusinessCard.tsx`:

```typescript
const companyInfo = {
  name: 'Tên công ty của bạn',
  phone: 'Số điện thoại',
  email: 'Email',
  website: 'Website',
  address: 'Địa chỉ',
  description: 'Mô tả công ty',
  workingHours: 'Giờ làm việc',
  teamSize: 'Quy mô'
};
```

### Thay đổi màu sắc
Sử dụng Tailwind CSS classes để thay đổi màu sắc:
- Header: `from-green-600 to-emerald-700`
- Buttons: `bg-green-600`, `bg-blue-600`
- Accents: `text-green-600`

### Thay đổi icons
Thay thế icons từ Lucide React library trong `socialLinks` array.

## 📊 SEO và Performance

- Meta tags tối ưu
- Lazy loading cho images
- Responsive images
- Fast loading với Next.js

## 🔒 Bảo mật

- Không lưu trữ thông tin nhạy cảm
- HTTPS ready
- XSS protection

## 📈 Deployment

### Vercel (Khuyến nghị)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload thư mục .next và public
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phát hành dưới MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng:
- Tạo issue trên GitHub
- Liên hệ qua email: support@moctaisinh.com

## 🎯 Roadmap

- [ ] Thêm dark mode
- [ ] Tích hợp analytics
- [ ] Hỗ trợ đa ngôn ngữ
- [ ] Tích hợp CMS
- [ ] Mobile app
- [ ] QR Code tracking

---

**Mộc Tái Sinh** - Vì một tương lai xanh và bền vững! 🌱
