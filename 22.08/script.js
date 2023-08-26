const listaTabela = document.getElementById('table');
const botaoInserir = document.getElementById('btnInserir');
console.log(botaoInserir);

let listaPessoa = [];
let idCounter = 1;

function cadastrarPessoa() {
    const pessoa = {
        id: idCounter++,
        nome: document.getElementById('txtNome').value,
        telefone: document.getElementById('txtFone').value,
    }
    listaPessoa.push(pessoa)
    console.log(listaPessoa)
    // updateList()
}

botaoInserir.addEventListener('click', cadastrarPessoa)

// function updateList() {
//     listaTabela.innerHTML = `
//     <thead>
//         <th scope="col">ID</th>
//         <th scope="col">Nome</th>
//         <th scope="col">Telefone</th>
//         <th scope="col">Ação</th>
//     </thead>
//     <tbody>
        
//         ${

//         }
//     </tbody>
//     `
// }