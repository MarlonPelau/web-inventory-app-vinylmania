console.log('this works')

// [01] grab the elements on the web page using class names
const grid = document.querySelector('.grid-container');
const albums = document.querySelectorAll('article');

// iterate  or loop over each button and apply the event and callback
albums.forEach(album => {
    album.addEventListener('click', removeAlbum);
})

// remove each album from the page 
function removeAlbum(event) {
    console.log(event)
    if(event.target.className === "delete"){
        this.style.display = "none"
    }
}

// [02] Toggle Inventory Status

const inventoryBtns = document.querySelectorAll('.inventory');

inventoryBtns.forEach(btn => {
    btn.addEventListener('click', updateStatus);
})

function updateStatus(event) {
    console.log(event.target.innerText)
    if(event.target.innerText === "In-stock"){
        event.target.innerText = "Out of Stock"
    } else if(event.target.innerText === "Out of Stock"){
        event.target.innerText = "In-stock"
    }
}

// [03] Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', createNewAlbum)

function createNewAlbum(event){
    event.preventDefault();
    console.log('clicked', event)

    const title = document.getElementById('title').value
    const artist = document.getElementById('artist').value
    const price = document.getElementById('price').value

    // create a new article .. add image, 
    const article = document.createElement("article");
    article.textContent = title
    grid.prepend(article)


    // if(title.value == "" || artist.value == "" || price.value == ""){
    //     // create a new list item element
        

    // } else {
    //     /// do something else
    //     form.reset()
    //     // add new article to index.html
    // }

}

// [03] Form Reset
// const reset = document.querySelector('.reset');

// form.addEventListener('click', resetForm)

// function resetForm(){
//     form.reset()
// }