

// export let greeting="welcome";
// export function hi(user){
//     return `${greeting} ${user} in js`;
// }
//-------------------------------------
export {hi, greeting, macker};

let greeting=`welcome back`;

function hi(user){
    return `${greeting} ${user} in js`;
}
function macker(x, us){
    return `${2*x } ${hi(us)}`;
}
//------------------------------------------
function createDiv(element,text,background){
    let div=document.createElement(element);
    div.append(text);
    div.style.background=background;
    div.style.color='red';
    div.style.height="100px";
    document.body.append(div);
}
export default createDiv;

export function fun(num){
    for(let i=1;i<=num;i++){
        let e1=prompt();
        let e2=prompt();
        let e3=prompt();
        createDiv(e1,e2,e3);
    }
}