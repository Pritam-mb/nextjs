import { redirect } from 'next/navigation';
import { addProduct } from '@/src/prisma-db';
import Submit from '../components/submit';

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    await addProduct(title, parseInt(price, 10), description);
    redirect('/product');
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800">
      <h1 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
        Add New Product
      </h1>

      <form action={createProduct} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
            Product Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="e.g. Mechanical Keyboard"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
            Price ($) <span className="text-red-500">*</span>
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="1"
            min="0"
            required
            placeholder="e.g. 99"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="e.g. Wireless RGB mechanical keyboard with blue switches..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100"
          />
        </div>

        <div className="pt-2">
          <Submit />
        </div>
      </form>
    </div>
  );
}
