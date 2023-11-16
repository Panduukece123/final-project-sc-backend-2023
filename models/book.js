import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        // example schema definition for a book
        judul: String,
        penulis: String,
        penerbit: String,
        tahun: Number,
        sinopsis: String,
        genre: String,
    },
    {
        timeStamps: true,
    }
);
//mengambil nilai id yang di set otomatis oleh mongodb
bookSchema.methods.toJSON = function () {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};
export const bookModel = mongoose.model("bookModel", bookSchema);
