const recipeName = document.getElementById("recipename");

let tortelliniIngredients = ["Crushed Tomatoes", "Olive Oil", "Balsamic Vinegar", "Garlic Powder", "Oregano", "Goat Cheese", "Cheese Tortellini"];

recipeName.textContent = "Cheese Tortellini in Creamy Tomato Sauce"

for (let i = 0; i < tortelliniIngredients.length; i++){
    let currentElement = document.getElementById(i+1);
    currentElement.textContent = "- " + tortelliniIngredients[i];
    currentElement.style.display = 'block';
}