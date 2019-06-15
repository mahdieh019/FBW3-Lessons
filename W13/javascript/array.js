// let colors=new Array("red","blue","green","yellow");
// let Colors=["red","blue","green","yellow"];
// console.log(colors);
// let f=('<br>');
// colors.push('white');
// console.log(colors);
// let mycolor=colors[0];

// let mydiv="<div style='background:" + mycolor+"'>" +mycolor+ "</div>"+f;
// let mydiv1="<div style='background:" + colors[1]+"'>" +colors[1]+ "</div>"+f;
// let mydiv2="<div style='background:" + colors[2]+"'>" +colors[2]+ "</div>"+f;
// let mydiv3="<div style='background:" + colors[3]+"'>" +colors[3]+ "</div>"+f;

// document.write(mydiv);
// document.write(mydiv1);
// document.write(mydiv2);
// document.write(mydiv3);


let mycolors=new Array("red","blue","green","yellow","black");
document.write('<hr>');
mycolors.push('pink');

for(i=0 ; i<mycolors.length ; i++){
    // document.write(mycolors[i]+ '<br>');
    // document.write("<div style='background:"+ mycolors[i] +"'>"+ mycolors[i] + "</div>");
    div="<div style='text-align:center;margin:0 auto;height:40px;width:"+i+1*80+"px;background:"+mycolors[i]+"'>" + mycolors[i]+ "</div>";

       document.write(div);
}
for(i=1;i<=10;i++){
    for(j=1;j<i;j++){
        document.write("* ");
    }
    document.write('<br>');
}

for(i=1;i<=10;i++){
    for(j)
}