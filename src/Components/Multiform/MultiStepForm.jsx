import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    theme: "",
    slot: "",
    extras: [],
  });

  const transition = useSpring({
    from: { transform: step === 1 ? "translateX(100%)" : "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
    config: { tension: 220, friction: 20 },
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ overflow: "hidden", width: "300px", margin: "auto" }}>
      <animated.div style={{ ...transition }}>
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Contact Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <button onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Choose Theme</h2>
            <select name="theme" value={formData.theme} onChange={handleChange}>
              <option value="">Select Theme</option>
              <option value="Luna">Luna</option>
              <option value="Rosset">Rosset</option>
              <option value="Celestial">Celestial</option>
            </select>
            <input
              type="text"
              name="slot"
              placeholder="Preferred Slot"
              value={formData.slot}
              onChange={handleChange}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Select Extras</h2>
            <label>
              <input
                type="checkbox"
                name="extras"
                value="Cakes"
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    extras: prev.extras.includes(value)
                      ? prev.extras.filter((item) => item !== value)
                      : [...prev.extras, value],
                  }));
                }}
              />
              Cakes
            </label>
            <label>
              <input
                type="checkbox"
                name="extras"
                value="Decorations"
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    extras: prev.extras.includes(value)
                      ? prev.extras.filter((item) => item !== value)
                      : [...prev.extras, value],
                  }));
                }}
              />
              Decorations
            </label>
            <label>
              <input
                type="checkbox"
                name="extras"
                value="Party Props"
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    extras: prev.extras.includes(value)
                      ? prev.extras.filter((item) => item !== value)
                      : [...prev.extras, value],
                  }));
                }}
              />
              Party Props
            </label>
            <button onClick={handleBack}>Back</button>
            <button onClick={() => alert(JSON.stringify(formData))}>
              Submit
            </button>
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default MultiStepForm;

