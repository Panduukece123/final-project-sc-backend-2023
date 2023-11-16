import express from "express";
import {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
} from "../controllers/bookController.js";
const router = express.Router();

/**
 * buatlah route CRUD untuk model yang telah dibuat dan diolah controller
 */
router.get("/books", getAllBooks);

router.get("/book/:id", getBookById);

router.post("/book", createBook);

router.put("/book/:id", updateBook);

router.delete("/book/:id", deleteBook);

export default router;
