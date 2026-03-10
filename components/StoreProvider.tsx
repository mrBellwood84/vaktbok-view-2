"use client";

import { ReactNode, useState } from "react";

import { Provider } from "react-redux";

import { makeStore } from "@/store/store";

interface Props {
  children: ReactNode;
}

export const StoreProvider = (props: Props) => {

  const [store] = useState(() => makeStore());

  return <Provider store={store}>
    {props.children}
  </Provider>;
};


