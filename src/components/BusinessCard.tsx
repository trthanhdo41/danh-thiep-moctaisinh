'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  QrCode,
  Download,
  Leaf,
  CreditCard,
  Info,
  MapPin,
  Users,
  Zap,
  ChevronRight,
  Package,
  Building2,
  Smartphone,
  Settings,
  Camera
} from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

import TikTokIcon from './TikTokIcon';
import Switch from './Switch';

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
      companyName: 'Cúc Phương',
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
      address: 'Địa chỉ',
      addressValue: '449 Gia Phú, Phường 1, Quận 6, Hồ Chí Minh',
      
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
      tiktok: 'TikTok',
      socialMedia: 'Mạng xã hội',
      contactInfo: 'Thông tin liên hệ',
      connect: 'Kết nối',
      
      // Tabs
      main: 'Chính',
      services: 'Dịch vụ',
      products: 'Sản phẩm',
      company: 'Công ty',
      qrInfo: 'QR Info',
      payment: 'Thanh toán',
      gallery: 'Thư viện',
      
      // UI Elements
      chooseStyle: 'Chọn phong cách thiết kế',
      allRightsReserved: 'Tất cả quyền được bảo lưu',
      
      // Language Labels
      vietnamese: 'Tiếng Việt',
      english: 'English',
      
      // Modal Titles
      companyModalTitle: 'Về chúng tôi - Cúc Phương',
      servicesModalTitle: 'Dịch vụ - Cúc Phương',
      productsModalTitle: 'Sản phẩm - Cúc Phương',
      galleryModalTitle: 'Blog - Cúc Phương',
      addressModalTitle: 'Địa chỉ - Cúc Phương',
      companyInfo: 'Thông tin công ty, sản phẩm, dịch vụ'
    },
    en: {
      // Company Info
      companyName: 'Cuc Phuong',
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
      address: 'Address',
      addressValue: '449 Gia Phu, Ward 1, District 6, Ho Chi Minh City',
      
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
      tiktok: 'TikTok',
      socialMedia: 'Social Media',
      contactInfo: 'Contact Information',
      connect: 'Connect',
      
      // Tabs
      main: 'Main',
      services: 'Services',
      products: 'Products',
      company: 'Company',
      qrInfo: 'QR Info',
      payment: 'Payment',
      gallery: 'Gallery',
      
      // UI Elements
      chooseStyle: 'Choose Design Style',
      allRightsReserved: 'All rights reserved',
      
      // Language Labels
      vietnamese: 'Vietnamese',
      english: 'English',
      
      // Modal Titles
      companyModalTitle: 'About Us - Cuc Phuong',
      servicesModalTitle: 'Services - Cuc Phuong',
      productsModalTitle: 'Products - Cuc Phuong',
      galleryModalTitle: 'Blog - Cuc Phuong',
      addressModalTitle: 'Address - Cuc Phuong',
      companyInfo: 'Company, product and service information'
    }
  };

  const t = translations[language];

  const companyInfo = {
    name: t.companyName,
    phone: '0777666386',
    email: 'moctaisinh@gmail.com',
    website: 'moctaisinh.vn',
    address: t.addressValue,
    description: t.companyDescription,
  };

  const socialLinks = [
    { name: t.facebook, icon: Facebook, url: 'https://facebook.com/moctaisinh', color: 'bg-blue-600' },
    { name: t.zalo, icon: null, url: 'https://zalo.me/0777666386', color: 'bg-blue-500' },
    { name: t.instagram, icon: Instagram, url: 'https://instagram.com/moctaisinh', color: 'bg-pink-600' },
    { name: t.tiktok, icon: null, url: 'https://www.tiktok.com/@moctaisinh', color: 'bg-black' }
  ];

  const handleContact = (type: string, value: string) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'website':
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
        setWebTitle(t.servicesModalTitle);
        setShowWebModal(true);
        break;
      case 'products':
        setWebUrl('https://moctaisinh.vn/shop.html');
        setWebTitle(t.productsModalTitle);
        setShowWebModal(true);
        break;
      case 'company':
        setWebUrl('https://moctaisinh.vn/about.html');
        setWebTitle(t.companyModalTitle);
        setShowWebModal(true);
        break;
      case 'gallery':
        setWebUrl('https://moctaisinh.vn/blog.html');
        setWebTitle(t.galleryModalTitle);
        setShowWebModal(true);
        break;
      default:
        if (tab === 'main') {
          setActiveTab('main');
        }
    }
  };

  // Nature Style - Xanh dương gradient
  const renderNatureStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-gradient-to-b from-blue-600 to-green-600 rounded-2xl p-6 text-white text-center shadow-xl relative">
        
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
          
          <div className="relative w-20 h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-lg border-2 border-white/30 animate-zoomInOut">
            <Image 
              src="/LOGO MTS V1.png" 
              alt="Cúc Phương Logo" 
              width={96}
              height={96}
              className="w-[120%] h-[120%] object-cover"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">{companyInfo.name}</h1>
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
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

      {/* Tab Navigation */}
      <div className="mt-4 grid grid-cols-4 gap-1 max-w-sm mx-auto">
        {[
          { key: 'company', label: t.company, icon: Building2 },
          { key: 'services', label: t.services, icon: Settings },
          { key: 'products', label: t.products, icon: Package },
          { key: 'gallery', label: t.gallery, icon: Camera }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-1 shadow-md hover:shadow-lg ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white border border-white/40 shadow-lg shadow-blue-500/30'
                : 'bg-white/10 text-blue-800 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            {React.createElement(tab.icon, { className: "w-4 h-4" })}
            <span className="text-[10px]">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* QR Code Section */}
      {showQR && (
        <div className="mt-4 space-y-4 animate-slideDown">
        {/* Payment QR */}
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
            <Image 
              src="/qrThanhToan.jpg" 
              alt="QR Code Thanh toán ACB" 
              width={96}
              height={96}
              className="w-24 h-24"
            />
          </div>
          <div className="mt-3 text-white text-sm bg-purple-700/50 p-3 rounded-lg">
            <p className="font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t.bank}: ACB Bank
            </p>
            <p className="font-medium flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              {t.account}: 1234567890
            </p>
            <p className="font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              {t.accountHolder}: Đặng Thị Cúc Phương
            </p>
          </div>
        </div>

        {/* Info QR */}
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
            <QRCodeCanvas value="https://cucphuong.com/company-info" size={96} level="H" />
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
      )}

      {/* Contact Section */}
      <div className="mt-4 space-y-3">
        <h3 className="text-base font-semibold text-white mb-3">{t.contactInfo}</h3>
        {[
          { icon: Phone, label: t.phone, value: companyInfo.phone, color: 'bg-green-500', type: 'phone' },
          { icon: Mail, label: t.email, value: companyInfo.email, color: 'bg-blue-500', type: 'email' },
          { icon: Globe, label: t.website, value: companyInfo.website, color: 'bg-purple-600', type: 'website' },
          { icon: MapPin, label: t.address, value: t.addressValue, color: 'bg-green-600', isAddress: true, type: 'address' }
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

        {/* Social Media Section */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-white mb-3">{t.socialMedia}</h3>
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((social) => (
            <button
              key={social.name}
              onClick={() => handleContact('social', social.url)}
              className={`${social.color} text-white py-3 px-3 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm`}
            >
                {social.name === 'TikTok' ? <TikTokIcon className="w-4 h-4" /> : social.icon && <social.icon className="w-4 h-4" />}
              {social.name}
            </button>
          ))}
          </div>
        </div>
        
        {/* Language Switcher - Modern Style */}
        <div className="mt-6 flex justify-center">
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-3 border border-white/30 shadow-xl flex items-center gap-3">
            <span className="text-gray-800 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
              onChange={(checked) => setLanguage(checked ? 'en' : 'vi')}
            />
            <span className="text-gray-800 text-sm font-medium">{t.english}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Modern Style - Tím hồng gradient
  const renderModernStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center relative">
          
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-pink-500 animate-pulse"></div>
            
            <div className="relative w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden shadow-lg border border-white/30 animate-zoomInOut">
              <Image 
                src="/LOGO MTS V1.png" 
                alt="Cúc Phương Logo" 
                width={77}
                height={77}
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-xl font-bold">{companyInfo.name}</h1>
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
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
        <div className="p-4 grid grid-cols-4 gap-1 mb-4">
          {[
            { key: 'company', label: t.company, icon: Building2 },
            { key: 'services', label: t.services, icon: Settings },
            { key: 'products', label: t.products, icon: Package },
            { key: 'gallery', label: t.gallery, icon: Camera }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-1 shadow-md hover:shadow-lg ${
                activeTab === tab.key
                  ? 'bg-purple-600 text-white border border-white/40 shadow-lg shadow-purple-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {React.createElement(tab.icon, { className: "w-4 h-4" })}
              <span className="text-[10px]">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* QR Code Section */}
        {showQR && (
          <div className="p-4 space-y-4 animate-slideDown">
            {/* Payment QR */}
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
                  <Image 
                  src="/qrThanhToan.jpg" 
                    alt="QR Code Thanh toán ACB" 
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                </div>
                <div className="mt-3 text-white text-sm bg-purple-700/50 p-3 rounded-lg">
                  <p className="font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                  {t.bank}: ACB Bank
                  </p>
                  <p className="font-medium flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                  {t.account}: 1234567890
                  </p>
                  <p className="font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                  {t.accountHolder}: Đặng Thị Cúc Phương
                  </p>
                </div>
              </div>

            {/* Info QR */}
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
                <QRCodeCanvas value="https://cucphuong.com/company-info" size={96} level="H" />
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
        )}

        <div className="p-4 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{t.contactInfo}</h3>
            {[
              { icon: Phone, label: t.phone, value: companyInfo.phone, type: 'phone', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
              { icon: Mail, label: t.email, value: companyInfo.email, type: 'email', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
              { icon: Globe, label: t.website, value: companyInfo.website, type: 'website', bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
              { icon: MapPin, label: t.address, value: t.addressValue, isAddress: true, type: 'address', bgColor: 'bg-green-100', iconColor: 'text-green-700' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-3 rounded-lg transition-all flex items-center gap-3 text-left shadow-sm hover:shadow-md"
              >
                <div className={`w-8 h-8 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-600 text-xs truncate">{item.value}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{t.socialMedia}</h3>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleContact('social', social.url)}
                  className={`${social.color} text-white py-3 px-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg`}
              >
                  {social.name === 'TikTok' ? <TikTokIcon className="w-4 h-4" /> : social.icon && <social.icon className="w-4 h-4" />}
                {social.name}
              </button>
            ))}
            </div>
          </div>
          

          
          {/* Language Switcher - Modern Style */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-xl flex items-center gap-3">
                <span className="text-gray-600 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                onChange={(checked) => setLanguage(checked ? 'en' : 'vi')}
                />
                <span className="text-gray-600 text-sm font-medium">{t.english}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Neumorphism Style - 3D đầy đủ
  const renderNeumorphismStyle = () => (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="bg-gray-100 pb-8">
        {/* Header với hiệu ứng 3D */}
        <div 
          className="bg-gray-100 rounded-2xl p-6 text-center mb-6 relative"
          style={{
            boxShadow: '12px 12px 24px #d1d5db, -12px -12px 24px #ffffff',
          }}
        >
          
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gray-400 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gray-500 animate-pulse"></div>
            
            <div 
              className="relative w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden animate-zoomInOut"
              style={{
                boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff',
              }}
            >
              <Image 
                src="/LOGO MTS V1.png" 
                alt="Cúc Phương Logo" 
                width={96}
                height={96}
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
            <div 
              className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
              style={{
                boxShadow: '2px 2px 4px #d1d5db, -2px -2px 4px #ffffff',
              }}
            >
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-4">{companyInfo.description}</p>
        </div>

        {/* Tab Navigation 3D */}
        <div className="grid grid-cols-4 gap-1 mb-6">
          {[
            { key: 'company', label: t.company, icon: Building2 },
            { key: 'services', label: t.services, icon: Settings },
            { key: 'products', label: t.products, icon: Package },
            { key: 'gallery', label: t.gallery, icon: Camera }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-2 py-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center justify-center gap-1 ${
                activeTab === tab.key
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{
                boxShadow: activeTab === tab.key 
                  ? 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff'
                  : '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.boxShadow = 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.boxShadow = '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff';
                }
              }}
            >
              {React.createElement(tab.icon, { className: "w-4 h-4" })}
              <span className="text-[10px]">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Action Buttons 3D */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button 
            onClick={handleSaveContact} 
            className="bg-gray-100 text-gray-700 py-3 px-3 rounded-xl font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
            style={{
              boxShadow: '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff';
            }}
          >
            <Download className="w-4 h-4" />
            {t.saveContact}
          </button>
          <button 
            onClick={() => setShowQR(!showQR)} 
            className="bg-gray-100 text-gray-700 py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
            style={{
              boxShadow: showQR ? 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff' : '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
            }}
            onMouseEnter={(e) => {
              if (!showQR) {
                e.currentTarget.style.boxShadow = 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff';
              }
            }}
            onMouseLeave={(e) => {
              if (!showQR) {
                e.currentTarget.style.boxShadow = '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff';
              }
            }}
          >
            <QrCode className={`w-4 h-4 transition-transform duration-300 ${showQR ? 'rotate-12' : ''}`} />
            {showQR ? 'Ẩn QR' : t.qrCode}
          </button>
        </div>

        {/* QR Code 3D */}
        {showQR && (
          <div className="mb-6 space-y-4 animate-slideDown">
          {/* Payment QR 3D */}
          <div 
            className="bg-gray-100 rounded-2xl p-4 text-center"
            style={{
              boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff',
            }}
          >
            <h4 className="text-gray-800 font-bold text-lg mb-3">{t.paymentQRTitle}</h4>
            <p className="text-gray-600 text-sm mb-3">{t.paymentQRDescription}</p>
            <div 
              className="inline-block p-3 bg-white rounded-xl"
              style={{
                boxShadow: '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff',
              }}
            >
              <Image 
                src="/qrThanhToan.jpg" 
                  alt="QR Code Thanh toán ACB" 
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
            <div 
              className="mt-3 text-gray-600 text-sm bg-gray-100 p-3 rounded-lg"
              style={{
                boxShadow: 'inset 3px 3px 6px #d1d5db, inset -3px -3px 6px #ffffff',
              }}
            >
              <p className="font-medium flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {t.bank}: ACB Bank
              </p>
              <p className="font-medium flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                {t.account}: 1234567890
              </p>
              <p className="font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t.accountHolder}: Đặng Thị Cúc Phương
              </p>
              </div>
        </div>

          {/* Info QR 3D */}
          <div 
            className="bg-gray-100 rounded-2xl p-4 text-center"
            style={{
              boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff',
            }}
          >
            <h4 className="text-gray-800 font-bold text-lg mb-3">{t.infoQRTitle}</h4>
            <p className="text-gray-600 text-sm mb-3">{t.infoQRDescription}</p>
            <div 
              className="inline-block p-3 bg-white rounded-xl"
              style={{
                boxShadow: '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff',
              }}
            >
              <QRCodeCanvas value="https://moctaisinh.com/company-info" size={80} level="H" />
          </div>
            <div 
              className="mt-3 text-gray-600 text-sm bg-gray-100 p-3 rounded-lg"
              style={{
                boxShadow: 'inset 3px 3px 6px #d1d5db, inset -3px -3px 6px #ffffff',
              }}
            >
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
        )}

        {/* Contact Cards 3D */}
        <div className="space-y-3 mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">{t.contactInfo}</h3>
            {[
              { icon: Phone, label: t.phone, value: companyInfo.phone, type: 'phone' },
              { icon: Mail, label: t.email, value: companyInfo.email, type: 'email' },
              { icon: Globe, label: t.website, value: companyInfo.website, type: 'website' },
            { icon: MapPin, label: t.address, value: t.addressValue, isAddress: true, type: 'address' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => item.isAddress ? setShowMapModal(true) : handleContact(item.type || 'default', item.value)}
              className="w-full bg-gray-100 rounded-xl p-3 transition-all transform hover:scale-105 flex items-center gap-3 text-left group"
              style={{
                boxShadow: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff';
              }}
            >
              <div 
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  boxShadow: 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff',
                }}
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-600 text-xs truncate">{item.value}</p>
                  </div>
              <div 
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  boxShadow: 'inset 2px 2px 4px #d1d5db, inset -2px -2px 4px #ffffff',
                }}
              >
                <ChevronRight className="w-3 h-3 text-gray-500" />
                </div>
              </button>
            ))}
          </div>

        {/* Social Media 3D */}
          <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-800 mb-3">{t.socialMedia}</h3>
        <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleContact('social', social.url)}
                className="bg-gray-100 text-gray-700 py-3 px-3 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                style={{
                  boxShadow: '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff';
                }}
              >
                {social.name === 'TikTok' ? <TikTokIcon className="w-4 h-4" /> : social.icon && <social.icon className="w-4 h-4" />}
                {social.name}
              </button>
            ))}
          </div>
          </div>
          
        {/* Language Switcher 3D */}
          <div className="mt-6 flex justify-center">
          <div 
            className="bg-gray-100 rounded-2xl p-3"
            style={{
              boxShadow: 'inset 4px 4px 8px #d1d5db, inset -4px -4px 8px #ffffff',
            }}
          >
                          <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm font-medium">{t.vietnamese}</span>
                <Switch
                  checked={language === 'en'}
                onChange={(checked) => setLanguage(checked ? 'en' : 'vi')}
              />
              <span className="text-gray-600 text-sm font-medium">{t.english}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        {/* Style Selector */}
        <div className="max-w-sm mx-auto mb-4 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-6">
            <h3 className="text-center text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{t.chooseStyle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3">
              {[
                { key: 'nature', name: 'Thiên Nhiên', icon: Leaf, description: 'Layout dọc, thiết kế tự nhiên' },
                { key: 'modern', name: 'Hiện Đại', icon: Zap, description: 'Layout ngang, thiết kế tối giản' },
                { key: 'neumorphism', name: 'Neumorphism', icon: Users, description: 'Thiết kế 3D đẹp mắt' }
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

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-8 text-xs sm:text-sm text-gray-500">
          <p>© 2025 {companyInfo.name}. {t.allRightsReserved}.</p>
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{t.addressModalTitle}</h3>
              <button
                onClick={() => setShowMapModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
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

      {/* Web Modal */}
      {showWebModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
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
    </div>
  );
}
