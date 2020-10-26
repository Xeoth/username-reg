FROM node

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json /app/
RUN npm ci

# Bundle app source
COPY . /app
RUN npm run build


EXPOSE 9000
CMD [ "npm", "start" ]