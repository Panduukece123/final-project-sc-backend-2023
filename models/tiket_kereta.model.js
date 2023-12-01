module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_lengkap: String,
            jenis_kelamin: String,
            tanggal_pembelian: Date,
            nik: String,
            total_tiket: Number,
            total_harga: Number,
        },
        {
            timestamps: true
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id; // ilanglah
        return object;
    });
    
    
    return mongoose.model("tiket_kereta", schema);
};
