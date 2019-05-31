export default function simpsonsAPI(){
  console.log('attempted fetch');
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch quotes';

      return json;
    })
    .then(json => json[0]);
}
