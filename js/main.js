const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')

form.addEventListener('submit', (item) => {
    item.preventDefault();
    const nome = item.target.elements['nome'].value
    const qtde = item.target.elements['quantidade'].value

    criarElemento(nome, qtde)

    nome = ''
    qtde = ''
})

function criarElemento(nome, quantidade) {
    const li = document.createElement('li')
    li.classList.add('item')

    const strong = document.createElement('strong')
    strong.innerHTML = quantidade

    li.appendChild(strong)
    li.innerHTML += nome

    lista.appendChild(li)

    localStorage.setItem('nome', nome)
    localStorage.setItem('quantidade', quantidade)
}