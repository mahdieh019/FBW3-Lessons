// add export before declaration

// export let greeting="welcome back";
// export function hi(user){
//     return `${greeting} ${user} in javascript`
//     //return 'hello world' +user;
// }


export {greeting,hi};
let greeting="welcome back";
function hi(user){
    return `${greeting} ${user} in javascript`
    //return 'hello world' +user;
}
//--------------------------------------------------------------------------
// export default function doubleNumber(num){
//     return num*2;
// }
export function doubleNumber(num){
    return num*2;
}

//----------------------------------------------------------------------------

export function makeElement(element,text,background){
    let el=document.createElement(element);
    el.append(text);
    el.style.background=background;
    el.style.color="#fff";
    el.style.height="100px";
    document.body.append(el);
}