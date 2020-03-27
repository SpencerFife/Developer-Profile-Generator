"use strict";

const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generatedHTML = require("./generatedHTML");
const puppeteer = require("puppeteer");
const open = require("open");
//const Profile = require("./index.html");

const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub user name?"
  },
  {
    type: "rawlist",
    name: "colors",
    message: "What is your favorite color?",
    choices: ["green", "blue", "red", "pink"]
  }
];

async function printPDF(fileName, htmlFile) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(htmlFile, { waitUntil: "networkidle0" });
  const pdf = await page.pdf({
    path: `./output/${fileName}.pdf`,
    format: "Letter",
    printBackground: true
  });
  await browser.close();
  return pdf;
}

async function init() {
  try {
    const userinput = await inquirer.prompt(questions);
    const queryUrl = `https://api.github.com/users/${userinput.userName}`;
    const githubInfo = await axios.get(queryUrl);
    const starredRepo = await axios.get(queryUrl + `/starred`);
    console.log(userinput, githubInfo.data, starredRepo);
    const data = {
      ...githubInfo.data,
      star_numbers: starredRepo.data.length,
      color: userinput.colors
    };
    const html = generatedHTML(data);
    fs.writeFile("index.html", html, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    await printPDF("githubPDF", html);
    open("./output/githubPDF.pdf");
  } catch (error) {
    console.log(error);
  }
}

init();
