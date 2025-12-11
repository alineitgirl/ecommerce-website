import React from 'react'
import { getCurrentUser } from '@/src/lib/auth/actions';
import { getAllProducts } from '@/src/lib/actions/product';
import { parseFilterParams } from '@/src/lib/utils/query';
import HomePage from '@/src/components/HomePage';

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
  
  return <HomePage products={products} />
}

export default Home;
