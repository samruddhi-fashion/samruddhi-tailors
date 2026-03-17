const images = document.querySelectorAll(".portfolio-grid img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");

images.forEach(img => {
img.addEventListener("click", () => {
popup.style.display = "flex";
popupImg.src = img.src;
});
});

popup.addEventListener("click", () => {
popup.style.display = "none";
});
document.querySelectorAll("nav a").forEach(anchor => {
anchor.addEventListener("click", function(e) {

if(this.getAttribute("href").startsWith("#")){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

}

});
});