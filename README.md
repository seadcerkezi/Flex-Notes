# How to run the app

1. Install the required dependencies by running: `npm install`
2. Start the app with the command: `npm start`
3. Open your web browser and go to `http://localhost:3000` to use the app.

# How might you make this app more secure?

- Using HTTPS to encrypt data in transit.
- Validating and cleaning user inputs to prevent attacks.
- Implementing user authentication for access control
- Avoiding hard coding sensitive data.

# How would you make this solution scale to millions of records?

- Using a database to store data efficiently.
- Implementing pagination to fetch and display data, reducing the load on the app.
- Optimizing API calls by fetching only the required data and using server-side pagination and filtering.
