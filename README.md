# Found & Formed — Website

This is the codebase for the Found & Formed website and admin portal. 

## 🏗 Architecture
This project is built using a modern **JAMstack** approach:
*   **Frontend**: Pure HTML, CSS (via Tailwind CDN), and vanilla JavaScript. There are no build tools (like Webpack or Vite) and no frameworks (like React or Angular).
*   **Backend / Database**: [Supabase](https://supabase.com/) is used for managing the events and reservations via direct API calls from the client.
*   **Email Automation**: [Formspree](https://formspree.io/) is used for handling the pop-up inquiry and reservation notification emails.

## 🚀 How to Run the App Locally

Because there are no complex build steps or external dependencies, running this project is incredibly simple. 

### Prerequisites
You only need to have **[Node.js](https://nodejs.org/)** installed on your computer.

### Running the Local Server
1. Open your terminal.
2. Navigate to this project directory:
   ```bash
   cd found-and-formed-website
   ```
3. Start the local server by running:
   ```bash
   node serve.mjs
   ```
4. Open your web browser and go to:
   *   **Main Website:** [http://localhost:3000](http://localhost:3000)
   *   **Admin Portal:** [http://localhost:3000/admin.html](http://localhost:3000/admin.html)

> *Note: You do not need to run `npm install`. The `serve.mjs` script uses only built-in Node.js modules.*

## 🌐 How to Deploy (Production)

Because this is a static site without a required Node.js backend (the `serve.mjs` file is only for local testing), it can be hosted for **free** on any static hosting provider.

We recommend deploying via **GitHub Pages**, **Vercel**, or **Netlify**:

**Vercel / Netlify (Easiest)**
1. Create a free account on Vercel or Netlify.
2. Drag and drop the `found-and-formed-website` folder directly into their dashboard, OR connect your GitHub repository.
3. Your site will instantly go live with a free SSL certificate.

**GitHub Pages**
1. Push this code to a GitHub repository.
2. Go to your repository **Settings** > **Pages**.
3. Set the Source to deploy from your `main` branch. 
4. Save, and your site will be live in a few minutes.
