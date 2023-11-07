import axios from "axios";
const { localStorage } = window;

const BASE_URL = "https://api.github.com/users";
// To get user match
// https://api.github.com/search/users?q=user_id

// To get user details (also followers count)
// https://api.github.com/users/jsa

// To get followers of a user
// https://api.github.com/users/mojombo/followers

// Get Repo
// https://api.github.com/users/mojombo/repos

// Getting default list of users.
export async function getAllUsers(setUsers, setFilterUsers) {
  let defaultData = JSON.parse(localStorage.getItem("users")) || [];
  if (defaultData.length === 0) {
    console.log("calling default api ")
    let res = await axios.get(BASE_URL);
    const users = res.data.map((data) => JSON.stringify(data));
    localStorage.setItem("users", JSON.stringify(users));
    defaultData = JSON.parse(localStorage.getItem("users"));
  }
  setUsers(defaultData);
  setFilterUsers(defaultData);

  // console.log("data => ",localStorage.getItem('users'))

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

export async function getFollowers(user_id, setFollowers) {
  await axios
    .get(BASE_URL + `/${user_id}/followers`)
    .then((res) => {
      setFollowers(res.data);
    })
    .catch((error) => {
      return {};
    });
}
export async function getUserMatch(user_id, setUsers, setFilterUsers) {
  let res = await axios.get(`https://api.github.com/search/users?q=${user_id}`);
  setUsers((oldData) => {
    oldData = [...oldData, ...res.data.items];
    return oldData;
  });
  setFilterUsers((oldData) => {
    return (oldData = [...oldData, ...res.data.items]);
  });
}
