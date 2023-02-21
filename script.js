const SUPERHERO_TOKEN='10223569763528853'
const url=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const button=document.getElementById('button')
const gethero=(id)=>{
  fetch(`${url}/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    const superhero=json
    getHeroinfo(superhero)
})
}

const Randomhero=()=>{
  const numberofids=731
  return Math.floor(Math.random()*numberofids+1)
}


button.onclick=()=>gethero(Randomhero())


let input=document.getElementById('input')

const searchhero=(name)=>{

  fetch(`${url}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
    const superhero=json
    getHeroinfo(superhero.results[0])
  })
  
}

const search=document.getElementById('search')

search.onclick=()=>searchhero(input.value)

const emoji={intelligence:'🧠',
            strength:'💪',
            speed:'⚡',
             durability:'🏋️',
             power:'📊',
             combat:'⚔️'
}

const getHeroinfo=(character)=>{
const name=`<h1>${character.name}</h1>`
  const image=`<img src="${character.image.url}" width=300 height=300/>`
const stats=Object.keys(character.powerstats).map(stats=>{
return `<p>${emoji[stats]}${stats.toUpperCase()}:${character.powerstats[stats]}</p>`
}).join()
document.getElementById('imagediv').innerHTML=`${name}${image}${stats}`
}