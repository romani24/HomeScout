import { useState } from 'react'
import type { Property } from '../../property-search/model/properties'

export function usePropertyDetails() {
  const [selected, setSelected] = useState<Property | null>(null)
  const [visitRequested, setVisitRequested] = useState(false)
  const openProperty = (property: Property) => { setSelected(property); setVisitRequested(false) }
  const closeProperty = () => setSelected(null)
  return { selected, visitRequested, openProperty, closeProperty, setVisitRequested }
}

export type PropertyDetailsState = ReturnType<typeof usePropertyDetails>
