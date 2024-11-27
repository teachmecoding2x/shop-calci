// script.js

function updateSubcategories() {
  const category = document.getElementById('category').value;
  const subcategoryDropdown = document.getElementById('subcategory');

  let subcategories = [];
  if (category === "electronics") {
    subcategories = ["Smartphones", "Laptops", "Headphones", "Cameras"];
  } else if (category === "fashion") {
    subcategories = ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"];
  } else if (category === "home") {
    subcategories = ["Furniture", "Kitchenware", "Appliances", "Home Décor"];
  } else if (category === "beauty") {
    subcategories = ["Skincare", "Haircare", "Makeup", "Fragrances"];
  } else if (category === "books") {
    subcategories = ["Fiction", "Non-fiction", "Children's Books", "E-books"];
  }

  // Clear existing options
  subcategoryDropdown.innerHTML = "<option value=''>Select a Subcategory</option>";

  // Add new options
  subcategories.forEach(subcategory => {
    const option = document.createElement('option');
    option.value = subcategory.toLowerCase();
    option.textContent = subcategory;
    subcategoryDropdown.appendChild(option);
  });
}

function showFilteredProducts() {
  const category = document.getElementById('category').value;
  const subcategory = document.getElementById('subcategory').value;
  const price = document.getElementById('price-range').value;
  const rating = document.getElementById('ratings').value;
  const prime = document.getElementById('prime').checked;
  const store = document.getElementById('store').value;

  let resultText = `Filtered Products:
                    \nCategory: ${category}
                    \nSubcategory: ${subcategory}
                    \nPrice: $${price}
                    \nRating: ${rating} Stars & Above
                    \nPrime Eligible: ${prime ? "Yes" : "No"}
                    \nStore: ${store ? store.charAt(0).toUpperCase() + store.slice(1) : "Any"}`;

  // Show results (this could be expanded to show actual products, etc.)
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = "block";
  resultDiv.textContent = resultText;
}

// Update price value display
document.getElementById('price-range').addEventListener('input', function() {
  document.getElementById('price-value').textContent = `$${this.value}`;
});
