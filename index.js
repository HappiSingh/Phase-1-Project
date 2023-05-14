
// Submit event listener on the form's submit button
// Will grab data in the form and add it to newCard

const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (e) => {
        //prevent auto-refresh on submit
      e.preventDefault();

    //console.log(e);
      let newCard = {
        name: e.target.name.value,
        image: e.target.image.value,
        description: e.target.description.value,
        attack: e.target.attack.value,
        defense: e.target.defense.value
    }
    renderAllCards(newCard)
    addNewCard(newCard)
    clearForm(newCard)
})}

// Event listener to wait till DOM loads to run any submits/new card additions
document.addEventListener("DOMContentLoaded", init);
    

// Clearing the form after submit is clicked
function clearForm(newCard) {
    let formInfo = document.getElementById('form')
    formInfo.reset(newCard)
}
  





//DOM Render Functions
function renderAllCards(card){
    //Build animal
    let li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = ` 
    <img src="${card.image}">
    <div class="content">
    <p>Name: ${card.name}</p>
    <p>Attack: ${card.attack}</p>
    <p>Defense: ${card.defense}</p>
    <p>Description: 
    ${card.description}</p>
    </div>
    <div>
    <button id="removeCard"> Remove </button>
    </div>
    `

    li.querySelector('#removeCard').addEventListener('click', () => {
        li.remove();
        deleteCard(card.id)
    });




    // Add to DOM
    document.querySelector('#card-list').appendChild(li);
}



//Fetch Request
function getAllCards(){
    fetch('http://localhost:3000/yugioh')
    .then(res => res.json())
    .then(cardData => cardData.forEach(card => renderAllCards(card)))
    }

    
    



    function addNewCard(newCard) {
        (JSON.stringify(newCard))
    fetch('http://localhost:3000/yugioh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCard)
    })
    .then(res => res.json())

    }
    


    function initialize(){
        getAllCards()
    };

    initialize();
    
    function deleteCard(id){
        fetch(`http://localhost:3000/yugioh/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    
    