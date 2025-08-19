import React from "react";
import { useState, useEffect } from "react";
import PokemonsCart from "./components/PokemonsCart";

function App() {
  const [pokemonData, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchAllPokemon = async () => {
    try {
      setLoading(true)
      
      // Crear todas las promesas a la vez (más rápido)
      const promises = []
      for (let i = 1; i <= 20; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
        )
      }
      
      // Esperar todas las respuestas
      const results = await Promise.all(promises)
      
      // Actualizar estado una sola vez (sin duplicados)
      setPokemon(results.sort((a, b) => a.id - b.id))
      
    } catch (error) {
      console.error("Error al cargar Pokémon:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500"></div>
        <p className="mt-4 text-xl">Cargando Pokémon...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to my PokéDex</h1>
        <p className="text-gray-600 mt-2">{pokemonData.length} Pokémon encontrados</p>
      </div>
      
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 sm:gap-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {pokemonData.map((pokemon) => (
            <PokemonsCart key={pokemon.id} pokemonData={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;