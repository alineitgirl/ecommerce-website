import React from 'react'
import { Card } from '@/src/components';

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    price: 149.99,
    imageSrc: "shoes/shoe-1.png",
    badge: {
      label: "New",
      tone: "orange" as const
    },
  },
  {
     id: 2,
    title: "Air Zoom Pegasus",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: {
      label: "Hot",
      tone: "red" as const
    },
  },
  {
     id: 3,
    title: "Air Max Pulse",
    price: 149.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: {
      label: "New",
      tone: "orange" as const
    },
  }
]

const Home = () => {
  return (
    <main className='space-y-8'>
      <section>
        <h2 className='text-heading-2 font-jost'>Latest shoes</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => (
            <Card key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            imageAlt={product.title}
            price={product.price}
            badge={product.badge}/>
          ))}
        </div>
     </section>
    </main>
  )
}

export default Home;
