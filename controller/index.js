require("dotenv").config();
const fetch = require("cross-fetch");

class Control {
 teslaData = async () => {
        let res = await fetch(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=${process.env.API_KEY}`
        );
        let resData = await res.json();
        return resData;
      };

 wallStreetData = async () => {
        let res = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.API_KEY}`
        );
        let resData = await res.json();
        return resData;
      };
 businessData = async () => {
        let res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`
        );
        let resData = await res.json();
        return resData;
      };
techData = async () => {
        let res = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`
        );
        let resData = await res.json();
        return resData;
      };
appleData = async () => {
        let res = await fetch(
          `https://newsapi.org/v2/everything?q=apple&from=2023-04-22&to=2023-04-22&sortBy=popularity&apiKey=${process.env.API_KEY}`
        );
        let resData = await res.json();
        return resData;
      };
}

module.exports = {Control}