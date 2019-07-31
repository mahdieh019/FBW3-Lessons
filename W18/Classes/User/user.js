class User{
    constructor(username,ip){
        this.username=username;
        this.ip=ip;
        this.startTime=new Date();
    }
    getCurrentTime(){
        let start=this.startTime.getTime();
        let end=new Date().getTime();
        let current=(end-start)/1000;
        document.write(`the current time is : ${current}`);
    }

    getUsername(){
        document.write(`Welcome back to ${this.username}!`);
        // return this.username;
    }
    isRejected(){
        if(this.ip=="127.2.2.2"){
            return true;
        }else{
            return false;
        }
    }
    sayHello(){
        if(this.isRejected()){
            document.write(`you are rejected forever ${this.username}`);
        }else{
            document.write(`you are most welcome ${this.username}`);
        }
    }
}
const u=new User("Ali","127.2.2.2");

class Admin extends User{
    constructor(username,ip,category){
        super(username,ip);
        this.category=category;
    }
  getCategory(){
      document.write(`The admin ${this.username} moderates the category ${this.category}`);
  }

  blockUser(x){
      alert(`The user ${x} is blocked`);

  }


}
const a=new Admin("Romal","127.3.4.5","Sportcars");

class Owner extends Admin{
    constructor(username,ip,category,since){
        super(username,ip,category);
        this.since=since;

    }
    getOwnerName(){
        document.write(`The web page was created by ${this.username}`);
    }
}

const t=new Owner("Bill","127.2.2.2","Sport",10);



