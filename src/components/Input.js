import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import {
  CardImage,
  FiletypeGif,
  EmojiSmile,
  CalendarPlus,
  X,
} from "react-bootstrap-icons";
import { auth, db, storage } from "../firebase";

const Input = () => {
  const selectImgRef = useRef(null);

  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  console.log(auth.currentUser);

  const sendPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      text: input,
      username: auth.currentUser.displayName,
      userId: auth.currentUser?.uid,
      userImg: auth.currentUser?.photoURL,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (image) {
      await uploadString(imageRef, image, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      });
    }

    setImage(null);
    setInput("");
  };

  const getImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  return (
    <div className="px-3 flex ">
      <div className="mr-4 h-full">
        <div className="rounded-full bg-violet-400 w-10 h-10"></div>
      </div>
      <div className="w-full">
        <textarea
          rows="2"
          placeholder="What's happening?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent placeholder:text-gray-400 outline-none"
        />
        {image && (
          <div className="relative ">
            <div
              className="absolute left-3 top-3 w-9 h-9 rounded-full hover:bg-black/20 cursor-pointer flex justify-center items-center"
              onClick={() => setImage(null)}
            >
              <X size={30} />
            </div>
            <img
              src={image}
              alt="image"
              className="object-contain max-h-[600px] rounded-2xl"
            />
          </div>
        )}
        <div className="flex justify-between items-center my-3">
          <div className="flex space-x-4 text-blue-500">
            <div onClick={() => selectImgRef.current.click()}>
              <CardImage />
              <input
                type="file"
                ref={selectImgRef}
                className="hidden"
                onChange={getImage}
              />
            </div>
            <div>
              <FiletypeGif />
            </div>
            <div>
              <EmojiSmile />
            </div>
            <div>
              <CalendarPlus />
            </div>
          </div>
          <button
            className={`${
              input === "" && "bg-blue-500/30 text-white/30 cursor-default"
            } w-28 h-10 rounded-full bg-blue-500`}
            onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
