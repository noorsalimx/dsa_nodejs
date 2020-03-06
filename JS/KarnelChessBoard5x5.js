/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
   oneCycle();
   oneCycle();
   threeBeeper();
}

function oneCycle() {
   threeBeeper();
   twoBeeperAndChangeRow();
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
