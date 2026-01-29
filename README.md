🌍 Destinations Filter API (Node.js)

A simple Node.js REST API that serves destination data and supports filtering using query parameters such as continent, country, and public access status.

📂 Project Structure
.
├── server.js
├── package.json
├── frontend.js
├── data.js
├── utils
│   ├── filterData.js
│   ├── getDataByQueryParam.js
│   ├── sendJSONResponse.js

# Features
Built using pure Node.js (no frameworks)
Supports query-based filtering
Clean modular structure
Uses modern URL & URLSearchParams API
JSON response handling
Beginner-friendly & extendable

# How It Works
Client sends request with query parameters
Server parses URL using URL object
Query parameters are converted to a JS object
Data is filtered based on provided params
Filtered JSON is sent as response

# Technologies Used
Node.js
JavaScript (ES6+)
Native HTTP module
