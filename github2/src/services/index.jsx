import { config } from "./config";

//esta funcion consume el api de github y retornara unsa lista de usuarios

export const SearchUsers = async (username) => {
  const response = await fetch(`${config.baseUrl}/search/users?q=${username}`);
  const data = await response.json();

  return data;
};

//esta funcion traera el detalle de cada usuario

export const searchUser = async (username) => {
  const response = await fetch(`${config.baseUrl}/users/${username}`);
  const data = await response.json();
  return data;
};

//

export const getRepos =async(username)=>{
    const response =await fetch(
        `${config.baseUrl}/users/${username}/repos?sort=created`
    )

    const data =await response.json()
    return data;
}
