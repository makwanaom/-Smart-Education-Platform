import React from "react";

const Stats = [
  { count: "6K", label: "Active Students" },
  { count: "12+", label: "Mentors" },
  { count: "300+", label: "Courses" },
  { count: "40+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className=" bg-blue-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;