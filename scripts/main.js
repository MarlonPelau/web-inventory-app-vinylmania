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
    
    const title = document.getElementById('title').value
    const artist = document.getElementById('artist').value
    const price = document.getElementById('price').value
    
    console.log('clicked', title, artist, price)
    // create a new article .. add image, 
    const article = document.createElement("article");
    const paragraph = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute("src", "https://www.turntablelab.com/cdn/shop/products/nas-illmatic_7cb9037b-57d6-4874-bbf6-496059aa7d7c_1200x1200.jpg?v=1571263088")
    image.style.height = "300px";
    paragraph.textContent = `${title} ${artist} $${price}`

    grid.prepend(article)
    article.appendChild(image)
    article.appendChild(paragraph)


    if(!title.value == "" || !artist.value == "" || !price.value == ""){
        // do soemthing
        form.reset()
    }

    form.reset()
}