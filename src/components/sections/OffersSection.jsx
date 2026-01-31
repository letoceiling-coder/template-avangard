import React from 'react'
import { Button } from '../ui'
import PropertyCard from '../ui/PropertyCard'
import bannerImage from '../../assets/images/banner-catalog.png'

// Import property card images
import propertyCard1 from '../../assets/images/property-card-1.svg'
import propertyCard2 from '../../assets/images/property-card-2.svg'
import propertyCard3 from '../../assets/images/property-card-3.svg'
import propertyCard4 from '../../assets/images/property-card-4.svg'
import propertyCard5 from '../../assets/images/property-card-5.svg'
import propertyCard6 from '../../assets/images/property-card-6.svg'

const OffersSection = () => {
  const properties = [
    {
      image: propertyCard1,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    },
    {
      image: propertyCard2,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    },
    {
      image: propertyCard3,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    },
    {
      image: propertyCard4,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    },
    {
      image: propertyCard5,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    },
    {
      image: propertyCard6,
      title: 'Дом 125 м.кв. 3 комнаты',
      price: '15 600 000',
      location: 'Москва, Кантемировская',
      tags: ['Распродажа', 'Ипотека 6%']
    }
  ]

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Заголовок (требование п.2.1) */}
        <h2 className="text-dark text-[28px] lg:text-[36px] font-rubik font-semibold mb-6 lg:mb-8">
          Новые объявления
        </h2>

        {/* Контейнер с карточками и баннером (требование п.1.1, п.1.2) */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Левая часть: 6 карточек в 3 колонки */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                image={property.image}
                title={property.title}
                price={property.price}
                location={property.location}
                tags={property.tags}
              />
            ))}
          </div>

          {/* Правая часть: Промо-карта (требование п.4) */}
          <div className="lg:w-[360px] flex-shrink-0">
            <div className="relative bg-primary rounded-[16px] overflow-hidden shadow-xl h-full">
              <div className="h-full flex flex-col justify-between p-6 lg:p-7">
                {/* Текст и кнопка */}
                <div className="space-y-5">
                  <h3 className="text-white text-[32px] lg:text-[40px] font-rubik font-bold leading-tight">
                    100 000 +<br />объектов
                  </h3>
                  <p className="text-white text-[14px] font-rubik font-normal leading-relaxed opacity-90">
                    Еще больше объектов<br />
                    недвижимости в нашем каталоге
                  </p>
                  <Button 
                    variant="secondary" 
                    size="md"
                    className="bg-white text-dark hover:bg-gray-50 hover:scale-[1.02] border-white shadow-lg"
                  >
                    Перейти в каталог
                  </Button>
                </div>

                {/* Изображение внизу (требование п.4.2.4) */}
                <div className="hidden lg:block mt-4">
                  <img
                    src={bannerImage}
                    alt="Каталог недвижимости"
                    className="w-full h-[140px] object-cover object-bottom rounded-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersSection
