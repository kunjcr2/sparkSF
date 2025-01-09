import React, { useState } from "react";
import Input from "./Input";

function Interested() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // HANDLES SUBMIT BUTTON AND SENDS DATA TO API
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5174/add-member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json();

      if (response.ok) {
        alert("Subscribed successfully")
      } else {
        alert("Error subscribing")
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      alert("Failed to submit the form. Please try again.");
    }
  };

  // INPUT PART
  return (
    <div className="question" id="ContactUs">
      <h3>Get the latest news and updates from us!</h3>
      <Input
        whatFor="name"
        id="nameID"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        whatFor="email"
        id="emailID"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Interested;
