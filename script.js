function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function showFavorite(flavor) {
    const result = document.getElementById("favoriteResult");
    result.textContent = flavor + " yogurt is a great choice!";
}