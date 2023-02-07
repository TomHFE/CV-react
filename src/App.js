import "./App.css";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import KeySkills from "./KeySkills";
import PreviousWork from "./PreviousWork";

function App() {
  return (
    <div className="">
      <ContactInfo />
      <hr />
      <Experience />
      <hr />
      <KeySkills />
      <hr />
      <Education />
      <hr />
      <PreviousWork />
    </div>
  );
}

export default App;
