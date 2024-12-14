import Link from "next/link";

function Brand() {
  return (
    <Link href="/">
      <img
            src="/img/DacsLogo2.svg"
            width={120}
            alt="logo"
        />
      {/* <h1 className="text-sky-900 text-3xl font-bold">
        DACS
      </h1> */}
    </Link>
  );
}
export default Brand;
