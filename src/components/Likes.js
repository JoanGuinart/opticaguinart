import React from "react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../Firebase";
import { useAuth } from "../context.js/AuthContext";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function Likes({ id, likes }) {
  const [user] = useAuth();
  const likesRef = doc(db, "gafas", id);
  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("disliked");
        })
        .catch((err) => console.log(err));
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("Liked");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <i
        className={`${<AiOutlineHeart/>}${!likes?.includes(user.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? <FcLike/> : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}
