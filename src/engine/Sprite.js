export class Sprite {
  constructor({
    position,
    dimensions,
    imgSrc,
    ctx
  }) {
    this.position = position;
    this.dimensionsHeight = dimensions.height;
    this.dimensionsWidth = dimensions.width;
    this.ctx = ctx
    this.imgSrc = imgSrc;
    this.img = new Image();
    this.img.src = this.imgSrc;
  }
  draw() {
    console.log(this)
    console.log(this)
    
    this.ctx.fillRect(this.position.x, this.position.y, this.dimensionsWidth, this.dimensionsHeight)
  }
  
  drawImage(src) {
//    console.log(this.imgSrc)
    this.ctx.drawImage(this.img, this.position.x, this.position.y, this.dimensionsWidth, this.dimensionsHeight)
  }
  
}