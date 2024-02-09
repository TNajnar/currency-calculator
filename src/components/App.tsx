import { ReactElement } from "react"
import clsx from "clsx";
import Calculator from "./Calculator/Calculator";

const App = (): ReactElement => (
  <main className={clsx("page-layout", "mainComponent")}>
    <h1 className="text-4xl">Currency calculator</h1>

    <Calculator />
  </main>
);

export default App;
