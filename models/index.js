const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbConfig.url,
    tiket_kereta: require('./tiket_kereta.model.js')(mongoose)
}


