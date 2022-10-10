function toggleMenu () {
    document.getElementById("navList").classList.toggle("open");
    document.getElementById("burgerBtn").classList.toggle("open");
}

const bwr = document.getElementById('burgerBtn')

bwr.onclick = toggleMenu;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;