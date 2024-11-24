import React from 'react'
import HeroCard from '../heroCard/HeroCard'
import { IHero } from '../../lessons/lesson05/data'
import './heroGallery.css'

// Типизация пропсов
interface HeroGalleryProps {
    data: IHero[]
}

// Использование типа пропс в круглых скобках
export default function HeroGallery({data}:HeroGalleryProps) {
  return (
    <section className="grid-container">
        {data.map((hero) => (
            // Вызов компонента и передача данных через пропс
          <HeroCard
            key={hero.id}
            isDark={hero.isDark}
            name={hero.name}
            image={hero.image}
            age={hero.age}
            weapons={hero.weapons}
          />
        ))}
      </section>
  )
}