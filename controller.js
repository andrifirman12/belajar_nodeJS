"use strict";

var response = require("./res");
var koneksi = require("./connection");

exports.index = function (req, res) {
  response.ok("REST is Running", res);
};

// Load all User Data
exports.getAllUser = function (req, res) {
  koneksi.query("SELECT * FROM tb_profile", function (error, rows, fields) {
    if (error) {
      koneksi.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Load User Data By ID
exports.getUserById = function (req, res) {
  let id = req.params.id;

  koneksi.query(
    "SELECT * FROM tb_profile WHERE id_profile = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// Load User Data By ID
exports.addUser = function (req, res) {
  var id = req.body.id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var address = req.body.address;

  koneksi.query(
    "INSERT INTO tb_profile (id_profile, first_name, last_name, address) VALUES (?, ?, ?, ?)",
    [id, first_name, last_name, address],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Added Successfully!", res);
      }
    }
  );
};

exports.editUser = function (req, res) {
  var id = req.body.id;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var address = req.body.address;

  koneksi.query(
    "UPDATE tb_profile SET first_name = ?, last_name = ?, address = ? WHERE id_profile = ?",
    [first_name, last_name, address, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Updated Successfully!", res);
      }
    }
  );
};
