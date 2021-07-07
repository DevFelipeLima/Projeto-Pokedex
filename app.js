const getpokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const fetchPokemon = () => {
    const pokemonPromeses = []

    for (let i = 1; i<=10; i++){
        pokemonPromeses.push(fetch(getpokemonUrl(i)).then(response => response.json()))  
    }
Promise.all(pokemonPromeses)
    .then(pkms=>{  
    const lispokemons = pkms.reduce((accumulator, pokemon)=>{
    const types=pokemon.types.map(typeinfo=>typeinfo.type.name)

    accumulator +=
     `<li class='card ${types[0]}'>
        <img class='card-image' alt='${pokemon.name}' src='https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'/>
        <h2 class'card-title'>${pokemon.id}.${pokemon.name}<h2>
        <pClass='card-subtitle'>${types.join(' | ')}<p>
    </li>` 
        
        return accumulator
        }, '')
        const ul=document.querySelector('[data-js="pokedex"]')


        ul.innerHTML = lispokemons
        

    })

}
fetchPokemon()