# toy-robot-nodejs-exercise
## I. Exercise Description
- simple console application that should take the following commands
    1. PLACE X,Y,F
        - PLACE command places the robot in a location x,y,f
        - PLACE must have 3 arguments: x y and f
        - x and y are units in a 5 x 5 grid can have a value from 0 to 5
            - going pass the 5 x 5 grid is like falling of a zone
            - NOTE: the (0,0) point will be at the south west most corner
        - f is where the robot will face
        - It is required that the first command to the robot is a PLACE command, 
            - after that, any sequence of commands may be issued, in any order, including another PLACE command.
            - The application should discard all commands in the sequence until a valid PLACE command has been executed.
    2. MOVE
        - MOVE will move the toy robot one unit forward in the direction it is currently facing
    3. LEFT / RIGHT
        - LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
    4. REPORT 
        - REPORT will announce the X,Y and F of the robot. 
- NOTES:
    - A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
        - this is why a valid place commandd must be first issued.
    - The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
    - Any move that would cause the robot to fall must be ignored.

## Installation
1. `npm i` - install dependencies
    - the only dependencies used are just for dealing with pathing and some unit tests and mocking
2. `npm test`
    - will run test
3. `npm start` 
    - runs the application

## inputs
### valid commands are as explained above:
1. the command will keep running unit termination of the node app or `exit` command
2. you can initialize position with `place 1,1,north`
    - the stream is converted to lower case to simplify error handling
    - the sanitizer also cleans up extra values and tries to understand false input.
3. you can tell the robot to move with `move`
4. the robot turns with `left` and `right` command
5. the `report` command simple console.log the current properties of the robot.



