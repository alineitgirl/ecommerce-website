import Image from "next/image"
import Card from "./Card";

export interface HomePageProps {
  products?: Array<{
    id: string;
    name: string;
    imageUrl: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    subtitle?: string | null;
  }>;
}

const HomePage = ({ products = [] }: HomePageProps) => {

  return (
    <main className="w-full flex flex-col gap-24">

        <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden rounded-3xl">
            <Image src="/hero.jpg" alt="Nike Hero" fill className="w-full h-full object-cover opacity-40" />

            <div className="absolute top-20 left-16 max-w-xl">
                <h4 className="text-red-500 font-semibold text-sm tracking-wide">
                    Bold & Bright
                </h4>
                <h1 className="text-6xl font-black leading-tight mt-2">
                    Style That Moves <br/> With You.
                </h1>
                <p className="text-lg text-gray-700 max-w-md mt-4">
                    Not just style, but comfort. Footwear that effortlessly moves with you.
                </p>

                <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-900">
                    Find Your Style
                </button>
            </div>

            <h1 className="absolute right-10 bottom-20 text-[110px] font-black text-orange-300 opacity-70 leading-none">
                AIR
            </h1>
            <h1 className="absolute right-16 bottom-2 text-[110px] font-black text-pink-400 opacity-80 leading-none">
                JORDAN
            </h1>
        </section>

        <section className="w-full">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Best of Air Max</h2>
                <a className="text-sm font-semibold hover:underline cursor-pointer">
                    View all
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 4).map((product) => {
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
        </section>

        <section className="w-full">
            <h2 className="text-3xl font-bold mb-8">Trending Now</h2>

            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-10">
                <Image src="/presto.jpg" alt="Nike Hero" fill className="w-full h-full object-cover" />
                <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                    <h3 className="text-4xl font-bold">React Presto</h3>
                    <p className="max-w-md text-lg mt-2">
                        New brust in comfort engineered for all-day energy.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Image src="/trending-1.png" alt="Trending Jordan" className="rounded-2xl h-[250px] w-full object-cover" width={200} height={200} />
                <Image src="/trending-2.png" alt="Trending Jordan" className="rounded-2xl h-[250px] w-full object-cover" width={200} height={200}/>
                <Image src="/trending-3.png" alt="Trending Jordan" className="rounded-2xl h-[250px] w-full object-cover" width={200} height={200}/>
            </div>
        </section>

        <section className="w-full">
            <h4 className="text-red-500 font-semibold mb-2">
                Bold & Bright
            </h4>
            <h2 className="text-4xl font-black mb-4 max-w-xl">Nike React Presto By You</h2>

            <p className="text-lg text-gray-600 max-w-lg mb-8">
                Take advantage of layered features, contrasting colorways and breathable mesh for elevated style.
            </p>

            <div className="relative rounded-3xl overflow-hidden h-[400px]">
                <Image src="/hero.jpg" alt="Nike Hero" fill className="w-full h-full object-cover" />
            </div>
        </section>
    </main>
  )
}

export default HomePage;
