const http = require("http");
const url = require("url");

const getQueryString = urlstring => {
  try {
    return url.parse(urlstring).query;
  } catch (e) {
    return {};
  }
};
module.exports = getQueryString;
