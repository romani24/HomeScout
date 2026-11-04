import { ArrowRight, Building2, ChevronDown, Search, Sparkles } from 'lucide-react'
import { PropertyModal } from '../features/property-details/components/PropertyModal'
import { usePropertyDetails } from '../features/property-details/hooks/usePropertyDetails'
import { PropertiesSection } from '../features/property-search/components/PropertiesSection'
import { usePropertySearch } from '../features/property-search/hooks/usePropertySearch'
import { useFavorites } from '../features/saved-properties/hooks/useFavorites'
import { SiteFooter } from '../shared/components/SiteFooter'
import { SiteHeader } from '../shared/components/SiteHeader'
import './styles.css'

export default function App() {
  const search = usePropertySearch()
  const favorites = useFavorites()
  const details = usePropertyDetails()
  const scrollToProperties = () => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })

  return <div className="page-shell"><div className="demo-line">Frontend demo · HomeScout</div><SiteHeader savedCount={favorites.favorites.length} /><main id="top">
    <section className="hero-section"><div className="hero-photo"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Contemporary home interior" /></div><div className="hero-copy"><span className="eyebrow"><Sparkles size={15} /> Carefully selected homes</span><h1>Find a place<br />that feels like <em>you.</em></h1><p>Distinctive homes, clear guidance and a calmer way to move. Explore handpicked properties across Portugal.</p><div className="search-panel"><label><span>Where</span><select value={search.location} onChange={(event) => search.setLocation(event.target.value)}><option>All locations</option><option>Lisbon</option><option>Cascais</option><option>Sintra</option><option>Ericeira</option><option>Porto</option></select><ChevronDown size={15} /></label><label><span>Property type</span><select value={search.type} onChange={(event) => search.setType(event.target.value)}><option>All types</option><option>House</option><option>Apartment</option></select><ChevronDown size={15} /></label><label><span>Bedrooms</span><select value={search.beds} onChange={(event) => search.setBeds(event.target.value)}><option>Any beds</option><option>2+ beds</option><option>3+ beds</option><option>4+ beds</option></select><ChevronDown size={15} /></label><button onClick={scrollToProperties}><Search size={20} /> Search</button></div></div><div className="hero-badge"><strong>126</strong><span>curated homes<br />available today</span></div></section>
    <section className="proof-strip"><span>Featured in</span><b>AD</b><b>monocle</b><b>Wallpaper*</b><b>Kinfolk</b></section>
    <PropertiesSection search={search} favorites={favorites} details={details} />
    <section className="neighbourhood-section" id="neighbourhoods"><div className="neighbourhood-copy"><span className="eyebrow">Neighbourhood guide</span><h2>Live where life feels right.</h2><p>From ocean mornings in Cascais to late dinners in Lisbon, explore the character of each neighbourhood before you book a viewing.</p><button>Explore all guides <ArrowRight size={18} /></button></div><div className="place-stack"><article><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=85" alt="Lisbon" /><div><strong>Lisbon</strong><span>54 homes</span></div></article><article><img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=900&q=85" alt="Cascais coast" /><div><strong>Cascais</strong><span>31 homes</span></div></article></div></section>
    <section className="advice-section" id="about"><Building2 size={34} /><div><span className="eyebrow">A better way to move</span><h2>Real advice from people who know the streets.</h2></div><p>One dedicated advisor from first viewing to final signature. Clear answers, local knowledge and no pressure.</p><button>Meet the team <ArrowRight size={18} /></button></section>
  </main><SiteFooter /><PropertyModal details={details} /></div>
}
