import axios from "axios";

export async function getAllProducts() {
  return await axios.get("https://dummyjson.com/products/category/smartphones");
}

export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/product/${id}`);
}