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

    let dif = data.product.id%10 ===0 ? 5 : data.product.id%5
    let index = data.product.id - dif
    const next = () => {
        const maxIndex = data.products.length -5
        index = index === maxIndex ? 0 : index + 5
    }

    const back = () => {
        index = index === 0 ? 95 : index - 5
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
<div class="mx-auto flex justify-center text-3xl">Work In Progress...</div>

<!-- <div class="container mx-auto">
    <li class="rounded bg-white p-4 shadow">
        <img src={data.product.thumbnail} alt={data.product.title} class="mb-2 w-full" />
        <h2 class="mb-1 text-lg font-bold">{data.product.title}</h2>
        <p class="text-gray-600">{data.product.price}€</p>
        <p class="mt-2 text-gray-800">{data.product.description}</p>
        <p class="mt-2 text-gray-600">Category: {data.product.category}</p>
        card.svelte
    </li>
</div> -->
<div class="mt-8 rounded bg-gray-300">
    <h2 class="mb-4 ml-12 text-4xl font-bold text-black">Related Products</h2>
    <div class="m-4 mx-auto flex rounded bg-gray-300">
        <ul class="mx-4 my-4 grid grid-cols-5 gap-4">
            {#each data.products.slice(index, index + 5) as product}
                <a href="/product/{product.id}">
                    <li class="rounded-lg p-4 pb-6 text-center {bgColor[product.category]} {shadowColor[product.category]}">
                        <p class="my-2 truncate text-xl"># {product.id} {product.title}<br /></p>
                        <p class="my-2 font-bold text-black">{product.category.toUpperCase()}<br /></p>
                        <img src={product.thumbnail} alt={product.title} class="rounded-xl my-4 mx-auto h-40" />
                        <p class="rounded-lg text-3xl text-black">{product.price}€</p>
                    </li>
                </a>
            {/each}
        </ul>
    </div>
    <div class="mb-4 flex justify-center gap-2">
        <div class="mb-2">
            <button class="rounded bg-blue-500 px-8 py-2 text-white" on:click={back}> Back </button>
            <button class="rounded bg-blue-500 px-8 py-2 text-white" on:click={next}> Next </button>
        </div>
    </div>
</div>