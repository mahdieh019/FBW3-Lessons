const moment = require('moment');
console.log(moment().format('dddd'));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

class ComingSoon{
    constructor(enddate){
        // this.sec=sec;
        this.enddate=enddate;
    }
    getDay(){
       console.log(this.enddate-moment().format('MMMM Do YYYY, h:mm:ss a')); 
    }
}
let x=new ComingSoon( 'September 24th 2019, 9:29:51 pm');
x.getDay();