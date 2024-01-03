/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import TitleSection from "@/components/landing-page/TitleSection";

describe("components/landing-page/TitleSection", () => {
  const defaultProps = {
    title: "Default Title Text",
    pill: "Default Pill Text",
  };
  it("renders a title and pill text", () => {
    const tree = render(<TitleSection {...defaultProps} />);

    expect(tree.getByTestId("title-section__title")).toHaveTextContent(
      defaultProps.title
    );
    expect(tree.getByTestId("title-section__pill")).toHaveTextContent(
      defaultProps.pill
    );
    expect(tree).toMatchSnapshot();
  });
  it("renders a title, subheading, pill text", () => {
    const tree = render(
      <TitleSection {...defaultProps} subheading="Default Subheading Text" />
    );

    expect(tree.getByTestId("title-section__title")).toHaveTextContent(
      defaultProps.title
    );
    expect(tree.getByTestId("title-section__subheading")).toHaveTextContent(
      "Default Subheading Text"
    );
    expect(tree.getByTestId("title-section__pill")).toHaveTextContent(
      defaultProps.pill
    );
    expect(tree).toMatchSnapshot();
  });
});
