
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", { key: "heading-1" }, "I am h1 tag this is awesome"),
        React.createElement("h2", { key: "heading-2" }, "I am h2 tag")]

    )

);

const heading = React.createElement("h1",
    { id: "heading" },
    "Hey this is my first react code");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
