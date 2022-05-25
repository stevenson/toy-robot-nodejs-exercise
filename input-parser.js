const { santizePlaceParams } = require('sanitizer');
const { Robot } = require('robot');

function processCommand(input, robot) {
    const inputArray = input.trim().toLowerCase().split(/\s+/);
    let returnRobot = robot;

    const command = inputArray[0].replace(/[^a-z0-9]/gi, '');
    if (command !== 'place' && !robot) {
        throw Error('- ERROR: initialize location');
    }
    switch (String(command)) {
    case 'place':
        if (inputArray[1]) {
            const { x, y, facing } = santizePlaceParams(inputArray[1]);
            returnRobot = new Robot(x, y, facing);
        } else {
            throw Error('- ERROR: place require comma separated params: x, y, and facing');
        }
        break;
    case 'move':
        robot.move();
        break;
    case 'report':
        robot.reportLocation();
        break;
    case 'left':
        robot.left();
        break;
    case 'right':
        robot.right();
        break;
    default:
        throw Error(`- ERROR: unknown command: ${inputArray[0]}`);
    }
    return returnRobot;
}

module.exports = {
    processCommand,
};
