export function render() {
  const box = document.createElement("div");
  box.className = "recipe-box";

  box.innerHTML = `
    <h1>Veg Fried Rice</h1>

    <p class="tagline">
      Quick, flavorful, and perfect for any meal 🍚
    </p>

    <img 
      src="https://t4.ftcdn.net/jpg/02/00/38/93/360_F_200389386_zL0pe6MWtBMfEHH5vcqMZd1RkPDOFd34.jpg" 
      alt="Veg fried rice served in a bowl"
      loading="lazy"
    >

    <div class="recipe-meta">
      <span>⏱ Prep Time: 15 mins</span>
      <span>🔥 Cook Time: 10 mins</span>
      <span>🍽 Servings: 2 people</span>
    </div>

    <section class="ingredients">
      <h2>Ingredients</h2>
      <ul>
        <li>2 cups cooked rice (cooled)</li>
        <li>1 tbsp oil</li>
        <li>1 tsp garlic (finely chopped)</li>
        <li>1/2 cup onions (chopped)</li>
        <li>1/4 cup carrots (chopped)</li>
        <li>1/4 cup capsicum (chopped)</li>
        <li>1/4 cup beans (chopped)</li>
        <li>2 tbsp soy sauce</li>
        <li>1 tsp vinegar</li>
        <li>Salt to taste</li>
        <li>Black pepper to taste</li>
      </ul>
    </section>

    <h2>How to Make Veg Fried Rice</h2>

    <section class="steps">
      <ol>
        <li>Heat oil in a wok or pan on high flame.</li>
        <li>Add chopped garlic and sauté until aromatic.</li>
        <li>Add onions and stir-fry until slightly translucent.</li>
        <li>Add all vegetables and stir-fry on high heat for 2–3 minutes.</li>
        <li>Add cooked rice and mix gently.</li>
        <li>Add soy sauce, vinegar, salt, and black pepper.</li>
        <li>Toss everything well without breaking the rice.</li>
        <li>Cook for another 2 minutes and turn off the flame.</li>
        <li>Serve hot with chili sauce or manchurian.</li>
      </ol>
    </section>

    <section class="tips">
      <h2>Tips</h2>
      <ul>
        <li>Always use cooled rice for best texture.</li>
        <li>Cook on high flame for authentic flavor.</li>
        <li>Add spring onions for extra freshness.</li>
      </ul>
    </section>

    <footer class="recipe-footer">
      <p>Enjoy your homemade Veg Fried Rice! 🍚</p>
    </footer>
  `;

  return box;
}
