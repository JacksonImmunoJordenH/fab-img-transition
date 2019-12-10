// FOR DIAGRAM ANIMATION
let diagramContainer = document.querySelector(".img-container");
let diagrams = document.querySelector(".img-container").children;
let buttons = document.querySelector(".animation-nav").children;
let stepText = document.querySelector(".text-container").children;

// FOR OVERVIEW
let overviewContainer = document.querySelector(".overview");
let overviewOpen = document.querySelector(".overview-open");
let overviewClose = document.querySelector(".overview-exit");
let body = document.getElementsByTagName("BODY");

// OVERVIEW
overviewOpen.addEventListener("click", () => {
    overviewContainer.style.display = "block";
    overviewContainer.style.opacity = "1";
    body[0].style.overflowY = "hidden";
})

overviewClose.addEventListener("click", () => {
    overviewContainer.style.display = "none";
    overviewContainer.style.opacity = "0";
    body[0].style.overflowY = "visible";
})

// DIAGRAM ANIMATION
for (let i=0; i < diagramContainer.children.length; i++) {
    
    buttons[i].addEventListener("click", () => {
        for (let x = i; x < diagramContainer.children.length; x++) {
            diagrams[x].style.opacity = "0";
            diagrams[i].style.opacity = "1";
            for (let y = 1; y < i; y++) {
                diagrams[y].style.opacity = "1";
            }
        }
        for (let x = 0; x < diagramContainer.children.length; x++) {
            stepText[x].style.display = "none";
            stepText[i].style.display = "block";
        }
    });
}