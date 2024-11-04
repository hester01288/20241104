import { useState } from "react";
import projects from "./Data/projects";
import "../Component/CSS/Project.css";

function Project() {
    const [index, setIndex] = useState(0);
    const contentChange = (index) => {
      setIndex(index);
    };
    return (
      <div id="grid">
        <ol>
        {projects.map((intro, index) => (
            <li 
                key={index} 
                onClick={() => contentChange(index)} 
                className="subnav"
            >
            {intro.tab}
            </li>
       
        
        ))}
        </ol>

        {projects[index].content}
        </div>
    );
}

export default Project;
