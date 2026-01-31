import React, { useState, useEffect } from 'react'
import { IconButton } from './index'
import heartIcon from '../../assets/icons/heart-icon.svg'
import heartIconFilled from '../../assets/icons/heart-icon-filled.svg'

const FAVORITES_STORAGE_KEY = 'trendagent_favorites_property'

function getStoredFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function setStoredFavorites(ids) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids))
  } catch {}
}

const PropertyCard = ({ id, image, title, price, location, tags = [] }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (id == null) return
    const ids = getStoredFavorites()
    setIsFavorite(ids.includes(String(id)))
  }, [id])

  const handleToggleFavorite = (e) => {
    e.stopPropagation()
    if (id == null) return
    const ids = getStoredFavorites()
    const key = String(id)
    const next = ids.includes(key) ? ids.filter((i) => i !== key) : [...ids, key]
    setStoredFavorites(next)
    setIsFavorite(next.includes(key))
  }

  return (
    <div className="relative bg-white rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-light/20">
      {/* Изображение */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Бейджи - ГОРИЗОНТАЛЬНО (требование п.3.2.2) */}
        {tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-row gap-2 z-10">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-rubik font-medium text-dark shadow-md whitespace-nowrap"
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Кнопка «Добавить в избранное» (требование п.3.4) */}
        <IconButton
          variant="ghost"
          size="md"
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 z-10 bg-transparent hover:bg-white/30 transition-colors"
          ariaLabel={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          icon={
            <img
              src={isFavorite ? heartIconFilled : heartIcon}
              alt=""
              className="w-5 h-5"
            />
          }
        />

        {/* Градиент снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Информация (требование п.3.5) */}
      <div className="p-4 space-y-2">
        {/* Заголовок */}
        <h3 className="text-dark text-[14px] font-rubik font-semibold leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Цена */}
        <p className="text-dark text-[18px] lg:text-[20px] font-rubik font-bold">
          {price}
        </p>

        {/* Локация */}
        <p className="text-gray-medium text-[12px] font-rubik font-normal flex items-center gap-1.5 truncate">
          <span className="inline-block w-1 h-1 bg-gray-medium rounded-full flex-shrink-0"></span>
          {location}
        </p>
      </div>
    </div>
  )
}

export default PropertyCard
