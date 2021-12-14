let shuttle_image = document.createElement("img");
shuttle_image.src = "tuba-normal.png";
shuttle_image.classList.add("shuttle");
let velocity_hard = false;
let height_hard = false;
let fuel_hard = false;
let stars = [];
prepare_game();
function prepare_game() {
    document.addEventListener('DOMContentLoaded', () => {
        let stars_id = ["stars", "stars2", "stars3"];
        for (let i = 0; i < 3; i++) {
            let temp_el = document.getElementById(stars_id[i]);
            stars.push(temp_el);
            //compstyles.setProperty("animation-play-state", "paused")
            temp_el.style.animationPlayState = "paused";
            //console.log(temp_el.style.animationPlayState)
            //console.log(compstyles.getPropertyValue("animation-play-state"))
        }
        stars[0].animationTimingFunction = "ease-in";
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
            start_div.classList.toggle("closed");
            start_button.style.color = "black";
            start_button.style.backgroundColor = "grey";
            start_button.style.outline = "6px solid orange";
            let parameter_box = document.createElement("div");
            parameter_box.classList.add("parameter-box");
            let height_div = document.createElement("div");
            let height_box = document.createElement("div");
            let height_check = document.createElement("div");
            let height_value = document.createElement("div");
            height_value.classList.add("parameter");
            height_box.classList.add("parameter-in-box");
            height_check.classList.add("parameter-check");
            parameter_box.appendChild(height_box);
            height_box.appendChild(height_check);
            height_box.appendChild(height_div);
            height_box.appendChild(height_value);
            height_div.textContent = "height";
            height_div.classList.add("parameter");
            let velocity_div = document.createElement("div");
            let velocity_box = document.createElement("div");
            let velocity_check = document.createElement("div");
            let velocity_value = document.createElement("div");
            velocity_box.classList.add("parameter-in-box");
            velocity_check.classList.add("parameter-check");
            velocity_value.classList.add("parameter");
            parameter_box.appendChild(velocity_box);
            velocity_box.appendChild(velocity_check);
            velocity_box.appendChild(velocity_div);
            velocity_box.appendChild(velocity_value);
            velocity_value.textContent = " bruffffffffffffffffffffffh";
            velocity_div.textContent = "velocity";
            velocity_div.classList.add("parameter");
            let fuel_div = document.createElement("div");
            let fuel_box = document.createElement("div");
            let fuel_check = document.createElement("div");
            let fuel_value = document.createElement("div");
            fuel_box.classList.add("parameter-in-box");
            fuel_check.classList.add("parameter-check");
            fuel_value.classList.add("parameter");
            parameter_box.appendChild(fuel_box);
            fuel_box.appendChild(fuel_check);
            fuel_box.appendChild(fuel_div);
            fuel_box.appendChild(fuel_value);
            fuel_value.textContent = " bruffffffffffffffffffffffh";
            fuel_div.textContent = "fuel";
            fuel_div.classList.add("parameter");
            let control_div = document.createElement("div");
            control_div.appendChild(parameter_box),
                control_div.id = "conrol-div";
            control_div.style.float = "right";
            control_div.style.display = "flex";
            control_div.style.flexDirection = "column";
            document.body.appendChild(control_div);
            let brake_button = document.createElement("div");
            brake_button.classList.add("brake-button");
            brake_button.textContent = "BRAKE";
            control_div.appendChild(brake_button);
            height_check.addEventListener("click", () => {
                height_check.textContent = "X";
                height_hard = true;
            });
            velocity_check.addEventListener("click", () => {
                velocity_check.textContent = "X";
                velocity_hard = true;
            });
            fuel_check.addEventListener("click", () => {
                fuel_check.textContent = "X";
                fuel_hard = true;
            });
            document.body.appendChild(shuttle_image);
            run_shuttle(height_value, velocity_value, fuel_value, brake_button);
        });
    });
}
function run_shuttle(height_value, velocity_value, fuel_value, brake_button) {
    let brake_state = false;
    brake_button.addEventListener("mousedown", () => {
        brake_state = true;
        shuttle_image.src = "tuba-brake.png";
        //alert("baua")
        let temp_star_times = [25, 50, 75];
        for (let i = 0; i < 3; i++) {
            //stars[i].style.animation = "animStar " + temp_star_times[i]+"s linear infinite"
        }
    });
    brake_button.addEventListener("mouseup", () => {
        brake_state = false;
        shuttle_image.src = "tuba-normal.png";
        let temp_star_times = [50, 100, 150];
        for (let i = 0; i < 3; i++) {
            //stars[i].style.animation = "animStar " + temp_star_times[i]+"s linear infinite"
        }
    });
    let shuttle = Shuttle.getInstance();
    let placed_image = false;
    let moon_image = document.createElement("img");
    moon_image.src = "the-moon.png";
    moon_image.classList.add("moon-image");
    let image_div = document.createElement("div");
    image_div.appendChild(moon_image);
    image_div.style.position = "relative";
    image_div.style.bottom = "-800px";
    let pixel_inc = -800;
    var intervalID = setInterval(function () {
        //alert(brake_state)
        let [show_height, show_velocity] = shuttle.run_calc(brake_state);
        if (show_height <= 0 || shuttle.fuel <= 0) {
            ending(intervalID);
        }
        if (show_height <= moon_image.height * 100) {
            if (placed_image == false) {
                document.body.insertBefore(image_div, document.body.firstChild);
                placed_image = true;
            }
            else {
                pixel_inc += Math.round(show_velocity / 100);
                image_div.style.bottom = "" + pixel_inc + "px";
                image_div.setAttribute("data-test", "" + pixel_inc);
                //alert(pixel_inc)
                /*
                let temp_width = moon_image.style.width.replace("px", "");
                //let temp_height = moon_image.style.height.replace("px", "");
        
                moon_image.style.clip = "rect(0px," + temp_width + ","+pixel_inc+",0px)"
                pixel_inc += 5;
                let temp_margin = image_div.style.marginTop.replace('px','');
                image_div.style.marginTop = "" + (parseInt(temp_margin) - 5) + "px"
                //alert("" + (parseInt(temp_margin) + 5))
                //alert(image_div.style.top)
                //alert("happenign")
                */
            }
        }
        if (height_hard == false) {
            height_value.textContent = "" + Math.round(show_height * 0.1 * 100) / 100 + " m";
        }
        else {
            height_value.textContent = "????????";
        }
        if (velocity_hard == false) {
            velocity_value.textContent = "" + Math.round(show_velocity * 100) / 100 + " m/s2";
        }
        else {
            velocity_value.textContent = "????????";
        }
        if (fuel_hard == false) {
            fuel_value.textContent = "" + shuttle.fuel;
        }
        else {
            fuel_value.textContent = "????????";
        }
    }, 100);
}
function ending(intervalID) {
    clearInterval(intervalID);
    let end_screen = document.createElement("div");
    end_screen.classList.add("end-screen");
    let shuttle = Shuttle.getInstance();
    if (shuttle.fuel <= 0) {
        end_screen.style.backgroundColor = "red";
        end_screen.textContent = "FAILED! - NO FUEL";
    }
    else if (shuttle.velocity > 10) {
        end_screen.style.backgroundColor = "red";
        end_screen.textContent = "FAILED! - TOO FAST";
    }
    else if (shuttle.velocity < 10) {
        end_screen.style.backgroundColor = "green";
        end_screen.textContent = "SUCCESS!";
    }
    for (let i = 0; i < 3; i++) {
        stars[i].style.animationPlayState = "paused";
    }
    //alert("bnfdu")
    //alert(end_screen.style.backgroundColor)
    document.body.appendChild(end_screen);
    //alert("ended!")
    let restart_button = document.createElement("div");
    restart_button.classList.add("restart-button");
    restart_button.textContent = "RESTART";
    restart_button.addEventListener("click", () => {
        document.body.removeChild(restart_button);
        document.body.removeChild(end_screen);
        (document.body.childNodes[0]).remove();
        (document.body.childNodes[1]).remove();
        (document.body.childNodes[2]).remove();
        //alert("restarting!")
        shuttle.reset();
        location.reload();
    });
    document.body.appendChild(restart_button);
}
class Shuttle {
    constructor() {
        this.fuel = 10000;
        this.height = 500000;
        this.velocity = 1000;
        this.brake = 1.2;
        this.status = "ready";
        this.moon_gravitation = 0.163;
    }
    static getInstance() {
        if (!Shuttle.instance) {
            Shuttle.instance = new Shuttle();
        }
        return Shuttle.instance;
    }
    run_calc(brake_status) {
        this.status = "running";
        let new_height = 0;
        let new_velocity = 0;
        if (brake_status == false) {
            new_velocity = this.velocity + this.moon_gravitation;
        }
        else {
            new_velocity = this.velocity + this.moon_gravitation - this.brake;
            if (new_velocity < 0) {
                new_velocity = 0;
            }
            this.fuel = this.fuel - 10;
        }
        new_height = this.height - new_velocity;
        this.height = new_height;
        this.velocity = new_velocity;
        return [new_height, new_velocity];
    }
    reset() {
        this.fuel = 10000.0;
        this.height = 500000;
        this.velocity = 1000;
        this.brake = 1.2;
        this.status = "ready";
        this.moon_gravitation = 0.163;
    }
}
/*
function move(dt){
  x += vx * dt;
  y += vy * dt;
}
*/
//# sourceMappingURL=index.js.map