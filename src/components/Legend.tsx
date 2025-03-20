import "../assets/styles/legend.css";

const legendItems = [
  { color: "#1e90ff", label: "Alkali metals" },
  { color: "#ffb347", label: "Alkaline earth metals" },
  { color: "#9370db", label: "Transition metals" },
  { color: "#9acd32", label: "Post-transition metals" },
  { color: "#daa520", label: "Metalloids" },
  { color: "#00ced1", label: "Reactive nonmetals" },
  { color: "#ff7f50", label: "Halogens" },
  { color: "#ff69b4", label: "Noble gases" },
  { color: "#20b2aa", label: "Lanthanides" },
  { color: "#cd853f", label: "Actinides" },
];

export default function Legend() {
  return (
    <div className="legend-container">
      {legendItems.map((item, index) => (
        <div key={index} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="legend-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
