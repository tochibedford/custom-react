import React from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
    return ( 
        <div className="app">
            Tochi's react boiler plate from scratch. I configured
                <ul>
                    <li>
                        <i>Babel</i>
                    </li>
                    <li>
                        <i>Webpack</i>
                    </li>
                    <li>
                        <i>and their respective plugins</i>
                    </li>
                    <li>
                        <i>also enabled hot reloading</i>
                    </li>
                </ul>
                Trying out a little counter component to ensure stuff works
                <Counter />
                
                cool!  ^_^ <br />
                Will try this with parcel next
        </div>
     );
}
 
export default App;