<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'
    import { bgColor, shadowColor } from '$lib/utils/bgColor'


    /** @type {import('./$types').PageData} */
    export let data: {
        products: Array<ProductDto>,
    }
    // const uniqueCategories = [...new Set(data.products.map(product => product.category))];
    // console.log(uniqueCategories)
</script>

<h1 class="flex justify-center text-2xl">DummyAPI</h1>

<!-- max-w-7xl = 80rem (1280px)  -::::-  max-w-screen-2xl = (1536px)-->
<div class="mx-auto max-w-screen-2xl">
    <ul class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {#each data.products as product}
        <li class=" text-xl rounded-lg bg-zinc-400 p-4 text-center {bgColor[product.category]} {shadowColor[product.category]}">
            <p class="text-2xl"> #{product.id} {product.title}</p>
            <p>{product.price}€</p>
            <p>SALE: {product.discountPercentage}%</p>
            <!-- <p>Rating: {product.rating}</p> -->
            <!-- <p>{product.stock }</p> -->
            <p>{product.brand}</p>
            <img src={product.thumbnail} alt={product.title} class="h-40 my-4 mx-auto">
            <p class="text-black"> {product.description}</p>
        </li>
        {/each}
    </ul>
</div>
