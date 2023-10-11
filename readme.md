# Name: Garima Chouhan

# YouTube Subscribers App

A Node.js application built with Express and MongoDB to manage YouTube subscribers.

## Overview

This project demonstrates how to create a simple web application for managing YouTube subscribers. It provides RESTful API endpoints for retrieving subscriber data, importing data into a MongoDB database, and viewing subscriber information.

## Features

- View a list of all subscribers.
- View a list of subscriber names and their subscribed channels.
- Retrieve a specific subscriber by ID.
- Import initial subscriber data into the MongoDB database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- MongoDB installed and running locally.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/youtube-subscribers-app.git

 #  Navigate to the project directory: in the bash
 cd youtube-subscribers-app

 # Install the project dependencies:
 npm install express 
 npm install mongoose
 npm install nodemon

 # Create the MongoDB database and import initial data:
 node src/createDatabase.js

 # Start the Express server:
 node src/index.js
 Access the application in your web browser at http://localhost:3000

 # API Endpoints
GET /subscribers: Get a list of all subscribers.
GET /subscribers/names: Get a list of subscriber names and their subscribed channels.
GET /subscribers/:id: Get a specific subscriber by ID.

# Project Structure
src/: Contains the application source code.
    index.js: Starts the Express server.
    createDatabase.js: Establishes the MongoDB connection and imports initial data.
    app.js: Defines Express routes and handles requests.
    models/: Contains the Mongoose models.
data.js: Initial subscriber data.
README.md: This documentation.

# Acknowledgments
This project was created as a demonstration of building a Node.js web application with Express and MongoDB.
Thank you for using the YouTube Subscribers App!

