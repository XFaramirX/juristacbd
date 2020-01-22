import Link from "next/link";

const About = () => {
  return (
    <div>
      You're signed in as David and you're Ready goto{" "}
      <Link href="/about">
        <a>static</a>
      </Link>{" "}
      page.
    </div>
  );
};

export default About;
