<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'
    import Product from '$lib/components/Product.svelte'
    import type { userDto } from '$lib/types/userDto'
    import { userColor } from '$lib/utils/bgColor'

    /** @type {import('./$types').PageData} */
    export let data: {
        products: Array<ProductDto>
        users: Array<userDto>
    }

    let categorySearch = ''
    let categories: string[] = []

    async function handleSearch() {
        if (!categorySearch) {
            window.location.reload()
            return
        }
        const response = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(categorySearch).toLowerCase()}`)
        const searchData = await response.json()
        data.products = searchData.products
    }

    async function fetchCategories() {
        const categoryResponse = await fetch('https://dummyjson.com/products/categories')
        categories = await categoryResponse.json()
    }
    fetchCategories()

    let selectedUser: userDto = data.users[0]

    function handleUser(e: any) {
        const selectedIndex = e.target.selectedIndex
        selectedUser = data.users[selectedIndex - 1]
        console.log(data.users)
        document.body.classList.remove(...Object.values(userColor))
        document.body.classList.add(userColor[selectedUser.id])
    }

    let search = ''

    async function wordSearch() {
        const wordResponse = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`)
        const wordData = await wordResponse.json()
        data.products = wordData.products

    }

    // const uniqueProps = [...new Set(data.products.map(product => product.title))];
    // console.log(uniqueProps)
</script>

<header class="space-b md:flex justify-between p-6">
    <!-- max-w-7xl = 80rem (1280px)  -::::-  max-w-screen-2xl = (1536px)-->
    <div>
        <input
            type="text"
            placeholder="Category Search"
            class="rounded border px-1 text-black"
            bind:value={categorySearch}
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

        <button class="rounded bg-zinc-500 py-1 px-2 text-white hover:bg-zinc-700" on:click={handleSearch}> Search </button><br>
        
        <input
        type="text"
        placeholder="Search"
        class="rounded border px-1 text-black"
        bind:value={search}
        on:keydown={event => {
            if (event.key === 'Enter') {
                wordSearch()
            }
        }}
        />


        <button class="rounded bg-zinc-500 py-1 px-2 text-white hover:bg-zinc-700" on:click={wordSearch}> Search </button><br>
            
        </div>
            
    <h1 class="flex justify-center text-4xl">DummyAPI</h1>

    <div class="flex items-end">
        <label for="user"> </label>
        <a href="/user/{selectedUser.id}" class="mx-auto">
            <img src={selectedUser.image} class="h-20 w-20 hover:scale-110" alt={selectedUser.firstName} />
        </a>
        <p class="mx-2 w-24">{selectedUser.firstName} {selectedUser.id}</p>
        <select class="rounded border border-gray-700 bg-zinc-500 px-4 py-2 leading-tight shadow focus:outline" on:change={handleUser}>
            <option value="" selected disabled> Username:</option>
            {#each data.users as user}
                <option value={user.id}>{user.username}</option>
            {/each}
        </select>
    </div>
</header>

<div class="mx-auto max-w-screen-2xl">
    {#if data.products.length === 0}
        <p class="p-4 text-center text-4xl font-bold">ERROR: Categoria no disponible</p>
    {:else}
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {#each data.products as product}
                <li>
                    <Product {product} />
                </li>
                {/each}
        </ul>
    {/if}
</div>
