import { useState } from "react";
import { elements } from "../data/elements";
import "../assets/styles/PeriodicTable.css";

type ElementType = (typeof elements)[number];

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(
    null
  );

  return (
    <div className="table-wrapper">
      <div className="grid">
        {elements.map((el) => (
          <div
            key={el.number}
            className={`element ${el.group.replace(/\s/g, "-").toLowerCase()}`}
            style={{ gridRow: el.row, gridColumn: el.col }}
            onClick={() => setSelectedElement(el)}
          >
            <div className="number">{el.number}</div>
            <div className="symbol">{el.symbol}</div>
          </div>
        ))}
      </div>

      {/* Sidebar - Styled like Google */}
      {selectedElement && (
        <div className="info-panel">
          <button
            className="close-btn"
            onClick={() => setSelectedElement(null)}
          >
            &times;
          </button>

          {/* Header with Symbol, Name, Group */}
          <div className="header">
            <div className="symbol-box">
              <div className="big-symbol">{selectedElement.symbol}</div>
              <div className="atomic-number">{selectedElement.number}</div>
            </div>
            <div className="header-text">
              <h2>{selectedElement.name}</h2>
              <p className="group-label">{selectedElement.group}</p>
            </div>
          </div>

          {/* 3D Animation or Model */}
          {selectedElement.image && (
            <div className="element-3d-container">
              <img
                src={selectedElement.image}
                alt={`${selectedElement.name} 3D Model`}
              />
              <p className="source">
                3D Bohr model from <a href="#">Signal Garden</a>
              </p>
            </div>
          )}

          {/* Description */}
          <p className="description">{selectedElement.description}</p>
          <a
            className="wiki-link"
            href={selectedElement.wiki}
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>

          {/* Details */}
          <div className="detail">
            <strong>Atomic mass:</strong> {selectedElement.atomicMass}
          </div>
          <div className="detail">
            <strong>Melting point:</strong> {selectedElement.meltingPoint}
          </div>
          <div className="detail">
            <strong>Boiling point:</strong> {selectedElement.boilingPoint}
          </div>
          <div className="detail">
            <strong>Discovery date:</strong> {selectedElement.discovery}
          </div>
          <div className="detail">
            <strong>Discovered by:</strong> {selectedElement.discoveredBy}
          </div>

          <button className="more-btn">
            More about {selectedElement.name} →
          </button>
        </div>
      )}
    </div>
  );
}
