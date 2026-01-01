const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Products matching your frontend's expected fields
const products = [
  {
    name: "Classic Men Shirt",
    description: "Premium cotton shirt for men, comfortable and stylish.",
    price: 29.99,
    category: "men",
    image: "https://via.placeholder.com/300x300.png?text=Classic+Men+Shirt"
  },
  {
    name: "Elegant Women's Dress",
    description: "Beautiful summer dress for women, perfect for any occasion.",
    price: 49.99,
    category: "women",
    image: "https://via.placeholder.com/300x300.png?text=Elegant+Dress"
  },
  {
    name: "Kids T-shirt",
    description: "Comfortable T-shirt for kids, soft and durable.",
    price: 19.99,
    category: "kids",
    image: "https://via.placeholder.com/300x300.png?text=Kids+T-shirt"
  },
  {
    name: "Sport Shoes Men",
    description: "Lightweight running shoes for men, all-day comfort.",
    price: 69.99,
    category: "men",
    image: "https://via.placeholder.com/300x300.png?text=Sport+Shoes+Men"
  },
  {
    name: "Women's Sneakers",
    description: "Trendy sneakers for women, stylish and comfy.",
    price: 59.99,
    category: "women",
    image: "https://via.placeholder.com/300x300.png?text=Women+Sneakers"
  },
  {
    name: "Kids Hoodie",
    description: "Warm and soft hoodie for kids, perfect for winter.",
    price: 25.99,
    category: "kids",
    image: "https://via.placeholder.com/300x300.png?text=Kids+Hoodie"
  }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded with frontend products!");
  mongoose.connection.close();
};

seedDB();
