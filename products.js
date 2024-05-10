document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from JSON file
    fetch("product.json")
        .then(response => response.json())
        .then(data => {
            // Access the "haircare" array from the JSON data
            const haircareProducts = data.haircare;

            // Process each haircare product
            haircareProducts.forEach(product => {
                // Create HTML elements for each product
                const productElement = document.createElement("div");
                productElement.classList.add("product");

                const productName = document.createElement("h2");
                productName.textContent = product.name;

                const productPrice = document.createElement("p");
                productPrice.textContent = "Price: " + product.price;

                const productDescription = document.createElement("p");
                productDescription.textContent = product.description;

                const productImage = document.createElement("img");
                productImage.src = product.photo; // Set the src attribute to the photo location
                productImage.alt = product.name;

                // Append elements to product container
                productElement.appendChild(productName);
                productElement.appendChild(productPrice);
                productElement.appendChild(productDescription);
                productElement.appendChild(productImage);

                // Append product container to products container
                document.getElementById("products-container").appendChild(productElement);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});