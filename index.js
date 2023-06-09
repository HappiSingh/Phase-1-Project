
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
        defense: e.target.defense.value,
      };

      if(newCard.name === "" || newCard.image === "" || newCard.description === "" || newCard.attack === "" || newCard.defense === "") {
          document.getElementById("error").innerHTML = "Enter in the required information.";
          document.getElementById("error").style.color = "red";
    } else {
          renderAllCards(newCard);
    
          addNewCard(newCard);
          clearForm(newCard);
      }
    });
  };
  
  // Event listener to wait till DOM loads to run any submits/new card additions
  document.addEventListener("DOMContentLoaded", init);
  
  // Clearing the form after submit is clicked
  function clearForm(newCard) {
    let formInfo = document.getElementById("form");
    formInfo.reset(newCard);
  }
  
  //Creating the card and adding the data
  
  function renderAllCards(card) {
    
    let li = document.createElement("li");
    li.className = "card";
    li.innerHTML = ` 
        <div class="content">
            <img src="${card.image}">
            <div>
                <p><b>Name</b>: ${card.name}</p>
                <p><b>Attack</b>: ${card.attack}</p>
                <p><b>Defense</b>: ${card.defense}</p>
                <p><b>Description</b>: ${card.description}</p>
                <button id="removeCard"> Remove </button>
            </div>
        </div>
      `;
  
    // Click event listener on the remove button
    li.querySelector("#removeCard").addEventListener("click", () => {
      deleteCard(card.id);
      li.remove();
    });
  
    // Adding the newly created card to the DOM
    document.querySelector("#card-list").appendChild(li);
  }
  
  //Fetch's all cards and data in the json file
  //Uses forEach array method to fetch and render the data one at a time
  function getAllCards() {
    fetch("http://localhost:3000/yugioh")
      .then((res) => res.json())
      .then((cardData) => cardData.forEach((card) => renderAllCards(card)));
  }
  
  
  //Adding the new card entered from form to the db.json
  function addNewCard(newCard) {
    JSON.stringify(newCard);
    fetch("http://localhost:3000/yugioh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    }).then((res) => res.json());
  }
  
  //Deletes the card from the db.json when user clicks remove
  function deleteCard(id) {
    fetch(`http://localhost:3000/yugioh/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  
  //Starts the render of cards on site load
  function initialize() {
    getAllCards();
  }
  initialize();