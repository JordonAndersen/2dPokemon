async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }
  
  
  export async function signup(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:80/api/accounts/signup",payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:80/api/accounts/get-token", payload)
    return body.token
  }
  
  export async function getPokemon(token) {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }  }
    const body = await basicFetch("http://localhost:80/api/pokemon", payload)
    return body.result
  }