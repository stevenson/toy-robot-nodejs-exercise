require('app-module-path/register');

const readline = require('readline');

const { processCommand } = require('input-parser');

let robot = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function readUserInput() {
    rl.question('Command: ', input => {
        if (input === 'exit') {
            rl.close();
        } else {
            try {
                robot = processCommand(input, robot);
            } catch (e) {
                console.log(`- ERROR: invalid command: ${e.message}`);
            }
            readUserInput();
        }
    });
}

readUserInput();
