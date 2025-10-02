import axios from "axios"

export async function fetchPosts () {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data
    } catch (error) {
        console.error(error);
    }
}