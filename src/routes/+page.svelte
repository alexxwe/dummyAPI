<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'
    import Product from '$lib/components/Product.svelte'
    import { each } from 'svelte/internal'

    /** @type {import('./$types').PageData} */
    export let data: {
        products: Array<ProductDto>
    }

    let search = ''
    let categories: string[] = []

    async function handleSearch() {
        if (!search) {
            window.location.reload();
            return;
        }
        const response = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(search).toLowerCase()}`)
        const searchData = await response.json()
        data.products = searchData.products
    }

    async function fetchCategories() {
        const categoryResponse = await fetch('https://dummyjson.com/products/categories')
        categories = await categoryResponse.json()
    }
    fetchCategories()

    // const uniqueCategories = [...new Set(data.products.map(product => product.category))];
    // console.log(uniqueCategories)
</script>

<!-- max-w-7xl = 80rem (1280px)  -::::-  max-w-screen-2xl = (1536px)-->
<h1 class="flex justify-center text-2xl">DummyAPI</h1>
<div class="pb-4">
    <input
        type="text"
        placeholder="Category Search"
        class="rounded border px-1 text-black"
        bind:value={search}
        on:keydown={event => {
            if (event.key === 'Enter') {
                handleSearch()
            }
        }}
        list="categories-list"
    />

    <datalist id="categories-list">
        {#each categories as category}
        <option value={category} />            
        {/each}
    </datalist>

    <button class="rounded bg-zinc-500 hover:bg-zinc-700 text-white py-1 px-2" 
    on:click={handleSearch}>
    Search
    </button>
</div>

<div class="mx-auto max-w-screen-2xl">
    {#if data.products.length === 0}
    <p class="text-center font-bold text-4xl p-4">
        ERROR: Categoria no disponible
    </p>
    {:else}     
    <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each data.products as product}
        <Product {product} />
        {/each}
    </ul>
    {/if}
</div>
