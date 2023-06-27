import React from "react";
import { useState } from "react";

const GithubFinder = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  //funciont Fetch

  const fetchUser = async () => {
    try {
      const response = await fetch(` https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error"), error.message;
    }
  };
  //es lo que muestra el navegador
  return (
    <div>
      <div>
        <h1>Buscador Github</h1>
        <div>
          <input
            type="text"
            placeholder="ingresa un usuario"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar </button>
        </div>
        <article>
          <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="" />
            <h4>{user.login}</h4>
            <p>{user.bio}</p>
            <h3>{user.company}</h3>
            <h5>{user.public_repos}</h5>
          </div>
        </article>
      </div>
    </div>
  );
};

export default GithubFinder;
