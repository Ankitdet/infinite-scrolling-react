const express = require('express')
const serveStatic = require('serve-static')
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require('path')

const app = express()
const tweetRouter = express.Router();
app.use(bodyParser.json());
app.use(cors());

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})
tweetRouter.get("/", function () {
	console.log('callback fuctiion call')
});

const port = process.env.PORT || 3000
app.listen(port)
console.log(`app is listening on port: ${port}`)