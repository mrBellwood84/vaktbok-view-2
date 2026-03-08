import {Fragment} from "react";
import {LoadEmployees} from "@/components/pseudo/LoadEmployees";

const Home = () => {
  return <Fragment>
    <LoadEmployees />
    <h2>Hello world</h2>
    <div>Data should load!</div>
  </Fragment>
}

export default Home