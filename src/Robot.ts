import { RobotPosition } from './Interfaces';
import { Arena } from './Arena';
import * as _ from "lodash";

export class Robot {

  private position: RobotPosition;
  private instructions: string[];
  private arena: Arena;
  private directionMapping: object = {
    N: 0,
    E: 90,
    S: 180,
    W: 270
  }
  public constructor(initX: number, initY: number, initD: string) {
    this.position = { x: initX, y: initY, d: initD };
  }

  public getPosition(): RobotPosition {
    return this.position;
  }

  public setInstructions(instructions: string[]): void {
    this.instructions = instructions;
  }

  public getInstructions(): string[] {
    return this.instructions;
  }

  public setArena(arena: Arena): void {
    this.arena = arena;
  }

  public getArena(): Arena {
    return this.arena;
  }

  public move(): void {
    this.instructions.forEach(this.calculateInstructionStep.bind(this));
  }

  public printResults() {
    if (this.arena.isWreked(this.position)) {
      console.log(this.position.x, this.position.y, this.position.d, 'Wreked');
    } else {
      console.log(this.position.x, this.position.y, this.position.d);
    }
  }

  private calculateInstructionStep(step: string) {
    //console.log("Step:", step);
    //console.log("Before:", this.position);
    if (step === "M") {
      this.moveStep();
    } else {
      this.position.d = this.rotate(step);
    }
    //console.log("After:", this.position);

  }

  private moveStep() {
    switch (this.position.d) {
      case 'N':
        this.position.y = this.position.y + 1;
        break;
      case 'S':
        this.position.y = this.position.y - 1;
        break;
      case 'E':
        this.position.x = this.position.x + 1;
        break;
      case 'W':
        this.position.x = this.position.x - 1;
        break;
    }
  }

  private rotate(direction: string) {
    var newDirection = this.directionMapping[this.position.d];
    if (direction === 'L') {
      newDirection = newDirection == 0 ? 360 : newDirection;
      newDirection = newDirection - 90;
    } else if (direction === 'R') {
      newDirection = newDirection + 90;
      newDirection = newDirection == 360 ? 0 : newDirection;
    }
    return _.invert(this.directionMapping)[newDirection];
  }

}
