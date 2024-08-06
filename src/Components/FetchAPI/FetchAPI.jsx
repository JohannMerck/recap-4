import { useState, useEffect } from "react";

export default function CheckColorContrast({ hex, contrastText }) {
  const [contrastData, setContrastData] = useState(null);

  useEffect(() => {
    const fetchContrastData = async () => {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ colors: [{ hex, contrastText }] }),
          }
        );

        if (response.ok) {
          const json = await response.json();
          setContrastData(json);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContrastData();
  }, [hex, contrastText]);

  if (!contrastData) {
    return <p>Loading contrast data...</p>;
  }

  return (
    <div>
      <p>Contrast: {contrastData.overall}</p>
    </div>
  );
}
