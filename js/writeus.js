const contactsLink = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal-writeus");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsForm = contactsPopup.querySelector(".contacts-form");
const contactsName = contactsPopup.querySelector(".contacts-name");
const contactsEmail = contactsPopup.querySelector(".contacts-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
  contactsName.value = storage;
  contactsEmail.focus();
  } else {
    contactsName.focus();
  }
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsEmail.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactsName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.add("modal-error");
    }
  }
});
