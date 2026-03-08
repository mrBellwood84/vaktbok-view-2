import {useDispatch} from "react-redux";
import {workdaySlice} from "@/store/slices/workdaySlice";
import {useEffect, useRef} from "react";
import * as DbService from "@/services/databaseService"

export const LoadWorkdays = () => {

    const dispatch = useDispatch();
    const { setWorkday, setLoadingFailed } = workdaySlice.actions;

    const loaded = useRef<boolean>(false);

    useEffect(() => {
       if(!loaded.current) {
           DbService.getAllWorkdaysAsync()
               .then(data => dispatch(setWorkday(data)))
               .catch(err => {
                   console.error("Failed to load all workdays", err);
                   dispatch(setLoadingFailed());
               })
               .finally(() => loaded.current = true);
       }
    },[dispatch, setLoadingFailed, setWorkday])
}