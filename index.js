require('dotenv').config()
const fetch = require('cross-fetch');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3500;
app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true}),
    bodyParser.json());

    app.use((req,res,next) => {
        res.header('Access-COntrol-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    });


let teslaData = async (req) => {
    if(req){
        try{
            let request = req.body;
            let res = await fetch(`https://newsapi.org/v2/everything?q=tesla,${request.query}&from=2023-03-23&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
            let resData = await res.json();
            return resData;
        } catch(err){
            console.log(err)
        }
    } else {
        try{
            let res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
            let resData = await res.json();
            return resData;
        } catch(err){
            console.log(err)
        }
    }
} 
let wallStreetData = async (req) => {
    let res = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.API_KEY}`);
    let resData = await res.json();
    return resData;
}
let businessData = async (req) => {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`);
    let resData = await res.json();
    return resData;
}
let techData = async (req) => {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`);
    let resData = await res.json();
    return resData;
}
let appleData = async (req) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-04-22&to=2023-04-22&sortBy=popularity&apiKey=${process.env.API_KEY}`);
    let resData = await res.json();
    return resData;
}

app.use('/tesla', async (req,res) => {res.status(200).send(await teslaData())});

app.use('/wsj', async (req,res) => {res.status(200).send(await wallStreetData())});

app.use('/business', async (req,res) => {res.status(200).send(await businessData())});

app.use('/tech', async (req,res) => {res.status(200).send(await techData())});

app.use('/apple', async (req,res) => {res.status(200).send(await appleData())});

    app.listen(port, async () => {
        console.log(`Server is running on port: ${port}`)
    });

