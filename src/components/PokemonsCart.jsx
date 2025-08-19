import React from 'react'

export default function PokemonsCart({ pokemonData }) {
  if (!pokemonData) {
    return <h1>Cargando pokémon...</h1>
  }

  return (
    <div className='w-80 h-96 bg-white shadow-xl flex flex-col rounded-3xl overflow-hidden'>
      {/* Imagen */}
      <div className='h-2/3 bg-gray-100'>
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemonData.name}
          className='object-contain w-full h-full'
        />
      </div>
      
      {/* Información */}
      <div className='flex-1 p-4 space-y-2'>
        <h1 className='text-xl font-bold capitalize text-gray-800'>
          {pokemonData.name}
        </h1>
        <span className='text-gray-600'>
          ID: #{pokemonData.id.toString().padStart(3, '0')}
        </span>
        
        {/* Tipos */}
        <div className='flex gap-2 mt-2'>
          {pokemonData.types.map((type, index) => (
            <span 
              key={index}
              className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm'
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}