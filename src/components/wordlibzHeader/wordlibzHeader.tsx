import { HeaderButton } from "@/components/buttons/buttons";
import wordlibzLogo from "@/assets/wordlibz.svg";
import "./wordlibzHeader.css";

export function WordlibzHeader() {
  return (
    <div className="wordlibz-header">
      <div className="wordlibz-header-panel">
        <span>
          <img src={wordlibzLogo} height={32}></img>
        </span>
        <span>Wordlibz</span>
      </div>
      <div className="wordlibz-header-panel">
        <HeaderButton
          label={"CLEAR"}
          onClickHandler={() => console.log("ok")}
        />
        <HeaderButton
          label={"NEW"}
          onClickHandler={() => console.log("ok")}
        />
      </div>
    </div>
  );
}
