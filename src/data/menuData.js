const images = {
  pizza: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  paneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85',
  noodles: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85',
  pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  wings: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85',
  dessert: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
}

const item = (id, name, category, price, image, description, isVeg, rating = 4.8, popular = false) => ({ id, name, category, price, image, description, isVeg, rating, popular })

export const menuItems = [
  item('margherita', 'Margherita Pizza', 'Pizza', 299, images.pizza, 'San Marzano tomato, fresh mozzarella, basil oil', true, 4.9, true),
  item('farmhouse', 'Farmhouse Pizza', 'Pizza', 399, images.pizza, 'Roasted peppers, onion, corn, mushrooms and olives', true, 4.7),
  item('bbq-chicken', 'Chicken BBQ Pizza', 'Pizza', 449, images.pizza, 'Smoked chicken, caramelised onion and barbecue glaze', false, 4.8, true),
  item('classic-veg', 'Classic Veg Burger', 'Burgers', 249, images.burger, 'Crisp potato patty, lettuce, pickles and house sauce', true, 4.7),
  item('crispy-chicken', 'Crispy Chicken Burger', 'Burgers', 329, images.burger, 'Buttermilk fried chicken, slaw and pepper mayo', false, 4.9, true),
  item('paneer-tikka', 'Paneer Tikka Pizza', 'Pizza', 429, images.paneer, 'Tandoori paneer, peppers, onion and mint chutney', true, 4.8, true),
  item('butter-paneer', 'Paneer Butter Masala', 'Indian', 319, images.paneer, 'Cottage cheese in a silky tomato and cashew gravy', true, 4.8, true),
  item('butter-chicken', 'Butter Chicken', 'Indian', 389, images.paneer, 'Charred chicken in a gently spiced makhani sauce', false, 4.9, true),
  item('biryani', 'Hyderabadi Biryani', 'Indian', 379, images.paneer, 'Aromatic basmati, saffron, herbs and slow-cooked chicken', false, 4.8),
  item('hakka-noodles', 'Veg Hakka Noodles', 'Chinese', 259, images.noodles, 'Wok-tossed noodles, crunchy vegetables and sesame', true, 4.6),
  item('chilli-chicken', 'Chilli Chicken', 'Chinese', 349, images.noodles, 'Crisp chicken, peppers and spring onion in chilli glaze', false, 4.8),
  item('white-pasta', 'White Sauce Pasta', 'Pasta', 299, images.pasta, 'Creamy parmesan sauce, herbs and roasted vegetables', true, 4.7),
  item('alfredo', 'Chicken Alfredo', 'Pasta', 389, images.pasta, 'Grilled chicken, fettuccine and parmesan cream', false, 4.8, true),
  item('peri-fries', 'Peri Peri Fries', 'Snacks', 179, images.wings, 'Golden fries tossed in our signature peri peri spice', true, 4.7),
  item('wings', 'Smoky Chicken Wings', 'Snacks', 329, images.wings, 'Juicy wings, smoked paprika and cool ranch dip', false, 4.8, true),
  item('lava-cake', 'Chocolate Lava Cake', 'Desserts', 229, images.dessert, 'Warm dark chocolate cake with a molten centre', true, 4.9, true),
  item('cheesecake', 'New York Cheesecake', 'Desserts', 249, images.dessert, 'Silky baked cheesecake with berry compote', true, 4.7),
  item('cold-coffee', 'Cold Coffee', 'Beverages', 189, images.drink, 'Cold-brewed coffee, vanilla and a cloud of foam', true, 4.8),
]

export const categories = [
  { name: 'Pizza', icon: '◒', image: images.pizza }, { name: 'Burgers', icon: '●', image: images.burger },
  { name: 'Indian', icon: '✦', image: images.paneer }, { name: 'Chinese', icon: '⌁', image: images.noodles },
  { name: 'Pasta', icon: '∿', image: images.pasta }, { name: 'Desserts', icon: '✧', image: images.dessert },
  { name: 'Beverages', icon: '◉', image: images.drink },
]

export const getFood = (id) => menuItems.find((food) => food.id === id)