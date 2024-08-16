/* const fetchPromise = fetch("./data.json");

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].title);
    });
}); */

/* getting container fron html */
const containerCards = document.getElementById("cards");

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
      createCard(card);
    });
  })
  .catch((error) => {
    console.error(`Could not get cards: ${error}`);
  });

function createCard(card) {
    /* create element */
  const newCard = document.createElement("li");
  /* inner html in new card */
  newCard.innerHTML = `
        <li class="card__item">
          <article class="card card__container">
            <div class="card-bg">
              <img
                src="./images/icon-${card.title.toLowerCase()}.svg"
                alt="Exercise Icon"
                class="card__icon"
              />
            </div>
            <div class="card__text l-grid">
              <h1 class="card__title white-text">${card.title}</h1>
              <img
                class="card__menu--dots"
                src="./images/icon-ellipsis.svg"
                alt="three dots icon, maybe menu"
              />
              <p class="card__text-curr-time white-text"><span>32</span> hrs</p>
              <p class="card__text-prev-time light-blue">Last week <span>36</span> hrs</p>
            </div>
          </article>
        </li>
    `;

  containerCards.appendChild(newCard);
}
