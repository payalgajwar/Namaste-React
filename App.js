// html code

// <div className="textcolor">
//     <div>
//         <h1>Shopper's point</h1>
//         <h2>Hi to all Shopper's</h2>
//     </div>
//      <h1>Welcome! Payal</h1>
//      <h2>Shopstocks</h2>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    // provide attributes
    React.createElement("h1", {}, "Shopper's point"), // create tags
    React.createElement("h2", {}, "Hi to all Shopper's"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Welcome! Payal"),
    React.createElement("h2", {}, "Shopstocks"),
  ]),
]);

console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root, Root is the place where all react code will run.
root.render(parent); // Everything will be rendered in the root.

const heading = React.createElement(
  "h1", // tag
  { id: "heading", xyz: "abc" }, // attributes
  "Hello World from React!" //children
);

console.log("heading", heading); // react element to return object

// .render = take the heading object create an h1 teg
// that browser will understand and put that up inside the root
