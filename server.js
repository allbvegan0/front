// import express from "express"
var express = require("express")
var next = require("next")
var path = require("path")
// import next from "next"

// import path from 'path'


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();


app
.prepare()
.then(() => {
  const server = express();
  
  // requests to /service-worker.js
  server.get(
    "/service-worker.js",
    express.static(path.join(__dirname, ".next"))
    );
    
    // all other requests
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
  module.exports= {}