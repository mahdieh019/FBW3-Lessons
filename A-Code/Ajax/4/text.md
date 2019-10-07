 to run php file
 https://www.youtube.com/watch?v=R5CUn5wGQGg
1. install xampp on ubunto
2. open terminal
3. cd Downloads
4. ls -al // no executeable permission
5. sudo chmod +x xampp-linux-x64-7.3.9-0-installer.run 
6. ls -al xampp-linux-x64-7.3.9-0-installer.run 
7. x is added to permission
8. sudo ./xampp-linux-x64-7.3.9-0-installer.run                  start to install xampp
9. we have to start all 3 in manage Server
10. http://localhost/dashboard                                    to check every thing is ok (xampp is working on ubunto)
11. http://localhost/phpmyadmin/                                  welcome page
12. if stop every thing and start again from terminal we should:
13. cd /opt/lampp/
14. ls
15. sudo ./manager-linux-x64.run    
16. start all

to create a php file
1. cd /opt/lampp/htdocs
2. ls
3. gedit myphp.php








