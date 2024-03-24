import AboutViewClass from "./AboutViewClass";
import AboutViewFun from "./AboutViewFun";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <AboutViewFun heading={"from functional component"}/>
            <AboutViewClass heading={"from class component"}/>
        </div>
    )
}