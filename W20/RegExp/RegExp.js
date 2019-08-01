
var str="Visit W3Schools";
var patt=/w3schools/i;
var result=str.match(patt);
console.log(result);

//answer: Array [ "W3Schools" ]
///////////////////////////////////////////////
var str="Visit W3Schools";
var patt=/[i]+/i;
var result=str.match(patt);
console.log(result);

// Array [ "i" ]

////////////////////////////////////////////////
var str="ooo  Visit W3Schools";
var patt=/[o]/i;
var result=str.match(patt);
console.log(result);

// Array [ "o" ]
///////////////////////////////////////////////

var str="ooo  Visit W3Schools";
var patt=/[o]+/i;
var result=str.match(patt);
console.log(result);

// Array [ "ooo" ]
////////////////////////////////////////////////

var str="oooiii  Visit W3Schools";
var patt=/[oi]+/i;
var result=str.match(patt);
console.log(result);

// Array [ "oooiii"]
///////////////////////////////////////////////

var str="llloooiiiiii  Visit W3Schools";
var patt=/[^lll]+/i;
var result=str.match(patt);
console.log(result);

// Array [ "oooiiiiii  Visit W3Schoo" ]
///////////////////////////////////////////////

var str="llloooiiiiii  Visit W3Schools  2010000000$ ";
var patt=/[0-2]+/i;
var result=str.match(patt);
console.log(result);

//Array [ "2010000000" ]
//////////////////////////////////////////////

var str="llloooiiiiii  Visit W3Schools  2010000000$ ";
var patt=/[0-2]+\$/i;
var result=str.match(patt);
console.log(result);
//Array [ "2010000000$" ] [a-z]=== \w   [0-9]==\d
//////////////////////////////////////////////////////////

var str="LLLoooiii Visit W3Schools   2010000000$    324355035450€ ";
//var patt=/[^lll]+/i;
var patt=/\d+(\$|\€)/g;  
var result=str.match(patt);
console.log(result);
// Array [ "2010000000$", "324355035450€" ]



































