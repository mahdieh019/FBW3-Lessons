const moment = require('moment');
console.log(moment().format('dddd'));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//alert(moment().format("MMM Do YY"));

//let endDate="2019-09-25T16:15:00";
class ComingSoon{
    constructor(enddate){
        // this.sec=sec;
        this.enddate=moment(enddate);
    }
    getDay(){
       console.log(this.enddate.diff(this.now,"month")); 
       console.log((this.enddate.diff(this.now,"day"))); 
       console.log(this.enddate.diff(this.now,"hour")-(5*24)); 
       console.log(this.enddate.diff(this.now,"minute")-((5*24*60)+(23*60))); 
       console.log(this.enddate.diff(this.now,"second")-((5*24*60*60)+(23*60*60)+((this.enddate.diff(this.now,"minute")-((5*24*60)+(23*60)))*60))); 
    }
}
let x=new ComingSoon( "2019-09-25T16:15:00");
x.getDay();