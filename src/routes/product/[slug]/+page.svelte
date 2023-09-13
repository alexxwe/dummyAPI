<script lang="ts">
    import Product from '$lib/components/Product.svelte'
    import type { ProductDto } from '$lib/types/productDto'
    import { bgColor, shadowColor } from '$lib/utils/bgColor'

    /** @type {import('./$types').PageData} */
    export let data: {
        product: ProductDto
        products: Array<ProductDto>
    }

    function rating(rating: number) {
        const index = Math.floor(rating)
        const decimal = rating - index
        const extra = decimal > 0.8 ? '🌕' : decimal > 0.4 ? '🌗' : '🌑'
        const stars = '🌕'.repeat(index) + extra
        return stars
    }
</script>

<div class="mx-auto flex justify-center text-3xl">Work In Progress...</div>
<main class="bg-gray-300 py-12">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="rounded-lg {bgColor[data.product.category]} {shadowColor[data.product.category]}} p-8">
            <div class="flex">
                <div class="flex flex-shrink-0 items-center">
                    <img class="my-2 w-80 rounded-3xl object-cover hover:scale-110" src={data.product.thumbnail} alt={data.product.title} />
                </div>
                <div class="my-6 ml-16">
                    <h1 class="mb-6 text-3xl font-bold">{data.product.title}</h1>
                    <h2 class="mb-4 text-xl font-bold text-black">{data.product.category.toUpperCase()}</h2>
                    <p class="mb-6 text-xl font-bold text-blue-800">{data.product.brand}</p>
                    <p class="mb-8 text-xl">{data.product.description}</p>

                    <div class="mb-4 flex items-center text-xl font-medium">
                        <span class="text-blue-800">{rating(data.product.rating)} {data.product.rating}</span>
                    </div>

                    <div class="mr-4 mb-12 flex items-center">
                        <span class="rounded border border-black text-4xl font-bold text-black">{data.product.price}€</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="container mx-auto">
    <li class="rounded bg-white p-4 shadow">
        <img src={data.product.thumbnail} alt={data.product.title} class="mb-2 w-full" />
        <h2 class="mb-1 text-lg font-bold">{data.product.title}</h2>
        <p class="text-gray-600">{data.product.price}€</p>
        <p class="mt-2 text-gray-800">{data.product.description}</p>
        <p class="mt-2 text-gray-600">Category: {data.product.category}</p>
        card.svelte
    </li>
</div>
