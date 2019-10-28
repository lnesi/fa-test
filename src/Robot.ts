import { RobotPosition } from './Interfaces';
export class Robot {

  private position: RobotPosition;
  private instructions: string[];
  public constructor(initX: number, initY: number, initD: string) {
    this.position = { x: initX, y: initY, d: initD };
  }

  public getPosition(): RobotPosition {
    return this.position;
  }

  public setInstructions(instructions: string[]): void {
    this.instructions = instructions;
  }

}
