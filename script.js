/* getting container fron html */
const containerCards = document.getElementById("cards");
const menuItems = document.querySelectorAll(".hero__navigation_item");

async function fetchData() {
  /* creating fetch */
  const response = await fetch("./data.json");

  /* if the response not okay then make an exception */
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  /* saving data in data varibla and after returning it */
  const data = await response.json();
  return data;
}

/* saving result of function in varible */
const promise = fetchData();
promise
  .then((data) => {
    console.log(data);
    /* iterating all data */
    data.forEach((card) => {
      /* create card for every element */
      createCard(card.title, card.timeframes);
    });
  })
  .catch((error) => {
    console.error(`Could not get cards: ${error}`);
  });

/* adding listener to navigation */
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const itemText = e.currentTarget.textContent.toLowerCase();
    console.log(itemText);

    switch (itemText) {
        case "daily":
          
          break;
        case "monthly":
          
          break;
        
        default:
          
          break;
      }
  });
});

/* Creating cards */
function createCard(title, timeframes) {
  /* create element */
  const newCard = document.createElement("li");
  /* inner html in new card */
  newCard.innerHTML = `
        <li class="card__item">
          <article class="card card__container bg--${title
            .replace(/\s/g, "")
            .toLowerCase()}">
            <div class="card-bg">
              <img
                src="./images/icon-${title
                  .replace(/\s/g, "")
                  .toLowerCase()}.svg"
                alt="Exercise Icon"
                class="card__icon"
              />
            </div>
            <div class="card__text l-grid">
              <h1 class="card__title white-text">${title}</h1>
              <img
                class="card__menu--dots"
                src="./images/icon-ellipsis.svg"
                alt="three dots icon, maybe menu"
              />
              <p class="card__text-curr-time white-text"><span>${
                timeframes.weekly.current
              }</span> hrs</p>
              <p class="card__text-prev-time light-blue">Last week <span>${
                timeframes.weekly.previous
              }</span> hrs</p>
            </div>
          </article>
        </li>
    `;

  containerCards.appendChild(newCard);
}
