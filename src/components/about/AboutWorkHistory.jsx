import { Book, ChevronRight } from "react-feather";

import HomeContent from "../../constants/HomeContent.js";

const AboutWorkHistory = () => {
  const WorkHistory = () =>
    HomeContent.workHistory.map((company, index) => {
      return (
        <li key={index} className="w-[100%] rounded-2xl pt-1 pb-2 ">
          <div className="flex w-[100%] place-items-center gap-4">
            {/* <div className="relative flex h-full items-center justify-center rounded-full bg-zinc-200 p-1 dark:bg-zinc-700">
              <img
                src={company.logo}
                className="h-10 w-12 rounded-full bg-white"
              />
            </div> */}
            <ChevronRight color="var(--color-logoprimary)" />
            <div className="flex w-[100%] flex-col justify-around gap-1">
              <p className="text-sm font-bold tracking-wider">
                {company.company}
              </p>
              <div className="flex justify-between text-xs text-zinc-700 dark:text-zinc-300">
                <p className="tracking-wide">{company.role}</p>
                <p className="">{company.dates}</p>
              </div>
            </div>
          </div>
        </li>
      );
    });
  return (
    <div className="flex w-full flex-col rounded-2xl bg-zinc-50 p-2 pb-6 ring-1 ring-zinc-100 dark:bg-zinc-800/50 dark:ring-zinc-300/20 lg:w-[80%]">
      <div className="flex justify-start gap-4 pt-2 pb-5">
        <Book color="var(--color-logoprimary)" />
        <h2 className="font-bold tracking-wide">Work History</h2>
      </div>
      <ul className="flex flex-col items-center gap-4 px-1">
        <WorkHistory />
      </ul>
    </div>
  );
};

export default AboutWorkHistory;
