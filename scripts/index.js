const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsColumn = document.querySelector(".cards__column");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  return cardElement;
}

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalNameInput = editModal.querySelector("#name-input");
const editModalDescriptionInput = editModal.querySelector("#description-input");

function openModal() {
  editModalNameInput.value = profileNameElement.textContent;
  editModalDescriptionInput.value = profileDescriptionElement.textContent;
  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editModalNameInput.value;
  profileDescriptionElement.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
editModalCloseButton.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);

addCardFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(captionInputElement.value);
  console.log(linkInputElement.value);

  addCardModal.classList.remove("modal_is-opened");
});

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsColumn.prepend(cardElement);
}

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
