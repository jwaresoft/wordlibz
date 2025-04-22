import { WordLibzContent } from "../wordLibzContent/WordLibzContent";
import { WordlibzHeader } from "../wordlibzHeader";
import "./wordLibz.css";

function handleClear() {
  console.log("clear");
}

function handleNew() {
  console.log("new");
}

export function WordLibz() {
  return (
    <div className="wordlibz-container">
      <WordlibzHeader handleClear={handleClear} handleNew={handleNew} />
      <WordLibzContent />
    </div>
  );
}
