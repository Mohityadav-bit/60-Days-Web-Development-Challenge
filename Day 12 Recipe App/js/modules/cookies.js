export function render() {
  const box = document.createElement("div");
  box.className = "recipe-box";

  box.innerHTML = `
        <h1>Chocolate Chip Cookies</h1>
      <p class="tagline">
        Soft, chewy, and loaded with chocolate chips 🍪
      </p>

      <img 
        src="https://media.istockphoto.com/id/187957173/photo/chocolate-chip-cookies-on-linen-napkin-wooden-table.jpg?s=612x612&w=0&k=20&c=KTOSF54xd_V128_9_SDSm4dlUimPrBYsNLSODU_-e6g=" 
        alt="Freshly baked chocolate chip cookies on a plate"
        loading="lazy"
      >

      <div class="recipe-meta">
        <span>⏱ Prep Time: 15 mins</span>
        <span>🔥 Bake Time: 12 mins</span>
        <span>🍪 Servings: 12 cookies</span>
      </div>
    </header>

    
    <section class="ingredients">
      <h2>Ingredients</h2>
      <ul>
        <li>1 cup (225g) unsalted butter, softened</li>
        <li>3/4 cup white sugar</li>
        <li>3/4 cup brown sugar</li>
        <li>1 large egg</li>
        <li>1 tsp vanilla extract</li>
        <li>2 cups all-purpose flour</li>
        <li>1/2 tsp baking soda</li>
        <li>1/2 tsp salt</li>
        <li>1 1/2 cups chocolate chips</li>
      </ul>
    </section>

    
    <h2>How to Make Chocolate Chip Cookies</h2>
    <section class="steps">
      <ol>
        <li>Preheat your oven to <strong>180°C (350°F)</strong>.</li>
        <li>In a bowl, cream together the butter, white sugar, and brown sugar until smooth.</li>
        <li>Add the egg and vanilla extract. Mix well.</li>
        <li>In another bowl, whisk together flour, baking soda, and salt.</li>
        <li>Gradually add the dry ingredients to the wet mixture and mix until combined.</li>
        <li>Fold in the chocolate chips evenly.</li>
        <li>Scoop spoonfuls of dough and place them on a baking tray lined with parchment paper.</li>
        <li>Bake for <strong>10–12 minutes</strong> or until edges are lightly golden.</li>
        <li>Let the cookies cool on the tray for 5 minutes, then transfer to a wire rack.</li>
      </ol>
    </section>

    
    <section class="tips">
      <h2>Tips</h2>
      <ul>
        <li>For extra chewy cookies, slightly underbake them.</li>
        <li>Chill the dough for 30 minutes for thicker cookies.</li>
        <li>Use dark chocolate chips for richer flavor.</li>
      </ul>
    </section>

    <footer class="recipe-footer">
      <p>Enjoy your homemade Chocolate Chip Cookies! 🍪</p>
    </footer>
    `;

  return box;
}
