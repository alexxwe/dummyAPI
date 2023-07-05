<script lang="ts">
    import "../app.css"
    import type { ProductDto } from '$lib/types/prductDto'
    import { onMount } from 'svelte'

    let productList: ProductDto[] = []

    async function fetchProduct() {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        productList = data.products
        console.log(productList)
    }

    onMount(() => {
        fetchProduct()
    })
    
</script>

<h1 class="flex justify-center text-2xl">DummyAPI</h1>

<!-- max-w-7xl = 80rem (1280px)  -::::-  max-w-screen-2xl = (1536px)-->
<div class="mx-auto max-w-screen-2xl">
    <ul class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each productList as product}
            <li class="rounded-lg bg-zinc-400 p-4 text-center">{product.id}{' ----> '}{product.title}</li>
        {/each}
    </ul>
</div>
