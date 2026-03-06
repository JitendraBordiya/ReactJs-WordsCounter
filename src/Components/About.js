import React from "react";

export default function About(props) {
  const cardStyle = {
    backgroundColor: props.mode === "light" ? "white" : "grey",
  };

  const buttonStyle = {
    backgroundColor: props.mode === "light" ? "white" : "black",
    color: props.mode === "light" ? "black" : "white",
  };

  return (
    <div className="container" style={{ color: props.mode === "light" ? "#042743" : "white" }}>
      <h1>About LexiPulse Studio</h1>
      <p className="mb-3">
        This app helps you quickly analyze and format text while giving instant feedback.
      </p>
      <div className="accordion" id="accordionExample" style={cardStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={buttonStyle}
            >
              Text Transform Features
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={cardStyle}>
              <ul className="mb-0">
                <li>Convert text to uppercase or lowercase instantly.</li>
                <li>Apply title case to make headings cleaner.</li>
                <li>Remove extra spaces for better text formatting.</li>
                <li>Copy processed text directly to clipboard.</li>
                <li>Insert sample text for quick testing.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item my-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={buttonStyle}
            >
              Live Analysis Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={cardStyle}>
              <ul className="mb-0">
                <li>Real-time word and character counting.</li>
                <li>Paragraph count for long-form text.</li>
                <li>Estimated reading time and speaking time.</li>
                <li>Live preview section for final output.</li>
                <li>Action buttons are enabled only when useful.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item my-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={buttonStyle}
            >
              User Experience Features
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={cardStyle}>
              <ul className="mb-0">
                <li>Light and dark mode support from the navbar.</li>
                <li>Simple page structure with Home and About routes.</li>
                <li>Alert messages after each action.</li>
                <li>Clean layout designed for quick text workflows.</li>
                <li>Responsive Bootstrap-based components.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
