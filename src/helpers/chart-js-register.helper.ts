import { ArcElement, Chart as ChartJS, Legend, PolarAreaController, RadialLinearScale, Title } from 'chart.js';

class ChartJsRegister {
  private _registered: boolean = false;

  constructor() {}

  public Register(): void {
    if (!this._registered) {
      ChartJS.register(PolarAreaController, RadialLinearScale, ArcElement, Legend, Title);
      this._registered = true;
    }
  }
}

export const ChartJsRegisterHelper = new ChartJsRegister();