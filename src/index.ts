let world = 'world';


let canvas, context;
document.addEventListener('DOMContentLoaded', ()=>{
  let stars = []
  let stars_id = ["stars", "stars2", "stars3"]
  for (let i=0; i<3; i++){
    let temp_el = <HTMLElement> document.getElementById(stars_id[i]);
    stars.push(temp_el)
    let compstyles= window.getComputedStyle(temp_el)
    console.log(compstyles)
    //compstyles.setProperty("animation-play-state", "paused")
    temp_el.style.animationPlayState = "paused"
    //console.log(temp_el.style.animationPlayState)
    //console.log(compstyles.getPropertyValue("animation-play-state"))
  }
  stars[0].style.animationPlayState = "running"
})



/*
*/

/*
function init(){
  let canvas = <HTMLCanvasElement> document.getElementById('gameCanvas');
  let context = canvas.getContext('2d')

  context.beginPath()
  
  context.strokeRect(50, 35, 50,50)
  context.beginPath()
  context.strokeStyle = "red"
  context.bezierCurveTo(30, 40, 50, 150, 200, 80)
  context.stroke()
  context.closePath();
}

class Shuttle{
  x;y;width;height;fillColor;strokeColor;strokeWidth;
  constructor(
    x=0, y=0,width=0,height=0,fillColor='',strokeColor='',strokeWidth=2
  ){
    this.x = Number(x)
    this.y = Number(y)
    this.width = Number(width)
    this.height = Number(height)
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeWidth = strokeWidth
  }
  draw () {
  }
}

*/