const { read } = require('fs');
var readline = require('readline');

const { Robot } = require('./robot.js');

let robot = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function santizePlace(strX, strY, strF) {
    const x = parseInt(strX.replace(/\D/g, '')) | null;
    const y = parseInt(strY.replace(/\D/g, '')) | null;
    const facing = strF.toLowerCase().match(/^((north|south)(east|west)?|east|west)/g);
    if (0 <= x && x <= 5 && 0 <= y && y <= 5 && facing.length > 0) {
        return { x, y, facing: facing[0] };
    }
    throw Error('invalid place parameters');
}

function performPlace(strX, strY, strF) {
    const { x, y, facing } = santizePlace(strX, strY, strF);
    robot = new Robot(x, y, facing);
}



function processCommand(command) {
    const params = command.trim().split(/\s+/);
    try {
        switch (String(params[0].toLowerCase())) {
            case 'place':
                if (params.length = 4) {
                    performPlace(params[1], params[2], params[3]);
                } else {
                    throw Error('place params require x y and direction');
                }
                break;
            case 'move':
                if (!robot) {
                    throw Error('initialize location');
                }
                robot.move();
                break;
            case 'report':
                if (!robot) {
                    throw Error('initialize location');
                }
                robot.reportLocation();
                break;
            case 'left':
                if (!robot) {
                    throw Error('initialize location');
                }
                robot.left();
                break;
            case 'right':
                if (!robot) {
                    throw Error('initialize location');
                }
                robot.right();
                break;
            default:
                console.log(`unknown command: ${params[0]}`);
                break;
        }
    } catch (e) {
        console.log(`invalid command: ${e.message}`);
    }
}

function readUserInput() {
    rl.question("Command: ", function (answer) {
        if (answer == "exit") {
            rl.close();
        } else {
            processCommand(answer);
            readUserInput();
        }
    });
}

readUserInput();