import axios from 'axios';

const custom = axios.create({
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
})

const getData = async (num) => {
    const { data: users } = await custom(
        `https://jsonplaceholder.typicode.com/users/+${num}`

    );

    const { data: posts } = await custom(
        `https://jsonplaceholder.typicode.com/posts/+${num}`
    );

    console.log(users);
    console.log(posts);
}


export default getData;