import { RobotPosition } from './Interfaces';

export class Arena {
  private x1: number = 0;
  private x2: number = 0;
  private y1: number = 0;
  private y2: number = 0;

  public constructor(width: number, height: number) {
    this.x2 = width;
    this.y2 = height;
  }

  public isWreked(robotP: RobotPosition) {
    if (robotP.x <= this.x1) {
      return true;
    } else if (robotP.x >= this.x2) {
      return true;
    } else if (robotP.y <= this.y1) {
      return true;
    } else if (robotP.y >= this.y2) {
      return true;
    } else {
      return false;
    }
  }
}