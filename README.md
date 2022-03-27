=> create a dockerfile into the root direrctory of the project and write the steps.

=> create dockerignore file and add some file/folder names you want not to include in the docker image.

=> after writing the docker file, run 
the command in the folder directory

# docker build -t <image name> .

=> -t stands for naming the image name, if we don't want to give image name you can run 

# docker build .

=> After this command an image will be created and we can list the images by running 

# docker image ls

=> Now the latest image will be listed on top and we can run a container by using following command

# docker run -d -p 4000:3000 --name <container name> <image name>

=> --name stands for container name.
=> -p stands for defining ports ex 8080:3000

=> Now we open the port 4000 into the browser and our app will be running on docker container port 4000

=> we can list the containers by runinng 

# docker ps

=> and our containers will be listed with the status of each in case of multiple containers

=> every time we make changes to the code we have to rebuilt the image and run it to see the change on browser
=> To reflect the change into the app we can run our container by using this command

# docker run -v < our app directory path>:<containers directory path>:ro --env-file ./.env -d -p 4000:3000 --name  <container name> <image name>

=> -v stands for defining the docker volume to keep updating the containers src folder sync with our app's src folder so that every time we change something in to the code that change will be relected in the docker running app. 

=> :ro stands for read only, means that your docker container's folder can only readour app's folder but can't modify it.

=> --env-file tage stands for defining the environment variables file into the respective container.

--> Now if want to manage these containers for different environments we can use docker comose for that to install 
# sudo apt get docker-compose

create different files for different environments and write the syntax in docker-compose.yml, docker-compose-dev.yml and docker-compose-prod.yml as per the above files.

=> run commands for dev using docker-compose for dev  environment
# docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

=> run commands for dev using docker-compose for prod environment
# docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

