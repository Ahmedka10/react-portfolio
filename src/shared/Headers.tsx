import React from "react";

type Props = {
  children: React.ReactNode;
};

const Headers = ({ children }: Props) => {
  return (
    <h4 className="basis-3/5 text-deep-blue font-playfair font-semibold text-3xl capitalize">
      {children}
    </h4>
  );
};

export default Headers;
