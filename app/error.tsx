"use client";

import { useEffect } from "react";
import Empty from "./components/Empty";

interface ErrorStateProps {
  error: Error;
}

const Error: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <Empty title="Opps !!!" subtitle="Something went wrong" />;
};

export default Error;
