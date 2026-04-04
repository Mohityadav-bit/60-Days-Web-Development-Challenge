let products = []; // arrays of objects

function addProduct() {
    let name = document.querySelector("#pName").value;
    let price = Number(document.querySelector("#price").value);
    let qty = Number(document.querySelector("#qty").value);

    if (name === "" || price === "" || qty === "") {
        alert("Please enter all product details...");
        return;
    }

    if (price <= 0 || qty <= 0) {
        alert("Price and Quantity must be positive numbers!");
        return;
    }

    let product = {
        name: name,
        price: price,
        quantity: qty
    };

    products.push(product);
    displayProduct();
    updateInventValue();

    document.querySelector("#pName").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#qty").value = "";
}


function displayProduct(){
    let table = document.querySelector("#productTable");
    table.innerHTML = "";

    products.forEach((p, index) =>{
        let row = `
            <tr>
                <td>${p.name}</td>
                <td>₹${p.price}</td>
                <td>${p.quantity}</td>
                <td>₹${p.price * p.quantity}</td>
                <td><button class="delete-btn" onclick="deleteProduct(${index})">Delete</button></td>
            </tr>        
        `;
        table.innerHTML += row;
    });
}

function deleteProduct(index){
    products.splice(index, 1);
    displayProduct();
    updateInventValue();
}

function updateInventValue(){
    let total = 0;
    products.forEach(p=>{
        total += p.price * p.quantity;
    });

    document.querySelector("#inventoryValue").innerHTML = `₹${total}`;
}