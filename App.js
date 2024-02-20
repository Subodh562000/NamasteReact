// const heading = React.createElement("h1",{id:"heading"},"Hello world By react");

// const root = ReactDOM.createRoot(document.getElementById("root"));




import React from "react";
import ReactDOM from "react-dom/client"

// const head = React.createElement("h1",{id:"heading"},"Namaste React");


const Head = () => {
return (<h1 id="heading" className="heading">Namaste React By 🦆</h1>)
};

const elem = (<span>Akshay Saini</span>);


const Heading = () =>{

 return ( <div id="container">
        <Head/>
        <Head></Head>
        {Head}
     <h1>
      {elem}
      Namaste React by Functional Components</h1>
     </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Heading/>);
