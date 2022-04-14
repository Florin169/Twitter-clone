import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { modalFalseActions } from "../redux/twitterActions";
import Input from "./Input";

const ReplyModal = () => {
  const [singlePost, setSinglePost] = useState([]);

  const dispatch = useDispatch();
  const postId = useSelector((state) => state.twitter.postId);

  useEffect(() => {
    onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setSinglePost(snapshot.data());
    });
  }, [postId]);

  return (
    <div
      className="fixed inset-0  flex justify-center  text-white h-screen w-full bg-black/30 overscroll-auto z-50 cursor-default"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className="sm:mt-20 sm:ml-[30%] fixed inset-0 w-full h-screen sm:max-h-[345px] sm:max-w-[600px] bg-[#15202B] rounded-2xl px-3 py-3 ">
        <div className="w-full ">
          <X
            size={30}
            className="cursor-pointer"
            onClick={(e) => {
              dispatch(modalFalseActions());
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </div>

        <div className="min-h-[100px] flex mt-2">
          <div className=" w-12 h-12 mr-4">
            <img
              src={singlePost?.userImg}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span>{singlePost?.username}</span>
              <span className="text-sm text-gray-300">
                @{singlePost?.username}
              </span>
            </div>
            <div>
              <p>{singlePost?.text}</p>
              <img
                src={singlePost?.image}
                alt=""
                className="max-h-[80px] w-100px rounded-2xl my-2"
              />
            </div>
          </div>
        </div>
        <Input modal />
      </div>
    </div>
  );
};

export default ReplyModal;
