const fetch = require('node-fetch');
const config = require("../../../config.json")


export const getContent = async (path) => {
    return fetch(`${config.RAINFALL_API_BASE_URL}/${path}`,{
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      const response = res.json()
      return response
    })
    .then(json => {
      return json
    });
}

export const post = async (path, body) => {
    return fetch(`${config.RAINFALL_API_BASE_URL}/${path}`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
        const response = res.json()
        return response
      })
      .then(json => {
        return json
      });
}
