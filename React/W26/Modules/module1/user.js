// add export before declaration

// export let greeting="welcome back";
// export function hi(user){
//     return `${greeting} ${user} in javascript`
//     //return 'hello world' +user;
// }


export {greeting,hi,makeElement};
let greeting="welcome back";
function hi(user){
    return `${greeting} ${user} in javascript`
    //return 'hello world' +user;
}
//--------------------------------------------------------------------------
//export import function doubleNumber(num){
//     return num*2;
// }
export function doubleNumber(num){
    return num*2;
}

//----------------------------------------------------------------------------

function makeElement(element,text,background){
    let el=document.createElement(element);
    el.append(text);
    el.style.background=background;
    el.style.color="#fff";
    el.style.height="100px";
    document.body.append(el);
}