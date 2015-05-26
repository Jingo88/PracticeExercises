var numRows = process.argv[2];
var i = 0

//makes sure to put the blk and spaces variables inside the while loop
//Each iteration of this loop is only for one of the rows in the pyramid. 
//We put the variables in the while loop so they reset to zero at the next row iteration
while (i < numRows) {
  var pyrblk = 0;
  var pyrspace = 0;
  var blks = "";
  var spaces = "";

//as log as space is less than the amount of requested rows, minus the current row
//add a space
    while (pyrspace < (numRows - i)) {
      spaces = spaces + " ";
      pyrspace++
    }; 

//as long as the blcks are less than the current row + 1 (think pyramids start with 1, 3, 5, 7, etc.).
//add an extra block.
    while (pyrblk < (i*2 + 1)){
      blks = blks + "^";
      pyrblk++
    };

//add the spaces before the blks
    console.log(spaces + blks);

//increase your i to count to the current row
    i++;
}