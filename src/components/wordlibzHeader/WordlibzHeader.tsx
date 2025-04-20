import { HeaderButton } from "@/components/buttons/buttons";
import wordlibzLogo from "@/assets/wordlibz.svg";
import "./WordlibzHeader.css";

type WordLibzHeaderProps = {
  handleClear: () => void;
  handleNew: () => void;
};

export function WordlibzHeader({
  handleClear,
  handleNew,
}: WordLibzHeaderProps) {
  return (
    <div className="wordlibz-header">
      <div className="wordlibz-header-panel">
        <span>
          <img src={wordlibzLogo} height={32}></img>
        </span>
        <span>Wordlibz</span>
      </div>
      <div className="wordlibz-header-panel">
        <HeaderButton label={"CLEAR"} onClickHandler={handleClear} />
        <HeaderButton label={"NEW"} onClickHandler={handleNew} />
      </div>
    </div>
  );
}
