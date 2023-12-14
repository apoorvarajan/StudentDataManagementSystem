import React from 'react'
const auth = async () => {
    const res = await fetch("http://localhost:5001/auth",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }})
    return res
}
export default auth