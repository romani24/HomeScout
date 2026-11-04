export type Property = {
  id: number
  title: string
  location: string
  area: string
  price: number
  beds: number
  baths: number
  sqm: number
  type: string
  tag?: string
  image: string
}

export const properties: Property[] = [
  { id: 1, title: 'Sunlit Villa in Cascais', location: 'Cascais', area: 'Birre', price: 1280000, beds: 4, baths: 3, sqm: 286, type: 'House', tag: 'Featured', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88' },
  { id: 2, title: 'River View Loft', location: 'Lisbon', area: 'Santos', price: 685000, beds: 2, baths: 2, sqm: 118, type: 'Apartment', tag: 'New', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88' },
  { id: 3, title: 'Quiet Garden Residence', location: 'Lisbon', area: 'Avenidas Novas', price: 940000, beds: 3, baths: 2, sqm: 174, type: 'Apartment', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88' },
  { id: 4, title: 'Modern Atlantic Retreat', location: 'Ericeira', area: 'Ribamar', price: 795000, beds: 3, baths: 3, sqm: 221, type: 'House', tag: 'Sea view', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=88' },
  { id: 5, title: 'Design Duplex in Porto', location: 'Porto', area: 'Foz do Douro', price: 720000, beds: 3, baths: 2, sqm: 156, type: 'Apartment', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88' },
  { id: 6, title: 'Countryside Stone House', location: 'Sintra', area: 'Colares', price: 860000, beds: 4, baths: 3, sqm: 248, type: 'House', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88' },
]

export const formatCurrency = (value: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
