import { key } from "localforage";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const Booksdatashow = ({ allBook }) => {
    // console.log(allBook);
    const { authorName, bookName, category, image, rating, bookId } = allBook;

    return (
        <Link to={`/Bookdatalist/${bookId}`}>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body gap-4">
                    <div className="flex justify-between">
                        {
                            allBook.tags.map((tag) =>
                                <>
                                    <div><h1 className="bg-[rgba(35, 190, 10, 0.05);] text-[#23BE0A] font-medium p-1 rounded-lg" >{tag}</h1></div>
                                </>
                            )
                        }
                    </div>
                    <h2 className="card-title text-[#131313] text-2xl">{bookName}</h2>
                    <p className="text-[#131313CC] font-medium ">By : {authorName}</p>
                    <hr />
                    <div className="card-actions">
                        <p>{category}</p>
                        <div className="flex text-[#131313CC] font-medium items-center gap-1 ">
                            <p >{rating}</p>
                            <p><FcRating /></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Booksdatashow;