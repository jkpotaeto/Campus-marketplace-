document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");

    // Sample product listings (should be replaced with API data)
    const products = [
        { title: "Used Laptop", price: "$250", image: "assets/laptop.jpg" },
        { title: "Textbooks", price: "$30", image: "assets/books.jpg" },
        { title: "Bicycle", price: "$100", image: "assets/bike.jpg" },
        { title: "Smartphone", price: "$200", image: "assets/phone.jpg" }
    ];

    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("col-md-3");
        div.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        `;
        productList.appendChild(div);
    });
});
