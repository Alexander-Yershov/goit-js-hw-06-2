const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${listOfCategories.length}`);
const categoriesName = listOfCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.querySelectorAll("li").length}`);
});