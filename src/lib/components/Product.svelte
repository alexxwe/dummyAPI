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

<div>
    <a href="/product/{product.id}" class="mx-auto">
        <ul>
            <li class="rounded-lg p-4 text-center text-xl {bgColor[product.category]} {shadowColor[product.category]}">
                <p class="text-3xl truncate">#{product.id} {product.title.charAt(0).toUpperCase() + product.title.slice(1)}</p>
                <p class="text-4xl">{product.price}€</p>

                <div class="my-4 flex justify-between text-3xl">
                    <p class="mx-4 rounded-lg border-2 border-black bg-red-600 p-0.5 font-semibold">SALE: {product.discountPercentage}%</p>
                    <p>STOCK: {product.stock}</p>
                </div>
                <div class="rounded-full border-2 border-dotted border-white">
                    <span>{rating(product.rating)}</span>
                    <p>Rating: {product.rating}</p>
                </div>
                <p>{product.brand}</p>
                <div class="">

                    <img src={product.thumbnail} alt={product.title} class="my-4 mx-auto h-40" />
                </div>
                <!-- <p class="text-2xl text-black">{product.description}</p> -->
            </li>
        </ul>
    </a>
</div>
