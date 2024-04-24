import React from "react";

export default function DashLine({height = 1745}) {
  return (
    <svg
      width="1"
      height={height}
      viewBox={`0 0 1 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1={height}
        x2="0.500076"
        y2="-2.18556e-08"
        stroke="white"
        strokeDasharray="4 4"
      />
    </svg>
  );
}
