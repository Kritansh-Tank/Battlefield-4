# Battlefield 4 Server Info Page

This project replicates the Battlefield 4 Server Info Page using modern web technologies. It includes a React.js frontend styled with Tailwind CSS and a Node.js backend, with data managed via Supabase. The application is deployed on Netlify (frontend) and Render (backend).

## Live Demo

[Visit the Live Demo](https://battlefield4.netlify.app/menu%20multiplayer/server%20browser/server%20info)

## Table of Contents

1. Features
2. Technologies Used
3. API Endpoints
4. Setup Instructions
5. Images

## Features

1. Dynamic server info data served from a backend.
2. Fully responsive UI using Tailwind CSS.
3. Hover and click interactions replicating the Battlefield 4 interface.
4. Backend integrated with Supabase for data storage and retrieval.

## Technologies Used 

1. Frontend:
    1. React.js: Component-based UI development.
    2. Tailwind CSS: Utility-first CSS framework for styling.
    3. Netlify: Hosting platform for the frontend.
2. Backend:
    1. Node.js + Express.js: REST API development.
    2. Supabase: Backend-as-a-Service (BaaS) for data management.
    3. Render: Hosting platform for the backend.

## API Endpoints

1. /api/battlefield: Returns general server information.
2. /api/battlefield-settings: Returns game settings.
3. /api/battlefield-advanced: Returns advanced configurations.
4. /api/battlefield-rules: Returns server rules.

## Setup Instructions

1. Prerequisites
    1. Node.js and npm installed.
    2. A Supabase account and project set up.
2. Frontend Setup
    1. Navigate to the frontend folder.
    2. Install dependencies:
        1. Run `npm install` to install dependencies.
    3. Start the development server:
        1. Run `npm start` to start the development server.
    4. Deploy the frontend to Netlify:
        1. Link your GitHub repository to Netlify and deploy.
3. Backend Setup
    1. Navigate to the backend folder.
    2. Install dependencies:
           1. Run `npm install` to install dependencies.
    3. Configure environment variables for Supabase:
        1. Create a .env file and add your Supabase credentials:
            1. SUPABASE_URL=<your_supabase_url>
            2. SUPABASE_KEY=<your_supabase_key>
    4. Start the backend server:
        1. Run `node server.js` to start the backend server.
    5. Deploy the backend to Render:
        1. Link your GitHub repository to Render and deploy.

## Images

Screenshot 1: Server Info Page

![Server Info Screenshot](https://drive.google.com/uc?id=1ZXlAPYntU8yRo8YvxI-hAFny9bsgY8wj)

Screenshot 2: Show More Page

![Show More Screenshot](https://drive.google.com/uc?id=1dALNPVpxq7u0gxwhFr0lTu_vTtm5ls94)
