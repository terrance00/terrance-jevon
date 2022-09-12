import { Ease, Point, Shape, Stage, Ticker, Tween } from 'createjs-module';

const LINE_COLOR: string = '#8f8f8f';
const SHAPE_COLOR: string = '#53565c';
const DISTANCE_PER_TICK = 1;

export function DrawParticleGrid(canvas: HTMLCanvasElement, counterFull: number = 400, counterMobile: number = 50): void {
  const stage: Stage = new Stage(canvas);
  const parent: HTMLDivElement = canvas.parentElement! as HTMLDivElement;

  const draw: () => void = () => {
    stage.removeAllChildren();
    stage.clear();

    const boundaryY: number = canvas.clientHeight;
    const boundaryX: number = canvas.clientWidth;

    let counter: number = boundaryX > 600 ? counterFull : counterMobile;

    let shapes: Shape[] = [];

    for (let i: number = 0; i < counter; i++) {
      let point = new Point(randomIntBetween(0, boundaryX), randomIntBetween(0, boundaryY));
      let circle = createCircleAt(point);
      shapes.push(circle);
      stage.addChild(circle);
    }

    stage.update();

    shapes = shapes.sort((a: Shape, b: Shape) => (a.x > b.x ? 1 : a.x === b.x ? 0 : -1));
    let points: { p: Point; v: Point }[] = shapes.map((s: Shape) => {
      return { p: new Point(s.x, s.y), v: getDirectionalVector(0, Math.PI) };
    });

    Ticker.framerate = 60;
    Ticker.removeAllEventListeners();
    Ticker.addEventListener('tick', () => {
      applyVectors(points, boundaryX, boundaryY);
      points = points.sort((a: { p: Point; v: Point }, b: { p: Point; v: Point }) => (a.p.x > b.p.x ? 1 : a.p.x === b.p.x ? 0 : -1));
      let connections: { from: number; to: number }[] = getConnections(points.map((p: { p: Point; v: Point }) => p.p));
      const indexArr: number[] = getIndexArray(connections.length, counter);
      drawCurrentState(
        shapes,
        points.map((p) => p.p)
      );
      stage.removeChildAt(...indexArr);
      drawConnections(
        stage,
        points.map((p) => p.p),
        connections
      );
      stage.update();
    });
  };

  attachResizeEvent(canvas, parent, draw);
  resizeToParent(canvas, parent);
  draw();
}

function applyVectors(points: { p: Point; v: Point }[], boundaryX: number, boundaryY: number): void {
  for (let i: number = 0; i < points.length; i++) {
    points[i].p.x = points[i].p.x + DISTANCE_PER_TICK * points[i].v.x;
    points[i].p.y = points[i].p.y + DISTANCE_PER_TICK * points[i].v.y;

    if (points[i].p.x > boundaryX || points[i].p.x < 0) {
      points[i].v.x = -1 * points[i].v.x;
    }

    if (points[i].p.y > boundaryY || points[i].p.y < 0) {
      points[i].v.y = -1 * points[i].v.y;
    }
  }
}

function getDirectionalVector(rayStartRadian: number, rayEndRadian: number): Point {
  const radian: number = rayStartRadian + (rayEndRadian - rayStartRadian) * Math.random();
  return new Point(Math.cos(radian), Math.sin(radian));
}

function getIndexArray(connectionLength: number, particleCount: number): number[] {
  let index: number = particleCount;
  const result: number[] = [];
  const upperIndex: number = particleCount + connectionLength;
  while (index < upperIndex) {
    result.push(index);
    index++;
  }

  return result;
}

function drawCurrentState(shapes: Shape[], tweenedPoints: Point[]): void {
  shapes.forEach((s: Shape, i: number) => {
    s.x = tweenedPoints[i].x;
    s.y = tweenedPoints[i].y;
  });
}

function getConnections(origins: Point[]): { from: number; to: number }[] {
  const threshold: number = 200;
  let result: { from: number; to: number }[] = [];

  for (let i: number = 0; i < origins.length; i++) {
    for (let j: number = i + 1; j < origins.length; j++) {
      if (origins[j].x - origins[i].x > threshold) break;

      const distance: number = Math.sqrt(Math.pow(origins[i].x - origins[j].x, 2) + Math.pow(origins[i].y - origins[j].y, 2));

      if (distance > 150) continue;
      result.push({ from: i, to: j });
    }
  }
  return result;
}

function drawConnections(stage: Stage, tweenedPoints: Point[], connections: { from: number; to: number }[]): void {
  for (let i: number = 0; i < connections.length; i++) {
    let line: Shape = new Shape();

    line.graphics
      .setStrokeStyle(0.5)
      .beginStroke(LINE_COLOR)
      .moveTo(tweenedPoints[connections[i].from].x, tweenedPoints[connections[i].from].y)
      .lineTo(tweenedPoints[connections[i].to].x, tweenedPoints[connections[i].to].y)
      .endStroke();

    stage.addChild(line);
  }
}

function tweenToMouse(stage: Stage, tweenedPoints: { p: Point; v: Point }[], points: { p: Point; v: Point }[]): void {
  let mousePoint: Point = new Point(stage.mouseX, stage.mouseY);

  for (let i: number = 0; i < points.length; i++) {
    const to: Point = getDestination(mousePoint, points[i].p);
    Tween.get(tweenedPoints[i].p).to({ x: to.x, y: to.y }, 100, Ease.quadInOut);
    if (i === 0) {
      console.log(tweenedPoints[i].p, to);
    }
  }
}

function getDestination(mousePoint: Point, origin: Point): Point {
  const deltaX: number = mousePoint.x - origin.x;
  const deltaY: number = mousePoint.y - origin.y;
  const magnitude: number = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const [uX, uY]: [x: number, y: number] = [deltaX / magnitude, deltaY / magnitude];

  return new Point(origin.x + uX * 30, origin.y + uY * 30);
}

function attachResizeEvent(canvas: HTMLCanvasElement, parent: HTMLDivElement, draw: () => void): void {
  let timeout: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      resizeToParent(canvas, parent);
      draw();
    }, 200);
  });
}

function resizeToParent(canvas: HTMLCanvasElement, parent: HTMLDivElement): void {
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight - 4;
}

function createCircleAt(point: Point): Shape {
  const circle: Shape = new Shape();

  circle.graphics.beginFill(SHAPE_COLOR).drawCircle(0, 0, 2);
  circle.x = point.x;
  circle.y = point.y;

  return circle;
}

function randomIntBetween(min: number, max: number): number {
  return min + Math.floor(Math.random() * max);
}
