let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted"; 
} else {
    accessLevel = "No access granted"; 
}

console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage; 

if (isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!"; 
    }
} else {
    userMessage = "Please log in to access the system."; 
}

console.log("User Message: ", userMessage);

let userType = "Suscriber"; 
let userCategory; 

switch (userType) {
    case "admin": 
        userCategory = "Administrator";
        break;
    case "manager": 
        userCategory = "Manager";
        break;
    case "Suscriber": 
        userCategory = "Suscriber";
        break;
    default: 
        userCategory = "Unknown"; 
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ", authenticationStatus);

let authorizationLevel = "Enrolled Member";
let dietaryServices = "No"; 
let oneOnOneInteraction = "No"; 

switch(authorizationLevel) {
    case "Employee": 
        dietaryServices = "Yes, Full";
        break;
    case "Enrolled Member": 
        dietaryServices = "Yes, Full";
        oneOnOneInteraction = "Yes"; 
        break;
    case "Suscriber": 
        dietaryServices = "Yes, Partial"
        break;
    case "Non Suscriber": 
        dietaryServices = "No";
        break;
    default: 
        dietaryServices = "No";
}

console.log("Does the user have access to Dietary Services? ", dietaryServices, " And One on One Interaction with a Dietitian? ", oneOnOneInteraction);

