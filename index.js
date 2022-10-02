let size = 600
let app = new PIXI.Application({ width: size, height: size });
let lines = []
let lineWidth = 1
for (let i = 0; i < size/lineWidth; i++) {
    lines[i] = Math.floor(Math.random()*size)
    
}
lines.sort(function(a, b){return b - a})
document.body.appendChild(app.view);
    let sprite = new PIXI.Graphics();
    sprite.lineStyle(lineWidth, 0x00ffff, 1);
    for (let i = 0; i < Math.floor(size/lineWidth); i++) {
        sprite.moveTo(i*lineWidth,size);
        sprite.lineTo(i*lineWidth,lines[i])
        app.stage.addChild(sprite);
    }