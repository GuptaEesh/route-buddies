import { useEffect, useState } from "react";
import { ProfileViewer } from "../../components";
import { useAuth } from "../../context";
import { getUserMatches } from "../../firebase-config";

const Explore = () => {
  const [userMatches, setUserMatches] = useState();

  const {
    authState: { data },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (data?.routes) {
        const response = await getUserMatches();
        const userArray = [];
        response.forEach((doc) => {
          const _doc = doc.data();
          if (_doc?.uid !== data?.uid && _doc?.routes) {
            if (
              _doc?.routes[0]?.start === data?.routes[0]?.start ||
              _doc?.routes[0]?.end === data?.routes[0]?.end
            ) {
              userArray.push(_doc);
            }
          }
        });
        setUserMatches(userArray);
      }
    })();
  }, [data]);

  if (!userMatches?.length) {
    return (
      <div className="w-screen flex flex-col items-center ">
        <h2>No Matches Found!</h2>
        <h3>Please try again with some other routes!</h3>
      </div>
    );
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center '>
      {userMatches.map((user) => (
        <ProfileViewer
          key={user.uid}
          id={user.uid}
          userName={user.fullName}
          designation={user.profession}
          source={user.routes[0].start}
          destination={user.routes[0].end}
          userImg={user.avatar}
        />
      ))}
    </div>
  );
};

export { Explore };
