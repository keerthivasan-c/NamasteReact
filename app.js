

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]

    )

);

const heading = React.createElement("h1",
    { id: "heading" },
    "Hey this is my first react code");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
