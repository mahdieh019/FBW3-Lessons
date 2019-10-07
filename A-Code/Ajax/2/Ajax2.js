document.getElementById('button1').addEventListener('click',loadUser);
document.getElementById('button2').addEventListener('click',loadUsers);

//user
function loadUser(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','user.json',true);
    xhr.onload=function(){
        if(this.status==200){
            //console.log(this.responseText);
            var user=JSON.parse(this.responseText);  // if we want to get the value, we have to convert it to Json
            console.log(user.name);

            var output='';
            output+='<ul>'+
            '<li>id: '+user.id+'</li>'+
            '<li>name:'+user.name+'</li>'+
            '<li>email:'+user.email+'</li>'+
            '</ul>';
            document.getElementById('user').innerHTML=output;
        }
    }
    xhr.send();
}



//users
function loadUsers(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','users.json',true);
    xhr.onload=function(){
        if(this.status==200){
            //console.log(this.responseText);
            var users=JSON.parse(this.responseText);  // if we want to get the value, we have to convert it to Json
            console.log(users.name);

            var output='';
            for(var i in users){
                output+='<ul>'+
                '<li>id: '+users[i].id+'</li>'+
                '<li>name:'+users[i].name+'</li>'+
                '<li>email:'+users[i].email+'</li>'+
                '</ul>';
                }
            document.getElementById('users').innerHTML=output;
        }
    }
    xhr.send();
}