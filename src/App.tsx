// import { ComponentExample } from "@/components/component-example";
import { RouterProvider } from "react-router";
import { routes } from "./routes";

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
