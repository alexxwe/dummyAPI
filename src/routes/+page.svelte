<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'
    import Product from '$lib/components/Product.svelte'


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
        <Product {product} />
        {/each}
    </ul>
</div>
