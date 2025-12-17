const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const bioInput = document.querySelector("#bio");
const photoInput = document.querySelector("#photo");
const cardsContainer = document.querySelector(".cards-container");

const userManager = {
  users: [],

  
  init() {
    this.loadFromStorage();
    this.renderUI();
    form.addEventListener("submit", this.handleSubmit.bind(this));
  },

  handleSubmit(e) {
    e.preventDefault();

    if (!nameInput.value.trim() || !roleInput.value.trim() || !bioInput.value.trim()) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    this.addUser();
  },


  addUser() {
    const newUser = {
      id: Date.now(), 
      name: nameInput.value.trim(),
      role: roleInput.value.trim(),
      bio: bioInput.value.trim(),
      photo: photoInput.value || "https://i.pravatar.cc/150",
    };

    this.users.push(newUser);
    this.saveToStorage();
    this.renderUI();

    form.reset();
  },


  removeUser(id) {
    this.users = this.users.filter(user => user.id !== id);
    this.saveToStorage();
    this.renderUI();
  },


  renderUI() {
    cardsContainer.innerHTML = "";

    this.users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
        <img src="${user.photo}" alt="User Image">
        <h3>${user.name}</h3>
        <span>${user.role}</span>
        <p>${user.bio}</p>
        <button class="remove-btn">Remove</button>
      `;

      card.querySelector(".remove-btn")
        .addEventListener("click", () => this.removeUser(user.id));

      cardsContainer.appendChild(card);
    });
  },


  saveToStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  },

  loadFromStorage() {
    const data = localStorage.getItem("users");
    if (data) {
      this.users = JSON.parse(data);
    }
  }
};

userManager.init();
