# Frontend Readme for the Internship assignment 
This is the readme file for the frontend of the internship assignment. The frontend comprises of two pages - Home page and Results page.

## Pages
### Home Page
The Home Page is the landing page of the application. It displays a list of buttons that the user can click. When the user clicks on a button, they are redirected to the Results Page with query parameters that indicate which button was clicked.

### Results Page
The Results Page displays a loader until the data is downloaded. The data is downloaded using the Axios package, and the useEffect hook ensures that the data is downloaded only once for single component rendering. The downloaded data is stored in a state variable that triggers a rerender, causing the loading screen to vanish and the table to appear.

If the user enters an incorrect URL, a 404 page is displayed to redirect the user.

### Technologies Used
The following technologies were used to build the frontend of this internship assignment:

React
React Router
Axios
JavaScript

## How to Run the Application
To run the application, follow these steps:

1.Clone the repository
2.Install the dependencies using npm install
3. Run the application using npm start

# [Backend Repo](https://github.com/prakharSrivs/Mobilicis-Backend)
# [Backend URL ](https://mobilicisassignmentbackend-536c.onrender.com)
