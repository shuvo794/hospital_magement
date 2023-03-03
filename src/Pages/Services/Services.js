import React from "react";
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import Service from "./Service";
import "./service.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Medichine",
      description:
        "He is a provide good medichine all patient.and all patient happy her treatment",
      img: pic1,
    },
    {
      id: 2,
      name: "Online Service",
      description: "He is a provide a online service .",
      img: pic2,
    },
    {
      id: 3,
      name: "Offline Service",
      description: "He is a provide a offline service .",
      img: pic3,
    },
  ];

  return (
    <div className="mt-14">
      <div className="text-center">
        <h2 className="text-xl font-bold text-black uppercase  heading">
          Our Services
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
