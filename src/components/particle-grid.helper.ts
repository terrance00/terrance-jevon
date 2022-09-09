import { Ease, Point, Shape, Stage, Ticker, Tween } from 'createjs-module';

const LINE_COLOR: string = '#8f8f8f';
const SHAPE_COLOR: string = '#53565c';
const COUNTER: number = 400;

export function DrawParticleGrid(canvas: HTMLCanvasElement): void {
  const stage: Stage = new Stage(canvas);
  const parent: HTMLDivElement = canvas.parentElement! as HTMLDivElement;
  attachResizeEvent(canvas, parent);
  resizeToParent(canvas, parent);

  //let blocks: paper.Point[] = [];

  const boundaryY: number = canvas.clientHeight;
  const boundaryX: number = canvas.clientWidth;

  let shapes: Shape[] = [];

  for (let i: number = 0; i < COUNTER; i++) {
    let point = new Point(randomIntBetween(0, boundaryX), randomIntBetween(0, boundaryY));
    let circle = createCircleAt(point);
    shapes.push(circle);
    stage.addChild(circle);
  }

  stage.update();

  shapes = shapes.sort((a: Shape, b: Shape) => (a.x > b.x ? 1 : a.x === b.x ? 0 : -1));
  let points: Point[] = shapes.map((s: Shape) => {
    return new Point(s.x, s.y);
  });

  let tweenedPoints: Point[] = points.map((p: Point) => {
    return p.clone();
  });

  let connections: { from: number; to: number }[] = getConnections(points);
  const indexArr: number[] = getIndexArray(connections.length);
  Ticker.addEventListener('tick', () => {
    drawCurrentState(shapes, tweenedPoints);
    stage.removeChildAt(...indexArr);
    drawConnections(stage, tweenedPoints, connections);
    stage.update();
  });
  window.setInterval(() => tweenToMouse(stage, tweenedPoints, points), 100);
}

function getIndexArray(connectionLength: number): number[] {
  let index: number = COUNTER;
  const result: number[] = [];
  const upperIndex: number = COUNTER + connectionLength;
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

function tweenToMouse(stage: Stage, tweenedPoints: Point[], points: Point[]): void {
  let mousePoint: Point = new Point(stage.mouseX, stage.mouseY);

  for (let i: number = 0; i < points.length; i++) {
    const to: Point = getDestination(mousePoint, points[i]);
    Tween.get(tweenedPoints[i]).to({ x: to.x, y: to.y }, 100, Ease.quadInOut);
  }
}

function getDestination(mousePoint: Point, origin: Point): Point {
  const deltaX: number = mousePoint.x - origin.x;
  const deltaY: number = mousePoint.y - origin.y;
  const magnitude: number = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const [uX, uY]: [x: number, y: number] = [deltaX / magnitude, deltaY / magnitude];

  return new Point(origin.x + uX * 30, origin.y + uY * 30);
}

function attachResizeEvent(canvas: HTMLCanvasElement, parent: HTMLDivElement): void {
  window.addEventListener('resize', () => resizeToParent(canvas, parent));
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
