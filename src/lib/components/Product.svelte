<script lang="ts">
    import type { ProductDto } from '$lib/types/productDto'
    import { bgColor, shadowColor } from '$lib/utils/bgColor'

    export let product: ProductDto

    function rating(rating: number) {
        const index = Math.floor(rating)
        const decimal = rating - index
        const extra = decimal > 0.8 ? '🌕' : decimal > 0.4 ? '🌗' : '🌑'
        const stars = '🌕'.repeat(index) + extra
        return stars
    }
</script>

<div class="flex">
    <a href="/product/{product.id}" class="flex">
        <li class=" rounded-lg bg-zinc-400 p-4 text-center text-xl {bgColor[product.category]} {shadowColor[product.category]}">
            <p class="text-3xl">#{product.id} {product.title.charAt(0).toUpperCase() + product.title.slice(1)}</p>
            <p class="text-4xl">{product.price}€</p>

            <div class="my-4 flex justify-between text-4xl">
                <p>SALE: {product.discountPercentage}%</p>
                <p>STOCK: {product.stock}</p>
            </div>
            <div class="border border-white">
                <span>{rating(product.rating)}</span>
                <p>Rating: {product.rating}</p>
            </div>
            <p>{product.brand}</p>
            <img src={product.thumbnail} alt={product.title} class="my-4 mx-auto h-40" />
            <p class="text-2xl text-black">{product.description}</p>
        </li>
    </a>
</div>
