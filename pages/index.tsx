import type { NextPage } from "next";
import useStore from "src/zustand/userStore";

import Login from "./login";

const Home: NextPage = () => {
  const { data } = useStore();
  return (
    <>
      <Login />
      <button onClick={() => console.log(data.name)}>aaaaa</button>
    </>
  );
};

export default Home;
