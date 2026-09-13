"use client"

import { useEffect, useState } from "react"
import EcommerceProductCard from "./ProductCardComponent";
import Link from "next/link";

export default function ProductCardListComponent() {
  const [products, setProducts] = useState([]);

  // useEffect 
  useEffect(()=> {
    async function fetchProducts(){
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProducts(products);
    }

    fetchProducts();

  }, [])//mount once use forever

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 justify-center mx-auto">
      {
        products?.map(({image, title, description, price, id})=> (
          <Link key={id} href={`product/${id}`}>
            <EcommerceProductCard 
            image={image} 
            title={title}
            description={description} 
            price={price} />
          </Link>
        ))
      }
    </section>
  )
}