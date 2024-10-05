// code your solution here
function superbowlWin(record) {
    // Use find() to search for the first object with result "W"
    const win = record.find(game => game.result === 'W');

    // Return the year of the win if found, otherwise return undefined
    return win ? win.year : undefined;
}

// Example usage
const record = [
    { year: 1997, result: 'W' },
    { year: 1998, result: 'L' },
    { year: 2005, result: 'L' },
    { year: 2015, result: 'W' }
];

// Testing the function
console.log(superbowlWin(record)); // Should print 1997 (the first win year)

// Testing with no wins
const noWinRecord = [
    { year: 2005, result: 'L' },
    { year: 2010, result: 'L' }
];

console.log(superbowlWin(noWinRecord)); // Should print undefined










// function superbowlwin(){
//     const win = record.find(game => gameteam == 'Denver Broncos' && game.results === 'W');

//     return win.year; undefined;
    
// }
// const record = [
//     { year: 1997, team: 'Denver Broncos', result: 'W' },
//     { year: 1998, team: 'Denver Broncos', result: 'W' },
//     { year: 2005, team: 'Denver Broncos', result: 'L' },
//     // more records...
// ];

// console.log(superbowlWin(record)); // Should print 1997 (or the first win year)











