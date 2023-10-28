import axios from 'axios'
const BASE_URL = "https://api.github.com/users";

// To get followers
// https://api.github.com/users/jsa
// Get Repo
// https://api.github.com/users/mojombo/repos

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

