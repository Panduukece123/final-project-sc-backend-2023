const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
    origin: "*" // Atau ganti dengan domain jika ingin menerima permintaan dari domain tertentu
};

// Menerapkan middleware 
app.use(cors(corsOptions));
app.use(express.json());

// Konek ke database;

const mongooseConfig = {};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`gagal konek ${err.message}`);
        process.exit(1);
    });


// memanggil route tiket
require("./app/routes/tiket_kereta.route")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
