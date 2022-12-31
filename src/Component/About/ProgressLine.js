import React, { useEffect, useState } from "react";
import "./ProgressLine.css";

const ProgressLine = ({
            label,
            label1,
            backgroundColor = "#e5e5e5",
            visualParts = [
                {
                percentage: "0%",
                color: "white"
                }
            ]
            }) => {
            const [widths, setWidths] = useState(
                visualParts.map(() => {
                return 0;
                })
            );

            useEffect(() => {
                requestAnimationFrame(() => {
                setWidths(
                    visualParts.map(item => {
                    return item.percentage;
                    })
                );
                });
            }, [visualParts]);

  return (
          <>
            <div className="progress">
              <div className="progressLabel">
                  <h6>{label}</h6>
              </div>
              <div className="progressLabel2">
                  <h6>{label1}</h6>
            </div>
            </div>
            <div
              className="progressVisualFull"
              style={{
                backgroundColor
              }}
            >
              {visualParts.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: widths[index],
                      backgroundColor: item.color
                    }}
                    className="progressVisualPart"
                  />
                );
              })}
            </div>
          </>
  );
};

export default ProgressLine;
