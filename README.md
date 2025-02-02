# Phishing Demo: Instagram Login Page
This repository contains a demo phishing page designed to simulate how phishing attacks are carried out. The purpose of this project is purely educational, aiming to teach users how phishing works and how to protect themselves against such attacks. The demo mimics an Instagram login page, capturing user credentials and storing them in an Excel file.

# How It Works

How It Works

Frontend (HTML/CSS/JavaScript):

The index.html file contains a fake Instagram login page styled to look like the real one. It includes input fields for the username and password, and a login button.

When the user submits the form, the JavaScript (script.js) intercepts the form submission, prevents the default behavior, and sends the username and password to the server via a POST request.

Backend (Node.js/Express):

The server (server.js) is built using Express.js. It listens for POST requests at the /login endpoint.

When the server receives the username and password, it stores them in an Excel file (pdata.xlsx) using the xlsx library.

After saving the data, the server responds with a redirect URL, which in this case is the official Instagram website (https://www.instagram.com/).

Data Storage:

The captured credentials are stored in an Excel file (pdata.xlsx) in the root directory. If the file doesn't exist, it will be created automatically.

# How to Execute the Demo

Install Dependencies:

Ensure you have Node.js installed on your machine.

Clone this repository and navigate to the project directory.

Install the required dependencies by running:

    npm install express body-parser xlsx

Start the Server:

Run the server using the following command:

    node server.js

The server will start on http://localhost:3000


# Important Notes

Educational Purpose Only: This project is intended solely for educational purposes to demonstrate how phishing attacks work. Do not use this for malicious purposes.

Security Awareness: This demo highlights the importance of being cautious when entering credentials on unfamiliar websites. Always verify the URL and ensure you are on the official website before logging in.

No Real Data: Do not use real credentials when testing this demo. Use dummy data to avoid any risk.


Dependencies

    Express.js: A web framework for Node.js used to create the server.

    body-parser: Middleware to parse incoming request bodies.

    xlsx: A library to read and write Excel files.
