import React from 'react'

/**
 * Badge Component
 * Универсальный компонент бейджа для маркировки объектов
 * 
 * @param {string} children - Текст бейджа
 * @param {string} variant - Вариант стиля: 'default' | 'primary' | 'success' | 'warning' | 'danger'
 * @param {string} className - Дополнительные CSS классы
 */
const Badge = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-rubik font-medium shadow-md whitespace-nowrap transition-all duration-200'
  
  const variantStyles = {
    default: 'bg-white/95 backdrop-blur-sm text-dark',
    primary: 'bg-primary/95 backdrop-blur-sm text-white',
    success: 'bg-green-500/95 backdrop-blur-sm text-white',
    warning: 'bg-orange-500/95 backdrop-blur-sm text-white',
    danger: 'bg-red-500/95 backdrop-blur-sm text-white'
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
