const express = require('express');
const mongoose = require('mongoose');
const { DB_URL } = require('./configs/dbConfig');
const { PORT } = require('./configs/serverConfig');
const Movie = require('./models/movie.model');
const Theatre = require('./models/theatre.model')
const User = require('./models/user.model')
const reqLogger = require("./middlewares/logger.middleware");
const constants = require('./utils/constants');
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

app.use(reqLogger.log);

// database connection setup
mongoose.connect(DB_URL, async ()=>{
    console.log(`Application is connected to database: ${DB_URL}`);
    
    // await Movie.collection.drop();
    // await Theatre.collection.drop();
    // await User.collection.drop();

    try{
    // create movies here
    // const movie1 = await Movie.create({
    //     name: "Jailer",
    //     description:"Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison.",
    //     cast:"Rajini Kanth | Shiva Rajkumar | Mirna Menon",
    //     director:"Nelson Dilipkumar",
    //     trailerUrls:"https://www.youtube.com/embed/Y5BeWdODPqo",
    //     posterUrls:"https://www.pinkvilla.com/images/2022-09/rajinikanth_jailer_first_look.jpg",
    //     releaseDate: "10-08-2023"
    // })
    // console.log(movie1);
    // const movie2 = await Movie.create({
    //     name: "Meg 2: The Trench",
    //     description:"Jonas Taylor leads a research team on an exploratory dive into the deepest depths of the ocean. Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival",
    //     cast:"Jason Statham | Li Bingbing | Wu Jing",
    //     director:"Ben Wheatley",
    //     trailerUrls:"https://www.youtube.com/embed/dG91B3hHyY4",
    //     posterUrls:"https://m.media-amazon.com/images/M/MV5BZjYyYzYzMDktNzQxMC00NGM0LTljYjYtZjUyYzZkNjZlYzAwXkEyXkFqcGdeQXVyMTI0NDgxMjQ0._V1_.jpg",
    //     releaseDate: "03-08-2023"
    // })
    // console.log(movie2);
    // const movie3 = await Movie.create({
    //     name: "RRR",
    //     description:"A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers",
    //     cast:"Ram Charan | NTR | Olivia Morris",
    //     director:"S. S. Rajamouli",
    //     trailerUrls:"https://www.youtube.com/embed/GY4BgdUSpbE",
    //     posterUrls:"https://lehren.com/wp-content/uploads/2021/12/check-out-the-new-impressive-poster-of-rrr.jpg",
    //     releaseDate: "05-25-2022"
    // })
    // console.log(movie3);
    // const movie4 = await Movie.create({
    //     name: "Baby",
    //     description:"Baby is a 2023 Indian Telugu-language coming of age romantic drama film written and directed by Sai Rajesh Neelam. The film is produced by Sreenivasa Kumar Naidu, under Mass Movie Makers. The film features Anand Devarakonda, Vaishnavi Chaitanya, and Viraj Ashwin in the lead roles",
    //     cast:"Anand Devarakonda | Vaisnavi Chaitanya | Viraj Ashwin",
    //     director:"Sai Rajesh Neelam",
    //     trailerUrls:"https://www.youtube.com/embed/_npN4uwDMLk",
    //     posterUrls:"https://indiaglitz-media.s3.amazonaws.com/telugu/home/baby-movie-review-1.jpg",
    //     releaseDate: "07-14-2023"
    // })
    // console.log(movie4);
    // const movie5 = await Movie.create({
    //     name: "Vikram",
    //     description:"A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
    //     cast:"Kamal Haasan | Vijay Sethupathi | Fahadh Faasil",
    //     director:"Lokesh Kanagaraj",
    //     trailerUrls:"https://www.youtube.com/embed/OKBMCL-frPU",
    //     posterUrls:"https://assets.thehansindia.com/h-upload/2021/07/10/1087622-vikram.webp",
    //     releaseDate: "06-03-2022"
    // })
    // console.log(movie5);

   }catch(err){
       console.log(err.message);
   }


   try{
//     //theater 
    // const theatre1 = await Theatre.create({
    //     name : "Prasads Multiplex: Hyderabad",
    //     description :"Khairtabad, IMAX Road, NTR Marg, Near NTR Gardens",
    //     city : "Hyderabad",
    //     pinCode : 500063,
    //     totalSeats : 123,
    //     ticketPrice: 500

    // })
    // console.log(theatre1);

    
    // const theatre2 = await Theatre.create({
    //     name : "AMB Cinemas",
    //     description :"Survey #40, Kothaguda Junction, Gachibowli Road Inside Sarath City Capital Mall",
    //     city : "Hyderabad",
    //     pinCode : 500084,
    //     totalSeats : 153,
    //     ticketPrice: 650

    // })
    // console.log(theatre2);

    
    // const theatre3 = await Theatre.create({
    //     name : "PVR Forum Sujana Mall",
    //     description :"S - 16 Plot No Opposite Malaysian Township, KPHB-6th Phase",
    //     city : "Hyderabad",
    //     pinCode : 500072,
    //     totalSeats : 76,
    //     ticketPrice: 570

    // })
    // console.log(theatre3);

    
    // const theatre4 = await Theatre.create({
    //     name : "RK Cineplex",
    //     description :"2 Bnr Colony Road Number",
    //     city : "Hyderabad",
    //     pinCode : 500034,
    //     totalSeats : 98,
    //     ticketPrice: 470

    // })
    // console.log(theatre4);

    // const theatre5 = await Theatre.create({
    //     name : "Asian Cinesquare Multiplex",
    //     description :"Survey No.99,Shanti Nagar,Srinivasa Colony",
    //     city : "Hyderabad",
    //     pinCode : 500059,
    //     totalSeats : 89,
    //     ticketPrice: 450

    // })
    // console.log(theatre5);

    // const user = await User.create({
    //     name: "Vishwa Mohan",
    //     userId: "admin",
    //     email: "masthan55591@gmail.com",
    //     password: bcrypt.hashSync("Welcome1", 8),
    //     address: {
    //         city: "Bangalore",
    //         pinCode: 521003
    //     },
    //     age: 30,
    //     userType: constants.userType.admin
    // });
    // console.log("admin created", user);

}catch(err){
    console.log(err.message);
}
})


require("./routes")(app);



// express server setup
app.listen(PORT, ()=>{
    console.log(`Application is running on server: http://localhost/${PORT}`);
})