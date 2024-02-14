import React from "react";
import "./Page.scss";

const Page = (props: Props) => {
  return (
    <>
      <h1 className="page-title">{props.title}</h1>
      {props.children}
    </>
  );
};

interface Props {
  title: string;
  children: React.ReactNode;
}

export default Page;
