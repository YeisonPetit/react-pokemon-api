import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function Header() {
  // Estado para controlar si el menú está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <header className="bg-red-500 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        <Icon 
          icon="simple-icons:pokemon" 
          className="w-8 h-8 text-yellow-300" 
        />
        <h1 className="text-2xl font-bold">PokéDex</h1>
      </div>
      
      {/* Iconos de navegación */}
      <div className="flex gap-4">
        <button className="p-2 hover:bg-red-600 rounded-lg transition-colors">
        <Icon icon="mdi:magnify" className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-red-600 rounded-lg transition-colors">
          <Icon icon="mdi:heart" className="w-6 h-6" />
        </button>
        <button onClick={toggleMenu} className="p-2 md:hidden hover:bg-red-600 rounded-lg transition-colors">
          <Icon icon="mdi:menu" className="w-6 h-6" />
        </button>
      </div>
      {/* Responsive */}
      {isMenuOpen && (
        <div className="fixed w-30 h-full bg-red-500 top-20 right-0 transition-transform duration-300"></div>
      )}
    </header>
  )
}