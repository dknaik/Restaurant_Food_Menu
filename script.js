const menu = [
  {
    id: 1,
    title: "buttermilk",
    category: "breakfast",
    price: 13.89,
    img: "./images/food4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam doloremque? Amet cumque ab nobis vero qui numquam, reprehenderit praesentium.",
  },
  {
    id: 2,
    title: "buttermilk",
    category: "lunch",
    price: 13.89,
    img: "./images/food4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam doloremque? Amet cumque ab nobis vero qui numquam, reprehenderit praesentium.",
  },
  {
    id: 3,
    title: "dosa",
    category: "breakfast",
    price: 13.89,
    img: "./images/food4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam doloremque? Amet cumque ab nobis vero qui numquam, reprehenderit praesentium.",
  },
  {
    id: 4,
    title: "south Indian Thali",
    category: "dinner",
    price: 13.89,
    img: "./images/food4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam doloremque? Amet cumque ab nobis vero qui numquam, reprehenderit praesentium.",
  },
  {
    id: 4,
    title: "bujje",
    category: "snacks",
    price: 13.89,
    img: "./images/food4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam doloremque? Amet cumque ab nobis vero qui numquam, reprehenderit praesentium.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  passedMenu(menu);
});

filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //   e.preventDefault;
    //   console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
      //    return menuItem.category===category;
    });

    if (category === "all") {
      passedMenu(menu);
    } else {
      // console.log(menuCategory);
      passedMenu(menuCategory);
    }
    // console.log(menuCategory);
    //pass to passedManufun
  });
});

function passedMenu(menuItems) {
  // console.log(menuItems);
  let displayMenu = menuItems.map(function (item) {
    return `
                 <article class="menu-item">
<img src=${item.img} alt="">
<div class="item-info">
    <h4>${item.title}</h4>
    <h4 class="price">${item.price}</h4>
</div>
   <p class="item-description">${item.desc}</p> 


    </article>
              `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  // console.log(displayMenu);
}
