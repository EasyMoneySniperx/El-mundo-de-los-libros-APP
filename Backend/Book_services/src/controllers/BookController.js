const book = require('../database/models/Book');

const get_books = async (res, req) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const get_book = async (res, req) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_book = async (res, req) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const change_cover = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
} 

const delete_book = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
} 

const update_book = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
} 

module.exports = {
    get_books,
    get_book,
    add_book,
    change_cover,
    delete_book,
    update_book
}