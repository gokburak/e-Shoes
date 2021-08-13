const smallImages = document.querySelectorAll(".smallPhotos img")
const bigPhoto = document.querySelector(".bigPhoto img")
const currentSize = document.querySelector(".current-size span")
const numbers = document.querySelectorAll(".numbers div")

smallImages.forEach(item =>{
    item.addEventListener("mouseover",()=>{
        bigPhoto.src=item.src;
    })
})
numbers.forEach(item =>{
    item.addEventListener("click",()=>{
        currentSize.textContent=item.textContent
    })
})