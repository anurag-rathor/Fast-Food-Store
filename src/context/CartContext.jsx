import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('urban-spice-cart') || '[]'))
  const [notice, setNotice] = useState('')

  useEffect(() => localStorage.setItem('urban-spice-cart', JSON.stringify(cartItems)), [cartItems])

  const addToCart = (food, quantity = 1) => {
    setNotice(`${food.name} added to your bag`)
    window.setTimeout(() => setNotice(''), 2400)
    setCartItems((items) => {
    const existing = items.find((item) => item.id === food.id)
    if (existing) return items.map((item) => item.id === food.id ? { ...item, quantity: item.quantity + quantity } : item)
    return [...items, { ...food, quantity }]
    })
  }
  const increaseQuantity = (id) => setCartItems((items) => items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  const decreaseQuantity = (id) => setCartItems((items) => items.flatMap((item) => item.id === id ? (item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []) : [item]))
  const removeFromCart = (id) => setCartItems((items) => items.filter((item) => item.id !== id))
  const clearCart = () => setCartItems([])
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const value = useMemo(() => ({ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, subtotal, cartCount, notice }), [cartItems, subtotal, cartCount, notice])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// The shared hook is intentionally exported beside its provider for this small app.
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)