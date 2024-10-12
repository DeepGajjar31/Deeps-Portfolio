# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that Vite uses (default is 5173)
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
