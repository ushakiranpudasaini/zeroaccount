
const listItems = document.querySelectorAll(".nav-links li");

listItems.forEach((item) => {
    item.addEventListener("click", () => {
        let isActive = item.classList.contains("active");

        listItems.forEach((el) => {
            el.classList.remove("active");
        });

        if (isActive) item.classList.remove("active");
        else item.classList.add("active");
    });
});


let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

//Toggle
function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
}
//
function toggleMenu(btn) {
    const el = btn.parentElement.querySelector('.subMenu')
    el.classList.toggle('hidden')
}
const btn = document.querySelector('.hasSubMenu')
btn.addEventListener('click', function () {
    toggleMenu(btn)
})
const btn1 = document.querySelector('.hasSubMenu1')
btn1.addEventListener('click', function () {
    toggleMenu(btn1)
})
const btn2 = document.querySelector('.hasSubMenu2')
btn2.addEventListener('click', function () {
    toggleMenu(btn2)
})
const btn3 = document.querySelector('.hasSubMenu3')
btn3.addEventListener('click', function () {
    toggleMenu(btn3)
})
const btn4= document.querySelector('.hasSubMenu4')
btn4.addEventListener('click', function () {
    toggleMenu(btn4)
})
