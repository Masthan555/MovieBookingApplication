/**
 * This file will act as the route for authentication and authorzation
 * 
 */

module.exports = (app)=>{
    
    //  POST 127.0.0.1:8080/getfit/api/v1/auth/signup
    app.get("/mba/signup", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/signup.html");
    });

    //Sign POST 127.0.0.1:8080/getfit/api/v1/auth/signin
    app.get("/mba/signin", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/signin.html");
    });

    app.get("/mba/initiateBooking", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/bookTicket.html");
    });

    app.get("/mba/makePayment", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/makePayment.html");
    });

    app.get("/mba/myBookings", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/myBookings.html");
    });

    app.get("/mba/theatres", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/theatres.html");
    });

}