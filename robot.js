class Robot{
    constructor(x,y,facing){
        this.x=x;
        this.y=y;
        this.facing=facing;
        this.reportLocation();
    }
    reportLocation(){
        console.log(`- location at (${this.x},${this.y}) facing ${this.facing}.`)
    }
    left(){
        switch(this.facing){
            case 'north':
                this.facing = 'west';
                break;
            case 'south':
                this.facing = 'east';
                break;
            case 'east':
                this.facing = 'north';
                break;
            case 'west':
                this.facing = 'south';
                break;
            case 'northeast':
                this.facing = 'northwest';
                break;
            case 'northwest':
                this.facing = 'southwest';
                break;
            case 'southeast':
                this.facing = 'northeast';
                break;
            case 'southwest':
                this.facing = 'southeast';
                break;
        }
        this.reportLocation();
    }
    right(){
        switch(this.facing){
            case 'north':
                this.facing = 'east';
                break;
            case 'south':
                this.facing = 'west';
                break;
            case 'east':
                this.facing = 'south';
                break;
            case 'west':
                this.facing = 'north';
                break;
            case 'northeast':
                this.facing = 'southeast';
                break;
            case 'northwest':
                this.facing = 'northeast';
                break;
            case 'southeast':
                this.facing = 'southwest';
                break;
            case 'southwest':
                this.facing = 'northwest';
                break;
        }
        this.reportLocation();
    }
    move(){
        let newX = this.x;
        let newY = this.y;
        switch(this.facing){
            case 'north':
                newY++;
                break;
            case 'south':
                newY--;
                break;
            case 'east':
                newX++;
                break;
            case 'west':
                newX--;
                break;
            case 'northeast':
                newY++;
                newX++;
                break;
            case 'northwest':
                newY++;
                newX--;
                break;
            case 'southeast':
                newY--;
                newX++;
                break;
            case 'southwest':
                newY--;
                newX--;
                break;
        }
        if(this.validateLocation(newX,newY)){
            this.x=newX;
            this.y=newY;
            this.reportLocation();
        }else{
            throw Error(`invalid move: (${newX},${newY}) is out of bounds`);
        }  
    }
    validateLocation(x,y){
        if (0 <= x && x <= 5 && 0 <= y && y <= 5) {
            return true;
        }
        return false;
    }
}

module.exports = {
    Robot
};
