import type { userDto } from '$lib/types/userDto.js'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }): Promise<{ users: Array<userDto>; user: userDto | null }> {
    try {
        const userResponse = await fetch('https://dummyjson.com/users')
        const users: Array<userDto> = (await userResponse.json()).users

        const response = await fetch(`https://dummyjson.com/users/${params.slug}`)
        const data: userDto = await response.json()

        return {
            users,
            user: data,
        }
    } catch (error: unknown) {
        return {
            users: [],
            user: null,
        }
    }
}
