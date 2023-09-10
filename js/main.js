const form = document.querySelector('#novoItem')

form.addEventListener('submit', (item) => {
    item.preventDefault();
    const nome = item.target.elements['nome'].value
    const qtde = item.target.elements['quantidade'].value
    console.log(nome, qtde);
})