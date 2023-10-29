import axios from "axios";
const BASE_URL = "https://api.github.com/users";

// To get user details (also followers count)
// https://api.github.com/users/jsa

// To get followers of a user
// https://api.github.com/users/mojombo/followers

// Get Repo
// https://api.github.com/users/mojombo/repos

// Getting default list of users.
export async function getAllUsers(setUsers, setFilterUsers) {
  let res = await axios.get(BASE_URL);
  setUsers(res.data);
  setFilterUsers(res.data);
//   console.log("data", res.data);
}
// Getting details of a single user
export async function getUserDetails(user_id, setuserdata) {
  await axios
    .get(BASE_URL + `/${user_id}`)
    .then((res) => {
        setuserdata(res.data);
    })
    .catch((error) => {
      return {};
    });
}

export async function getRepos(user_id, setRepos) {
  await axios
    .get(BASE_URL + `/${user_id}/repos`)
    .then((res) => {
      setRepos(res.data);
    })
    .catch((error) => {
      return {};
    });
}

export async function getFollowers(user_id,setFollowers){
    await axios
      .get(BASE_URL + `/${user_id}/followers`)
      .then((res) => {
        setFollowers(res.data);
      })
      .catch((error) => {
        return {};
      });
}
