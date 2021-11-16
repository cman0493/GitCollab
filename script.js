let potterIndex = (Math.floor(Math.random() * 290)+1);
console.log(potterIndex);
async function potterName(){
  try {
    let potterIndex = (Math.floor(Math.random() * 290)+1);
    console.log('GET Successful');
    const randName = await axios.get('http://hp-api.herokuapp.com/api/characters');
    console.log(randName.data[potterIndex].name);
    nameLoc.innerText = randName.data[potterIndex].name
    potterIndex = "";
  }
  catch (err){
    console.log('GET fail');
    console.log(err);
  }
}
potterName();
const button = document.querySelector("button")
button.addEventListener('click', () => {
  potterName();
});
const nameLoc = document.querySelector('.charName');