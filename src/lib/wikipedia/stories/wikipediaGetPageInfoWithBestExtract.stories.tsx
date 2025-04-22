import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { getRandomArticleData } from "../wikipediaAPIFunctions";
import { getPageInfoWithBestExtract } from "../extractHelpers";

const defaultMessage = "click the button to call the function";

/**
 * hello
 *
 * @returns
 */
function WikipediaBestExtractDemo() {
  const [randomArticles, setRandomArticles] = useState(defaultMessage);
  const [best, setBest] = useState(defaultMessage);
  const [loading, setLoading] = useState(false);

  async function onButtonClick() {
    setLoading(true);
    const articles = await getRandomArticleData();
    const bestArticle = getPageInfoWithBestExtract(articles);
    setRandomArticles(JSON.stringify(articles, null, 2));
    setBest(JSON.stringify(bestArticle, null, 2));
    setLoading(false);
  }

  return (
    <div>
      <button
        onClick={onButtonClick}
        disabled={loading}
        style={{ width: "200px" }}
      >
        {loading ? "loading" : "getPageInfoWithBestExtract()"}
      </button>
      <pre>{best}</pre>
      <details>
        <summary>Original Articles Array</summary>
        <pre>{randomArticles}</pre>
      </details>
    </div>
  );
}

const meta: Meta<typeof WikipediaBestExtractDemo> = {
  component: WikipediaBestExtractDemo,
  title: "LIB/WIKIPEDIA/getPageInfoWithBestExtract()",
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj<typeof WikipediaBestExtractDemo>;

export const Primary: Story = {
  render: () => <WikipediaBestExtractDemo />,
};
