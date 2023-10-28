import axios from 'axios'
const BASE_URL = "https://api.github.com/users";

export async function getAllUsers(){
    let users = await axios.get(BASE_URL)
    return users.data;
}


export function getFollowers(){
    let followers = [{}]
    return followers;
}

export function getRepos(){
    let repos = [{}]
    return repos;
}

