import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    return (
        <div className="skill-list">
            <Skill skill="Typescript" color="lightblue" />
            <Skill skill="React" color="#226eb1" />
            <Skill skill="HTML / CSS" color="red" />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
        </div>
    );
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
