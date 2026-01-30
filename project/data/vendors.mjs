export const categories = [
    { "id": "all", "name": "All", "emoji": "🍽️" },
    { "id": "rice", "name": "Rice Dishes", "emoji": "🍚" },
    { "id": "snacks", "name": "Snacks", "emoji": "🌯" },
    { "id": "swallow", "name": "Swallow", "emoji": "🥘" },
    { "id": "drinks", "name": "Drinks", "emoji": "🥤" },
    { "id": "breakfast", "name": "Breakfast", "emoji": "🥞" },
    { "id": "grills", "name": "Grills", "emoji": "🍗" },
    { "id": "pastries", "name": "Pastries", "emoji": "🥐" }
];

export const vendors = [  
  {
    id: "v1",
    name: "Calabar Kitchen",
    image: "images/vendors/image1.jpg",
    rating: 4.8,
    deliveryTime: "20-30 min",
    address: "12 Marian Road",
    phone: "0803 123 4567",
    email: "orders@calabarkitchen.com",
    description: "Authentic Edikang Ikong and Afang soup.",
    menu: [
      { id: "f1", name: "Afang Soup", price: 4500, image: "images/food/afang.webp", category: "swallow" },
      { id: "f2", name: "Edikang Ikong", price: 5000, image: "images/food/edikang.webp", category: "swallow" }
    ]
  },
  {
    id: "v2",
    name: "Abeg Chop Grill",
    image: "images/vendors/image4.jpg",
    rating: 4.5,
    deliveryTime: "15-25 min",
    address: "Etta Agbor",
    phone: "0812 987 6543",
    email: "hello@abegchop.ng",
    description: "Spicy Suya and roasted plantain specialists.",
    menu: [
      { id: "f3", name: "Beef Suya", price: 2000, image: "images/food/suya.webp", category: "grills" },
      { id: "f4", name: "Roasted Plantain", price: 1200, image: "images/food/bole.webp", category: "snacks" }
    ]
  },
  {
    id: "v3",
    name: "The Crunch Hub",
    image: "images/vendors/crunch.webp",
    rating: 4.2,
    deliveryTime: "30-45 min",
    address: "Lanscape Boulevard",
    phone: "0706 555 0192",
    email: "crunchhub@gmail.com",
    description: "Fast food, burgers, and crispy fries.",
    menu: [
      { id: "f5", name: "Cheeseburger", price: 3500, image: "images/food/burger.webp", category: "snacks" }
    ]
  },
  {
    id: "v4",
    name: "Mama Ekaette's",
    image: "images/vendors/image2.jpg",
    rating: 4.9,
    deliveryTime: "25-35 min",
    address: "Watt Market",
    phone: "0802 333 4444",
    email: "mamaekaette@calabar.ng",
    description: "Traditional Calabar delicacies.",
    menu: [
      { id: "f6", name: "Ekpang Nkukwo", price: 4000, image: "images/food/ekpang.webp", category: "swallow" }
    ]
  },
  {
    id: "v5",
    name: "Bole King",
    image: "images/vendors/image3.jpg",
    rating: 4.6,
    deliveryTime: "10-20 min",
    address: "Atekong Drive",
    phone: "0810 444 5566",
    email: "orders@boleking.com",
    description: "Premium roasted plantain and fish.",
    menu: [
      { id: "f7", name: "Large Fish & Bole", price: 5500, image: "images/food/fish-bole.webp", category: "snacks" }
    ]
  },
  {
    id: "v6",
    name: "Pizza Palace",
    image: "images/vendors/pizza.webp",
    rating: 4.1,
    deliveryTime: "40-50 min",
    address: "Diamond Hill",
    phone: "0905 111 2222",
    email: "contact@pizzapalace.ng",
    description: "Italian style pizza.",
    menu: [
      { id: "f8", name: "Pepperoni Pizza", price: 7000, image: "images/food/pizza.webp", category: "snacks" }
    ]
  },
  {
    id: "v7",
    name: "The Pasta Place",
    image: "images/vendors/image4.jpg",
    rating: 4.7,
    deliveryTime: "20-30 min",
    address: "State Housing Estate",
    phone: "0808 222 3333",
    email: "pastaplace@eatwell.com",
    description: "Gourmet pasta.",
    menu: [
      { id: "f9", name: "Creamy Alfredo", price: 5200, image: "images/food/pasta.webp", category: "rice" }
    ]
  },
  {
    id: "v8",
    name: "Suya Junction",
    image: "images/vendors/image1.jpg",
    rating: 4.5,
    deliveryTime: "15-20 min",
    address: "Mary Slessor",
    phone: "0703 666 7777",
    email: "junction@suya.ng",
    description: "Famous midnight suya spot.",
    menu: [
      { id: "f10", name: "Chicken Suya", price: 2500, image: "images/food/c-suya.webp", category: "grills" }
    ]
  },
  {
    id: "v9",
    name: "Fresh Salads",
    image: "images/vendors/salad.webp",
    rating: 4.1,
    deliveryTime: "15-25 min",
    address: "MCC Road",
    phone: "0814 888 9999",
    email: "fresh@salads.ng",
    description: "Healthy bowls.",
    menu: [
      { id: "f11", name: "Greek Salad", price: 3000, image: "images/food/salad.webp", category: "breakfast" }
    ]
  },
  {
    id: "v10",
    name: "Native Pot",
    image: "images/vendors/image2.jpg",
    rating: 4.8,
    deliveryTime: "30-40 min",
    address: "Calabar South",
    phone: "0809 000 1111",
    email: "chef@nativepot.com",
    description: "Fisherman soup specialists.",
    menu: [
      { id: "f12", name: "Fisherman Soup", price: 6000, image: "images/food/fishsoup.webp", category: "swallow" }
    ]
  },
  {
    id: "v11",
    name: "Chop Better",
    image: "images/vendors/image3.jpg",
    rating: 4.5,
    deliveryTime: "20-30 min",
    address: "Goldie Street",
    phone: "0701 444 8888",
    email: "orders@chopbetter.com",
    description: "Rice dishes and local stews.",
    menu: [
      { id: "f13", name: "Jollof Rice & Chicken", price: 3500, image: "images/food/jollof.webp", category: "rice" }
    ]
  },
  {
    id: "v12",
    name: "Wing Stop",
    image: "images/vendors/wings.webp",
    rating: 4.3,
    deliveryTime: "25-35 min",
    address: "Airport Road",
    phone: "0805 777 6666",
    email: "wings@stop.ng",
    description: "Spicy buffalo wings.",
    menu: [
      { id: "f14", name: "Buffalo Wings", price: 3200, image: "images/food/wings.webp", category: "grills" }
    ]
  },
  {
    id: "v13",
    name: "Pastry Point",
    image: "images/vendors/image1.jpg",
    rating: 4.6,
    deliveryTime: "10-15 min",
    address: "Calabar Road",
    phone: "0811 555 4444",
    email: "pastries@point.com",
    description: "Fresh meatpies.",
    menu: [
      { id: "f15", name: "Meat Pie", price: 800, image: "images/food/pie.webp", category: "pastries" }
    ]
  },
  {
    id: "v14",
    name: "Oriental Spice",
    image: "images/vendors/oriental.webp",
    rating: 4.4,
    deliveryTime: "35-45 min",
    address: "Marian Extension",
    phone: "0804 999 0000",
    email: "oriental@spice.ng",
    description: "Stir-fry noodles.",
    menu: [
      { id: "f16", name: "Special Fried Rice", price: 4200, image: "images/food/fried-rice.webp", category: "rice" }
    ]
  },
  {
    id: "v15",
    name: "The Grill Box",
    image: "images/vendors/image4.jpg",
    rating: 4.7,
    deliveryTime: "20-25 min",
    address: "Federal Housing",
    phone: "0704 333 2222",
    email: "box@grill.com",
    description: "Grilled chicken and chips.",
    menu: [
      { id: "f17", name: "Quarter Chicken & Chips", price: 4800, image: "images/food/grillbox.webp", category: "grills" }
    ]
  },
  {
    id: "v16",
    name: "Smoothie Bar",
    image: "images/vendors/smoothie.webp",
    rating: 4.2,
    deliveryTime: "10-20 min",
    address: "Palm Street",
    phone: "0902 444 6666",
    email: "blend@smoothiebar.com",
    description: "Fruit blends.",
    menu: [
      { id: "f18", name: "Berry Blast", price: 2500, image: "images/food/smoothie.webp", category: "drinks" }
    ]
  },
  {
    id: "v17",
    name: "Efik Delights",
    image: "images/vendors/image2.jpg",
    rating: 4.9,
    deliveryTime: "30-40 min",
    address: "Duke Town",
    phone: "0803 777 8888",
    email: "info@efikdelights.com",
    description: "Premium catering.",
    menu: [
      { id: "f19", name: "White Soup (Afia Efere)", price: 5500, image: "images/food/whitesoup.webp", category: "swallow" }
    ]
  },
  {
    id: "v18",
    name: "Burger Bistro",
    image: "images/vendors/image3.jpg",
    rating: 4.5,
    deliveryTime: "20-30 min",
    address: "UNICAL Gate",
    phone: "0702 111 9999",
    email: "bistro@burgers.ng",
    description: "Gourmet burgers.",
    menu: [
      { id: "f20", name: "BBQ Burger", price: 3800, image: "images/food/bbq-burger.webp", category: "snacks" }
    ]
  },
  {
    id: "v19",
    name: "Taco Truck",
    image: "images/vendors/taco.webp",
    rating: 3.9,
    deliveryTime: "25-35 min",
    address: "Chamley Street",
    phone: "0901 000 7777",
    email: "tacos@truck.com",
    description: "Fusion tacos.",
    menu: [
      { id: "f21", name: "Beef Tacos (3pcs)", price: 3500, image: "images/food/tacos.webp", category: "snacks" }
    ]
  },
  {
    id: "v20",
    name: "Sweet Sensations",
    image: "images/vendors/image1.jpg",
    rating: 4.6,
    deliveryTime: "15-25 min",
    address: "Efio-Ette Junction",
    phone: "0818 555 2222",
    email: "sweet@sensations.ng",
    description: "Cakes and desserts.",
    menu: [
      { id: "f22", name: "Chocolate Cake Slice", price: 2000, image: "images/food/cake.webp", category: "pastries" }
    ]
  },
  {
    id: "v21",
    name: "Morning Glory Cafe",
    image: "images/vendors/image4.jpg",
    rating: 4.7,
    deliveryTime: "15-25 min",
    address: "Ikot Ansa",
    phone: "0807 444 3333",
    email: "morning@glory.com",
    description: "Breakfast platters, pancakes, and fresh coffee.",
    menu: [
      { id: "f23", name: "Pancake Stack", price: 3000, image: "images/food/pancakes.webp", category: "breakfast" },
      { id: "f24", name: "Full English Breakfast", price: 5500, image: "images/food/breakfast.webp", category: "breakfast" }
    ]
  }
];