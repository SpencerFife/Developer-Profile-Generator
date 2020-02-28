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

function init() {}

init();
