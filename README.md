🌿 GreenNest – Indoor Plant Care & Shopping Platform

A modern, elegant platform for plant lovers who want to grow, decorate & nurture their indoor plants.

<p align="center"> <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Backend-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" /> <img src="https://img.shields.io/badge/Styling-TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Build-Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white" /> </p>

🌐 Live Demo

👉 Live Site: (https://green-nest-a-9.netlify.app/)

📖 Overview

GreenNest is a single-page, feature-rich indoor plant platform where users can explore indoor plants, read care tips, book expert consultations, and enjoy a seamless shopping-like experience.

Built for nature lovers who want a healthier home environment, anytime — any season. 🍃

✨ Features at a Glance

🌱 1. Dynamic Home Page

Swiper-based hero slider with nature-inspired visuals.

Top-rated indoor plants with rating, price & details link.

Plant care tips (watering, sunlight, fertilizing).

“Meet Our Green Experts” section.

Highlighted “Plant of the Week”.
---
🪴 2. Plant Details Page

Protected Route (requires login).

Shows full plant information:

Image

Name

Description

Rating

Price

Stock

Consultation Form included:

Name

Email

Message

On submit → toast success + form reset.
---
🔐 3. Authentication System

Powered by Firebase Auth:

Login Page

Email + Password login

Forget password

Google Sign-In

Redirects to intended route

Invalid credentials → toast error

Signup Page

Name, Email, PhotoURL, Password

Password validation:

6+ chars

One uppercase + one lowercase letter

Google Sign-In option

Redirects to home after registration

Home Page Sections

1. Hero Section:
   Nature-inspired Swiper slider featuring plants and green lifestyle slogans.

2. Top Rated Indoor Plants:
   Display plant cards with image, name, price, rating, and “View Details” button.

3. Plant Care Tips Section:
   Static tips or data-driven content on watering, sunlight, and fertilization.

4. Meet Our Green Experts:
   Showcase plant care experts with names, photos, and their specializations.

5. Plant of the Week:
   Highlight one unique plant with a short description and image.

Plant Details Page (Protected Route)

Only accessible when logged in.

Unauthenticated users are redirected to Login, then back to their previous route.

Shows complete plant info:

Image, Name, Description, Price, Rating, Stock

Includes Book Consultation Form:

Fields: Name, Email, Message

On submit → Success Toast + form reset

Authentication Features
Login Page

Form: Email, Password, Forget Password, Login button

Redirects to the desired route or home page upon success

Invalid credentials show an error toast

Includes:

Signup link

Google Sign-In (redirects to home upon success)

Signup Page

Form: Name, Email, PhotoURL, Password, Register button

Password validation:

At least 6 characters

One uppercase and one lowercase letter

Redirects to home upon success

Includes:

Login link

Google Sign-In option

---
🛠️ Tech Stack

🎨 Frontend

React

React Router DOM

Tailwind CSS

DaisyUI

Swiper.js

React Toastify

Authentication

Firebase Authentication

⚙️ Build & Tools

Vite

GitHub

ESLint
---
📦 Installation & Setup

🔧 Clone the Repository
git clone https://github.com/nasim-ferdous/green-nest
cd GreenNest

📥 Install Dependencies
npm install

🔑 Create .env File

Add Firebase config:

VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender
VITE_appId=your_app_id

▶️ Run the Project
npm run dev
---
📂 Project Folder Structure
GreenNest/
│── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── firebase/
│   ├── assets/
│   └── App.jsx
│
│── public/
│── .env
│── package.json
│── tailwind.config.js
│── README.md



Credits

Developed by Nasim Ferdous Sohan (NFS)
