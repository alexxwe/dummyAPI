import type { ProductDto } from '$lib/types/productDto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }): Promise<{ products: Array<ProductDto> }> {
    try {
        const response = await fetch('https://dummyjson.com/products')
        // const data = (await response.json()).products
        // const products: Array<ProductDto> = []
        const products: Array<ProductDto> = (await response.json()).products
        // for (const products of data) {
        //     products.push({
        //         id: products.id,
        //         title: products.title,
        //         description: products.description,
        //         price: products.price,
        //         discountPercentage: products.discountPercentage,
        //         rating: products.rating,
        //         stock: products.stock,
        //         brand: products.brand,
        //         category: products.category,
        //         thumbnail: products.thumbnail,
        //         images: products.description,
        //     })
        // }
        return {
            products,
        }
    } catch (error: unknown) {
        return {
            products: [],
        }
    }
}
