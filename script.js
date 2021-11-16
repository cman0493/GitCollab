async function getData() {

  const response = await fetch('http://hp-api.herokuapp.com/api/characters')
  const data = await response.json()
}
var data = JSON.parse(this.response)

data.forEach(Character => {
console.log(Character.name)
})

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
data.forEach(movie => {
  console.log(movie.title)
})
} else {
console.log('error')
}
const app = document.getElementById('root')
const character = document.createElement('character')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(character)
app.appendChild(container)

data.forEach(character => {
  console.log(character.name)
  console.log(movie.title)
})

data.forEach(character => {
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  const h1 = document.createElement('h1')
  h1.textContent = character.name
  const p = document.createElement('p')
  character.name = character.name.substring(0, 300)
  p.textContent = `${character.name}...`
  container.appendChild(card)
  card.appendChild(h1)
  card.appendChild(p)
})

const errorMessage = document.createElement('marquee')
errorMessage.textContent = `Gah, it's not working!`
app.appendChild(errorMessage)