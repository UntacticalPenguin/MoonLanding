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
    stars[0].style.animationPlayState = "running";
});
//# sourceMappingURL=index.js.map