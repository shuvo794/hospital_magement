import { format } from "date-fns";
import React, { useEffect, useState } from "react";
// import appointmentOptions from "../../../../public/appointmentOptions.json";
import AppointOption from "../AppointOption/AppointOption";

function AvailableAppoinment({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="16">
      <p className="text-center font-bold mb-10 mt-7">
        Available Appoinment On {format(selectedDate, "PP")}
      </p>
      <div className="justfycontent-center">
        {appointmentOptions.map((option) => (
          <AppointOption
            key={option._id}
            appointmentOptions={option}
          ></AppointOption>
        ))}
      </div>
    </section>
  );
}

export default AvailableAppoinment;
