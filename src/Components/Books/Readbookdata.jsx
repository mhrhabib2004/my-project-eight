import { useLoaderData, useParams } from "react-router-dom";

const Readbookdata = () => {
const booklode=useLoaderData();
console.log(booklode)
// const { bookId } = useParams();
// const bookInt = parseInt(bookId);
// const book = booklode?.find((book) => book.bookId === bookInt);
// console.log(bookdata.bookId)
// const { image, bookName, authorName, category, review, totalPages, publisher, yearOfPublishing, rating } = book;
// console.log(book)


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <h2 className="">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-between">
                            <h2 className="">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>

                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Readbookdata;