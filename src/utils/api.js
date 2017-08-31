
export const API_URL = "http://localhost:5001"


// Generate a unique token which is saved in localStorage
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  Authorization: token
}
