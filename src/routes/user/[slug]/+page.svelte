<script lang="ts">
    import type { userDto } from '$lib/types/userDto'
    import { userColor } from '$lib/utils/bgColor'

    /** @type {import('./$types').PageData} */
    export let data: {
        user: userDto
        users: Array<userDto>
    }

    let isFront = true

    function toggleCard() {
        isFront = !isFront
    }
</script>

<div>
    <a href="../">
        <img src="/favicon.png" class="h-12 mx-auto hover:scale-110" alt="Go back to store" title="Go back to store" />
    </a>
</div>
<div class="h-screen flex items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="mx-auto {isFront ? '' : 'flipped'}" on:click={toggleCard}>
        <div class="flip-container {userColor[data.user.id]} {isFront ? '' : 'flipped'} ">
            <article class="front m-2 grid grid-cols-3">
                <img class="h-12 mx-auto col-span-3" src={data.user.image} alt={data.user.image} title={data.user.image} />
                <p class="mt-2">User ID: {data.user.id}</p>
                <p class="mt-2">First Name: {data.user.firstName}</p>
                <p class="mt-2">Last Name: {data.user.lastName}</p>
                <p class="mt-2">Maiden Name: {data.user.maidenName}</p>
                <p class="mt-2">Age: {data.user.age}</p>
                <p class="mt-2">Gender: {data.user.gender === 'male' ? 'M' : 'F'}</p>
                <p class="mt-2">Email: <br />{data.user.email}</p>
                <p class="mt-2"><i class="bi bi-telephone-fill"></i> {data.user.phone}</p>
                <p class="mt-2">Username: {data.user.username}</p>
                <p class="mt-2"><i class="bi bi-cake-fill"></i> Birth Date: {data.user.birthDate}</p>
                <p class="mt-2"><i class="bi bi-droplet-fill"></i> Blood Group: {data.user.bloodGroup}</p>
                <p class="mt-2">Height: {data.user.height}</p>
                <p class="mt-2">Weight: {data.user.weight}</p>
                <p class="mt-2"><i class="bi bi-eye-fill"> </i> Eye Color: {data.user.eyeColor}</p>
                <p class="mt-2">Hair Color: {data.user.hair.color}</p>
                <p class="mt-2">Hair Type: {data.user.hair.type}</p>
                <p class="mt-2">Domain: <br />{data.user.domain}</p>
                <p class="mt-2">University: {data.user.university}</p>
            </article>
            <article class="back grid grid-cols-3">
                <p>Bank Card Expire:<br /> {data.user.bank.cardExpire}</p>
                <p>Bank Card Number: {data.user.bank.cardNumber}</p>
                <p>Bank Card Type: {data.user.bank.cardType}</p>
                <p>Bank Currency: {data.user.bank.currency}</p>
                <p>Bank IBAN:<br /> {data.user.bank.iban}</p>
                <p>Company Department: {data.user.company.department}</p>
                <p>Company Name: {data.user.company.name}</p>
                <p>Company Title: {data.user.company.title}</p>
                <p>Address: {data.user.address.address}</p>
                <p>City: {data.user.address.city}</p>
                <p>Postal Code: {data.user.address.postalCode}</p>
                <p>State: {data.user.address.state}</p>
            </article>
        </div>
    </div>
</div>

<style>
    .flip-container {
        width: 700px;
        height: 500px;
        perspective: 1000px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition:
            transform 0.6s,
            opacity 0.4s ease-in 0.1s;
        transform-style: preserve-3d;
        /* opacity: 1; */
    }
    @media (max-width: 700px) {
        .flip-container {
            width: 450px;
            height: 375px;
            font-size: small;
            perspective: 1000px;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition:
                transform 0.6s,
                opacity 0.4s ease-in 0.1s;
            transform-style: preserve-3d;
        }
    }

    @media (max-width: 500px) {
        .flip-container {
            width: 360px;
            height: 400px;
            font-size: x-small;
            perspective: 1000px;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition:
                transform 0.6s,
                opacity 0.4s ease-in 0.1s;
            transform-style: preserve-3d;
        }
    }
    .flip-container.flipped {
        transform: rotateY(180deg);
        /* opacity: 0; */
    }

    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
    }

    .back {
        transform: rotateY(180deg);
    }
</style>
