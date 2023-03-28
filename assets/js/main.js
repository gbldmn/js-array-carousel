let prima = document.querySelector(".prima");
let dopo = document.querySelector(".dopo");

console.log(prima, dopo);


dopo.addEventListener('click', function(){
//  ragionamento da fare: selezionare il div con active
let activeItem = document.querySelector('.item.active');
console.log(activeItem)

let itemToActivate = activeItem.nextElementSibling;
console.log(itemToActivate)

if (activeItem.classList.contains ('ultimo')) {
    itemToActivate = document.querySelector('.item.primo');
}
// rimozione classe block
activeItem.classList.remove('active');
// aggiunta classe block all'elemento successivo
itemToActivate.classList.add('active');

})

prima.addEventListener('click', function(){
    //  ragionamento da fare: selezionare il div con active
    let activeItem = document.querySelector('.item.active');
    console.log(activeItem)
    
    let itemToActivate = activeItem.previousElementSibling;
    console.log(itemToActivate)
    
    if (activeItem.classList.contains ('primo')) {
        itemToActivate = document.querySelector('.item.ultimo');
    }
    // rimozione classe block
    activeItem.classList.remove('active');
    // aggiunta classe block all'elemento successivo
    itemToActivate.classList.add('active');
    
    })



    let arrayImmagini = [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg"
        "img/img4.jpg",
        "img/img5.jpg"
    ]

    