let tabsContainer = document.querySelector("#account-tabs");

let tabTogglers = tabsContainer.querySelectorAll("#account-tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("bg-indigo-100", "dark:bg-gray-700", "bg-indigo-100", "bg-indigo-100", "-mb-px", "shadow"); tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("bg-indigo-100", "dark:bg-gray-700", "bg-indigo-100", "bg-indigo-100", "-mb-px", "shadow");
    });
});
