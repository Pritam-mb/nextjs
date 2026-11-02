'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // GET requests do not require a body or Content-Type header
      const response = await fetch('/react-form/api', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Products List
          </h1>
          <p className="text-sm text-neutral-500">
            Fetched dynamically from SQLite database
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={fetchProducts}
            disabled={loading}
            className="px-4 py-2 text-sm bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
          <Link
            href="/react-form"
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            + Add Product
          </Link>
        </div>
      </div>

      {loading && products.length === 0 && (
        <div className="p-8 text-center text-neutral-500">
          Loading products...
        </div>
      )}

      {error && (
        <div className="p-4 mb-6 rounded-lg bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center p-12 border border-dashed rounded-xl border-neutral-300 dark:border-neutral-800">
          <p className="text-neutral-500 mb-4">No products found in the database.</p>
          <Link
            href="/react-form"
            className="inline-block px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Add Your First Product
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-5 border rounded-xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-2">
                <h2 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                  {product.title}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  #{product.id}
                </span>
              </div>
              <p className="text-xl font-bold text-blue-600 mt-2">
                ${product.price}
              </p>
              {product.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}