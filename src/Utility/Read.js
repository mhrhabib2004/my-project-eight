

import { toast } from "react-toastify";

//  Read book lish
const getBookData = () => {
    const storBookData = localStorage.getItem('readBookId');
    if (storBookData) {
        return JSON.parse(storBookData);
    }
    return [];
}

const saveBookStor = bookId => {
    const storedBookData = getBookData();
    const exits = storedBookData.find(booksId => booksId === bookId);
    if (!exits) {
        storedBookData.push(bookId);
        localStorage.setItem('readBookId', JSON.stringify(storedBookData))
        return toast.success("Success to added read book ");
    }
     else {
        toast.error("Already added read Book ");
    }
}

export { getBookData,saveBookStor}