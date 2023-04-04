function renderAll(arrApi){
    const listMian = document.querySelector(".list__main")
    listMian.innerHTML = ""
    arrApi.forEach(element => {

        const cards = crateLi(element)

        listMian.appendChild(cards)
    });

}


function crateLi({name, url}){

    const li = document.createElement("li")
    const img = document.createElement("img")
    const p = document.createElement("p")

    img.src = "./src/assets/1 2.png"
    // img.src = url
    img.alt = name

    p.innerText = name

    li.append(img, p)
    
    return li 
}


function createLoading (){
    const p = document.createElement("p")
    const li = document.createElement("li")

    li.classList = "loading"

    p.innerText = "Carregando ..."

    li.appendChild(p)

    return li
}
