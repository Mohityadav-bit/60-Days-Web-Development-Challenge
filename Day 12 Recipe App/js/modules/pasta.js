export function render() {
  const box = document.createElement("div");
  box.className = "recipe-box";

  box.innerHTML = `
        <h2>🍝 Creamy Pasta</h2>
        <p>A smooth and creamy Italian pasta recipe.</p>
        <h3>Ingredients:</h3>
        <ul>
            <li>200g pasta</li>
            <li>1 cup cream</li>
            <li>Garlic & herbs</li>
            <li>Salt & pepper</li>
        </ul>
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9uUfbcyczrefXaXdTVS7iuZxh8BeJdTnBMbi6H_8dDVx4rFuOMiSSK5tnRi7Dq7pJko7hsV9f" alt="Butter Chicken served in a bowl">

    `;

  return box;
}
