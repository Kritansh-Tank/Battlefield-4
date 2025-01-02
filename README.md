# Battlefield 4 Server Info Page

This project replicates the Battlefield 4 Server Info Page using modern web technologies. It includes a React.js frontend styled with Tailwind CSS and a Node.js backend, with data managed via Supabase. The application is deployed on Netlify (frontend) and Render (backend).

## Live Demo

https://battlefield4.netlify.app/menu multiplayer/server browser/server info

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
    A. Node.js and npm installed.
    B. A Supabase account and project set up.
2. Frontend Setup
    A. Navigate to the frontend folder.
    B. Install dependencies:
        npm install
    C. Start the development server:
        npm start
    D. Deploy the frontend to Netlify:
        Link your GitHub repository to Netlify and deploy.
3. Backend Setup
    A. Navigate to the backend folder.
    B. Install dependencies:
        npm install
    C. Configure environment variables for Supabase:
        Create a .env file and add your Supabase credentials:
            SUPABASE_URL=<your_supabase_url>
            SUPABASE_KEY=<your_supabase_key>
    D. Start the backend server:
        node server.js
    E. Deploy the backend to Render:
        Link your GitHub repository to Render and deploy.
