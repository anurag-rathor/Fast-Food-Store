import { Link } from 'react-router-dom'
import { Plus, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import styles from './FoodCard.module.css'

export default function FoodCard({ food }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart()
  const quantity = cartItems.find((item) => item.id === food.id)?.quantity || 0
  return <article className={styles.card}><Link to={`/food/${food.id}`} className={styles.imageWrap}><img src={food.image} alt={food.name} />{food.popular && <span className={styles.tag}>Popular</span>}<span className={`${styles.dot} ${food.isVeg ? styles.veg : ''}`} aria-label={food.isVeg ? 'Vegetarian' : 'Non-vegetarian'} /></Link><div className={styles.body}><div className={styles.meta}><span>{food.category}</span><span className={styles.rating}><Star size={13} fill="currentColor" /> {food.rating}</span></div><Link to={`/food/${food.id}`}><h3>{food.name}</h3></Link><p>{food.description}</p><div className={styles.bottom}><strong>₹{food.price}</strong>{quantity ? <div className={styles.quantity}><button onClick={() => decreaseQuantity(food.id)}>-</button><b>{quantity}</b><button onClick={() => increaseQuantity(food.id)}>+</button></div> : <button className={styles.add} onClick={() => addToCart(food)}><Plus size={16} /> Add</button>}</div></div></article>
}