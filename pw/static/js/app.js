webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: "drawParticle",
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
    key: "drawLine",
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
    key: "move",
    value: function move(w, h) {
      this.xSpeed = this.x < w && this.x > 0 ? this.xSpeed : -this.xSpeed;
      this.ySpeed = this.y < h && this.y > 0 ? this.ySpeed : -this.ySpeed;
      this.x += this.xSpeed / 2;
      this.y += this.ySpeed / 2;
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(0);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_Particle) {
  _inherits(Star, _Particle);

  function Star(x, y) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgba(255, 0, 191, 1)';
    var shadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Star);

    var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, x, y, color, shadow));

    _this.opacity = 1;
    return _this;
  }

  _createClass(Star, [{
    key: 'disapear',
    value: function disapear() {
      this.opacity -= 0.01;
      this.color = 'rgba(255, 0, 191, ' + this.opacity + ')';
    }
  }]);

  return Star;
}(_particle2.default);

exports.default = Star;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _star = __webpack_require__(3);

var _dom = __webpack_require__(6);

var _poster = __webpack_require__(8);

var _poster2 = _interopRequireDefault(_poster);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* css module*/

// import $ from 'LIB/jquery'
$(document).ready(function () {
  var can = '#canvas';
  var w = window.innerWidth;
  var h = window.innerHeight;
  var bubble = new _star.StarCanvas(can, w, h, 30);
  bubble.init();
  (0, _poster2.default)('.index .nav li>a', '.banners .banner');
  $('#fullpage').fullpage({
    afterLoad: function afterLoad(a, index) {
      if (index === 1) {
        $('.m-banner .u-triangle span').addClass('animated fadeIn');
        $('.m-banner .u-triangle h1').addClass('fadeInLeft');
        $('.m-banner .u-triangle small').addClass('fadeInRight');
      } else if (index === 2) {
        $('.index .u-triangle2').addClass('animated fadeInLeft');
        setTimeout(function () {
          $('.index .u-triangle2 span').addClass('animated fadeInRight');
          $('.index .menu').addClass('animated fadeInDown');
          $('.banners').addClass('animated jackInTheBox');
          $('.index .menu li').each(function (i, e) {
            $(e).css({
              animationDelay: i * .1 + 's'
            });
            $(e).addClass('animated fadeInDown');
          });
        }, 500);
      } else if (index === 3) {
        $('.skill .u-triangle2').addClass('animated fadeInLeft');
        $('.skill p').css({
          animationDelay: '1.5s'
        });
        $('.skill p').addClass('animated fadeInUp');
        setTimeout(function () {
          $('.skill .u-triangle2 span').addClass('animated fadeInRight');
          $('.skill .u-triangle3').css({
            animationDelay: '.8s'
          });
          $('.skill .u-triangle3').addClass('animated fadeIn');
          $('.skill .u-triangle3 .text1').css({
            animationDelay: '.5s'
          });
          $('.skill .u-triangle3 .text2').css({
            animationDelay: '.5s'
          });
          $('.skill .u-triangle3 .text1').addClass('animated fadeInLeft');
          $('.skill .u-triangle3 .text2').addClass('animated fadeInRight');
        }, 500);
        $('.skill-list li').each(function (i, e) {
          $(e).css({
            animationDelay: i * .2 + 's'
          });
          $(e).addClass('animated bounce infinite');
        });
      } else if (index === 4) {
        $('.touch .u-triangle2').addClass('animated fadeInLeft');
        $('.touch .body').addClass('animated fadeInUp');
        setTimeout(function () {
          $('.touch .u-triangle2 span').addClass('animated fadeInRight');
        }, 500);
      }
    },
    onLeave: function onLeave(index, next, direction) {
      if (index === 1) {
        $('.m-banner .u-triangle span').removeClass('animated fadeIn');
        $('.m-banner .u-triangle h1').removeClass('fadeInLeft');
        $('.m-banner .u-triangle small').removeClass('fadeInRight');
      } else if (index === 2) {
        $('.index .u-triangle2').removeClass('animated fadeInLeft');
        $('.index .u-triangle2 span').removeClass('animated fadeInRight');
        $('.index .menu').removeClass('animated fadeInDown');
        $('.banners').removeClass('animated jackInTheBox');
        $('.index .menu li').each(function (i, e) {
          $(e).css({
            animationDelay: i * .1 + 's'
          });
          $(e).removeClass('animated fadeInDown');
        });
      } else if (index === 3) {
        $('.skill .u-triangle2').removeClass('animated fadeInLeft');
        $('.skill p').removeClass('animated fadeInUp');
        $('.skill .u-triangle2 span').removeClass('animated fadeInRight');
        $('.skill .u-triangle3').removeClass('animated fadeIn');
        $('.skill .u-triangle3 .text1').removeClass('animated fadeInLeft');
        $('.skill .u-triangle3 .text2').removeClass('animated fadeInRight');
        $('.skill-list li').each(function (i, e) {
          $(e).removeClass('animated bounce infinite');
        });
      } else if (index === 4) {
        $('.touch .u-triangle2').removeClass('animated fadeInLeft');
        $('.touch .body').removeClass('animated fadeInUp');
        $('.touch .u-triangle2 span').removeClass('animated fadeInRight');
      }
    }
  });
  window.onload = window.onscroll = function () {
    var seeHeight = document.documentElement.clientHeight || document.body.clientHeight;
    (0, _dom.LazyLoad)(document.querySelectorAll('img'), seeHeight);
  };
}); /* js module */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _star = __webpack_require__(1);

Object.defineProperty(exports, 'Star', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_star).default;
  }
});

var _starCanvas = __webpack_require__(4);

Object.defineProperty(exports, 'StarCanvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_starCanvas).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(0);

var _particle2 = _interopRequireDefault(_particle);

var _bubble = __webpack_require__(5);

var _bubble2 = _interopRequireDefault(_bubble);

var _star2 = __webpack_require__(1);

var _star3 = _interopRequireDefault(_star2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StarCanvas = function () {
  function StarCanvas(selector, w, h, num) {
    _classCallCheck(this, StarCanvas);

    this.canvas = document.querySelector(selector);
    this.ctx = null;
    this.w = w;
    this.h = h;
    this.num = num;
    this.bubbles = [];
    this.stars = [];
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
        this.bubbles.push(new _bubble2.default(Math.random() * w, h + 10, 'rgba(0, 255, 0, 1)', true));
      }
      this.draw();
      this.mouseSwiper();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;
      var w = this.w;
      var h = this.h;
      var num = this.num;
      var bubbles = this.bubbles;
      var stars = this.stars;(function _draw() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          bubbles[i].move(h);
          bubbles[i].drawParticle(ctx);
        }
        if (stars.length) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = stars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var star = _step.value;

              star.move(w, h);
              star.disapear();
              star.drawParticle(ctx);
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = stars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _star = _step2.value;

                  star.drawLine(ctx, _star);
                  if (star.opacity <= 0) {
                    delete stars.shift();
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        requestAnimationFrame(_draw);
      })();
    }
  }, {
    key: 'mouseSwiper',
    value: function mouseSwiper() {
      var _this = this;

      var star = null;
      var startX = void 0,
          startY = void 0,
          start = true;
      var foo = function foo(e) {
        if (start) {
          startX = e.clientX;
          startY = e.clientY;
          start = false;
        }
        var x = e.clientX - startX;
        var y = e.clientY - startY;
        var d = Math.sqrt(x * x + y * y);
        if (d >= 50) {
          for (var i = 0; i < 5; i++) {
            star = new _star3.default(e.clientX + Math.random() * 100 * Math.sin(i), e.clientY + Math.random() * 100 * Math.sin(i), 'rgba(255, 0, 191, 1)');
            _this.stars.push(star);
          }
          start = true;
        }
      };
      if (this.w < 500) {
        window.ontouchmove = function (e) {
          foo(e);
        };
      } else {
        window.onmousemove = function (e) {
          foo(e);
        };
      }
    }
  }]);

  return StarCanvas;
}();

exports.default = StarCanvas;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(0);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
}(_particle2.default);

exports.default = Bubble;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lazyload = __webpack_require__(7);

Object.defineProperty(exports, 'LazyLoad', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lazyload).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imgNodes, seeHeight) {
  Array.prototype.forEach.call(imgNodes, function (img) {
    var imgOffsetHeight = img.getBoundingClientRect().top;
    if (imgOffsetHeight < seeHeight) {
      img.src = img.dataset['src'];
    }
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (nav, poster) {
	var pos = $(poster);
	var nav = $(nav);
	var arr = [0];
	pos.each(function (i, e) {
		$(e).addClass('animated');
	});
	nav.each(function (i, e) {
		$(e).click(function () {
			arr.push(i);
			if (arr.length > 2) {
				arr.shift();
			}
			nav.eq(arr[0]).removeClass('act');
			$(e).addClass('act');
			pos.eq(arr[0]).removeClass('fadeInLeft act');
			pos.eq(arr[0]).addClass('fadeOutRight');
			pos.eq(i).removeClass('fadeOutRight');
			pos.eq(i).addClass('fadeInLeft act');
		});
	});
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);