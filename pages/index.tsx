import Link from "next/link";

const Index = () => {
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

export default Index;
