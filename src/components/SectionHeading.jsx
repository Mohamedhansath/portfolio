import React from "react";

export default function SectionHeading({ index, eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-index">/{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-copy">{text}</p>}
      </div>
    </div>
  );
}
