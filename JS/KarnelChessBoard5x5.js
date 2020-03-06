/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   threeBeepers();
   twoBeeperAndChangeRow();
   threeBeepers();
   twoBeeperAndChangeRow();
   threeBeepers();
}

function threeBeepers() {
   beeperThenTwoMoves();
   beeperThenTwoMoves();
   putBeeper();
}

function twoBeeperAndChangeRow() {
   changeRow();
   beeperThenTwoMoves();
   putBeeper();
   moveAndTurn3();
   moveAndTurn3();
}

function beeperThenTwoMoves() {
   putBeeper();
   move();
   move();
}

function changeRow() {
   turnLeft();
   move();
   turnLeft();
   move();   
}

function moveAndTurn3() {
   move();
   turnLeft();
   turnLeft();
   turnLeft();   
}
