document.addEventListener("DOMContentLoaded", function() {
    // This event listener waits for the HTML document to be fully loaded before executing the code inside its callback function.

    // Fetches data from JSON file
    fetch("product.json")
        .then(response => response.json()) // Converts the response to JSON format
        .then(data => {
            // Accesses the "haircare" array from the JSON data
            const haircareProducts = data.haircare;

            // Processes each haircare product
            haircareProducts.forEach(product => {
                // Creates HTML elements for each product
                const productElement = document.createElement("div"); // Creates a <div> element for the product
                productElement.classList.add("product"); // Adds the "product" class to the <div>

                const productName = document.createElement("h2"); // Creates an <h2> element for the product name
                productName.textContent = product.name; // Sets the text content of the <h2> to the product name

                const productPrice = document.createElement("p"); // Creates a <p> element for the product price
                productPrice.textContent = "Price: " + product.price; // Sets the text content to display the product price

                const productDescription = document.createElement("p"); 
                productDescription.textContent = product.description; // Sets the text content to the product description

                const productImage = document.createElement("img"); // Creates an <img> element for the product image
                productImage.src = product.photo; // Sets the src attribute to the photo location
                productImage.alt = product.name; // Sets the alt attribute to the product name

                
                productElement.appendChild(productName); // Appends the product name to the product container
                productElement.appendChild(productPrice); 
                productElement.appendChild(productDescription); 
                productElement.appendChild(productImage); 
                
                document.getElementById("products-container").appendChild(productElement); // Append the product container to the products container in the HTML
            });
        })
        .catch(error => console.error("Error fetching products:", error)); // Catches any errors that occur during the fetch operation and log them to the console
});