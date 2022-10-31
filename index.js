fetch('./urls.json')
  .then((res) => res.json())
  .then(JSON.stringify)
  .then(console.log)
