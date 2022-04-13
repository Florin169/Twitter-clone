import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Chat, Heart, ArrowDownUp, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import {
  commentsActions,
  modalTrueActions,
  postIdActions,
} from "../redux/twitterActions";
import ReplyModal from "./ReplyModal";

const Post = ({ post, id }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.twitter.comments);
  const toggleModal = useSelector((state) => state.twitter.toggleModal);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, id]);

  useEffect(() => {
    setLiked(likes.findIndex((like) => like.id === post.userId) !== -1);
  }, [likes]);

  const updateLikes = async () => {
    if (!liked) {
      await setDoc(doc(db, "posts", id, "likes", post.userId), {
        username: post.username,
      });
    } else {
      await deleteDoc(doc(db, "posts", id, "likes", post.userId));
    }
  };

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "comments"), (snapshot) => {
      const comments = snapshot.docs;
      dispatch(commentsActions(comments));
    });
  }, [db, id]);

  return (
    <div className="p-3 flex relative">
      <div className="h-full mr-4">
        <div className="w-10 h-10">
          <img
            src={post.userImg}
            className="rounded-full w-full h-full object-cover "
          />
        </div>
      </div>
      <div>
        <div className="space-x-1">
          <span>{post.username}</span>
          <span className="text-gray-400 text-sm">@{post.username}</span>
        </div>
        <p className="mt-2">{post.text}</p>
        <img
          src={post.image}
          alt=""
          className="rounded-2xl max-h-[600px] my-2"
        />
        <div className="flex   px-14 py-2 justify-between">
          <div
            className="cursor-pointer hover:text-blue-400 flex items-center space-x-2"
            onClick={() => {
              dispatch(modalTrueActions());
              dispatch(postIdActions(id));
            }}
          >
            <Chat />
            {comments.length > 0 && <span>{comments.length}</span>}
          </div>
          <div className="cursor-pointer hover:text-green-300">
            <ArrowDownUp />
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
            onClick={updateLikes}
          >
            {liked ? <HeartFill className="text-red-500" /> : <Heart />}
            {likes.length > 0 && (
              <span className="font-light">{likes.length}</span>
            )}
          </div>
        </div>
      </div>
      {toggleModal && <ReplyModal />}
    </div>
  );
};

export default Post;
