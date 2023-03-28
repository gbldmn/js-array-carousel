

 


 




    let arrayImmagini = [
        "img/01.webp",      
        "img/02.webp",      
        "img/03.webp",      
        "img/04.webp",      
        "img/05.webp",     
    ]

    for (let i = 0; i < arrayImmagini.length; i++) {
        // document.querySelector('.items').innerHTML += 
        // `<div class="item">
        //     <img src="${arrayImmagini[i]}" alt="">
        // </div>`
        console.log(document.querySelector('.items'))
        console.log(arrayImmagini[i])
        console.log(i)
        if (i == 0 ) {
            document.querySelector('.items').innerHTML += 
            `<div class="item active primo">
                <img src="${arrayImmagini[i]}" alt="">
            </div>`
        } else if (i == arrayImmagini.length - 1) { 
            document.querySelector('.items').innerHTML += 
            `<div class="item ultimo">
                <img src="${arrayImmagini[i]}" alt="">
            </div>`
          } else {
            document.querySelector('.items').innerHTML += 
            `<div class="item">
                <img src="${arrayImmagini[i]}" alt="">
            </div>`
          }
        
       
    }
       let prima = document.querySelector(".prima");
       let dopo = document.querySelector(".dopo");

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


    