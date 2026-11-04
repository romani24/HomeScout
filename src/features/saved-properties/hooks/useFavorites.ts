import { useState } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([2])
  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  return { favorites, toggleFavorite }
}

export type FavoritesState = ReturnType<typeof useFavorites>
