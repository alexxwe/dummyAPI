<script lang="ts">
    import type { userDto } from '$lib/types/userDto'
    import User from '$lib/components/User.svelte'
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
<div class="h-screen">

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card mx-auto {userColor[data.user.id]}" on:click={toggleCard}>
    <div class="flip-container {isFront ? '' : 'flipped'}">
        <div class="front">
        <img class="h-12" src={data.user.image} alt={data.user.image} title={data.user.image} />
        <p>User ID: {data.user.id}</p>
        <p>First Name: {data.user.firstName}</p>
        <p>Last Name: {data.user.lastName}</p>
        <p>Maiden Name: {data.user.maidenName}</p>
        <p>Age: {data.user.age}</p>
        <p>Gender: {data.user.gender}</p>
        <p>Email: {data.user.email}</p>
        <p>Phone: {data.user.phone}</p>
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
            </div>
        <div class="back">
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
        </div>
    </div>
</div>
</div>


<style>
    .card {
        width: 700px;
        height: 500px;
        perspective: 1000px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .flip-container {
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    
    .flip-container.flipped {
        transform: rotateY(180deg);
    }
    
    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
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

<div>
    <!-- Accessing user data -->
    <p>
        Image:
        <img class="h-12" src={data.user.image} alt={data.user.image} title={data.user.image} />
    </p>
    <p>User ID: {data.user.id}</p>
    <p>First Name: {data.user.firstName}</p>
    <p>Last Name: {data.user.lastName}</p>
    <p>Maiden Name: {data.user.maidenName}</p>
    <p>Age: {data.user.age}</p>
    <p>Gender: {data.user.gender}</p>
    <p>Email: {data.user.email}</p>
    <p>Phone: {data.user.phone}</p>
    <p>Username: {data.user.username}</p>
    <p>Password: {data.user.password}</p>
    <p>Birth Date: {data.user.birthDate}</p>
    <p>Blood Group: {data.user.bloodGroup}</p>
    <p>Height: {data.user.height}</p>
    <p>Weight: {data.user.weight}</p>
    <p>Eye Color: {data.user.eyeColor}</p>
    <p>Hair Color: {data.user.hair.color}</p>
    <p>Hair Type: {data.user.hair.type}</p>
    <p>Domain: {data.user.domain}</p>
    <p>IP Address: {data.user.ip}</p>
    <p>MAC Address: {data.user.macAddress}</p>
    <p>University: {data.user.university}</p>
    <p>Bank Card Expire: {data.user.bank.cardExpire}</p>
    <p>Bank Card Number: {data.user.bank.cardNumber}</p>
    <p>Bank Card Type: {data.user.bank.cardType}</p>
    <p>Bank Currency: {data.user.bank.currency}</p>
    <p>Bank IBAN: {data.user.bank.iban}</p>
    <p>Company Department: {data.user.company.department}</p>
    <p>Company Name: {data.user.company.name}</p>
    <p>Company Title: {data.user.company.title}</p>
    <p>User Agent: {data.user.userAgent}</p>

    <!-- Accessing user address information -->
    <p>Address: {data.user.address.address}</p>
    <p>City: {data.user.address.city}</p>
    <p>Postal Code: {data.user.address.postalCode}</p>
    <p>State: {data.user.address.state}</p>
    <p>Coordinates: {data.user.address.coordinates.lat}, {data.user.address.coordinates.lng}</p>
</div>