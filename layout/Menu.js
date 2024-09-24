import Link from "next/link";

const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        <a href="/">Home</a>
      </li>
      <li>
        <Link href="/">about</Link>
      </li>
      <li>
        <Link href="/">projects</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;

export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">about</a>
      </li>
      <li>
        <a href="/">Resume</a>
      </li>
      <li>
        <a href="/">services</a>
      </li>
      <li>
        <a href="/">skills</a>
      </li>
      <li>
        <a href="/">projects</a>
      </li>
      <li>
        <a href="/">blog</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};
