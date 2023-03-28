import HomeContent from "../../constants/HomeContent.js";

const HomeWorkHistory = () => {
  const WorkHistory = () =>
    HomeContent.workHistory.map((company, index) => {
      return (
        <li
          key={index}
          className="flex w-[95%] place-items-center gap-4 rounded-2xl border py-1 px-4"
        >
          <img src="/logo-low-trans-svg.svg" className="relative h-10" />
          <div className="flex flex-col justify-around text-left">
            <p className="font-bold">{company.company}</p>
            <p className="text-xs">{company.role}</p>
            <p className="text-xs">{company.dates}</p>
          </div>
        </li>
      );
    });
  return (
    <div className="max-w-sm rounded-2xl border p-3">
      <ul className="flex flex-col items-center gap-4 px-2">
        <WorkHistory />
      </ul>
    </div>
  );
};

export default HomeWorkHistory;
