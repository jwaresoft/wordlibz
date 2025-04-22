import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { getRandomArticleData } from "../wikipediaAPIFunctions";

const defaultMessage = "click the button to call the function";

/**
 * hello
 *
 * @returns
 */
function WikipediaApiDemo() {
  const [randomArticle, setRandomArticle] = useState(defaultMessage);
  const [loading, setLoading] = useState(false);

  async function onArticleClick() {
    setLoading(true);
    const article = await getRandomArticleData();
    setRandomArticle(JSON.stringify(article, null, 2));
    setLoading(false);
  }

  return (
    <div>
      <button
        onClick={onArticleClick}
        disabled={loading}
        style={{ width: "200px" }}
      >
        {loading ? "loading" : "getRandomArticleData()"}
      </button>
      <pre>{randomArticle}</pre>
    </div>
  );
}

const meta: Meta<typeof WikipediaApiDemo> = {
  component: WikipediaApiDemo,
  title: "LIB/WIKIPEDIA/getRandomArticleData()",
  tags: ["autodocs", "!dev"],
};

export default meta;

type Story = StoryObj<typeof WikipediaApiDemo>;

export const Primary: Story = {
  render: () => <WikipediaApiDemo />,
};
