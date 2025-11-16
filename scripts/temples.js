//Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last update date
document.getElementById("lastModified").innerHTML = document.lastModified;

//button active
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav-burguer-view");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
