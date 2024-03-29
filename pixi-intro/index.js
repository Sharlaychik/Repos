﻿var PIXI = require('pixi.js');

var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage;

var zombieTexture = PIXI.Texture.fromImage('./src/zombie.png');
var zombie = new PIXI.Sprite(zombieTexture);

zombie.position.x = (window.innerWidth - 150);
zombie.position.y = (window.innerHeight - 150);

stage.addChild(zombie);

function draw() { renderer.render(stage); requestAnimationFrame(draw); }

draw();