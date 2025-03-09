const recipeName = document.getElementById("recipename");
const recipeNames = ["Cheese Tortellini in Creamy Tomato Sauce"]

let tortelliniIngredients = ["28oz Crushed Tomatoes", "2 Tbsp Olive Oil", "1 Tbsp Balsamic Vinegar", "1 Tsp Garlic Powder", "1 Tsp Oregano", "Salt and Pepper", "4 Oz Goat Cheese", "12-16oz Cheese Tortellini"];
let tortelliniInstructions = ["Boil tortellini according to package", "In a large skillet, place tomatoes, oil, vinegar, garlic powder, oregano, salt and pepper", "Bring to a simmer, then cover and simmer for 10 minutes", "Drain pasta and add it to skillet, crumble in the goat cheese and stir until creamy"];



recipeName.textContent = recipeNames[0];

for (let i = 0; i < tortelliniIngredients.length; i++){
    let currentElement = document.getElementById(i+1);
    currentElement.textContent = "- " + tortelliniIngredients[i];
    currentElement.style.display = 'block';
}

for (let i = 0; i < tortelliniInstructions.length; i++){
    let currentElement = document.getElementById(`ins${i+1}`);
    currentElement.textContent = `${i+1}. ` + tortelliniInstructions[i];
    currentElement.style.display = 'block';
}