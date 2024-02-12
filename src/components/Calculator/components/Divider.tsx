import { ReactElement } from "react";

const Divider = (): ReactElement => (
  <div className="flex flex-col gap-4 px-7 w-full text-center">
    <span>From</span>
    <span className="w-full border-b border-white" />
    <span>To</span>
  </div>
);

export default Divider;
