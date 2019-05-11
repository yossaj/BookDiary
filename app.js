document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFromSubmit)

    const del = document.querySelector('#del')
    del.addEventListener('click', handleDel)
})




const handleFromSubmit = function (event) {
    event.preventDefault()
    // const list = document.querySelector('#reading-list')
    // list.appendChild(newListItem)
    const locate = document.querySelector('#reading-list')
    const newListItem = document.createElement('li')
    const title = document.createElement('h2')
   title.textContent = `${event.target.title.value}`

    const auth = document.createElement('h3')
    auth.textContent = `${event.target.author.value}`

    const category = document.createElement('p')
    category.textContent = `${event.target.category.value}`
    // const newListItem = document.createElement('li')
    // newListItem.textContent = `${event.target.title.value}`
    const notes = document.createElement('p')
    notes.textContent = `${event.target.notes.value}`

    locate.appendChild(newListItem)
    newListItem.appendChild(title)
    newListItem.appendChild(auth)
    newListItem.appendChild(category)
    newListItem.appendChild(notes)
    const form = document.querySelector('#new-item-form')
    form.reset()
    console.log(event.target)
}


const handleDel = function (thing){
    // event.preventDefault()
    console.log(thing.target)
    var locate = document.querySelector('#reading-list');
    var newListItem = document.querySelector('#reading-list li')
    locate.removeChild(newListItem);

}





