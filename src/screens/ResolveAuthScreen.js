import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
};

export default ResolveAuthScreen;
