function getRequest(url) {
  return fetch(url).then(response => {
  if (response.status === 200) {
    return response.json()
  }
})
}


window.getrequest = getRequest