# Use an official Node.js runtime as a parent image
FROM node:18.15.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Set up Nginx configuration
FROM nginx:latest

# Copy the build output from the previous step to the default Nginx web root directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 3000 for the container
EXPOSE 3000

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
