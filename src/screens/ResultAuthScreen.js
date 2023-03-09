import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";

const ResultAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
};

export default ResultAuthScreen;
