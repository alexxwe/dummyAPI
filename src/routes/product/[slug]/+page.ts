import type { ProductDto } from '$lib/types/productDto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }): Promise<{ products: Array<ProductDto>, product: ProductDto | null}> {
    try {
        const productResponse = await fetch('https://dummyjson.com/products')
        const products: Array<ProductDto> = (await productResponse.json()).products

        const response = await fetch(`https://dummyjson.com/products/${params.slug}`)
        const data: ProductDto = (await response.json())

        return {
            products,
            product: data,
        }
    } catch (error: unknown) {
        return {
            products: [],
            product: null,
        }
    }
}
