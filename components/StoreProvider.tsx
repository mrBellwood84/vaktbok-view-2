"use client"

import {ReactNode, useState} from "react";
import {makeStore} from "@/store/store";
import {Provider} from "react-redux";

interface Props {
    children: ReactNode;
}

export const StoreProvider = (props: Props) => {

    const [ store ] = useState(() => makeStore());

    return <Provider store={store}>
        {props.children}
    </Provider>
}


