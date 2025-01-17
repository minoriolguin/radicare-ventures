# Radicare Ventures Project

This project is a Next.js/React web application designed to improve the operational efficiency of RadiCare Ventures, a nonprofit organization. The application focuses on implementing a centralized service request form to streamline communication between clients and the RadiCare team.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)

## Project Overview
RadiCare Ventures faces operational challenges in managing service requests. The current process relies heavily on a single point of contact, creating a bottleneck that impacts efficiency. This project aims to:

1. Provide a platform for centralized, tracked service requests.
2. Facilitate direct communication between clients and team members.
3. Enhance automation and reduce manual effort in handling client queries.

## Features
- **Service Request Form**: An intuitive form for clients to submit requests.
- **Request Tracking**: Allows clients and team members to monitor the status of requests in real-time.
- **Direct Messaging**: Enables secure communication between clients and RadiCare team members.
- **Data Visualization (Future Scope)**: Automates monthly and annual reporting using client and team input data.
- **Comprehensive Service Requests**: Ensures that clients provide complete information when requesting a service, minimizing back-and-forth communication and enabling RadiCare to fulfill requests efficiently.


## Tech Stack
- **Frontend**: React, Next.js, TailwindCSS (for styling)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Hosting**: Vercel for deployment

## Setup and Installation

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v16 or later)
- npm or yarn
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/radicare-solutions.git
   ```

2. Navigate to the project directory:
   ```bash
   cd radicare-solutions
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Create a `.env.local` file in the root directory and configure the necessary environment variables:
   ```
   DATABASE_URL=<your-database-url>
   NEXTAUTH_SECRET=<your-nextauth-secret>
   NEXTAUTH_URL=<your-application-url>
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- **Submitting a Request**: Clients can fill out a service request form with relevant details.
- **Tracking Requests**: Users can log in to view and monitor the status of their requests.
- **Team Communication**: Direct messages can be sent between clients and RadiCare team members.
