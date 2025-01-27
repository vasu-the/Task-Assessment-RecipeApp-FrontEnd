![image](https://github.com/user-attachments/assets/cfc52a26-a665-4bd7-bb9a-3df24756d3ef)

# Recipe Search and Filter App

## Overview

The **Recipe Search and Filter App** is a feature-rich application that allows users to search, filter, and explore a wide range of recipes. It provides a seamless user experience with a client-side interface and a server-side API for managing recipe data.

## Client Base URL

The application runs on the following base URL:

```
http://localhost:5173/
```

## Server Setup

To run the server, navigate to the `src/api` directory and use the following command:

```bash
json-server --watch db.json --port 8080
```

### Backend URL

The backend server runs on the following URL:

```
http://localhost:8080
```

### Explanation

- **`db.json`**: This file contains all the recipe data. Modify this file to add, remove, or update recipes.
- **Port 8080**: The server runs on port `8080`, allowing the client to fetch data via RESTful APIs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mahendrasinghmanikandan/recipes_filter.git
   cd recipes_filter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the client:

   ```bash
   npm run dev
   ```

4. Start the server:

   ```bash
   cd src/api
   json-server --watch db.json --port 8080
   ```

5. Open the app in your browser:

   ```
   http://localhost:5173/
   ```

## Technologies Used

- **Frontend**: React.js
- **Backend**: JSON Server
- **Styling**: CSS Tailwind CSS
