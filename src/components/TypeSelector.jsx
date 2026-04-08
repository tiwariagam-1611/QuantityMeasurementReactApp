import { FaRuler, FaWeightHanging, FaTemperatureHigh } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

export default function TypeSelector({ type, setType }) {

    const types = [
        { key: "LENGTH", label: "Length", icon: <FaRuler /> },
        { key: "WEIGHT", label: "Weight", icon: <FaWeightHanging /> },
        { key: "TEMPERATURE", label: "Temperature", icon: <FaTemperatureHigh /> },
        { key: "VOLUME", label: "Volume", icon: <GiWaterDrop /> },
    ];


    return (
        <div>
        <p className="section-title">CHOOSE TYPE</p>

        <div className="card-row">
            {types.map((t) => (
            <div
                key={t.key}
                className={`card ${type === t.key ? "active" : ""}`}
                onClick={() => setType(t.key)}
            >
                <div className="icon">{t.icon}</div>
                <p>{t.label}</p>
            </div>
            ))}
        </div>
        </div>
    );
}