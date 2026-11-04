import { useMemo, useState } from 'react'
import { ArrowRight, Bath, BedDouble, Building2, CalendarDays, Check, ChevronDown, Heart, Home, Map, MapPin, Menu, Search, SlidersHorizontal, Sparkles, Square, X } from 'lucide-react'
import './App.css'

type Property = {
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

const properties: Property[] = [
  { id: 1, title: 'Sunlit Villa in Cascais', location: 'Cascais', area: 'Birre', price: 1280000, beds: 4, baths: 3, sqm: 286, type: 'House', tag: 'Featured', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88' },
  { id: 2, title: 'River View Loft', location: 'Lisbon', area: 'Santos', price: 685000, beds: 2, baths: 2, sqm: 118, type: 'Apartment', tag: 'New', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88' },
  { id: 3, title: 'Quiet Garden Residence', location: 'Lisbon', area: 'Avenidas Novas', price: 940000, beds: 3, baths: 2, sqm: 174, type: 'Apartment', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88' },
  { id: 4, title: 'Modern Atlantic Retreat', location: 'Ericeira', area: 'Ribamar', price: 795000, beds: 3, baths: 3, sqm: 221, type: 'House', tag: 'Sea view', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=88' },
  { id: 5, title: 'Design Duplex in Porto', location: 'Porto', area: 'Foz do Douro', price: 720000, beds: 3, baths: 2, sqm: 156, type: 'Apartment', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88' },
  { id: 6, title: 'Countryside Stone House', location: 'Sintra', area: 'Colares', price: 860000, beds: 4, baths: 3, sqm: 248, type: 'House', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88' },
]

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

function App() {
  const [mobileNav, setMobileNav] = useState(false)
  const [location, setLocation] = useState('All locations')
  const [type, setType] = useState('All types')
  const [beds, setBeds] = useState('Any beds')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<number[]>([2])
  const [selected, setSelected] = useState<Property | null>(null)
  const [mapView, setMapView] = useState(false)
  const [visitRequested, setVisitRequested] = useState(false)

  const filtered = useMemo(() => properties.filter((property) => {
    const locationMatch = location === 'All locations' || property.location === location
    const typeMatch = type === 'All types' || property.type === type
    const bedsMatch = beds === 'Any beds' || property.beds >= Number(beds.replace('+ beds', ''))
    const queryMatch = `${property.title} ${property.location} ${property.area}`.toLowerCase().includes(query.toLowerCase())
    return locationMatch && typeMatch && bedsMatch && queryMatch
  }), [location, type, beds, query])

  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <div className="page-shell">
      <div className="demo-line">Frontend demo · HomeScout</div>
      <header className="site-header">
        <a className="brand" href="#top"><span><Home size={19} /></span>NEST<span className="brand-dot">.</span></a>
        <nav className={mobileNav ? 'site-nav open' : 'site-nav'}>
          <a href="#properties" onClick={() => setMobileNav(false)}>Buy</a>
          <a href="#properties" onClick={() => setMobileNav(false)}>Rent</a>
          <a href="#neighbourhoods" onClick={() => setMobileNav(false)}>Neighbourhoods</a>
          <a href="#about" onClick={() => setMobileNav(false)}>About</a>
        </nav>
        <div className="header-actions"><button className="saved-button" onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}><Heart size={17} fill={favorites.length ? 'currentColor' : 'none'} /> Saved <span>{favorites.length}</span></button><button className="list-button">List a property</button><button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X /> : <Menu />}</button></div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Contemporary home interior" /></div>
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Carefully selected homes</span>
            <h1>Find a place<br />that feels like <em>you.</em></h1>
            <p>Distinctive homes, clear guidance and a calmer way to move. Explore handpicked properties across Portugal.</p>
            <div className="search-panel">
              <label><span>Where</span><select value={location} onChange={(event) => setLocation(event.target.value)}><option>All locations</option><option>Lisbon</option><option>Cascais</option><option>Sintra</option><option>Ericeira</option><option>Porto</option></select><ChevronDown size={15} /></label>
              <label><span>Property type</span><select value={type} onChange={(event) => setType(event.target.value)}><option>All types</option><option>House</option><option>Apartment</option></select><ChevronDown size={15} /></label>
              <label><span>Bedrooms</span><select value={beds} onChange={(event) => setBeds(event.target.value)}><option>Any beds</option><option>2+ beds</option><option>3+ beds</option><option>4+ beds</option></select><ChevronDown size={15} /></label>
              <button onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}><Search size={20} /> Search</button>
            </div>
          </div>
          <div className="hero-badge"><strong>126</strong><span>curated homes<br />available today</span></div>
        </section>

        <section className="proof-strip"><span>Featured in</span><b>AD</b><b>monocle</b><b>Wallpaper*</b><b>Kinfolk</b></section>

        <section className="properties-section" id="properties">
          <div className="properties-heading"><div><span className="eyebrow">Explore homes</span><h2>Places worth seeing.</h2></div><div className="view-actions"><label><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by area" /></label><button><SlidersHorizontal size={17} /> Filters</button><button className={mapView ? 'active' : ''} onClick={() => setMapView(!mapView)}><Map size={17} /> {mapView ? 'Grid' : 'Map'}</button></div></div>
          <div className={mapView ? 'results-layout map-open' : 'results-layout'}>
            <div className="property-grid">
              {filtered.map((property) => (
                <article className="property-card" key={property.id}>
                  <div className="property-image" onClick={() => { setSelected(property); setVisitRequested(false) }}><img src={property.image} alt={property.title} />{property.tag && <span>{property.tag}</span>}<button onClick={(event) => { event.stopPropagation(); toggleFavorite(property.id) }} aria-label="Save property"><Heart size={19} fill={favorites.includes(property.id) ? 'currentColor' : 'none'} /></button></div>
                  <div className="property-location"><MapPin size={14} /> {property.area}, {property.location}</div>
                  <div className="property-title"><h3>{property.title}</h3><strong>{currency.format(property.price)}</strong></div>
                  <div className="property-specs"><span><BedDouble size={16} /> {property.beds} beds</span><span><Bath size={16} /> {property.baths} baths</span><span><Square size={15} /> {property.sqm} m²</span></div>
                </article>
              ))}
              {filtered.length === 0 && <div className="no-results">No homes match those filters. Try widening your search.</div>}
            </div>
            {mapView && <div className="map-panel"><div className="map-grid" />{filtered.map((property, index) => <button key={property.id} className="map-pin" style={{ left: `${18 + (index * 17) % 68}%`, top: `${20 + (index * 23) % 58}%` }} onClick={() => setSelected(property)}>{currency.format(property.price / 1000)}k</button>)}<span className="map-label"><MapPin size={16} /> Interactive map preview</span></div>}
          </div>
        </section>

        <section className="neighbourhood-section" id="neighbourhoods">
          <div className="neighbourhood-copy"><span className="eyebrow">Neighbourhood guide</span><h2>Live where life feels right.</h2><p>From ocean mornings in Cascais to late dinners in Lisbon, explore the character of each neighbourhood before you book a viewing.</p><button>Explore all guides <ArrowRight size={18} /></button></div>
          <div className="place-stack"><article><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=85" alt="Lisbon" /><div><strong>Lisbon</strong><span>54 homes</span></div></article><article><img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=900&q=85" alt="Cascais coast" /><div><strong>Cascais</strong><span>31 homes</span></div></article></div>
        </section>

        <section className="advice-section" id="about"><Building2 size={34} /><div><span className="eyebrow">A better way to move</span><h2>Real advice from people who know the streets.</h2></div><p>One dedicated advisor from first viewing to final signature. Clear answers, local knowledge and no pressure.</p><button>Meet the team <ArrowRight size={18} /></button></section>
      </main>

      <footer><a className="brand" href="#top"><span><Home size={19} /></span>NEST<span className="brand-dot">.</span></a><p>Distinctive homes across Portugal.</p><small>© 2026 · HomeScout frontend demo</small></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><article className="property-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}><X /></button><div className="modal-image"><img src={selected.image} alt={selected.title} /><span>{selected.type}</span></div><div className="modal-content">{visitRequested ? <div className="visit-success"><span><Check size={30} /></span><h2>Viewing request sent.</h2><p>This is a frontend demo. No real appointment was created.</p><button onClick={() => setVisitRequested(false)}>Back to the property</button></div> : <><span className="property-location"><MapPin size={14} /> {selected.area}, {selected.location}</span><h2>{selected.title}</h2><div className="modal-price">{currency.format(selected.price)}</div><div className="property-specs"><span><BedDouble size={16} /> {selected.beds} beds</span><span><Bath size={16} /> {selected.baths} baths</span><span><Square size={15} /> {selected.sqm} m²</span></div><p>A light-filled home with considered finishes, generous proportions and a quiet connection to its surroundings.</p><div className="mortgage-card"><span>Estimated monthly payment</span><strong>{currency.format(Math.round(selected.price * 0.0037))}<small>/month</small></strong><small>Illustrative estimate based on a 30-year term.</small></div><button className="viewing-button" onClick={() => setVisitRequested(true)}><CalendarDays size={18} /> Request a viewing</button></>}</div></article></div>}
    </div>
  )
}

export default App
