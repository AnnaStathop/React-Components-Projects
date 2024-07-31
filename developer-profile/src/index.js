import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Avatar() {
    return (
        <div class="avatar">
            <img src="No-Image-Found-400x264.png" alt="" />
        </div>
    );
}

function Intro() {
    return (
        <div className="intro">
            <h1>Anna Stathopoulou</h1>
            <p>Full-stack web developer</p>
        </div>
    );
}

function SkillList() {
    const skills = skillData
    const numSkills = skills.length
    return (
        <ul className="skill-list">
            {skills.map((skill)=><Skill skill={skill.skill} level={skill.level} color={skill.color}></Skill>)}
            {/*<Skill skill="Typescript" color="lightblue" />*/}
            {/*<Skill skill="React" color="#226eb1" />*/}
            {/*<Skill skill="HTML / CSS" color="red" />*/}
        </ul>
    );
}

function Skill({skill,level,color}) {
    return (
        <li className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>
                {
                level === 'beginner' && '👶🏻'
                }
                {
                    level === 'advanced' && '👍🏻'
                }
                {
                    level === 'intermediate' && '💪🏻'
                }
            </span>

        </li>
    );
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
