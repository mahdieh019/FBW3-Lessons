
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


/////////////////////////////////////////////
// var patt=/dci/;
// var str="I like dci very much"; //Array [ "dci" ]

str="I like dci very much,dci dci dci";
patt=/dci/g; //Array(4) [ "dci", "dci", "dci", "dci" ]

str="I like dci very much,DCI dCi dci....";
patt=/dci/gi; //Array(4) [ "dci", "DCI", "dCi", "dci" ]

str="test_a test_b test_c test_m";
patt=/test_[abc]/g; //Array(3) [ "test_a", "test_b", "test_c" ]
patt=/test_[a-c]/g; //same

str="test_a test_b test_c test_m";
patt=/test_[^abc]/g;//Array [ "test_m" ]
patt=/test_[^a-c]/g;//same

str="test_0 test_2 test_3 test_7";
patt=/test_[023]/g; //Array(3) [ "test_0", "test_2", "test_3" ]
patt=/test_[0-3]/g ;//same

str="test_0 test_2 test_3 test_7";
patt=/test_[^023]/g; //Array [ "test_7" ]
patt=/test_[^0-6]/g ;//same

str="colour color"
patt=/col(o|ou)r/g;//Array [ "colour", "color" ]

//metacharacters
//dot  .  any character 
str="car car? cars car2";
patt=/car./g; //Array(4) [ "car ", "car?", "cars", "car2" ]

str="car456 carRr car. car"
patt=/car../g;//Array(3) [ "car45", "carRr", "car. " ]

str="google.com facebook.com romal.com romal.it";
patt=/\w+\.com/g; //Array(3) [ "google.com", "facebook.com", "romal.com" ]
patt=/\w+\.(com|it)/g;//Array(4) [ "google.com", "facebook.com", "romal.com", "romal.it" ]


//W find special character
str="google.com google.it google123$@!.com googleIsNotThaSuper.com";
patt=/\W+\.com/g; //Array [ "$@!.com" ]

//\d==[0-9]

//Quantifiers
// n+ Matches any string that contains at least one n
str="n l nn ll nnn lll nnn";
patt=/l+/g //Array(3) [ "l", "ll", "lll" ]

str="n l nn ll nnn LLL nnn";
patt=/l+/gi //Array(3) [ "l", "ll", "LLL" ]

//n? Matches any string that contains zero or one occurrences of n
str="3 July, 3rd August"
patt=/3(rd)?/g;//Array [ "3", "3rd" ]

//n{2,3} Matches any string that contains a sequence of 2 to 3 n's

str="n l nn ll nnn lll nnn";
patt=/l{2,3}/g; // Array [ "ll", "lll" ]

str="n l nn ll nn lll n llll nnn";
patt=/l{2,4}/g;//Array(3) [ "ll", "lll", "llll" ]

str="n l nn ll nn lll n llll nnn";
patt=/l{2}/g;//Array(4) [ "ll", "ll", "ll", "ll" ]

patt=/l{3,}/g; //Array [ "lll", "llll" ]


//^n Matches any string with n at the beginning of it
str="google.it google.com google.de"
patt=/^google\.\w+/g; //Array [ "google.it" ]

//n$ Matches any string with n at the end of it
patt=/google\.\w+$/g; //Array [ "google.de" ]

var arr=str.match(patt);
console.log(arr);


































