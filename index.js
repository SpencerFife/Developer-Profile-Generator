"use strict";

const inquirer = require("inquirer");
const axios = require("axios");

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
    console.log(userinput);
  } catch (error) {
    console.log(error);
  }
}

init();
