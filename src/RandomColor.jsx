export default function RandomColor(words) {
  let word = words.words;
  console.log(word);
  let wordArr = word.split(" ");

  let finalWord = wordArr.map((el) => {
    let randomNumber = Math.round(Math.random() * 10);
    let element = el.toString() + "\u00A0";
    if (randomNumber < 4) return <u className="finalWord">{element}</u>;
    else return <u>{element}</u>;
  });

  return <h2 className="fWord">{finalWord}</h2>;
}
