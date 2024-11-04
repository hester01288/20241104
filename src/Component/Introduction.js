import { useState } from "react";
import Intros from "./Data/intros";
import "../Component/CSS/Introduction.css"
function Introduction() {
    const [index, setIndex] = useState(0);
    const contentChange = (index) => {
      setIndex(index);
    };
    return (
      <div id="grid">
        <ol>
        {Intros.map((intro, index) => (
            <li 
                key={index} 
                onClick={() => contentChange(index)} 
                className="subnav"
            >
            {intro.tab}
            </li>
       
        
        ))}
        </ol>

        {Intros[index].content}
        </div>
    );
  }
  
  export default Introduction;