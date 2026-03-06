import React, { useMemo, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const words = useMemo(() => {
    return text.trim().length === 0 ? [] : text.trim().split(/\s+/);
  }, [text]);

  const wordCount = words.length;
  const characterCount = text.length;
  const readingTimeMinutes = (wordCount * 0.008).toFixed(2);
  const speakingTimeMinutes = (wordCount * 0.005).toFixed(2);
  const paragraphCount = useMemo(() => {
    return text.trim().length === 0 ? 0 : text.split(/\n+/).filter((item) => item.trim().length > 0).length;
  }, [text]);

  const baseTextColor = props.mode === "light" ? "#042743" : "white";
  const textAreaBg = props.mode === "light" ? "white" : "#5f6368";
  const textAreaText = props.mode === "light" ? "#111" : "white";

  const updateTextAndNotify = (newText, message) => {
    setText(newText);
    props.showAlert(message, "success");
  };

  const handleUpperClick = () => {
    updateTextAndNotify(text.toUpperCase(), "Converted to uppercase");
  };

  const handleLowerClick = () => {
    updateTextAndNotify(text.toLowerCase(), "Converted to lowercase");
  };

  const handleTitleCase = () => {
    const titleCased = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    updateTextAndNotify(titleCased, "Converted to title case");
  };

  const handleRemoveExtraSpaces = () => {
    const cleanedText = text.replace(/\s+/g, " ").trim();
    updateTextAndNotify(cleanedText, "Removed extra spaces");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Copied text to clipboard", "success");
    } catch (error) {
      props.showAlert("Unable to copy text", "danger");
    }
  };

  const handleClear = () => {
    updateTextAndNotify("", "Text cleared");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSampleText = () => {
    const sample = "Hello there! This is a quick sample text.\nYou can edit, format, and analyze it live.";
    updateTextAndNotify(sample, "Sample text inserted");
  };

  const canRunActions = text.trim().length > 0;

  return (
    <>
      <div className="container" style={{ color: baseTextColor }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h1 className="mb-0">{props.heading}</h1>
          <span className="badge rounded-pill text-bg-info">
            Live words: {wordCount}
          </span>
        </div>

        <p className="mt-2 mb-2 small">
          Tip: Press <strong>Tab</strong> to focus buttons quickly.
        </p>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Type or paste your text here..."
            style={{ backgroundColor: textAreaBg, color: textAreaText }}
          />
          <div className="mt-2 d-flex flex-wrap">
            <button className="btn btn-primary mx-1 my-1" disabled={!canRunActions} onClick={handleUpperClick}>
              Uppercase
            </button>
            <button className="btn btn-primary mx-1 my-1" disabled={!canRunActions} onClick={handleLowerClick}>
              Lowercase
            </button>
            <button className="btn btn-secondary mx-1 my-1" disabled={!canRunActions} onClick={handleTitleCase}>
              Title Case
            </button>
            <button
              className="btn btn-secondary mx-1 my-1"
              disabled={!canRunActions}
              onClick={handleRemoveExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button className="btn btn-success mx-1 my-1" disabled={!canRunActions} onClick={handleCopy}>
              Copy
            </button>
            <button className="btn btn-warning mx-1 my-1" onClick={handleSampleText}>
              Sample Text
            </button>
            <button className="btn btn-danger mx-1 my-1" disabled={!canRunActions} onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3" style={{ color: baseTextColor }}>
        <h2>Your text summary</h2>
        <div className="row g-2">
          <div className="col-md-3">
            <div className="p-2 border rounded">Words: <strong>{wordCount}</strong></div>
          </div>
          <div className="col-md-3">
            <div className="p-2 border rounded">Characters: <strong>{characterCount}</strong></div>
          </div>
          <div className="col-md-3">
            <div className="p-2 border rounded">Paragraphs: <strong>{paragraphCount}</strong></div>
          </div>
          <div className="col-md-3">
            <div className="p-2 border rounded">Reading: <strong>{readingTimeMinutes} min</strong></div>
          </div>
        </div>

        <p className="mt-2 mb-0">Estimated speaking time: {speakingTimeMinutes} min</p>

        <h3 className="mt-3">Preview</h3>
        <p>{characterCount > 0 ? text : "Enter text above to see a live preview."}</p>
      </div>
    </>
  );
}
