let navbar = document.querySelector('.navbar');

document.querySelector('.menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;