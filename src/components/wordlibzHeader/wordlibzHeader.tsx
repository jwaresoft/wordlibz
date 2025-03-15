import "./wordlibzHeader.css";
import wordlibzLogo from "@/assets/wordlibz.svg";

export function WordlibzHeader() {
  return (
    <div className="wordlibz-header">
      <div className="wordlibz-header-panel">
        <span>
          <img src={wordlibzLogo} width={32}></img>
        </span>
        <span>Wordlibz</span>
      </div>
      <div className="wordlibz-header-panel">
        <button>ToDo</button>
      </div>
    </div>
  );
}
