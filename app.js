const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"helo wasup 1"),React.createElement("h2",{},"helo  1")]),
React.createElement("div",{id:"child"},[React.createElement("h1",{},"helo wasup 2"),React.createElement("h2",{},"helo  2")])]);
const root  = ReactDOM.createRoot(document.getElementById("root"));



root.render(heading);
 