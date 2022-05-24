# toy-robot-nodejs-exercise
## I. Exercise Description
- simple console application that should take the following commands
    1. PLACE X, Y, F
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


