import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Booksdatashow from "../Booksdatashow/Booksdatashow";

const Booksdata = () => {

    const [bookList,setbookList]=useState([]);

    useEffect(()=>{
        fetch('Booklist.json')
        .then(res=>res.json())
        .then(data=>setbookList(data));

    },[]);

    // console.log(bookList);


    return (
        <div className="mt-7">
            <div className="text-black text-4xl font-extrabold mb-2 p-10 items-center text-center m-4 rounded-3xl">
                 <h2>Books</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                   bookList.map(allBook =><Booksdatashow key={allBook.bookId} allBook={allBook}></Booksdatashow> )
               }
            </div>
            </div>

    );
};

export default Booksdata;



