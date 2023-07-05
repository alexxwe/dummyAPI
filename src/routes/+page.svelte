<script lang="ts">
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

<h1>DummyAPI</h1>
<div>
    <ul>
        {#each productList as product}
            <li>{product.id}{'-----'}{product.title}</li>
        {/each}
    </ul>
</div>
