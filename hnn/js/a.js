'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle(x, y) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgba(0, 255, 0, 1)";
    var shadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.r = Math.random() * 5;
    this.color = color;
    this.xSpeed = Math.random();
    this.ySpeed = Math.random();
    this.scale = 1;
  }

  _createClass(Particle, [{
    key: 'drawParticle',
    value: function drawParticle(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      ctx.fillStyle = this.color;
      if (this.shadow) {
        ctx.shadowColor = '#FFF';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = this.r * 2;
      }
      ctx.fill();
    }
  }, {
    key: 'drawLine',
    value: function drawLine(ctx, particle) {
      var dx = this.x - particle.x;
      var dy = this.y - particle.y;
      var d = Math.sqrt(dx * dx + dy * dy);

      if (d < 150) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.closePath();
        ctx.lineWidth = 0.1;
        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }
    // 粒子的移动，必须在屏幕范围内

  }, {
    key: 'move',
    value: function move(w, h) {
      this.xSpeed = this.x < w && this.x > 0 ? this.xSpeed : -this.xSpeed;
      this.ySpeed = this.y < h && this.y > 0 ? this.ySpeed : -this.ySpeed;
      this.x += this.xSpeed / 2;
      this.y += this.ySpeed / 2;
    }
  }]);

  return Particle;
}();

var Bubble = function (_Particle) {
  _inherits(Bubble, _Particle);

  function Bubble(x, y, color, shadow) {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).call(this, x, y, color, shadow));
  }

  _createClass(Bubble, [{
    key: 'move',
    value: function move(h) {
      this.y = this.y <= -10 ? (this.ySpeed = Math.random(), h + 10) : this.y - this.ySpeed / 2;
    }
  }]);

  return Bubble;
}(Particle);

var StarCanvas = function () {
  function StarCanvas(selector, w, h, num) {
    _classCallCheck(this, StarCanvas);

    this.canvas = document.querySelector(selector);
    this.ctx = null;
    this.w = w;
    this.h = h;
    this.num = num;
    this.bubbles = [];
  }

  _createClass(StarCanvas, [{
    key: 'init',
    value: function init() {
      var w = this.w;
      var h = this.h;
      this.canvas.width = w;
      this.canvas.height = h;
      this.ctx = this.canvas.getContext('2d');
      var i = void 0,
          num = void 0;
      num = this.num;
      for (i = 0; i < num; i++) {
        this.bubbles.push(new Bubble(Math.random() * w, h + 10, 'rgba(0, 255, 0, 1)', true));
      }
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      var w = this.w;
      var h = this.h;
      var num = this.num;
      var bubbles = this.bubbles;(function _draw() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          bubbles[i].move(h);
          bubbles[i].drawParticle(ctx);
        }
        requestAnimationFrame(_draw);
      })();
    }
  }]);

  return StarCanvas;
}();

var can = '#canvas';
var con = document.querySelector('.bg');
var w = con.clientWidth;
var h = con.clientHeight;
var bubble = new StarCanvas(can, w, h, 30);
bubble.init();