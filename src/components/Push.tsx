import React from "react";

import { useSelector } from "react-redux";
import { selectPush } from "../slices/pushSlice";
interface Props {}

const Push: React.FC<Props> = () => {
  const push = useSelector(selectPush);

  return (
    <div>
      <h3>Pushed :{push.value} </h3>
    </div>
  );
};

export default Push;
