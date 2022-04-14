import React from "react";
import { Chat, Heart, ArrowDownUp, HeartFill } from "react-bootstrap-icons";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  console.log(comment);

  return (
    <div className="flex  mt-10 ">
      <div className=" w-11 h-11 ">
        <img
          src={comment.userImg}
          alt=""
          className="rounded-full h-full w-full object-cover"
        />
      </div>
      <div className="ml-3 w-full">
        <div className="space-x-2">
          <span>{comment.name}</span>
          <span className="text-gray-400">@{comment.name}</span>
          <span className="text-gray-400 text-sm">
            <Moment fromNow>{comment.timestamp?.toDate()}</Moment>
          </span>
        </div>
        <div>
          <p className="text-gray-400">
            Replying to <span className="text-blue-500">{comment.name}</span>
          </p>
          <p className="my-3">{comment.comment}</p>
        </div>
        <div className="flex justify-between w-[90%]">
          <Chat />
          <ArrowDownUp />
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default Comment;
