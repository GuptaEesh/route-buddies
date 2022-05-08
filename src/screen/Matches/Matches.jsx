import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { db } from "../../firebase-config";

const Matches = () => {
  const {
    authState: { user },
  } = useAuth();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "messages"),
        where("participants", "array-contains", user.uid)
      );

      onSnapshot(q, (querySnapshot) => {
        let matches = [];
        querySnapshot.forEach((doc) => matches.push(doc.data()));
        setMatches(matches);
      });
    })();
  }, []);

  if (!matches.length) {
    return <h3>No messages yet!</h3>;
  }

  return (
    <div>
      {matches &&
        matches.map((match) => {
          const _id = match.participants.filter((id) => id != user?.uid)[0];
          const _user = match.users[_id];
          return <h2 key={_id}>{_user.fullName}</h2>;
        })}
    </div>
  );
};

export { Matches };
