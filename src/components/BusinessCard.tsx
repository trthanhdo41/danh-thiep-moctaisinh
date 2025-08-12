'use client';

import React from 'react';
import { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  QrCode,
  Download,
  Heart,
  Leaf,
  Camera,
  CreditCard,
  Info,
  MapPin,
  Clock,
  Users,
  Palette,
  Sparkles,
  Star,
  Zap,
  ChevronRight,
  ExternalLink,
  Home,
  Package,
  Building2,
  Smartphone,
  Wallet,
  Image,
  MessageCircle,
  Languages,
  Settings
} from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import Switch from 'react-switch';

type StyleType = 'nature' | 'modern' | 'neumorphism' | 'dark' | 'minimalist';
type LanguageType = 'vi' | 'en';

export default function BusinessCard() {
  const [activeTab, setActiveTab] = useState<'main' | 'gallery' | 'payment' | 'info' | 'products' | 'company' | 'qr-info'>('main');
  const [showQR, setShowQR] = useState(false);
  const [showWebModal, setShowWebModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [webUrl, setWebUrl] = useState('');
  const [webTitle, setWebTitle] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<StyleType>('nature');
  const [language, setLanguage] = useState<LanguageType>('vi');

  // Translations object
  const translations = {
    vi: {
      // Company Info
      companyName: 'Mộc Tái Sinh',
      companyDescription: 'Chuyên cung cấp các sản phẩm gỗ tái chế chất lượng cao, thân thiện môi trường',
      workingHours: '8:00 - 18:00 (Thứ 2 - Thứ 7)',
      teamSize: '15+ nhân viên',
      founded: '2020',
      mission: 'Đem đến những sản phẩm gỗ tái chế chất lượng cao, góp phần bảo vệ môi trường',
      vision: 'Trở thành thương hiệu hàng đầu về gỗ tái chế tại Việt Nam',
      
      // Actions
      saveContact: 'Lưu liên hệ',
      qrCode: 'QR Code',
      clickToShowQR: 'Click để xem QR Code',
      
      // Contact Info
      phone: 'Điện thoại',
      email: 'Email',
      website: 'Website',
      address: 'Hà Nội, Việt Nam',
      
      // QR Codes
      paymentQRTitle: 'QR Chuyển tiền',
      paymentQRDescription: 'Quét mã để chuyển tiền',
      infoQRTitle: 'QR Thông tin thêm',
      infoQRDescription: 'Quét để xem thông tin chi tiết',
      bank: 'Ngân hàng',
      account: 'Tài khoản',
      accountHolder: 'Chủ tài khoản',
      scanToSave: 'Quét để lưu thông tin liên hệ',
      
      // Social Media
      facebook: 'Facebook',
      zalo: 'Zalo',
      instagram: 'Instagram',
      socialMedia: 'Mạng xã hội',
      contactInfo: 'Thông tin liên hệ',
      connect: 'Kết nối',
      
      // Style Names
      nature: 'Thiên Nhiên',
      modern: 'Hiện Đại',
      elegant: 'Sang Trọng',
      vibrant: 'Năng Động',
      glassmorphism: 'Kính Mờ',
      neumorphism: 'Neumorphism',
      dark: 'Tối Giản',
      retro: 'Trẻ Hóa',
      minimalist: 'Tối Giản',
      futuristic: 'Tương Lai',
      
      // Style Descriptions
      natureDesc: 'Layout dọc, thiết kế tự nhiên',
      modernDesc: 'Layout ngang, thiết kế tối giản',
      elegantDesc: 'Sidebar layout, thiết kế cao cấp',
      vibrantDesc: 'Grid layout, màu sắc tươi sáng',
      glassmorphismDesc: 'Hiệu ứng kính mờ đẹp mắt',
      neumorphismDesc: 'Thiết kế 3D đẹp mắt và tối ưu mobile',
      darkDesc: 'Thiết kế hiện đại tối giản',
      retroDesc: 'Thiết kế cổ điển đẹp mắt và tối ưu mobile',
      minimalistDesc: 'Thiết kế tối giản đẹp mắt và tối ưu mobile',
      futuristicDesc: 'Thiết kế tương lai đẹp mắt và tối ưu mobile',
      
      // UI Elements
      chooseStyle: 'Chọn phong cách thiết kế',
      allRightsReserved: 'Tất cả quyền được bảo lưu',
      
      // Tabs
      main: 'Chính',
      services: 'Dịch vụ',
      products: 'Sản phẩm',
      company: 'Công ty',
      qrInfo: 'QR Info',
      payment: 'Thanh toán',
      gallery: 'Thư viện',
      
      // Awards
      greenBusinessAward: 'Giải thưởng Doanh nghiệp Xanh 2023',
      top10EcoCompany: 'Top 10 Công ty thân thiện môi trường',
      
      // Products
      premiumRecycledWood: 'Gỗ tái chế cao cấp',
      recycledPlywood: 'Ván ép tái chế',
      recycledFurniture: 'Đồ nội thất tái chế',
      
      // Product Descriptions
      premiumWoodDesc: 'Gỗ tái chế chất lượng cao, phù hợp làm sàn, tường',
      plywoodDesc: 'Ván ép từ gỗ tái chế, bền đẹp, thân thiện môi trường',
      furnitureDesc: 'Bàn, ghế, tủ từ gỗ tái chế theo yêu cầu',
      
      // Payment Methods
      cash: 'Tiền mặt',
      bankTransfer: 'Chuyển khoản',
      eWallet: 'Ví điện tử',
      
      // Company Info
      companyFullName: 'CÔNG TY MỘC TÁI SINH',
      
      // Contact
      contactUs: 'Liên hệ',
      
      // Company Info
      companyInfo: 'Thông tin công ty, sản phẩm, dịch vụ',
      
      // Language Labels
      vietnamese: 'Tiếng Việt',
      english: 'English'
    },
    en: {
      // Company Info
      companyName: 'Moc Tai Sinh',
      companyDescription: 'Specializing in high-quality recycled wood products, environmentally friendly',
      workingHours: '8:00 - 18:00 (Monday - Saturday)',
      teamSize: '15+ employees',
      founded: '2020',
      mission: 'Provide high-quality recycled wood products, contributing to environmental protection',
      vision: 'Become the leading brand in recycled wood in Vietnam',
      
      // Actions
      saveContact: 'Save Contact',
      qrCode: 'QR Code',
      clickToShowQR: 'Click to show QR Code',
      
      // Contact Info
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      address: 'Hanoi, Vietnam',
      
      // QR Codes
      paymentQRTitle: 'Payment QR',
      paymentQRDescription: 'Scan code to transfer money',
      infoQRTitle: 'Info QR',
      infoQRDescription: 'Scan to view detailed information',
      bank: 'Bank',
      account: 'Account',
      accountHolder: 'Account Holder',
      scanToSave: 'Scan to save contact information',
      
      // Social Media
      facebook: 'Facebook',
      zalo: 'Zalo',
      instagram: 'Instagram',
      socialMedia: 'Social Media',
      contactInfo: 'Contact Information',
      connect: 'Connect',
      
      // Style Names
      nature: 'Nature',
      modern: 'Modern',
      elegant: 'Elegant',
      vibrant: 'Vibrant',
      glassmorphism: 'Glassmorphism',
      neumorphism: 'Neumorphism',
      dark: 'Dark',
      retro: 'Retro',
      minimalist: 'Minimalist',
      futuristic: 'Futuristic',
      
      // Style Descriptions
      natureDesc: 'Vertical layout, natural design',
      modernDesc: 'Horizontal layout, minimal design',
      elegantDesc: 'Sidebar layout, premium design',
      vibrantDesc: 'Grid layout, bright colors',
      glassmorphismDesc: 'Beautiful glass effect',
      neumorphismDesc: '3D design, mobile optimized',
      darkDesc: 'Modern minimal design',
      retroDesc: 'Classic design, mobile optimized',
      minimalistDesc: 'Minimal design, mobile optimized',
      futuristicDesc: 'Future design, mobile optimized',
      
      // UI Elements
      chooseStyle: 'Choose Design Style',
      allRightsReserved: 'All rights reserved',
      
      // Tabs
      main: 'Main',
      services: 'Services',
      products: 'Products',
      company: 'Company',
      qrInfo: 'QR Info',
      payment: 'Payment',
      gallery: 'Gallery',
      
      // Awards
      greenBusinessAward: 'Green Business Award 2023',
      top10EcoCompany: 'Top 10 Environmentally Friendly Company',
      
      // Products
      premiumRecycledWood: 'Premium Recycled Wood',
      recycledPlywood: 'Recycled Plywood',
      recycledFurniture: 'Recycled Furniture',
      
      // Product Descriptions
      premiumWoodDesc: 'High-quality recycled wood, suitable for flooring and walls',
      plywoodDesc: 'Plywood made from recycled wood, durable, beautiful, environmentally friendly',
      furnitureDesc: 'Tables, chairs, cabinets from recycled wood on request',
      
      // Payment Methods
      cash: 'Cash',
      bankTransfer: 'Bank Transfer',
      eWallet: 'E-Wallet',
      
      // Company Info
      companyFullName: 'MOC TAI SINH COMPANY',
      
      // Contact
      contactUs: 'Contact Us',
      
      // Company Info
      companyInfo: 'Company, product and service information',
      
      // Language Labels
      vietnamese: 'Vietnamese',
      english: 'English'
    }
  };

  const t = translations[language];

  const companyInfo = {
    name: t.companyName,
    phone: '0777666386',
    email: 'moctaisinh@gmail.com',
    website: 'moctaisinh.vn',
    address: t.address,
    description: t.companyDescription,
    workingHours: t.workingHours,
    teamSize: t.teamSize,
    founded: t.founded,
    mission: t.mission,
    vision: t.vision,
    certifications: ['ISO 9001:2015', 'FSC', 'Green Building'],
    awards: [t.greenBusinessAward, t.top10EcoCompany]
  };

  const socialLinks = [
    { name: t.facebook, icon: Facebook, url: 'https://facebook.com/moctaisinh', color: 'bg-blue-600' },
    { name: t.zalo, icon: null, url: 'https://zalo.me/0777666386', color: 'bg-blue-500' },
    { name: t.instagram, icon: Instagram, url: 'https://instagram.com/moctaisinh', color: 'bg-pink-600' },
    { name: t.website, icon: Globe, url: 'https://moctaisinh.vn', color: 'bg-green-600' }
  ];

  const galleryImages = [
    '/api/placeholder/400/300/1',
    '/api/placeholder/400/300/2',
    '/api/placeholder/400/300/3',
    '/api/placeholder/400/300/4',
    '/api/placeholder/400/300/5',
    '/api/placeholder/400/300/6'
  ];

  const products = [
    {
      name: t.premiumRecycledWood,
      price: '2.500.000đ/m²',
      description: t.premiumWoodDesc,
      image: '/api/placeholder/300/200/wood1'
    },
    {
      name: t.recycledPlywood,
      price: '1.800.000đ/m²',
      description: t.plywoodDesc,
      image: '/api/placeholder/300/200/wood2'
    },
    {
      name: t.recycledFurniture,
      price: t.contactUs,
      description: t.furnitureDesc,
      image: '/api/placeholder/300/200/wood3'
    }
  ];

  const paymentInfo = {
    momo: '0777666386',
    bank: {
      name: 'Vietcombank',
      account: '1234567890',
      holder: t.companyFullName
    },
    otherMethods: [t.cash, t.bankTransfer, t.eWallet]
  };

  const qrCodes = {
    payment: {
      title: t.paymentQRTitle,
      description: t.paymentQRDescription,
      image: '/qrThanhToan.jpg', // Ảnh QR code ACB thực tế
      bankInfo: {
        bank: 'ACB Bank',
        account: '1234567890',
        holder: 'Đặng Thị Cúc Phương'
      }
    },
    info: {
      title: t.infoQRTitle,
      description: t.infoQRDescription,
      value: 'https://moctaisinh.com/company-info',
      color: 'from-blue-500 to-blue-600'
    }
  };

  const handleContact = (type: string, value: string) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'website':
        // Thêm https:// nếu chưa có protocol
        const url = value.startsWith('http') ? value : `https://${value}`;
        window.open(url, '_blank');
        break;
      case 'address':
        setShowMapModal(true);
        break;
      default:
        window.open(value, '_blank');
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${companyInfo.name}
ORG:${companyInfo.name}
TEL:${companyInfo.phone}
EMAIL:${companyInfo.email}
URL:${companyInfo.website}
ADR:${companyInfo.address}
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${companyInfo.name}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleTabClick = (tab: string) => {
    switch(tab) {
      case 'services':
        setWebUrl('https://moctaisinh.vn/services.html');
        setWebTitle('Dịch vụ - Mộc Tái Sinh');
        setShowWebModal(true);
        break;
      case 'products':
        setWebUrl('https://moctaisinh.vn/shop.html');
        setWebTitle('Sản phẩm - Mộc Tái Sinh');
        setShowWebModal(true);
        break;
      case 'company':
        setWebUrl('https://moctaisinh.vn/about.html');
        setWebTitle('Về chúng tôi - Mộc Tái Sinh');
        setShowWebModal(true);
        break;
      case 'gallery':
        setWebUrl('https://moctaisinh.vn/blog.html');
        setWebTitle('Blog - Mộc Tái Sinh');
        setShowWebModal(true);
        break;
      default:
        if (tab === 'main') {
          setActiveTab('main');
        }
    }
  };

  // Nhóm 1: Xanh dương, Xanh lá, Trắng (Nature Style)
  const renderNatureStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-gradient-to-b from-blue-600 to-green-600 rounded-2xl p-6 text-white text-center shadow-xl relative">

        
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Vòng tròn animation online */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
          
          {/* Avatar chính với hiệu ứng zoom in/out nhẹ nhàng */}
          <div className="relative w-20 h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-lg border-2 border-white/30 animate-zoomInOut">
            <img 
              src="/LOGO MTS V1.png" 
              alt="Mộc Tái Sinh Logo" 
              className="w-[120%] h-[120%] object-cover"
            />
          </div>
        </div>
        
        {/* Tên công ty với dấu tích xanh */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">{companyInfo.name}</h1>
          {/* Dấu tích xanh Facebook */}
          <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="text-purple-100 text-sm mb-6 leading-relaxed">{companyInfo.description}</p>
        
        <div className="space-y-3">
          <button onClick={handleSaveContact} className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            {t.saveContact}
          </button>
          <button 
            onClick={() => setShowQR(!showQR)} 
            className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105 ${
              showQR 
                ? 'bg-green-600 shadow-lg shadow-green-500/30' 
                : 'bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg'
            }`}
          >
            <QrCode className={`w-4 h-4 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
            {showQR ? 'Ẩn QR Code' : t.qrCode}
          </button>
        </div>
      </div>



      {/* Tab Navigation - Tách biệt khỏi header */}
      <div className="mt-4 flex gap-1 justify-center">
        {[
          { key: 'company', label: t.company, icon: Building2 },
          { key: 'services', label: t.services, icon: Settings },
          { key: 'products', label: t.products, icon: Package },
          { key: 'gallery', label: t.gallery, icon: Image }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white border border-white/40'
                : 'bg-white/10 text-blue-800 hover:bg-white/20'
            }`}
          >
            {React.createElement(tab.icon, { className: "w-3 h-3 mr-1" })}
            {tab.label}
          </button>
        ))}
      </div>

      {/* QR Code với hiệu ứng mượt mà */}
      <div className={`mt-4 space-y-4 transition-all duration-500 ease-in-out transform ${
        showQR 
          ? 'opacity-100 max-h-[1000px] translate-y-0 scale-100' 
          : 'opacity-0 max-h-0 overflow-hidden translate-y-4 scale-95'
      }`} style={{
        transitionDelay: showQR ? '0ms' : '0ms',
        transitionProperty: 'all'
      }}>
        {/* QR Code Thanh toán */}
        <div className={`bg-purple-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-purple-500/30 shadow-lg transition-all duration-300 ${
          showQR ? 'animate-fadeInUp' : ''
        }`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-yellow-300" />
              {t.paymentQRTitle}
            </h4>
          </div>
          <p className="text-purple-100 text-sm mb-3">{t.paymentQRDescription}</p>
          <div className="inline-block p-3 bg-white rounded-lg shadow-lg">
            <img 
              src={qrCodes.payment.image} 
              alt="QR Code Thanh toán ACB" 
              className="w-24 h-24"
            />
          </div>
          <div className="mt-3 text-white text-sm bg-purple-700/50 p-3 rounded-lg">
            <p className="font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t.bank}: {qrCodes.payment.bankInfo.bank}
            </p>
            <p className="font-medium flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              {t.account}: {qrCodes.payment.bankInfo.account}
            </p>
            <p className="font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              {t.accountHolder}: {qrCodes.payment.bankInfo.holder}
            </p>
          </div>
        </div>

        {/* QR Code Thông tin */}
        <div className={`bg-pink-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-pink-500/30 shadow-lg transition-all duration-300 delay-100 ${
          showQR ? 'animate-fadeInUp' : ''
        }`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <Info className="w-5 h-5 text-yellow-300" />
              {t.infoQRTitle}
            </h4>
          </div>
          <p className="text-pink-100 text-sm mb-3">{t.infoQRDescription}</p>
          <div className="inline-block p-3 bg-white rounded-lg shadow-lg">
            <QRCodeCanvas value={qrCodes.info.value} size={96} level="H" />
          </div>
          <div className="mt-3 text-white text-sm bg-pink-700/50 p-3 rounded-lg">
            <p className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              {t.scanToSave}
            </p>
            <p className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t.companyInfo}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {[
          { icon: Phone, label: t.phone, value: companyInfo.phone, color: 'bg-blue-500', type: 'phone' },
          { icon: Mail, label: t.email, value: companyInfo.email, color: 'bg-green-500', type: 'email' },
          { icon: Globe, label: t.website, value: companyInfo.website, color: 'bg-blue-600', type: 'website' },
          { icon: MapPin, label: 'Địa chỉ', value: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh', color: 'bg-orange-500', isAddress: true, type: 'address' }
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
            className="w-full bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all flex items-center gap-3 text-left"
          >
            <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs truncate">{item.value}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </button>
        ))}

        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((social) => (
            <button
              key={social.name}
              onClick={() => handleContact('social', social.url)}
              className={`${social.color} text-white py-3 px-3 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm`}
            >
              {social.icon && <social.icon className="w-4 h-4" />}
              {social.name}
            </button>
          ))}
        </div>
        
        {/* Language Switcher */}
        <div className="mt-6 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                          <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                  onChange={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                  onColor="#34D399"
                  offColor="#FFFFFF"
                  onHandleColor="#FFFFFF"
                  offHandleColor="#FFFFFF"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={24}
                  width={48}
                  className="react-switch"
                />
                <span className="text-white/80 text-sm font-medium">{t.english}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Nhóm 2: Tím, Hồng, Trắng (Modern Style)
  const renderModernStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center relative">

          
          <div className="relative w-16 h-16 mx-auto mb-4">
            {/* Vòng tròn animation online */}
            <div className="absolute inset-0 rounded-xl bg-pink-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-xl bg-pink-500 animate-pulse"></div>
            
            {/* Avatar chính với hiệu ứng zoom in/out nhẹ nhàng */}
            <div className="relative w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm overflow-hidden shadow-lg border border-white/30 animate-zoomInOut">
              <img 
                src="/LOGO MTS V1.png" 
                alt="Mộc Tái Sinh Logo" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </div>
          
          {/* Tên công ty với dấu tích xanh */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-xl font-bold">{companyInfo.name}</h1>
            {/* Dấu tích xanh Facebook */}
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-purple-100 text-sm leading-relaxed">{companyInfo.description}</p>
          <div className="flex gap-3 mt-4 justify-center">
            <button onClick={handleSaveContact} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 px-4 rounded-lg transition-all flex items-center gap-2 text-sm">
              <Download className="w-4 h-4" />
              {t.saveContact}
            </button>
            <button 
              onClick={() => setShowQR(!showQR)} 
              className={`py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm transform hover:scale-105 ${
                showQR 
                  ? 'bg-pink-600 shadow-lg shadow-pink-500/30' 
                  : 'bg-pink-500 hover:bg-pink-600 shadow-md hover:shadow-lg'
              }`}
            >
              <QrCode className={`w-4 h-4 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
              {showQR ? 'Ẩn QR' : t.qrCode}
            </button>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="p-4 flex gap-1 justify-center mb-4">
          {[
            { key: 'company', label: t.company, icon: Building2 },
            { key: 'services', label: t.services, icon: Settings },
            { key: 'products', label: t.products, icon: Package },
            { key: 'gallery', label: t.gallery, icon: Image }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                activeTab === tab.key
                  ? 'bg-purple-600 text-white border border-white/40'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {React.createElement(tab.icon, { className: "w-3 h-3 mr-1" })}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-4">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{t.phone}</h3>
            {[
              { icon: Phone, label: t.phone, value: companyInfo.phone, type: 'phone' },
              { icon: Mail, label: t.email, value: companyInfo.email, type: 'email' },
              { icon: Globe, label: t.website, value: companyInfo.website, type: 'website' },
              { icon: MapPin, label: 'Địa chỉ', value: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh', isAddress: true, type: 'address' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-all flex items-center gap-3 text-left"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-600 text-xs truncate">{item.value}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{t.socialMedia}</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleContact('social', social.url)}
                  className={`${social.color} text-white py-3 px-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm`}
                >
                  {social.icon && <social.icon className="w-4 h-4" />}
                  {social.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{t.qrCode}</h3>
            
            {/* QR Code với hiệu ứng mượt mà */}
            <div className={`space-y-4 transition-all duration-500 ease-in-out transform ${
              showQR 
                ? 'opacity-100 max-h-[1000px] translate-y-0 scale-100' 
                : 'opacity-0 max-h-0 overflow-hidden translate-y-4 scale-95'
            }`} style={{
              transitionDelay: showQR ? '0ms' : '0ms',
              transitionProperty: 'all'
            }}>
              {/* QR Code Thanh toán */}
              <div className={`bg-purple-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-purple-500/30 shadow-lg transition-all duration-300 ${
                showQR ? 'animate-fadeInUp' : ''
              }`}>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h4 className="text-white font-bold text-lg flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-yellow-300" />
                    {t.paymentQRTitle}
                  </h4>
                </div>
                <p className="text-purple-100 text-sm mb-3">{t.paymentQRDescription}</p>
                <div className="inline-block p-3 bg-white rounded-lg shadow-lg">
                  <img 
                    src={qrCodes.payment.image} 
                    alt="QR Code Thanh toán ACB" 
                    className="w-24 h-24"
                  />
                </div>
                <div className="mt-3 text-white text-sm bg-purple-700/50 p-3 rounded-lg">
                  <p className="font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {t.bank}: {qrCodes.payment.bankInfo.bank}
                  </p>
                  <p className="font-medium flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    {t.account}: {qrCodes.payment.bankInfo.account}
                  </p>
                  <p className="font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {t.accountHolder}: {qrCodes.payment.bankInfo.holder}
                  </p>
                </div>
              </div>

              {/* QR Code Thông tin */}
              <div className={`bg-pink-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-pink-500/30 shadow-lg transition-all duration-300 delay-100 ${
                showQR ? 'animate-fadeInUp' : ''
              }`}>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h4 className="text-white font-bold text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-300" />
                    {t.infoQRTitle}
                  </h4>
                </div>
                <p className="text-pink-100 text-sm mb-3">{t.infoQRDescription}</p>
                <div className="inline-block p-3 bg-white rounded-lg shadow-lg">
                  <QRCodeCanvas value={qrCodes.info.value} size={96} level="H" />
                </div>
                <div className="mt-3 text-white text-sm bg-pink-700/50 p-3 rounded-lg">
                  <p className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    {t.scanToSave}
                  </p>
                  <p className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {t.companyInfo}
                  </p>
                </div>
              </div>
            </div>
            
            {!showQR && (
              <button
                onClick={() => setShowQR(true)}
                className="w-full bg-pink-100 hover:bg-pink-200 p-6 rounded-lg transition-all text-center transform hover:scale-105"
              >
                <QrCode className="w-10 h-10 mx-auto mb-2 text-pink-400" />
                <p className="text-pink-600 text-sm">{t.clickToShowQR}</p>
              </button>
            )}
          </div>
          
          {/* Language Switcher */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                  onChange={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                  onColor="#34D399"
                  offColor="#FFFFFF"
                  onHandleColor="#FFFFFF"
                  offHandleColor="#FFFFFF"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={24}
                  width={48}
                  className="react-switch"
                />
                <span className="text-white/80 text-sm font-medium">{t.english}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Nhóm 6: Xám, Đen, Trắng (Neumorphism Style)
  const renderNeumorphismStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
        <div className="min-h-screen bg-gray-100">
          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg mb-6 relative">

            
                                <div className="relative w-20 h-20 mx-auto mb-4">
            {/* Vòng tròn animation online */}
            <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse"></div>
            
            {/* Avatar chính với hiệu ứng zoom in/out nhẹ nhàng */}
            <div className="relative w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-gray-200 animate-zoomInOut">
              <img 
                src="/LOGO MTS V1.png" 
                alt="Mộc Tái Sinh Logo" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </div>
          
          {/* Tên công ty với dấu tích xanh */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
            {/* Dấu tích xanh Facebook */}
            <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
            <p className="text-gray-600 text-sm leading-relaxed">{companyInfo.description}</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 justify-center mb-6">
            {[
              { key: 'company', label: t.company, icon: Building2 },
              { key: 'services', label: t.services, icon: Settings },
              { key: 'products', label: t.products, icon: Package },
              { key: 'gallery', label: t.gallery, icon: Image }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-gray-200 text-gray-800 border border-gray-300 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                }`}
              >
                {React.createElement(tab.icon, { className: "w-3 h-3 mr-1" })}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button onClick={handleSaveContact} className="bg-gray-100 text-gray-700 py-3 px-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm">
              <Download className="w-4 h-4" />
              {t.saveContact}
            </button>
            <button 
              onClick={() => setShowQR(!showQR)} 
              className={`bg-gray-100 text-gray-700 py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm ${
                showQR ? 'bg-gray-200 shadow-xl' : ''
              }`}
            >
              <QrCode className={`w-4 h-4 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
              {showQR ? 'Ẩn QR' : t.qrCode}
            </button>
          </div>


        {/* QR Code với hiệu ứng mượt mà */}
        <div className={`bg-gray-100 rounded-2xl p-4 text-center shadow-lg mb-6 transition-all duration-500 ease-in-out transform ${
          showQR 
            ? 'opacity-100 max-h-[1000px] translate-y-0 scale-100' 
            : 'opacity-0 max-h-0 overflow-hidden translate-y-4 scale-95'
        }`} style={{
          transitionDelay: showQR ? '0ms' : '0ms',
          transitionProperty: 'all'
        }}>
          <div className="inline-block p-3 bg-white rounded-xl shadow-md">
            
            <div className={`bg-gray-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-500/30 shadow-lg mb-3 transition-all duration-300 ${
              showQR ? 'animate-fadeInUp' : ''
            }`}>
              <h4 className="text-white font-medium mb-2">{t.paymentQRTitle}</h4>
              <p className="text-gray-100 text-sm mb-3">{t.paymentQRDescription}</p>
              <div className="inline-block p-2 bg-white rounded-lg">
                <img 
                  src={qrCodes.payment.image} 
                  alt="QR Code Thanh toán ACB" 
                  className="w-20 h-20"
                />
              </div>
              <div className="mt-2 text-white text-sm">
                <p>{t.bank}: {qrCodes.payment.bankInfo.bank}</p>
                <p>{t.account}: {qrCodes.payment.bankInfo.account}</p>
                <p>{t.accountHolder}: {qrCodes.payment.bankInfo.holder}</p>
              </div>
            </div>

            
            <div className={`bg-gray-600/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-500/30 shadow-lg transition-all duration-300 delay-100 ${
              showQR ? 'animate-fadeInUp' : ''
            }`}>
              <h4 className="text-white font-medium mb-2">{t.infoQRTitle}</h4>
              <p className="text-gray-100 text-sm mb-3">{t.infoQRDescription}</p>
              <div className="inline-block p-2 bg-white rounded-lg">
                <QRCodeCanvas value={qrCodes.info.value} size={80} level="H" />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-3 text-sm">{t.scanToSave}</p>
        </div>

          <div className="space-y-3 mb-6">
            {[
              { icon: Phone, label: t.phone, value: companyInfo.phone, color: 'from-gray-500 to-gray-600', type: 'phone' },
              { icon: Mail, label: t.email, value: companyInfo.email, color: 'from-gray-600 to-gray-700', type: 'email' },
              { icon: Globe, label: t.website, value: companyInfo.website, color: 'from-gray-700 to-gray-800', type: 'website' },
              { icon: MapPin, label: 'Địa chỉ', value: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh', color: 'from-orange-600 to-orange-700', isAddress: true, type: 'address' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
                className="w-full bg-gray-100 rounded-xl p-3 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 text-left group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-gray-600 text-xs truncate">{item.value}</p>
                </div>
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-gray-500" />
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleContact('social', social.url)}
                className={`${social.color} text-white py-3 px-3 rounded-xl font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm`}
              >
                {social.icon && <social.icon className="w-4 h-4" />}
                {social.name}
              </button>
            ))}
          </div>
          
          {/* Language Switcher */}
          <div className="mt-6 flex justify-center">
            <div className="bg-gray-50 rounded-2xl p-1 shadow-md border border-gray-200">
                          <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                  onChange={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                  onColor="#34D399"
                  offColor="#FFFFFF"
                  onHandleColor="#FFFFFF"
                  offHandleColor="#FFFFFF"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={24}
                  width={48}
                  className="react-switch"
                />
                <span className="text-gray-600 text-sm font-medium">{t.english}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Style 7: Dark Mode - Mobile Optimized
  const renderDarkModeStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="min-h-screen bg-black">
        {/* Header Dark */}
        <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800 mb-6 relative">

          
          <div className="relative w-20 h-20 mx-auto mb-4">
            {/* Vòng tròn animation online */}
            <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse"></div>
            
            {/* Avatar chính với hiệu ứng zoom in/out nhẹ nhàng */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden shadow-xl border-2 border-blue-400/50 animate-zoomInOut">
              <img 
                src="/LOGO MTS V1.png" 
                alt="Mộc Tái Sinh Logo" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </div>
          
          {/* Tên công ty với dấu tích xanh */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-white">{companyInfo.name}</h1>
            {/* Dấu tích xanh Facebook */}
            <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{companyInfo.description}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 justify-center mb-6">
          {[
            { key: 'company', label: t.company, icon: Building2 },
            { key: 'services', label: t.services, icon: Settings },
            { key: 'products', label: t.products, icon: Package },
            { key: 'gallery', label: t.gallery, icon: Image }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                activeTab === tab.key
                  ? 'bg-gray-700 text-white border border-gray-600 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {React.createElement(tab.icon, { className: "w-3 h-3 mr-1" })}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Action Buttons Dark */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button onClick={handleSaveContact} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            {t.saveContact}
          </button>
          <button 
            onClick={() => setShowQR(!showQR)} 
            className={`bg-gradient-to-r text-white py-3 px-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm ${
              showQR 
                ? 'from-purple-700 to-purple-800 shadow-xl shadow-purple-500/30' 
                : 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl'
            }`}
          >
            <QrCode className={`w-4 h-4 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
            {showQR ? 'Ẩn QR' : t.qrCode}
          </button>
        </div>


        {/* QR Code Dark với hiệu ứng mượt mà */}
        <div className={`bg-gray-900 rounded-2xl p-4 text-center border border-gray-800 mb-6 transition-all duration-500 ease-in-out transform ${
          showQR 
            ? 'opacity-100 max-h-[1000px] translate-y-0 scale-100' 
            : 'opacity-0 max-h-0 overflow-hidden translate-y-4 scale-95'
        }`} style={{
          transitionDelay: showQR ? '0ms' : '0ms',
          transitionProperty: 'all'
        }}>
          <div className="inline-block p-3 bg-white rounded-xl">
            
            <div className={`bg-gray-700/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-600/30 shadow-lg mb-3 transition-all duration-300 ${
              showQR ? 'animate-fadeInUp' : ''
            }`}>
              <h4 className="text-white font-medium mb-2">{t.paymentQRTitle}</h4>
              <p className="text-gray-200 text-sm mb-3">{t.paymentQRDescription}</p>
              <div className="inline-block p-2 bg-white rounded-lg">
                <img 
                  src={qrCodes.payment.image} 
                  alt="QR Code Thanh toán ACB" 
                  className="w-20 h-20"
                />
              </div>
              <div className="mt-2 text-white text-sm">
                <p>{t.bank}: {qrCodes.payment.bankInfo.bank}</p>
                <p>{t.account}: {qrCodes.payment.bankInfo.account}</p>
                <p>{t.accountHolder}: {qrCodes.payment.bankInfo.holder}</p>
              </div>
            </div>

            
            <div className={`bg-gray-700/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-600/30 shadow-lg transition-all duration-300 delay-100 ${
              showQR ? 'animate-fadeInUp' : ''
            }`}>
              <h4 className="text-white font-medium mb-2">{t.infoQRTitle}</h4>
              <p className="text-gray-200 text-sm mb-3">{t.infoQRDescription}</p>
              <div className="inline-block p-2 bg-white rounded-lg">
                <QRCodeCanvas value={qrCodes.info.value} size={80} level="H" />
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-3 text-sm">{t.scanToSave}</p>
        </div>

        {/* Contact Cards Dark */}
        <div className="space-y-3 mb-6">
          {[
            { icon: Phone, label: t.phone, value: companyInfo.phone, color: 'from-green-500 to-emerald-600', type: 'phone' },
            { icon: Mail, label: t.email, value: companyInfo.email, color: 'from-blue-500 to-blue-600', type: 'email' },
            { icon: Globe, label: t.website, value: companyInfo.website, color: 'from-purple-500 to-purple-600', type: 'website' },
            { icon: MapPin, label: 'Địa chỉ', value: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh', color: 'from-orange-500 to-orange-600', isAddress: true, type: 'address' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
              className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-3 transition-all transform hover:scale-105 flex items-center gap-3 text-left group"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs truncate">{item.value}</p>
              </div>
              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-gray-700 transition-all flex-shrink-0">
                <ChevronRight className="w-3 h-3 text-gray-400" />
              </div>
            </button>
          ))}
        </div>

        {/* Social Media Grid Dark */}
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((social) => (
            <button
              key={social.name}
              onClick={() => handleContact('social', social.url)}
              className={`${social.color} text-white py-3 px-3 rounded-xl font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm`}
            >
              {social.icon && <social.icon className="w-4 h-4" />}
              {social.name}
            </button>
          ))}
        </div>
        
        {/* Language Switcher */}
        <div className="mt-6 flex justify-center">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-700">
                          <div className="flex items-center gap-3">
                <span className="text-gray-300 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                  onChange={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                  onColor="#34D399"
                  offColor="#FFFFFF"
                  onHandleColor="#FFFFFF"
                  offHandleColor="#FFFFFF"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={24}
                  width={48}
                  className="react-switch"
                />
                <span className="text-gray-300 text-sm font-medium">{t.english}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Style 9: Minimalist - Thiết kế tối giản đẹp mắt
  const renderMinimalistStyle = () => (
    <div className="max-w-sm mx-auto p-4">
        <div className="min-h-screen bg-white">
          {/* Header Minimalist */}
          <div className="text-center mb-12 relative pt-6">

            
            <div className="relative w-20 h-20 mx-auto mb-6">
              {/* Vòng tròn animation online */}
              <div className="absolute inset-0 rounded-full bg-gray-400 animate-ping opacity-75"></div>
              <div className="absolute inset-0 rounded-full bg-gray-500 animate-pulse"></div>
              
              {/* Avatar chính với hiệu ứng zoom in/out nhẹ nhàng */}
              <div className="relative w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-md border-2 border-gray-200 animate-zoomInOut">
                <img 
                  src="/LOGO MTS V1.png" 
                  alt="Mộc Tái Sinh Logo" 
                  className="w-[120%] h-[120%] object-cover"
                />
              </div>
            </div>
            
            {/* Tên công ty với dấu tích xanh */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <h1 className="text-4xl font-light text-gray-900">{companyInfo.name}</h1>
              {/* Dấu tích xanh Facebook */}
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xs mx-auto">{companyInfo.description}</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 justify-center mb-8">
            {[
              { key: 'company', label: t.company, icon: Building2 },
              { key: 'services', label: t.services, icon: Settings },
              { key: 'products', label: t.products, icon: Package },
              { key: 'gallery', label: t.gallery, icon: Image }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`px-2 py-2 text-xs font-medium transition-all duration-300 border-2 flex-shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
                }`}
              >
                {React.createElement(tab.icon, { className: "w-3 h-3 mr-1" })}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Action Buttons Minimalist */}
          <div className="space-y-4 mb-8">
            <button onClick={handleSaveContact} className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-none font-medium transition-all duration-300 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              {t.saveContact}
            </button>
            <button 
              onClick={() => setShowQR(!showQR)} 
              className={`w-full border-2 py-4 px-6 rounded-none font-medium transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 ${
                showQR 
                  ? 'bg-black text-white border-black shadow-lg' 
                  : 'border-black hover:bg-black hover:text-white text-black'
              }`}
            >
              <QrCode className={`w-5 h-5 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
              {showQR ? 'Ẩn QR Code' : t.qrCode}
            </button>
          </div>


          {/* QR Code Minimalist với hiệu ứng mượt mà */}
          <div className={`text-center mb-12 transition-all duration-500 ease-in-out transform ${
            showQR 
              ? 'opacity-100 max-h-[1000px] translate-y-0 scale-100' 
              : 'opacity-0 max-h-0 overflow-hidden translate-y-4 scale-95'
          }`} style={{
            transitionDelay: showQR ? '0ms' : '0ms',
            transitionProperty: 'all'
          }}>
            <div className="inline-block p-6 border border-gray-200">
              
              <div className={`bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-600/30 shadow-lg mb-3 transition-all duration-300 ${
                showQR ? 'animate-fadeInUp' : ''
              }`}>
                <h4 className="text-white font-medium mb-2">{t.paymentQRTitle}</h4>
                <p className="text-gray-200 text-sm mb-3">{t.paymentQRDescription}</p>
                <div className="inline-block p-2 bg-white rounded-lg">
                  <img 
                    src={qrCodes.payment.image} 
                    alt="QR Code Thanh toán ACB" 
                    className="w-20 h-20"
                  />
                </div>
                <div className="mt-2 text-white text-sm">
                  <p>{t.bank}: {qrCodes.payment.bankInfo.bank}</p>
                  <p>{t.account}: {qrCodes.payment.bankInfo.account}</p>
                  <p>{t.accountHolder}: {qrCodes.payment.bankInfo.holder}</p>
                </div>
              </div>

              
              <div className={`bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-600/30 shadow-lg transition-all duration-300 delay-100 ${
                showQR ? 'animate-fadeInUp' : ''
              }`}>
                <h4 className="text-white font-medium mb-2">{t.infoQRTitle}</h4>
                <p className="text-gray-200 text-sm mb-3">{t.infoQRDescription}</p>
                <div className="inline-block p-2 bg-white rounded-lg">
                  <QRCodeCanvas value={qrCodes.info.value} size={80} level="H" />
                </div>
              </div>
            </div>
            <p className="text-gray-500 mt-4 text-sm">{t.scanToSave}</p>
          </div>

          {/* Contact Cards Minimalist */}
          <div className="space-y-6 mb-12">
            {[
              { icon: Phone, label: t.phone, value: companyInfo.phone, type: 'phone' },
              { icon: Mail, label: t.email, value: companyInfo.email, type: 'email' },
              { icon: Globe, label: t.website, value: companyInfo.website, type: 'website' },
              { icon: MapPin, label: 'Địa chỉ', value: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh', isAddress: true, type: 'address' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
                className="w-full text-left group hover:bg-gray-50 p-4 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-gray-200 transition-colors">
                    <item.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-lg">{item.label}</p>
                    <p className="text-gray-500">{item.value}</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-gray-200 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Social Media Minimalist */}
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleContact('social', social.url)}
                className={`w-full ${social.color} text-white py-4 px-6 rounded-none font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3`}
              >
                {social.icon && <social.icon className="w-5 h-5" />}
                {social.name}
              </button>
            ))}
          </div>
          
          {/* Language Switcher */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white border border-gray-200 rounded-none shadow-sm">
            <div className="flex">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 border-r border-gray-200 ${
                  language === 'vi'
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold">VI</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold">EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        {/* Style Selector */}
        <div className="max-w-sm mx-auto mb-4 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-6">
            <h3 className="text-center text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Chọn phong cách thiết kế</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3">
              {[
                { key: 'nature', name: 'Thiên Nhiên', icon: Leaf, description: 'Layout dọc, thiết kế tự nhiên' },
                { key: 'modern', name: 'Hiện Đại', icon: Zap, description: 'Layout ngang, thiết kế tối giản' },
                { key: 'neumorphism', name: 'Neumorphism', icon: Users, description: 'Thiết kế 3D đẹp mắt và tối ưu mobile' },
                { key: 'dark', name: 'Tối Giản', icon: Info, description: 'Thiết kế hiện đại tối giản' },
                { key: 'minimalist', name: 'Tối Giản', icon: ChevronRight, description: 'Thiết kế tối giản đẹp mắt và tối ưu mobile' }
              ].map((style) => (
                <button
                  key={style.key}
                  onClick={() => setSelectedStyle(style.key as StyleType)}
                  className={`p-2 sm:p-4 rounded-xl text-center transition-all border-2 ${
                    selectedStyle === style.key
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <style.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${
                    selectedStyle === style.key ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <p className={`font-bold text-xs sm:text-sm ${
                    selectedStyle === style.key ? 'text-blue-700' : 'text-blue-700'
                  }`}>
                    {style.name}
                  </p>
                  <p className={`text-xs mt-1 ${
                    selectedStyle === style.key ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {style.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Render selected style */}
        {selectedStyle === 'nature' && renderNatureStyle()}
        {selectedStyle === 'modern' && renderModernStyle()}
        {selectedStyle === 'neumorphism' && renderNeumorphismStyle()}
        {selectedStyle === 'dark' && renderDarkModeStyle()}
        {selectedStyle === 'minimalist' && renderMinimalistStyle()}

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-8 text-xs sm:text-sm text-gray-500">
          <p>© 2025 {companyInfo.name}. {t.allRightsReserved}.</p>
        </div>
      </div>

      {/* Web Modal */}
      {showWebModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{webTitle}</h3>
              <button
                onClick={() => setShowWebModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content - Web iframe */}
            <div className="flex-1 p-4">
              <iframe
                src={webUrl}
                className="w-full h-full rounded-lg border border-gray-200"
                title={webTitle}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Địa chỉ - Mộc Tái Sinh</h3>
              <button
                onClick={() => setShowMapModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content - Google Maps */}
            <div className="flex-1 p-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.20659784111257!2d106.64678798734094!3d10.743115989079273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e61555e2145%3A0x385480a194720647!2zNDQ5IMSQLiBHaWEgUGjDuiwgUGjGsOG7nW5nIDEsIFF14bqtbiA2LCBI4buTIENow60gTWluaCA3MDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1755000308334!5m2!1sen!2s" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
