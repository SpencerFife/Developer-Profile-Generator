"use strict";

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

module.exports = function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
      <title>Document</title>
      <style>
        a {
          color: ${colors[data.color].headerColor};
        }
        .card,
        .card-body,
        .jumbotron {
          background-color: ${colors[data.color].headerColor};
          color: ${colors[data.color].headerColor};
        }
        img {
          border: 6px solid ${colors[data.color].photoBorderColor};
        }
        body {
          background-color: ${colors[data.color].wrapperBackground};
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="jumbotron text-center">
          <img
            src="${data.avatar_url}"
            alt="..."
            class="rounded-circle w-50"
          />
          <h1 class="display-4">Hi!</h1>
          <h2 class="lead">
            My name is ${data.name}!
          </h2>
          <hr class="my-4" />
          <h5>Currently @ ${data.company}</h5>
          <a href="https://www.google.com/maps/place/" + ${data.location}>${
    data.location
  }</a>
          <a href="${data.html_url}">GitHub</a>
          <a href="${data.blog}">Blog</a>
        </div>
        <div class="row">
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Public Repositories</h5>
                <p class="card-text">
                  ${data.public_repos}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Followers</h5>
                <p class="card-text">
                  ${data.followers}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">GitHub Stars</h5>
                <p class="card-text">
                  ${data.star_numbers}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Following</h5>
                <p class="card-text">
                  ${data.following}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
};
