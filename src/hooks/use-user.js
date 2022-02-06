import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

const useUser = () => {
  const user = useContext(UserContext);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getuserObjectByUserId() {
      const response = await getUserByUserId(user.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getuserObjectByUserId();
    }
  }, [user]);

  return { user: activeUser };
};

export default useUser;
