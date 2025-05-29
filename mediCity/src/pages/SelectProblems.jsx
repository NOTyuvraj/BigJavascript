import React, { useEffect, useState } from "react";

const problemsData = {
  Head: [
    {
      name: "Headache",
      modalities: ["Throbbing", "Sharp"],
      effects: ["Nausea", "Blurred Vision"],
    },
    {
      name: "Migraine",
      modalities: ["Pulsating", "Intense"],
      effects: ["Aura", "Light Sensitivity"],
    },
  ],
  Chest: [
    {
      name: "Chest Pain",
      modalities: ["Pressure", "Stabbing"],
      effects: ["Shortness of breath"],
    },
  ],
  Leg: [
    {
      name: "Cramp",
      modalities: ["Tightening", "Sudden"],
      effects: ["Pain while walking"],
    },
  ],
  Back: [
    {
      name: "Back Pain",
      modalities: ["Constant", "Occasional"],
      effects: ["Stiffness"],
    },
  ],
};

export const SelectProblems = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [selectedDetails, setSelectedDetails] = useState({});

  useEffect(() => {
    const parts = JSON.parse(localStorage.getItem('selectedParts') || '[]');
    setSelectedParts(parts);
  }, []);

  const toggleProblem = (part, problemName) => {
    setSelectedDetails((prev) => {
      const existing = prev[part] || {};
      return {
        ...prev,
        [part]: {
          ...existing,
          [problemName]: existing[problemName]
            ? undefined
            : { modalities: [], effects: [] },
        },
      };
    });
  };

  const toggleDetail = (part, problemName, type, value) => {
    setSelectedDetails((prev) => {
      const detail = prev[part][problemName] || { modalities: [], effects: [] };
      const current = new Set(detail[type]);
      current.has(value) ? current.delete(value) : current.add(value);
      return {
        ...prev,
        [part]: {
          ...prev[part],
          [problemName]: {
            ...detail,
            [type]: Array.from(current),
          },
        },
      };
    });
  };

  const handleSubmit = () => {
    console.log("Final Selection", selectedDetails);
    alert(JSON.stringify(selectedDetails, null, 2));
  };

  return (
    <div className="p-6">
      <h1>Select Problems</h1>
      {selectedParts.map((part) => (
        <div key={part}>
          <h2>{part}</h2>
          {problemsData[part]?.map((problem) => {
            const selected = selectedDetails[part]?.[problem.name];
            return (
              <div key={problem.name} style={{ marginLeft: "20px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={!!selected}
                    onChange={() => toggleProblem(part, problem.name)}
                  />
                  {problem.name}
                </label>

                {selected && (
                  <div style={{ marginLeft: "20px" }}>
                    <div>
                      <strong>Modality:</strong>
                      {problem.modalities.map((mod) => (
                        <label key={mod} style={{ display: "block" }}>
                          <input
                            type="checkbox"
                            checked={selected.modalities.includes(mod)}
                            onChange={() =>
                              toggleDetail(
                                part,
                                problem.name,
                                "modalities",
                                mod
                              )
                            }
                          />
                          {mod}
                        </label>
                      ))}
                    </div>
                    <div>
                      <strong>Effects:</strong>
                      {problem.effects.map((eff) => (
                        <label key={eff} style={{ display: "block" }}>
                          <input
                            type="checkbox"
                            checked={selected.effects.includes(eff)}
                            onChange={() =>
                              toggleDetail(part, problem.name, "effects", eff)
                            }
                          />
                          {eff}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit
      </button>
    </div>
  );
};
