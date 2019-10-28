
import { Robot } from './Robot';
import { Arena } from './Arena';
import { resolve } from 'dns';
import { program } from '@babel/types';
const readline = require('readline');


const InputValidators = {
  arena: /^\d*\s\d*/g,
  robotInitialPosition: /^\d*\s\d\s[NWES]/g,
  robotInstructions: /^[MLR]$|(^[MLR]+[MLR])/g
}

const InputQuestions = {
  arena: 'Please insert size of Arena (x y): ',
  robotInitialPosition: 'Insert Robot initial Position (x , y, D[N,S,E,W]): ',
  robotInstructions: 'Inseert Robot Movement instructions (sequence of [L,R,M] example: LMLMLMLMM): '
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getInput(question: string, validator: RegExp, delimeter: string, callback: (answer: string[]) => void) {
  rl.question(question, (answer) => {
    answer = answer.trim();
    if (answer.match(validator) && answer.match(validator)[0].length == answer.length) {
      console.log(answer.match(validator));
      callback(answer.split(delimeter));
    } else {
      console.log("Invalid Input!");
      getInput(question, validator, delimeter, callback);
    }
  })
}

function createRobot(callback: (robot: Robot) => void) {
  getInput(InputQuestions.robotInitialPosition, InputValidators.robotInitialPosition, " ", (robotInput: string[]) => {
    const robot = new Robot(Number(robotInput[0]), Number(robotInput[1]), robotInput[2]);
    getInput(InputQuestions.robotInstructions, InputValidators.robotInstructions, "", (robotInstructions) => {
      robot.setInstructions(robotInstructions)
      callback(robot);
    });
  });
};

getInput(InputQuestions.arena, InputValidators.arena, " ", (arenaSize: string[]) => {
  const arena = new Arena(Number(arenaSize[0]), Number(arenaSize[1]));
  createRobot((robotA: Robot) => {
    createRobot((robotB: Robot) => {
      robotA.setArena(arena);
      robotB.setArena(arena);
      robotA.move();
      robotB.move();
      console.log("** Results **");
      console.log("Robot A");
      robotA.printResults();
      console.log("Robot B");
      robotB.printResults();
      rl.close;
      process.exit();
    });
  });
});






