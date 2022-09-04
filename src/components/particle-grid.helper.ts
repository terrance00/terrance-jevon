import { Ease, Point, Shape, Stage, Ticker, Tween } from 'createjs-module';

const MIN_DISTANCE: number = 100;
const MAX_DISTANCE: number = 200;
const MIN_RADIUS: number = 2;
const MAX_RADIUS: number = 2;
const MIN_RAY: number = 0;
const MAX_RAY: number = Math.PI / 2;
const MIN_CONNECTIONS: number = 1;
const MAX_CONNECTIONS: number = 3;

const LINE_COLOR: string = '#53565c';
const SHAPE_COLOR: string = '#53565c';

export function DrawParticleGrid(canvas: HTMLCanvasElement): void {
  const stage: Stage = new Stage(canvas);
  const parent: HTMLDivElement = canvas.parentElement! as HTMLDivElement;
  attachResizeEvent(canvas, parent);
  resizeToParent(canvas, parent);

  //let blocks: paper.Point[] = [];

  const boundaryY: number = canvas.clientHeight;
  const boundaryX: number = canvas.clientWidth;

  let shapes: Shape[] = [];
  const counter: number = 400;
  for (let i: number = 0; i < counter; i++) {
    let point = new Point(randomIntBetween(0, boundaryX), randomIntBetween(0, boundaryY));
    let circle = createCircleAt(point);
    shapes.push(circle);
    stage.addChild(circle);
  }

  stage.update();

  shapes = shapes.sort((a: Shape, b: Shape) => (a.x > b.x ? 1 : a.x === b.x ? 0 : -1));

  Ticker.addEventListener('tick', () => {
    stage.update();
  });
  window.setInterval(() => tweenToMouse(stage, shapes), 500);
}

function tweenToMouse(stage: Stage, shapesX: Shape[]): void {
  let mousePoint: Point = new Point(stage.mouseX, stage.mouseY);

  for (let i: number = 0; i < shapesX.length; i++) {
    const to: Point = getDestination(mousePoint, new Point(shapesX[i].x, shapesX[i].y));
    const tween: Tween = Tween.get(shapesX[i]).to({ x: shapesX[i].x + 100 }, 500, Ease.quadIn);

    console.info(mousePoint, to);
  }
}

function getDestination(mousePoint: Point, origin: Point): Point {
  const deltaX: number = origin.x - mousePoint.x;
  const deltaY: number = origin.y - mousePoint.y;
  const magnitude: number = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return new Point(Math.floor(deltaX / magnitude), Math.floor(deltaY / magnitude));
}

function attachResizeEvent(canvas: HTMLCanvasElement, parent: HTMLDivElement): void {
  window.addEventListener('resize', () => resizeToParent(canvas, parent));
}

function resizeToParent(canvas: HTMLCanvasElement, parent: HTMLDivElement): void {
  console.info('resizing');
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight - 4;
}

function createCircleAt(point: Point): Shape {
  const circle: Shape = new Shape();

  circle.graphics.beginFill(SHAPE_COLOR).drawCircle(0, 0, randomIntBetween(MIN_RADIUS, MAX_RADIUS));
  circle.x = point.x;
  circle.y = point.y;
  return circle;
}

function randomIntBetween(min: number, max: number): number {
  return min + Math.floor(Math.random() * max);
}

function randomNumberBetween(min: number, max: number): number {
  return min + Math.random() * max;
}

/*function getConnection(origin: paper.Point): paper.Point {
  const direction: number = randomNumberBetween(MIN_RAY, MAX_RAY);
  const distance: number = randomIntBetween(MIN_DISTANCE, MAX_DISTANCE);

  const y: number = Math.floor(Math.sin(direction) * distance);
  const x: number = Math.floor(Math.cos(direction) * distance);

  return new paper.Point(x + origin.x, y + origin.y);
}
*/
