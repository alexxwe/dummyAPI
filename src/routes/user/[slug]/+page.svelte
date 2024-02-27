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

<div class="h-screen flex items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="mx-auto {isFront ? '' : 'flipped'}" on:click={toggleCard}>
        <div class="flip-container {userColor[data.user.id]} {isFront ? '' : 'flipped'} ">
            <article class="front m-2 grid grid-cols-3">
                <img class="h-12 mx-auto" src={data.user.image} alt={data.user.image} title={data.user.image} />
                <p>User ID: {data.user.id}</p>
                <p>First Name: {data.user.firstName}</p>
                <p>Last Name: {data.user.lastName}</p>
                <p>Maiden Name: {data.user.maidenName}</p>
                <p>Age: {data.user.age}</p>
                <p>Gender: {data.user.gender}</p>
                <p>Email: {data.user.email}</p>
                <p><i class="bi bi-telephone-fill"></i>Phone: {data.user.phone}</p>
                <p>Username: {data.user.username}</p>
                <p>Birth Date: {data.user.birthDate}</p>
                <p>Blood Group: {data.user.bloodGroup}</p>
                <p>Height: {data.user.height}</p>
                <p>Weight: {data.user.weight}</p>
                <p>Eye Color: {data.user.eyeColor}</p>
                <p>Hair Color: {data.user.hair.color}</p>
                <p>Hair Type: {data.user.hair.type}</p>
                <p>Domain: {data.user.domain}</p>
                <p>University: {data.user.university}</p>
            </article>
            <article class="back grid grid-cols-3">
                <p>Bank Card Expire: {data.user.bank.cardExpire}</p>
                <p>Bank Card Number: {data.user.bank.cardNumber}</p>
                <p>Bank Card Type: {data.user.bank.cardType}</p>
                <p>Bank Currency: {data.user.bank.currency}</p>
                <p>Bank IBAN: {data.user.bank.iban}</p>
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
