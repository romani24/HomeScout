import { useMemo, useState } from 'react'
import { properties } from '../model/properties'

export function usePropertySearch() {
  const [location, setLocation] = useState('All locations')
  const [type, setType] = useState('All types')
  const [beds, setBeds] = useState('Any beds')
  const [query, setQuery] = useState('')
  const [mapView, setMapView] = useState(false)
  const filtered = useMemo(() => properties.filter((property) => {
    const locationMatch = location === 'All locations' || property.location === location
    const typeMatch = type === 'All types' || property.type === type
    const bedsMatch = beds === 'Any beds' || property.beds >= Number(beds.replace('+ beds', ''))
    const queryMatch = `${property.title} ${property.location} ${property.area}`.toLowerCase().includes(query.toLowerCase())
    return locationMatch && typeMatch && bedsMatch && queryMatch
  }), [location, type, beds, query])
  return { location, type, beds, query, mapView, filtered, setLocation, setType, setBeds, setQuery, setMapView }
}

export type PropertySearchState = ReturnType<typeof usePropertySearch>
