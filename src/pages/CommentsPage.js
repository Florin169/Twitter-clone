import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { ArrowLeftShort } from "react-bootstrap-icons";
import Trends from "../components/Trends";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { Chat, Heart, ArrowDownUp, HeartFill } from "react-bootstrap-icons";
import Moment from "react-moment";
import Comment from "../components/Comment";

const CommentsPage = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(comments);

  useEffect(() => {
    onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot.data()));
  }, [db]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "comments"), (snapshot) =>
      setComments(snapshot.docs)
    );
  }, [db, id]);

  return (
    <div>
      <Sidebar />
      <div className="max-w-[600px] text-white flex-grow sm:ml-[114px] lg:ml-[315px] xl:ml-[480px] border-l border-r border-gray-600 h-screen p-3">
        <div className="w-full flex items-center space-x-4 text-xl font-bold">
          <ArrowLeftShort size={30} onClick={() => navigate("/home")} />
          <h1>Tweet</h1>
        </div>

        <div className=" w-full flex items-center mt-5">
          <img
            src={post.userImg}
            className="w-11 h-11 object-cover rounded-full bg-violet-300"
          />

          <div className="ml-3 flex flex-col">
            <span>{post.username}</span>
            <span className="text-gray-400">@{post.username}</span>
          </div>
        </div>

        <div className="w-full">
          <p className="my-4 text-lg font-medium">{post.text}</p>
          <img src={post?.image} alt="" className="max-h-[600px] rounded-2xl" />
          <div className="py-3 text-gray-400 text-sm">
            <Moment fromNow>{post.timestamp?.toDate()}</Moment>
          </div>
          <div className=" flex w-[90%] m-auto justify-between">
            <Chat />
            <ArrowDownUp />
            <Heart />
          </div>
        </div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment.data()} />
        ))}
      </div>
      <Trends />
    </div>
  );
};

export default CommentsPage;
