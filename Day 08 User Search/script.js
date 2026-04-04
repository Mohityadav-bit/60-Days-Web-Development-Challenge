const users = [
  {
    name: "Aarav Mehta",
    avatar: "https://i.pravatar.cc/150?img=11",
    cover: "https://picsum.photos/400/300?random=11",
    bio: "Frontend developer who loves clean UI and smooth animations."
  },
  {
    name: "Ananya Sharma",
    avatar: "https://i.pravatar.cc/150?img=32",
    cover: "https://picsum.photos/400/300?random=12",
    bio: "UI/UX designer focused on minimal and user-friendly experiences."
  },

  {
    name: "Priya Kapoor",
    avatar: "https://i.pravatar.cc/150?img=47",
    cover: "https://picsum.photos/400/300?random=14",
    bio: "Creative designer passionate about branding and visuals."
  },
  
  {
    name: "Neha Joshi",
    avatar: "https://i.pravatar.cc/150?img=44",
    cover: "https://picsum.photos/400/300?random=16",
    bio: "Product designer with a strong usability mindset."
  },
  {
    name: "Aditya Malhotra",
    avatar: "https://i.pravatar.cc/150?img=18",
    cover: "https://picsum.photos/400/300?random=17",
    bio: "JavaScript enthusiast exploring modern frameworks."
  },
  {
    name: "Sneh Iyer",
    avatar: "https://i.pravatar.cc/150?img=52",
    cover: "https://picsum.photos/400/300?random=18",
    bio: "UX researcher turning insights into products."
  },
  {
    name: "Arjun Patel",
    avatar: "https://i.pravatar.cc/150?img=24",
    cover: "https://picsum.photos/400/300?random=19",
    bio: "Software engineer focused on performance."
  },
  {
    name: "Ritika Nair",
    avatar: "https://i.pravatar.cc/150?img=36",
    cover: "https://picsum.photos/400/300?random=20",
    bio: "Visual designer crafting modern interfaces."
  }
];

const container = document.querySelector(".card-grid");
const input = document.querySelector(".search-box");


function showUsers(arr) {
  container.innerHTML = "";

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";

    const bg = document.createElement("div");
    bg.className = "card-bg";
    bg.style.backgroundImage = `url(${user.cover})`;

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = user.avatar;

    const info = document.createElement("div");
    info.className = "info";

    const name = document.createElement("h3");
    name.textContent = user.name;

    const bio = document.createElement("p");
    bio.className = "para";
    bio.textContent = user.bio;

    info.append(name, bio);
    card.append(bg, avatar, info);
    container.appendChild(card);
  });
}

showUsers(users);


input.addEventListener("input", () => {
  const value = input.value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
  );

  showUsers(filtered);
});
