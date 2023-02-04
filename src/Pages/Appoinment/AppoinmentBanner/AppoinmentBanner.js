import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import doctorBnner from "../../../assets/doctorBanner.png";

function AppoinmentBanner({ selectedDate, setSelectedDate }) {
  return (
    <header>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={doctorBnner}
            className="max-w-sm rounded-lg shadow-2xl h-96 w-96 my-6"
            alt=""
          />
          <div className="mr-10">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>Your Date selected : {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppoinmentBanner;
