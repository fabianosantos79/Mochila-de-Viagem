const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(elemento => {
    console.log(elemento.nome, elemento.quantidade);
})

form.addEventListener('submit', (item) => {
    item.preventDefault();
    const nome = item.target.elements['nome']
    const qtde = item.target.elements['quantidade']

    criarElemento(nome.value, qtde.value)

    nome.value = ''
    qtde.value = ''
})

function criarElemento(nome, quantidade) {
    const li = document.createElement('li')
    li.classList.add('item')

    const strong = document.createElement('strong')
    strong.innerHTML = quantidade

    li.appendChild(strong)
    li.innerHTML += nome

    lista.appendChild(li)

    const itemAtual = {
        nome: nome,
        quantidade: quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem('itens', JSON.stringify(itens))

}