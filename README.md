# GreenNest

**GreenNest** is an elegant, single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants.  
The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.

## Core Features & Functional Requirements

### Layout Structure

**Navbar**

- Logo: `GreenNest`
- Navigation Links: _Home_, _Plants_, _My Profile_
- Conditional Rendering:
  - Logged in → shows user avatar + dropdown (displayName + Logout)
  - Logged out → shows _Login_ and _Register_ buttons

**Footer**

- Quick Links: About | Contact | Privacy Policy
- Social Media: Instagram | Facebook | Pinterest
- © 2025 GreenNest. All rights reserved.

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

Tech Stack & Dependencies
Category Tools
Vite
React
React Router
Tailwind CSS
DaisyUI
Swiper.js
React Toastify
Firebase Authentication

Credits

Developed by Nasim Ferdous Sohan (NFS)
