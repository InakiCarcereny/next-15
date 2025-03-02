import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link href="/products/1">product 1</Link>
      <li>product 2</li>
      <li>product 3</li>
    </div>
  );
}
