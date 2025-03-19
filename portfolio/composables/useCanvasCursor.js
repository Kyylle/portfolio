import { onMounted, onUnmounted } from 'vue';

export default function useCanvasCursor() {
    console.log("CanvasCursor composable is running!"); 
  let ctx, f;
  let e = 0;
  const pos = {};
  let lines = [];
  const E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  function n(config) {
    this.init(config || {});
  }
  n.prototype = {
    init: function (config) {
      this.phase = config.phase || 0;
      this.offset = config.offset || 0;
      this.frequency = config.frequency || 0.001;
      this.amplitude = config.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
  };

  function Line(config) {
    this.init(config || {});
  }
  Line.prototype = {
    init: function (config) {
      this.spring = config.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let i = 0; i < E.size; i++) {
        const node = new Node();
        node.x = pos.x;
        node.y = pos.y;
        this.nodes.push(node);
      }
    },
    update: function () {
      let spring = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * spring;
      t.vy += (pos.y - t.y) * spring;

      for (let i = 1; i < this.nodes.length; i++) {
        let prev = this.nodes[i - 1];
        let curr = this.nodes[i];

        curr.vx += (prev.x - curr.x) * spring;
        curr.vy += (prev.y - curr.y) * spring;
        curr.vx += prev.vx * E.dampening;
        curr.vy += prev.vy * E.dampening;

        curr.vx *= this.friction;
        curr.vy *= this.friction;
        curr.x += curr.vx;
        curr.y += curr.vy;

        spring *= E.tension;
      }
    },
    draw: function () {
      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

      for (let i = 1; i < this.nodes.length - 1; i++) {
        let next = this.nodes[i + 1];
        let midX = (this.nodes[i].x + next.x) / 2;
        let midY = (this.nodes[i].y + next.y) / 2;
        ctx.quadraticCurveTo(this.nodes[i].x, this.nodes[i].y, midX, midY);
      }

      ctx.stroke();
      ctx.closePath();
    },
  };

  function onMouseMove(event) {
    pos.x = event.clientX;
    pos.y = event.clientY;
    event.preventDefault();
  }

  function render() {
    if (ctx.running) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = `hsla(${Math.round(f.update())}, 50%, 50%, 0.2)`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function initCanvas() {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.running = true;
    ctx.frame = 1;

    f = new n({ phase: Math.random() * 2 * Math.PI, amplitude: 85, frequency: 0.0015, offset: 285 });

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeCanvas);

    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
    }

    resizeCanvas();
    render();
  }

  onMounted(() => {
    initCanvas();
  });

  onUnmounted(() => {
    ctx.running = false;
    document.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', resizeCanvas);
  });
}
