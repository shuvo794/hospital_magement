import React from "react";
import { format } from "date-fns";

function BookingModal({ treatment, selectedDate, setTreatment }) {
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
    console.log(booking);
    setTreatment(null);
  };
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  return (
    <>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input type="text" disabled value={date} className="input w-full" />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingModal;
