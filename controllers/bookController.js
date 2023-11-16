import configModel from "../models/index.js";
const bookModel = configModel.book;

/**
 * buatlah controller CRUD untuk model yang telah dibuat
 */

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns get All books in database
 */
export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        return res.status(200).json({
            message: "Success",
            data: books,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns get spesific book by id
 */
export const getBookById = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        return res.status(200).json({
            message: "Success",
            data: book,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns crete new book into database
 */
export const createBook = async (req, res) => {
    const book = req.body;
    const newBook = new bookModel(book);
    try {
        await newBook.save();
        return res.status(201).json({
            message: "Success",
            data: newBook,
        });
    } catch (error) {
        return res.status(409).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns update specific book by id
 */
export const updateBook = async (req, res) => {
    try {
        const data = req.body;
        const book = await bookModel.findById(req.params.id);
        if (book) {
            book.judul = data.judul;
            book.penulis = data.penulis;
            book.penerbit = data.penerbit;
            book.tahun = data.tahun;
            book.sinopsis = data.sinopsis;
            book.genre = data.genre;
            const updateBook = await book.save();
            return res.status(200).json({
                message: "Success",
                data: updateBook,
            });
        } else {
            return res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns delete specific book by id
 */
export const deleteBook = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (book) {
            await book.remove();
            return res.status(200).json({ message: "Book deleted" });
        } else {
            return res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};
