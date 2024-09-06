import { useState } from "react";
import icon from "../assets/Vector.png";
import icon2 from "../assets/Frame 1000002250.png";

const tabs = [
  {
    button: "About Me",
    desc1: "Hi, I am Sabbir. I am a MERN stack developer.",
    desc2:
      "Hi, I am a full-stack web developer. I have been learning it from 2 years.",
  },
  {
    button: "Experiences",
    desc1:
      "lEt gubergren accusam at amet sanctus  invidunt dolore justo sed. Dolores et et diam ipsum nonumy no ut, vero lorem.ore",
    desc2:
      "lEt gubergren accusam at amet sanctus  invidunt dolore justo sed. Dolores et et diam ipsum nonumy no ut, vero lorem.ore",
  },
  {
    button: "Recommended",
    desc1:
      "Glare begun care climes hall revellers paphian for loved a since. Fall in earth however not, fellow nor shameless basked.c1",
    desc2:
      "lEt gubergren accusam at amet sanctus  invidunt dolore justo sed. Dolores et et diam ipsum nonumy no ut, vero lorem.ore",
  },
];

const TabWidget = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="relative bg-gray-700 max-w-3xl  mx-auto   rounded-lg shadow-lg py-6 px-12 ">
      <div className="flex justify-between px-6 py-2 rounded-full shadow-lg bg-[#141414]">
        {tabs.map((tab, ind) => (
          <div
            key={ind}
            onClick={() => setSelectedTab(tab)}
            className={`flex justify-center items-center font-semibold text-lg cursor-pointer ${
              selectedTab?.button === tab?.button
                ? "bg-[#28292F] p-3 px-8 rounded-full shadow-2xl text-white"
                : ""
            }`}
          >
            {tab.button}
          </div>
        ))}
      </div>
      <p className="pt-10 capitalize text-xl text-[#A3ADB2]">
        {selectedTab.desc1}
      </p>
      <p className="pt-5 capitalize text-xl text-[#A3ADB2]">
        {selectedTab.desc2}
      </p>

      <div className="absolute left-3 top-5">
        <img src={icon} />
      </div>
      <div className="absolute left-3 top-1/2 -translate-y-0">
        <img src={icon2} />
      </div>
    </div>
  );
};

export default TabWidget;
