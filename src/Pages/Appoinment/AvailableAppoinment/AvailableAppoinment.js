import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import AppointOption from "../AppointOption/AppointOption";

function AvailableAppoinment({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

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
      <div>
        {appointmentOptions.map((option) => (
          <AppointOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
}

export default AvailableAppoinment;
