import {Fragment} from "react";
import {LoadEmployees} from "@/components/pseudo/LoadEmployees";
import {LoadWorkdays} from "@/components/pseudo/LoadWorkdays";
import {LoadShiftCodes} from "@/components/pseudo/LoadShiftCodes";
import {LoadShiftRemarks} from "@/components/pseudo/LoadShiftRemarks";
import {LoadShifts} from "@/components/pseudo/LoadShifts";

const Home = () => {
  return <Fragment>
    <LoadEmployees />
    <LoadShiftCodes />
    <LoadShiftRemarks />
    <LoadShifts />
    <LoadWorkdays />

    <h2>Hello world</h2>
    <div>Data should load!</div>
  </Fragment>
}

export default Home