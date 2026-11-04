import { useState } from 'react'
import { Heart, Home, Menu, X } from 'lucide-react'

export function SiteHeader({ savedCount }: { savedCount: number }) {
  const [mobileNav, setMobileNav] = useState(false)
  return <header className="site-header"><a className="brand" href="#top"><span><Home size={19} /></span>NEST<span className="brand-dot">.</span></a><nav className={mobileNav ? 'site-nav open' : 'site-nav'}><a href="#properties" onClick={() => setMobileNav(false)}>Buy</a><a href="#properties" onClick={() => setMobileNav(false)}>Rent</a><a href="#neighbourhoods" onClick={() => setMobileNav(false)}>Neighbourhoods</a><a href="#about" onClick={() => setMobileNav(false)}>About</a></nav><div className="header-actions"><button className="saved-button" onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}><Heart size={17} fill={savedCount ? 'currentColor' : 'none'} /> Saved <span>{savedCount}</span></button><button className="list-button">List a property</button><button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X /> : <Menu />}</button></div></header>
}
