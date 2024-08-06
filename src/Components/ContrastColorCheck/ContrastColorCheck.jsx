import { useEffect, useState } from "react";

export function ContrastColorCheck({ checkHex, checkContrast }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [checkHex, checkContrast] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const fetchedScore = await response.json();

        if (fetchedScore && fetchedScore.overall) {
          setScore(fetchedScore.overall);
        } else {
          setScore("Currently unavailable, try later.");
        }
      } catch (error) {
        console.error("Error fetching the contrast score:", error);
      }
    }

    postFetch();
  }, [checkHex, checkContrast]);

  function getContrastStyle() {
    if (score === "Nope") {
      return {
        fontSize: "25px",
        fontWeight: 600,
        fontFamily: "'Roboto', sans-serif",
        color: "red",
        textTransform: "uppercase",
        textShadow: `1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
          1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
          1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
          1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2)`,
      };
    } else if (score === "Yup") {
      return {
        fontSize: "25px",
        fontWeight: 600,
        fontFamily: "'Roboto', sans-serif",
        color: "green",
        textTransform: "uppercase",
        textShadow: `1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
          1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
          1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
          1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2)`,
      };
    } else if (score === "Kinda") {
      return {
        fontSize: "25px",
        fontWeight: 600,
        fontFamily: "'Roboto', sans-serif",
        color: "yellow",
        textTransform: "uppercase",
        textShadow: `1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
          1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
          1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
          1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2)`,
      };
    } else {
      return { display: "none" };
    }
  }

  return (
    <p style={getContrastStyle()}>
      Overall Contrast Score: {score !== null ? score : "Loading..."}
    </p>
  );
}
