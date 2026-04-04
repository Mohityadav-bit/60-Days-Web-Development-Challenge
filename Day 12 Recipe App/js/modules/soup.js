export function render() {
    const box = document.createElement("div");
    box.className = "recipe-box";

    box.innerHTML = `
        <h2>🍲 Vegetable Soup</h2>
        <p>Healthy and warm soup with fresh vegetables.</p>
        <h3>Ingredients:</h3>
        <ul>
            <li>Carrots</li>
            <li>Peas</li>
            <li>Beans</li>
            <li>Vegetable stock</li>
        </ul>
        <img src="https://t4.ftcdn.net/jpg/01/89/24/55/360_F_189245562_6EzNC89ioTLoiL9fLiEWedIRedA0R8IN.jpg" alt="">
    `;

    return box;
}
