import React from 'react'
import { Card } from '@/src/components';
import { getCurrentUser } from '@/src/lib/auth/actions';
import { parseFilterParams } from '@/src/lib/utils/query';
import { getAllProducts } from '@/src/lib/actions/product';

type SearchParams = Record<string, string | string[] | undefined>;

const Home = async ({
  searchParams
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const user = await getCurrentUser();
  console.log("USER" + user);

  const sp = await searchParams;
  const parsed = parseFilterParams(sp);
  const { products, totalCount } = await getAllProducts(parsed);

  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <header className="py-6">
        <h1 className="text-heading-3 text-dark-900">
          Latest shoes ({totalCount})
        </h1>
      </header>

      <section>
        {products.length === 0 ? (
          <div className="rounded-lg border border-light-300 p-8 text-center">
            <p className="text-body text-dark-700">No products available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-6">
            {products.map((product) => {
              const price = 
                product.minPrice !== null && product.maxPrice !== null && product.minPrice !== product.maxPrice
                  ? `$${product.minPrice.toFixed(2)} - $${product.maxPrice.toFixed(2)}`
                  : product.minPrice !== null
                  ? `$${product.minPrice.toFixed(2)}`
                  : undefined;

              return (
                <Card
                  key={product.id}
                  title={product.name}
                  subtitle={product.subtitle ?? undefined}
                  imageSrc={product.imageUrl ?? "/shoes/shoe-1.jpg"}
                  price={price}
                  href={`/products/${product.id}`}
                />
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home;
