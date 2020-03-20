"use strict";

const inquirer = require("inquirer");
const axios = require("axios");
const generatedHTML = require("./generatedHTML");
const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub user name?"
  },
  {
    type: "list",
    name: "colors",
    message: "What is your favorite color?",
    choices: ["green", "blue", "red", "pink"]
  }
];

function writeToFile(fileName, data) {}

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
    console.log(generatedHTML(data));
  } catch (error) {
    console.log(error);
  }
}

init();
