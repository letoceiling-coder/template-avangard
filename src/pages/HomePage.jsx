import React, { useEffect } from 'react'
import SearchSection from '../components/sections/SearchSection'
import OffersSection from '../components/sections/OffersSection'
import ResidentialComplexSection from '../components/sections/ResidentialComplexSection'
import QuizSection from '../components/sections/QuizSection'
import HotOffersSection from '../components/sections/HotOffersSection'
import LaunchSalesSection from '../components/sections/LaunchSalesSection'
import AboutPlatformSection from '../components/sections/AboutPlatformSection'
import AdditionalFeaturesSection from '../components/sections/AdditionalFeaturesSection'
import LatestNewsSection from '../components/sections/LatestNewsSection'
import ContactSection from '../components/sections/ContactSection'

const HomePage = () => {
  useEffect(() => {
    // 🔥 ТЕСТ ОБНОВЛЕНИЯ: Deploy 2026-01-31 18:31 - Hero-блок обновлен! 🔥
    console.log('%c✅ LiveGrid Deploy 2026-01-31 18:31', 'color: #3CA4F4; font-size: 16px; font-weight: bold;')
    console.log('%cОбновления:', 'color: #27AE60; font-weight: bold;')
    console.log('  ✓ Header: новая структура с иконкой избранного')
    console.log('  ✓ Геолокация: кликабельная с модальным окном')
    console.log('  ✓ Поиск: активный с Enter')
    console.log('  ✓ Бургер-меню: работает с анимацией')
    console.log('  ✓ Страница избранного: /favorites')
    console.log('%cПроверьте: откройте DevTools и посмотрите этот лог!', 'color: #F39C12; font-style: italic;')
  }, [])

  return (
    <>
      <SearchSection />
      <OffersSection />
      <ResidentialComplexSection />
      <QuizSection />
      <HotOffersSection />
      <LaunchSalesSection />
      <AboutPlatformSection />
      <AdditionalFeaturesSection />
      <LatestNewsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
