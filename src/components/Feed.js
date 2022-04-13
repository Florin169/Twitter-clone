import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Stars } from "react-bootstrap-icons";
import Input from "./Input";
import Post from "./Post";
import { db } from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="max-w-[600px] text-white flex-grow sm:ml-[114px] lg:ml-[315px] xl:ml-[480px] border-l border-r border-gray-600 h-screen ">
      <div className="flex justify-between items-center px-3 h-12 ">
        <h4 className="font-bold text-md">Home</h4>
        <Stars size={20} />
      </div>
      <div className="divide-y divide-gray-600 overscroll-contain">
        <Input />
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
