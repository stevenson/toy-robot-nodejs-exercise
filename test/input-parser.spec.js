const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

chai.use(require('sinon-chai'));

const { processCommand } = require('input-parser');
const { Robot } = require('robot');

describe('Robot runner', () => {
    describe('process command function', () => {
        it('should throw error when place not yet initialized', ()=>{
            const command = 'wew';
            expect(() => processCommand(command)).to.throw('- ERROR: initialize location');
        });
        it('should throw error when place not yet initialized', ()=>{
            const command = 'wew';
            const robot = new Robot(1, 1, 'south');
            expect(() => processCommand(command, robot)).to.throw(`- ERROR: unknown command: ${command}`);
        });
        it('should accept move commands if properly initialized', () =>{
            const command = 'move';
            const robot = new Robot(1, 1, 'south');
            sinon.stub(robot, 'move').callsFake(() => robot);
            processCommand(command, robot);
            expect(robot.move).to.have.been.calledOnce;
        });
        it('should accept left commands if properly initialized', () =>{
            const command = 'left';
            const robot = new Robot(1, 1, 'south');
            sinon.stub(robot, 'left').callsFake(() => { return robot;} );
            processCommand(command, robot);
            expect(robot.left).to.have.been.calledOnce;
        })
        it('should accept right commands if properly initialized', () =>{
            const command = 'right';
            const robot = new Robot(1, 1, 'south');
            sinon.stub(robot, 'right').callsFake(() => { return robot;} );
            processCommand(command, robot);
            expect(robot.right).to.have.been.calledOnce;
        });
        it('should handle scenarios: place(0,0,north), move', ()=>{
            let robot = new Robot(0, 0, 'north');
            robot = processCommand('move', robot);
            expect(robot.x).equals(0);
            expect(robot.y).equals(1);
            expect(robot.facing).equals('north');
        });
        it('should handle scenarios: place(0,0,north), left', ()=>{
            let robot = new Robot(0, 0, 'north');
            robot = processCommand('left', robot);
            expect(robot.x).equals(0);
            expect(robot.y).equals(0);
            expect(robot.facing).equals('west');
        });
        it('should handle scenarios: place(1,2,east), move, move, left, move', ()=>{
            let robot = new Robot(1, 2, 'east');
            robot = processCommand('move', robot);
            robot = processCommand('move', robot);
            robot = processCommand('left', robot);
            robot = processCommand('move', robot);
            expect(robot.x).equals(3);
            expect(robot.y).equals(3);
            expect(robot.facing).equals('north');
        });
    });
});
