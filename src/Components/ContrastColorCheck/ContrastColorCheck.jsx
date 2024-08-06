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

  return <p>Overall Contrast Score: {score ? score : null}</p>;
}
