import { toast } from "react-toastify";

const getBookData = () => {
    const storBookData = localStorage.getItem('readBookId');
    if (storBookData) {
        return JSON.parse(storBookData);
    }
    return [];
}

// wishListBook section
const getWishListBookData = () => {
    const storWishListBookData = localStorage.getItem('wishListId');
    if (storWishListBookData) {
        return JSON.parse(storWishListBookData);
    }
    return [];
}


const saveWishListBookStor = bookId => {
    const storedWishListBookData = getWishListBookData();
    const exitsted = storedWishListBookData.find(bookWishId => bookWishId === bookId);
    const storedBookData = getBookData();
    const exits = storedBookData.find(booksId => booksId === bookId);
    if (exits == bookId) {
        storedWishListBookData.push(bookId);
        localStorage.setItem('readBookId', JSON.stringify(storedWishListBookData))
        return toast.error('Already added read Book list');
    }


    if (!exitsted) {
        storedWishListBookData.push(bookId);
        localStorage.setItem('wishListId', JSON.stringify(storedWishListBookData))
        return toast.success("Success to added wishlist book ");
    }
    else {
        toast.error('Already added wishlist Book');
    }

}

export { getWishListBookData,saveWishListBookStor }