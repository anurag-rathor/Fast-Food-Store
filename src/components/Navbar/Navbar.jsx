import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import styles from './Navbar.module.css'

export default function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const { cartCount } = useCart()
  const close = () => setOpen(false)
  return <header className={styles.header} data-theme={darkMode ? 'dark' : 'light'}>
    <Link to="/" className={styles.logo} onClick={close}><span>US</span><div><strong>Urban Spice</strong><small>Good Food. Great Moments.</small></div></Link>
    <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
      <button className={styles.mobileClose} onClick={close} aria-label="Close menu"><X size={22} /></button>
      {['Home', 'Menu', 'About', 'Contact'].map((label) => <NavLink key={label} to={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className={({ isActive }) => isActive ? styles.active : ''} onClick={close}>{label}</NavLink>)}
      <Link to="/menu" className={styles.mobileOrder} onClick={close}>Order now</Link>
    </nav>
    <div className={styles.actions}><Link to="/menu" className={styles.search} aria-label="Search menu"><Search size={19} /></Link><button className={styles.themeButton} onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>{darkMode ? <Sun size={18}/> : <Moon size={18}/>}</button><Link to="/cart" className={styles.cart} aria-label={`Cart with ${cartCount} items`}><ShoppingBag size={20} /><b>{cartCount}</b></Link><Link to="/login" className={styles.login}>Login</Link><button className={styles.menuButton} onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={23} /></button></div>
  </header>
}