'use client';

import dynamic from 'next/dynamic';


const Switch = dynamic(() => import('react-switch'), {
  ssr: false,
  loading: () => (
    <div className="w-12 h-6 bg-gray-300 rounded-full animate-pulse" />
  )
});

interface LanguageSwitchProps {
  language: 'vi' | 'en';
  onChange: (lang: 'vi' | 'en') => void;
  labels: {
    vietnamese: string;
    english: string;
  };
  theme?: 'light' | 'dark' | 'colored';
}

export default function LanguageSwitch({ language, onChange, labels, theme = 'colored' }: LanguageSwitchProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'light':
        return {
          onColor: "#34D399",
          offColor: "#E5E7EB",
          onHandleColor: "#FFFFFF",
          offHandleColor: "#6B7280"
        };
      case 'dark':
        return {
          onColor: "#34D399",
          offColor: "#374151",
          onHandleColor: "#FFFFFF",
          offHandleColor: "#9CA3AF"
        };
      default: // colored
        return {
          onColor: "#34D399",
          offColor: "#FFFFFF",
          onHandleColor: "#FFFFFF",
          offHandleColor: "#374151"
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="flex items-center gap-3">
      <span className="text-current text-sm font-medium opacity-80">{labels.vietnamese}</span>
      <Switch
        checked={language === 'en'}
        onChange={() => onChange(language === 'vi' ? 'en' : 'vi')}
        onColor={colors.onColor}
        offColor={colors.offColor}
        onHandleColor={colors.onHandleColor}
        offHandleColor={colors.offHandleColor}
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={24}
        width={48}
        className="react-switch"
      />
      <span className="text-current text-sm font-medium opacity-80">{labels.english}</span>
    </div>
  );
}
