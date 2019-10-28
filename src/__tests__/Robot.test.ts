import { Robot } from '../Robot';
import { Arena } from '../Arena';

describe("Robot Unit Tests", () => {
  var robot: Robot;
  beforeEach(() => {
    robot = new Robot(1, 1, 'N');

  });
  test('constructor', () => {

    expect(robot.getPosition()).toMatchObject({ x: 1, y: 1, d: 'N' });
  });

  test('setInstructions', () => {
    robot.setInstructions(['M', 'M', 'L'])
    expect(robot.getInstructions()).toEqual(['M', 'M', 'L']);
  });

  test('setArena', () => {
    var arena = new Arena(10, 10);
    robot.setArena(arena);
    expect(robot.getArena()).toEqual(arena);
  });

  test('move', () => {
    robot.setInstructions(['M', 'M', 'R']);
    robot.move();
    expect(robot.getPosition()).toMatchObject({ x: 1, y: 3, d: 'E' });
  });
  afterEach(() => {
    robot = null;
  });


});
