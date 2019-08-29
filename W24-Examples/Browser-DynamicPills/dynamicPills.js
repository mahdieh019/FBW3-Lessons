let li = document.querySelectorAll('li');
let section = document.querySelectorAll('section');

function removeAllClasses(){
   for(let x = 0; x < li.length; x++){
       // to remove all classes
       section[x].className = '';
       // to remove all classes
       li[x].className = '';
   }
}

for(let i = 0; i < li.length;i++){
    li[i].addEventListener('click',function(){
        removeAllClasses();
        // to adding a class Active
        section[i].className = 'active';
        // to adding a class selected
        li[i].className = 'selected';
    });
 }