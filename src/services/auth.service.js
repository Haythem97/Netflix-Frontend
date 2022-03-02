export default {
    register(user) {
        return fetch("http://localhost:3333/api/v1/users/register", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch('http://localhost:3333/api/v1/users/get-user', {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    getFilm(token) {
        return fetch('http://localhost:3333/api/v1/Films/get-film', {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, user) {
        return fetch('http://localhost:3333/api/v1/users/update-user', {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    updateFilm(token, Film) {
        return fetch('http://localhost:3333/api/v1/Films/update-Film', {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(Film),
        })
        .then(res => res.json())
    },
    verifyToken(token) {
        return fetch('http://localhost:3333/api/v1/users/verifytoken', {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    
}