fetch('https://api.dictionaryapi.dev/api/v2/entries/en/in').then(
  resp => resp.json() // this returns a promise
).then(repos => {
  console.log(repos[0]['phonetics']['text'])
}).catch(ex => {
  console.error(ex);
})
