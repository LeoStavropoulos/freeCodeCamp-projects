const tabs = document.querySelectorAll(".nav-links>li");
tabs.forEach(tab => tab.addEventListener("click", e => switchTab(e)));

function switchTab(e) {
    const id = e.target.id
    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");
    document.querySelector(".project-section:not(.hidden)").classList.add("hidden");
    document.querySelector(`#${id}Section`).classList.remove("hidden");
}