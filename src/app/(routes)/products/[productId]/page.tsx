import { Metadata } from 'next';

interface ProductProps {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
    description: `Product ${id} description`,
  };
};

export default async function ProductDetails({ params }: ProductProps) {
  const productId = (await params).productId;

  return <div>Details {productId}</div>;
}
