let world = 'world';
let canvas, context;
document.addEventListener('DOMContentLoaded', () => {
    let stars = [];
    let stars_id = ["stars", "stars2", "stars3"];
    for (let i = 0; i < 3; i++) {
        let temp_el = document.getElementById(stars_id[i]);
        stars.push(temp_el);
        //compstyles.setProperty("animation-play-state", "paused")
        temp_el.style.animationPlayState = "paused";
        //console.log(temp_el.style.animationPlayState)
        //console.log(compstyles.getPropertyValue("animation-play-state"))
    }
    let start_div = document.createElement('div');
    document.body.insertBefore(start_div, document.body.firstChild);
    start_div.classList.add("start-div");
    let start_button = document.createElement('div');
    start_div.appendChild(start_button);
    start_button.classList.add("start-button");
    start_button.textContent = "START";
    start_button.addEventListener("mousedown", () => {
        for (let i = 0; i < 3; i++) {
            stars[i].style.animationPlayState = "running";
        }
        start_div.classList.add("hidden-class");
    });
});
//# sourceMappingURL=index.js.map