import RandomColor from "./RandomColor";

export default function ContactInfo() {
  let intro = `Determined, enthusiastic individual with over a years experience in web
development including HTML CSS Javascript and React. Currently studying
with Hyperion Dev bootcamp.`;

  return (
    <div className="headerContainer">
      <h1 className="H1">Tom England</h1>
      <h2 className="H2">
        {/* <RandomColor words={intro} key={intro} /> */}
        Determined, enthusiastic individual with over a years experience in web
        development including HTML CSS Javascript and React. Currently studying
        with Hyperion Dev bootcamp.
        {/* create a random color selecion function then assign it to these words in an array join array print here */}
      </h2>
      <div className="H3">
        <h2>Contact details</h2>
        <h2>Email</h2>
        <p>tomengland1995@gmail.com</p>
        <h2>Portfolio</h2>
        <a href="https://tom-webdev.co.uk" target="_blank" rel=" noreferrer">
          tom-webdev.co.uk
        </a>
        <h2>Git</h2>
        <a href="https://github.com/TomHFE" target="_blank" rel=" noreferrer">
          https://github.com/TomHFE
        </a>
      </div>
    </div>
  );
}
