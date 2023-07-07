<script lang="ts">
    import '../app.css'
    import type { ProductDto } from '$lib/types/productDto'


    /** @type {import('./$types').PageData} */
    export let data: {
        products: Array<ProductDto>,
    }
</script>

<h1 class="flex justify-center text-2xl">DummyAPI</h1>

<!-- max-w-7xl = 80rem (1280px)  -::::-  max-w-screen-2xl = (1536px)-->
<div class="mx-auto max-w-screen-2xl">
    <ul class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {#each data.products as product}
        <li class="rounded-lg bg-zinc-400 p-4 text-center">{product.id}{' --> '}{product.title}</li>
        {/each}
    </ul>
</div>
