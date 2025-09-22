# Use official Node.js LTS image
FROM node:12.2.0-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the app
CMD ["node", "app.js"]
