<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'
    import Product from '$lib/components/Product.svelte'
    import { each } from 'svelte/internal'
    import type { userDto } from '$lib/types/userDto'

    /** @type {import('./$types').PageData} */
    export let data: {
        products: Array<ProductDto>
        users: Array<userDto>
    }

    let search = ''
    let categories: string[] = []

    async function handleSearch() {
        if (!search) {
            window.location.reload()
            return
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

    let selectedUser: userDto = data.users[0]
    let userDefault = false

    function handleUser(e: any) {
        const selectedIndex = e.target.selectedIndex
        selectedUser = data.users[selectedIndex - 1]
    }
    // const uniqueTitles = [...new Set(data.products.map(product => product.title))];
    // console.log(uniqueTitles)
</script>

<header class="flex items-center justify-end p-6">
    <div class="flex items-end">
        <img src={selectedUser.image} class="h-20" alt={selectedUser.firstName} />
        <p class="mr-6">{selectedUser.firstName} {selectedUser.id}</p>
        <select class="rounded border border-gray-700 bg-zinc-500 px-4 py-2 leading-tight shadow focus:outline" on:change={handleUser}>
            <option value="" selected disabled> Select a user:</option>
            {#each data.users as user}
                <option value={user.id}>{user.username}</option>
            {/each}
        </select>
    </div>
</header>

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

    <button class="rounded bg-zinc-500 py-1 px-2 text-white hover:bg-zinc-700" on:click={handleSearch}> Search </button>
</div>

<div class="mx-auto max-w-screen-2xl">
    {#if data.products.length === 0}
        <p class="p-4 text-center text-4xl font-bold">ERROR: Categoria no disponible</p>
    {:else}
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {#each data.products as product}
                <Product {product} />
            {/each}
        </ul>
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {#each data.users as user}
                <p class="text-3xl">#{user.id} {user.firstName}{user.lastName}</p>
                <img src={user.image} alt={user.firstName} class="my-4 mx-auto h-40" />
            {/each}
        </ul>
    {/if}
</div>
