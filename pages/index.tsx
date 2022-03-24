import { HomePage } from "@/modules/Home";
import type { NextPage } from "next";
import useStore from "redux/userStore";

import Login from "./login";

const Home: NextPage = () => {
  const { data } = useStore();
  return <>{data.name ? <HomePage /> : <Login />}</>;
};

export default Home;
