/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Loader from "@/components/global/Loader";

describe("components/global/Loader", () => {
  it("renders the loader correctly", () => {
    const tree = render(<Loader />);
    expect(tree).toMatchSnapshot();
  });
});
