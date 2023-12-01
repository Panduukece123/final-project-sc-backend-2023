const db = require("../models")
const tiket_kereta = db.tiket_kereta

exports.create = (req, res) => {

    req.body.tanggal_pembelian = new Date(req.body.tanggal_pembelian)
    tiket_kereta.create(req.body)
        .then(() => res.send ({message : "data berhasil disimpan"}))
        .catch(err => res.status (500).send({message: err.message}));
}

exports.findAll = (req, res) => {
   tiket_kereta.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.show = (req, res) => {
    const id = req.params.id;

    tiket_kereta.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }))
}


exports.update = (req, res) => {
    const id = req.params.id;

    tiket_kereta.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedData => {
            if (!updatedData) {
                return res.status(404).send({ message: "Data not found" });
            }
            res.send({ message: "Data updated successfully", updatedData });
        })
        .catch(err => res.status(500).send({ message: err.message }));
}


exports.delete = (req, res) => {
    const id = req.params.id;

    tiket_kereta.findByIdAndDelete(id)
        .then(deletedData => {
            if (!deletedData) {
                return res.status(404).send({ message: "Data not found" });
            }
            res.send({ message: "Data deleted successfully", deletedData });
        })
        .catch(err => res.status(500).send({ message: err.message }));
}

