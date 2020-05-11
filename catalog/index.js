import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import theme from "./theme";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  }
];

ReactDOM.render(
  <Catalog title="Catalog" 
  pages={pages} 
  theme={theme}
  pages={[
      {
        path: "/introduction",
        title: "Introduction",
        content: pageLoader(() => import("./intro.md"))
      },
    ]}
    />,
  document.getElementById("catalog")
 );
