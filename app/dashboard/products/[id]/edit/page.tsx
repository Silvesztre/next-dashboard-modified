import EditProductForm from '@/app/ui/products/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const product = await fetchProductById(id)
    console.log(product)
    /* console.log(product.name) */

    if (!product) {
        notFound();
    }

    return (
    <main>
        <Breadcrumbs
        breadcrumbs={[
            { label: 'Products', href: '/dashboard/products' },
            {
            label: 'Edit Product',
            href: `/dashboard/products/${id}/edit`,
            active: true,
            },
        ]}
        />
        <EditProductForm product={product} />
    </main>
    );
}