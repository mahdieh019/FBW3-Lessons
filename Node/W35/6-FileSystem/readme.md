https://github.com/SebastianSalasDCI/Node-Exercise/tree/master

# FileSystem with Node.js
General exercise about using the `fs` module in node js. 

###  Exercise
This exercise pretends to simulate a file manager in a backend application. This file manager should be able to create new folders and files, and also updating them, reading them and delete them. This is useful for backend purposes where you need to store or change some data automatically for each user and in an organized way. 
The goal is to use different functions of the `fs` and `path` module and understand the difference between Asynchronous and Synchronous functions of the `fs` module.

# Content
 - Function 1: create folder and files
 - Function 2: read files
 - Function 3: update an existing file
 - Function 4: Delete files
 - Getting information from the command line
 - Joining all functions in a file manager
 - **EXTRA** Challenge

## Function 1: Create folder and files
This first function has the goal of creating a new folder and a new file inside the same folder we are working on. For this we will use two modules from node js: `fs` and `path`. 

>The `fs` module has different functions that help us control and make changes to files and folders in the local server or system we are working on. More info on [FileSystem](https://nodejs.org/api/fs.html)

>The `path` module is useful to get the path where our node file is running. This is important for manipulating files and folder, as this will let us know the exact path where we are working.

The file will be called `create.js`. Now here are the steps and comments to create this function:

 1. It is needed to import this two mentioned modules. For this we use the require from node js as follow: `const fs = requere('fs')`. The same is needed for the path module.
 2. Next we need to obtain the path we are working on. We use `const dirname = path.dirname(__filename)`. This line can be separated in three parts. The `path` is the module we imported, `dirname` is a function from the `path` module that obtains the directory path of what the path inside the parenthesis '()'. Finally `__filename` is the general path of the file in which is written. An example of what `__filename` can be is : `C:\Users\Sebastian\Documents\Exercises\5. Node\Exercise-json\app.js`
 3. Is important to create a variable with the content of the file we want to create. Normally in backend we use `.json` files to save data. This file are objects or array of objects normally. Then create an object with the information you want to store. example:

        info = {
    		name: 'mark',
    		age: 28,
    		hobby: 'Sports'}

 4. In this case we want to create first the folder. The folder will be called as the name inside the info object. then is needed to create the folder name first. For this we use the path obtained in **2.** and join it with the name inside info. can be done as follows:  `let folderName = dirname + '/' + info.name `

5. Now with the folder name lets create it. The function to use is: 
	
		fs.mkdir(foldername,(err)=>{callback function})
	
	The folder function would normally has an if statement. in case of error show the error message. In the other case show a message saying `'Folder created'`
6. Now lets create the file. First we need the file name. We can create it as in **4.** . The file name should be `info.json` . An alternative is using the function join function of the module path as follows: 

		path.join(foldername,'info.json')

8. Now we will create this new file inside the folder.  For this we use the function:  

		fs.writeFile(filepath,content,(err)=>{callback function})

	the content should be our info object but first it is needed to make it as json. For this we use `let content = JSON.stringify(info)`. The callback function is similar to the one on **5.**. if error show the error message, else show a message saying `'File created'`
9. The function should be working now, try running it by using `node create.js` and the folder with name and info.json file should be created. Try creating different folders by changing the name in the info object.

## Function 2: read files
Normally we will need to read a json file from our server. Then we will use functions from the `fs` module.  We will read the files created by the previous function. This file will be called `read.js`. The steps and comments for this function are the following:

 1. As before we need to import the `fs` and `path` modules from node.
 2. Then we need to specify the name of the folder from where we will read the file. for example: `let name = 'mark'`
 3. Now we can 	create the path for the filename. From previous function we know the file is called `info.json` then we can use `path.join` to create the path as `let filepath = path.join(__dirname,name,'info.json')`. Also we can use another function of the path module, `path.format`. This function take the parts of a path and put it together. For example

	    let directory = __dirname + name
	    let filename = 'info.json'
	    let filepath = path.format({
	    	dir: directory,
	    	base: filename})
	In format you put inside the parenthesis '( )' an object with some variables. This should be `dir` and should equal to the path of the directory where the file is saved and in `base` the name of the file with the extension. For more info on this you can visit [path.format](https://nodejs.org/api/path.html#path_path_format_pathobject)

 4. Next step is to read the file. For this we use the function
  
		 fs.readfile(filepath,(err,data)=> {callback function})
		  
	In this function we need to specify the path of the file. Then in the callback function we need an if statement. if there is error show the error, else show the data obtained from the file. The data will be obtained as json, then is needed to use: `JSON.parse(data)` to watch it correctly on the terminal.
5. Now lets try running our code like `node read.js` and we will see the data from the file in the console. :D

## Function 3: update existing file
The goal of this function is to take one of the files created from the function 1, and add some characteristics to the existing json object. For this the same modules `fs` and `path` will be used.  For this we need to read the file, change it and writing it in the file. The file will be called `update.js`.This are the steps and comments for creating this function.

 1. We need to read the file, for this we can follow the same steps as for the previous function, from step 1 to step 3 to import, and create the path for the file. When finish with this steps we can continue. 
 2. The idea is  to have two important variables, one with the key for the object, and the value of the key. later we will save this new key and value in the object. For example key can be `'job'` and value `'Developer'`
 3. Now to read the file, there are two ways, using Asynchronous function with promises or use Synchronous function. Here we will discuss both approaches. You should use just one of them. We encourage you (when is ready :v ) to use the Asynchronous approach, as is the best for a backend application.

	3.1 **Synchronous Approach** 
	
    3.1.1 After having the path for the file we can use the function `let data = fs.readFileSync(filepath)`. This function will return the data inside the folder and save it in this data variable.
		
    3.1.2 Now the data inside the file we need it as json, then we will use the `JSON.parse(data)` to obtain the json object and assign it to a new variable, like `info`. 
		
    3.1.3 With the object, we can add some information to it. We will take the key and value from step **2.** and add the information to the object as `info[key] = value`
		
    3.1.4 The next step is to call the function to write files as in the first function. We will use it like `fs.writeFile(filepath, JSON.stringify(info), (err)=>{callback function})`. This function will take the already existing file and replace it with new one that contains the new information. The callback function should be similar as in previous functions. if error then show it in the console, else show a message saying that the file was updated.
		 
	3.2 **Asynchronous Approach**
	
    3.2.1 *Under work :)*

4.  Now with either of the selected approaches this function should work. Try it by running the file with `node update.js`. Remember to use a name of an existing folder in the script. You can use the `create` file to create a new one and then update it with the `update` file.

## Function 4: Delete files
The next function is the last one for the set of functions of our file manager. The idea is to delete a file created before with the first function `create`. As we the other functions, we will use a function from the `fs` module. The file will be called `delete.js`.The steps and comments for this function are the following ones:

1. First as you may think it, we need to import the `fs` and `path` module. To do it we use the same as before, `const path = require('path')`. Similar we do it with the `fs` module
2. Then we need to obtain the path for the file and the folder. With the `fs` module is needed to first erase everything inside a folder and then erase it, that is why is needed both paths. Lets first create a variable with the name of the folder to delete. Then create each of the paths with `path.join` and `path.dirname`. For example for the file path should be something like: 
			
		let file_path = path.join(path.dirname(__filename),foldername,'info.json')
3. After the paths are created, exist also two approaches. One asynchronous and the synchronous path. Here we will discuss both.
	3.1. **Synchronous Approach**

	3.1.1 After having created successfully the paths, we need to erase first the file. The function to is the synchronous unlink function from the `fs` module as follows: `fs.unlinkSync(file_path)`. After the function show a message saying the file was deleted. This function delete any file that we specify in the path between the parenthesis, but this does not delete any folder. 
	
    3.1.2 Now with the file deleted lets delete the folder. For this we use the synchronous function rmdir from the `fs` module as follows: `fs.rmdirSync(dir_path)`. This function deletes only empty folders, that is why was needed to first delete the `info.json` file inside the folder to delete it 
	
    3.2 **Asynchronous Approach**
	
    3.2.1 *Under work :)*
4. With any of the approach this function should work now. To test it we use first the `create.js` file. Then we try to erase it with the `delete.js` file. Remember to specify the name of the folder as the same one you created.

## Getting information from the command line/Terminal
Now that we have the files with the functions of our file manager we need to use them in one file. But before that, first we will obtain data from the terminal, just so that the information to save in the files and the names are obtained by terminal. Is important to make clear that this data will be normally obtained by connection with the front end, this will be learned in later in the course. For now we will simulate this by getting the information from the command line. 

Here we will create a file called `getarg.js`. We will use the `process` global object from node. This object has different information from the server or pc where the file is running. In this case we will use it to obtain the data from terminal. This function is only for explanatory purpose. The steps and comments for this function are as follow:

1. Is no needed to import `process` as it is a global object from Node. The property to use from this object is `process.argv`. This property is equal to everything written in the terminal after the command to run the file. For example, if we run in the terminal `node getarg.js Hi I am arguments`, then `process.argv` will be an array with the following elements:

		['Node','/home/folder/getarg.js','Hi','I','am','arguments' ]
		
    The first two elements from this array will always be the same ones, first Node to represent that we are using the Nodejs to run files, and the second one will be the path for the file that we run. The important is that after this two elements we obtain everything that we write in the command. We obtain each word as an element of the array. You can try this by writing `console.log(process.argv)` in the `getarg.js` file and running it by using the previous command. You should see a similar array in the terminal.  

2. Now that we know what this property is, then we can work with it, for example the first two elements will  never used by us in this project then we can take them out of the array using the method `splice()`. Then for example if we have the same array as in the previous step and we perform `process.argv.splice(2)` we obtain the following array:

		['Hi','I','am','arguments']

3. Now with this two important comments clear, we will continue to join and complete our application in the next section.

## Joining all functions in the file manager
So far we created all the  functions for our file manager but they work in different files. We will create a new file called `app.js` where we will use them. For this we need to prepare each of our files for to be used, like adding the default exports, put all the code inside a function and receive the data from the main file. The complete steps for joining our application are the following ones:

### create.js file
1. Inside the `create.js` we will make the following changes 
2. First we will write all the code inside a function called `Create` as follows:
		
		const fs = require('fs')
		const path = require('path')
		
		function Create(data){
			//Here will be all of your code for creating the file
		}

3.  Then we need to convert this data to the info that we will use. The parameter data will be an array with the information to save. Then to separate it in the respective information, a destructive way can be used as:

		let [name,age,hobby] =  data

	With this line we are obtaining in different variables the elements inside the data array. This are the variables to use in your code to create the object save.
4. Finally we need to export our function by using: `module.exports = Create;`

### read.js file
 1. Inside the `read.js` we will make the following changes 
2. First we will write all the code inside a function called `Read` as follows:
		
		const fs = require('fs')
		const path = require('path')
		
		function Read(data){
			//Here will be all of your code for creating the file
		}

3.  Then we need to convert this data to the info that we will use. The parameter data will be an array with the information to save. Then to separate it in the respective information, a destructive way can be used as:

		let [name] =  data

	With this line we are obtaining the name as a single string. If we would had assigned the data directly to name, then name would have been an array of one element. This will be the name of the folder from which, you will read the `info.json`
4. Finally we need to export our function by using: `module.exports = Read;`

### update.js file
 1. Inside the `update.js` we will make the following changes 
2. First we will write all the code inside a function called `Update` as follows:
		
		const fs = require('fs')
		const path = require('path')
		
		function Update(data){
			//Here will be all of your code for creating the file
		}

3.  Then we need to convert this data to the info that we will use. The parameter data will be an array with the information to save. Then to separate it in the respective information, a destructive way can be used as:

		let [name,key,value] =  data

	With this line we are obtaining in different variables the elements inside the data array. This are the variables to use in your code, the name of the folder from which you will take the `info.json` and add the key and value.
4. Finally we need to export our function by using: `module.exports = Update;`

### delete.js file
 1. Inside the `delete.js` we will make the following changes 
2. First we will write all the code inside a function called `Delete` as follows:
		
		const fs = require('fs')
		const path = require('path')
		
		function Delete(data){
			//Here will be all of your code for creating the file
		}

3.  Then we need to convert this data to the info that we will use. The parameter data will be an array with the information to save. Then to separate it in the respective information, a destructive way can be used as:

		let [name] =  data

	With this line we are obtaining name as a single string variable. This will be the name of the folder to erase.
4. Finally we need to export our function by using: `module.exports = Delete;`

### App.js file
1. Inside the `App.js` file we will start by importing all the functions from the previous files, for example for the `Create` function will be as: `const Create = require('./create')`. Do the same with the other files.
2. Then we need to obtain the information from the terminal, for this as discussed before we use `process.argv`. The command will be composed as follows for each function:
	2.1 For creating a file: `node App.js write name age hobby`

	2.2 For reading a file: `node App.js read name`

	2.3 For updating a file: `node App.js update name key value`

	2.4 For deleting a file: `node App.js delete name`

	For obtaining the information we will use: `let [action, ...data] = process.argv.splice(2)`. With this line of code we are taking throwing away the firs two elements of the array and getting only what matters to us. Then with first part before the equal sign, we are assigning the new first element of the array, which will be equal to write, read, update or delete, depending on the command. And with the `...data`, we are assigning the rest of the values to the a variable called data. This will be the variable we will send to each of our functions.
3. After obtaining the values from the terminal now we need to call the respective function according to what is needed. For this we will use a switch statement. This switch will have the variable action as the condition, and have 4 cases, one for each function. For example the start of this switch will be like:

		switch(action){
			case 'write':
				Create(data)
				break;
			case 'read':
				.... 

	Complete the rest of the cases and add a default case for when the action is none from the accepted ones. You should show a message in this case saying that the action was wrong

4. Finally as shown in the previous lines of code, inside each case we will call the respective function and send the data as a parameter to it.
5. Now the file manager should work! try creating some files, then reading them or updating them and finally delete some. If everything works then you can continue with the **Extra** challenges.

## **EXTRA** Challenge

nothing **YET**...
> Written with [StackEdit](https://stackedit.io/).

