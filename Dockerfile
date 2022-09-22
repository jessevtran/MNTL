# https://www.youtube.com/watch?v=3xDAU5cvi5E Docker reactjs tutorial
FROM node
WORKDIR /mntl
# copies package.json to /mntl
# docker optimization, each command is cached in layers in docker container so need to consider the development workflow
# ex. need node first, then our dependency list, then our source code
COPY package.json .
RUN npm install --no-audit --progress=false

# Copies the rest of our files over
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

