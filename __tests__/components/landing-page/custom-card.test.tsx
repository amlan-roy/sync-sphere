/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import CustomCard from "@/components/landing-page/CustomCard";

describe("components/landing-page/CustomCard", () => {
  const defaultProps = {
    cardHeader: <div data-testid="card-test-header">Card Header</div>,
    cardContent: <div data-testid="card-test-content">Card Content</div>,
    cardFooter: <div data-testid="card-test-footer">Card Footer</div>,
  };
  it("renders correct header, content and footer", () => {
    const tree = render(<CustomCard {...defaultProps} />);

    const renderedCardHeader = tree.queryByTestId("card-test-header");
    const renderedCardContent = tree.queryByTestId("card-test-content");
    const renderedCardFooter = tree.queryByTestId("card-test-footer");

    expect(tree.getByTestId("custom-card__card")).toBeInTheDocument();
    expect(tree.getByTestId("custom-card__header").firstChild).toEqual(
      renderedCardHeader
    );
    expect(tree.getByTestId("custom-card__content").firstChild).toEqual(
      renderedCardContent
    );
    expect(tree.getByTestId("custom-card__footer").firstChild).toEqual(
      renderedCardFooter
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders only header when only header is passed", () => {
    const tree = render(<CustomCard cardHeader={defaultProps.cardHeader} />);

    const renderedCardHeader = tree.queryByTestId("card-test-header");
    const renderedCardContent = tree.queryByTestId("card-test-content");
    const renderedCardFooter = tree.queryByTestId("card-test-footer");

    expect(tree.getByTestId("custom-card__card")).toBeInTheDocument();
    expect(tree.getByTestId("custom-card__header").firstChild).toEqual(
      renderedCardHeader
    );
    expect(renderedCardContent).toBe(null);
    expect(renderedCardFooter).toBe(null);
    expect(tree).toMatchSnapshot();
  });

  it("renders only content when only content is passed", () => {
    const tree = render(<CustomCard cardContent={defaultProps.cardContent} />);

    const renderedCardHeader = tree.queryByTestId("card-test-header");
    const renderedCardContent = tree.queryByTestId("card-test-content");
    const renderedCardFooter = tree.queryByTestId("card-test-footer");

    expect(tree.getByTestId("custom-card__card")).toBeInTheDocument();
    expect(tree.getByTestId("custom-card__content").firstChild).toEqual(
      renderedCardContent
    );
    expect(renderedCardHeader).toBe(null);
    expect(renderedCardFooter).toBe(null);
    expect(tree).toMatchSnapshot();
  });

  it("renders only footer when only footer is passed", () => {
    const tree = render(<CustomCard cardFooter={defaultProps.cardFooter} />);

    const renderedCardHeader = tree.queryByTestId("card-test-header");
    const renderedCardContent = tree.queryByTestId("card-test-content");
    const renderedCardFooter = tree.queryByTestId("card-test-footer");

    expect(tree.getByTestId("custom-card__card")).toBeInTheDocument();
    expect(tree.getByTestId("custom-card__footer").firstChild).toEqual(
      renderedCardFooter
    );
    expect(renderedCardHeader).toBe(null);
    expect(renderedCardContent).toBe(null);
    expect(tree).toMatchSnapshot();
  });
});
