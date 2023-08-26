//--------------------------------------------------------------------------
let bd_contacts = []

function inserirContato(){

    const contact = {
        nome: document.getElementById('textNome').value,
        fone: document.getElementById('textFone').value
    }

    bd_contacts = getLocalStorage();
    console.log(bd_contacts)
    

    bd_contacts.push(contact);

    setLocalStorage(bd_contacts);

    updateTable()

}
//---------------------------STORAGE-------------------------------------
function getLocalStorage(){
    const storedContacts = JSON.parse(localStorage.getItem('bd_contacts'));
    return storedContacts || [];
}
//----------------------------------------------------------------
function setLocalStorage(bd_contacts){

    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts));
}
//-----------------------------TABLE------------------------------------
function updateTable(){
    cleanTable()
    const bd_contacts = getLocalStorage();
    bd_contacts.forEach(newRow)
}
//----------------------------------------------------------------
function newRow(contact, index){
    const line = document.createElement('tr');
    line.innerHTML = 
    `
        <td>${index}</td>
        <td>${contact.nome}</td>
        <td>${contact.fone}</td>
        <td><button data-index="${index}" onclick="remove(this)">Delete</button></td>
    `;

    document.querySelector('#tbContacts>tbody').appendChild(line);
}
//----------------------------------------------------------------
function cleanTable() {
    const tbody = document.querySelector('#tbContacts>tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
//----------------------------------------------------------------
function remove(button){
    const bd_contacts = getLocalStorage();
    const index = button.getAttribute('data-index');
    
    bd_contacts.splice(index, 1); // Remove o contato do array pelo índice
    
    setLocalStorage(bd_contacts);
    updateTable();
}
//----------------------------------------------------------------
updateTable()