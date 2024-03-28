import { useLoaderData, useParams } from "react-router-dom";
import { saveBookStor } from "../../Utility/Read";
import { saveWishListBookStor } from "../../Utility/Whitlist";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Bookdatalist = () => {

    const datalode = useLoaderData();
    // console.log(datalode);
    const { bookId } = useParams();
    // console.log(bookId)
    const bookInt = parseInt(bookId);
    // console.log(bookInt)
    const book = datalode?.find((book) => book.bookId === bookInt);
    // console.log(book.bookId)
    const { image, bookName, authorName, category, review, totalPages, publisher, yearOfPublishing, rating } = book;
    
    const handelAddRead = () => {
    saveBookStor(bookId);
        
    }
    const handlAddWishlist = () => {
        saveWishListBookStor(bookId)

}


    return (
        <div className="hero min-h-auto bg-base-200 rounded-xl">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 ">
                <img src={image} className="h-72 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-[40px] font-bold">{bookName}</h1> <br />
                    <h2 className="text-[20px] font-medium">By : {authorName}</h2>
                    <br />
                    <hr />
                    <h3 className="text-[20px] font-medium">{category}</h3>
                    <br />
                    <hr />
                    <br />
                    <p className="">Review :{review}</p>
                    <div className="mt-4 flex gap-7 items-center">
                        <span className="text-[#131313] font-bold">Tag :</span>
                        {
                            book.tags.map((tags) =>
                                <>
                                    <div className="">
                                        <h2 className="font-extrabold text-[16px] bg-[#23be0a0d] rounded-full text-[#474747] grid   p-2 text-center justify-center items-center ">  {tags}</h2>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-lg">Number of Pages: {totalPages}</p>
                        <p className="font-semibold text-lg">Publisher: {publisher}</p>
                        <p className="font-semibold text-lg">Year of Publishing: {yearOfPublishing}</p>
                        <p className="font-semibold text-lg">Rating: {rating}</p>

                    </div>
                    <div className="mt-6">
                        <button onClick={handelAddRead}  className="btn  bg-[#1313134D]">Read</button>
                        
                        <button onClick={handlAddWishlist } className="btn ml-4 bg-[#50B1C9]">Wishlist</button>
                        
                        
                    </div>
                    <ToastContainer />
                    
                    
                </div>
               
            </div>
            
        </div>
        
    );
};

export default Bookdatalist;