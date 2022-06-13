"use strict";

var response = require("./res");
var koneksi = require("./connection");

exports.index = function (req, res) {
  response.ok("REST is Running", res);
};

exports.getAllUser = function (req, res) {
  koneksi.query("SELECT * FROM tb_profile", function (error, rows, fields) {
    if (error) {
      koneksi.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
