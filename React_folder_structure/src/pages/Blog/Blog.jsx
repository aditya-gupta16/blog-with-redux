import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setBlog } from "../../Data/redux/slice/Blog/BlogSlice";

const Blog = () => {
  const [text, setText] = useState("");
  const [description, setDecription] = useState("");

  const dispatch = useDispatch();

  const data =  useSelector(state => state.blogs.datablog)

  function AddBlog() {
    if (!text || !description) {
      toast.error("Input Feilds are Required");
      return;
    }

    dispatch(setBlog({ text, description }));
    setText("");
    setDecription("");
  }

  return (
    <div className="w-[85%] mx-auto mt-12">
      {/* <h2 className='text-5xl'>Hello Blog Page</h2> */}

      <div className="border-1 text-center w-full py-4 ">
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-8 p-2 m-1 w-full outline-none"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDecription(e.target.value)}
          className="px-8 m-1 w-full outline-none"
        />
        <button
          onClick={() => AddBlog()}
          className="cursor-pointer hover:bg-blue-500 border-1 rounded px-12 py-2"
        >
          Add-Blog
        </button>
      </div>

      <div className="flex items-center gap-4">
      {data.length > 0 ? (
        data.map((result)=> (
           <div key={result.id} className="border-1 rounded-xl shadow-md shadow-black w-24 py-14 ">
            <h2>{result.text}</h2>
            <h2>{result.description}</h2>

           </div>
        ))
      ) : (
        <p>No Present Data Please Add First</p>
      ) }
      </div>
      
    </div>
  );
};

export default Blog;
