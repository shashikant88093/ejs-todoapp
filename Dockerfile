FROM node 

WORKDIR /app
# Create app directory
# . tell docker to create the directory in the current directory
# . . is the current directory
COPY . /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install

RUN node index.js

EXPOSE 80

CMD [ "node", "index.js" ]

