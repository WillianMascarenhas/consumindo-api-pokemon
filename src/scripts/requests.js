async function todosOsPokemons(){
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        const ul = document.querySelector(".list__main")
        const loading = createLoading()
        
        ul.innerHTML = ""

        ul.appendChild(loading)

        return res.json()
    })
    .then(res => { 
        setTimeout(() =>{
            renderAll(res.results)
        }, 2000)

        return res.results
    })

    return pokemons
}

async function pokemonPorNome (nomeDoPokemon){
    const byname = []
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+nomeDoPokemon , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        const ul = document.querySelector(".list__main")
        const loading = createLoading()
        
        ul.innerHTML = ""

        ul.appendChild(loading)

        return res.json()
    })
    .then(res => {
        byname.push(res)
        
        setTimeout(() =>{
            renderByName(byname)
        },500)

        
        return res
    })
    .catch(err =>{
        alert("Erro na busca, por favor digite novamente")
    })
    return pokemon
}

function renderPesquisa(){
    const input = document.querySelector("input")
    const btn = document.querySelector("#botao__pesquisa")

    
    btn.addEventListener("click", async () =>{
        if(input.value != ""){
            pokemonPorNome(input.value)
            
        }else{
            const allPokemons = await todosOsPokemons()
            
            renderAll(allPokemons)
        }
    })
}


function renderByName(arrApi){
    const ul = document.querySelector(".list__main")
    
    arrApi.forEach(element => {

        ul.innerHTML = ""

        const cards = crateLi(element)
        
        ul.appendChild(cards)
    })
}

todosOsPokemons()
renderPesquisa()