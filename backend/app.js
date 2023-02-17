const express = require("express");
// const path = require("path");
// const multer = require("multer");
const fileUpload = require("express-fileupload")
const errorMiddleware = require("./middleware/error")
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const path = require("path");
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload())


// Route Import
const user = require("./routes/userRoute");
const bet = require("./routes/betRoute");
const deposit = require("./routes/depositRoute");
const withdrawal = require("./routes/withdrawalRoute");
const winset = require("./routes/winsetRoute")
const showtime = require("./routes/showtimeRoute")
const say = require("./routes/sayRoute")
const showhistory = require("./routes/showhistoryRoute")


app.use("/api/v1",user)
app.use("/api/v1",bet)
app.use("/api/v1",deposit)
app.use("/api/v1",withdrawal)
app.use("/api/v1",winset)
app.use("/api/v1",showtime)
app.use("/api/v1",say)
app.use("/api/v1",showhistory)


app.use(errorMiddleware)



module.exports = app; 
