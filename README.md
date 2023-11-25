# robo-mission-control-dashboard
The react based UI to view motion of robot plotted using webgl on the given image map (rendered after converting from .pgm to .jpg) based on the mission triggered.

## Setup:

1. Project uses npm as package manager and expects it to be present on the system.
2. After cloning repo, go to robot-dashboard 

        `>>cd robot-dashboard`

   Now, we need to sync in the dependecies, use:
        
        `>>npm install` 
        
   If this fails, try:
        
        `>>npm init` 
        
        `>>npm install` 

3. Run `>>npm run build`. If all goes well, we will have a build directory which will be used to host the UI via nginx.
4. Expecting nginx to be installed in the system. Copy the path of the generated build directory (root/path/robo-mission-control-dashboard/robot-dashboard/build/) and assign it to the value of the server/root field in nginx.conf.
        
      
            server {
   
            listen       80;  //default value for nginx port, can be changed to any available port. Need to add as allowed origin in backend

            server_name  localhost;

            location / {
                     root   "path/to/robot_dashboard/build";

                     index  index.html;

                     try_files $uri $uri/ /index.html;

            }
5. Run `>>start nginx` and go to http://localhost:80/ (given that's the port set to listen in nginx.conf). 
You should be able to see the Map and three buttons for each mission. 
![image](https://github.com/prachi-ec/robo-mission-control-dashboard/assets/71262691/f88d1562-ad23-4f79-9981-379ebfa75279)

Clicking on the any of the mission should would start the plotting.
![image](https://github.com/prachi-ec/robo-mission-control-dashboard/assets/71262691/3388b496-28f7-4bdf-8dce-cb5588a2ef11)


   
