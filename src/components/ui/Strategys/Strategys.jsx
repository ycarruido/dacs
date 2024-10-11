"use client";
import NavLink from "../NavLink/NavLink";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Strategys = ({ strTitle, strsubtitle, strText = [], strBtn, path = "/devStrategy" }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl text-left pb-4">
          {strTitle}
        </p>
        <p className="mt-3 text-gray-900 text-left pb-3">{strsubtitle}</p>

        <ul className="space-y-2 pb-6">
          {strText.map((item, index) => (
            <li key={index} className="items-left justify-between">
              <DoneAllIcon className="text-sky-950" />  
              <span className="pr-10 ml-1">{item}</span>{" "}
            </li>
          ))}
        </ul>
        <NavLink
          href={path}
          className="inline-block mt-4 font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-6 py-3 rounded-md"
        >
          {strBtn}
        </NavLink>
      </div>
    </section>
  );
};

export default Strategys;
