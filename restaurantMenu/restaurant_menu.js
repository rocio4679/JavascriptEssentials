const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $15.50', 'Oatmeal - $4.25', 'Frittata - $12'];
const mainCourseMenu = ['Steak - $23', 'Pasta - $16', 'Burger - $10.25', 'Salmon - $20.76'];
const dessertMenu = ['Cake - $5.50', 'Ice Cream - $3', 'Pudding - $4.50', 'Fruit Salad - $3.25'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;