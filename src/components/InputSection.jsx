import { units } from "../data/units";

export default function InputSection({
  type,
  fromValue, setFromValue,
  toValue, setToValue,
  fromUnit, setFromUnit,
  toUnit, setToUnit,
  action
}) {
  const unitOptions = units[type] || [];

  return (
    <div className="input-section">

      {/* FROM */}
      <div className="input-box">
        <p>FROM</p>
        <input
          type="number"
          placeholder="Enter value"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />

        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {unitOptions.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label} ({u.value})
            </option>
          ))}
        </select>
      </div>

      {/* TO */}
      <div className="input-box">
        <p>TO</p>
        <input
          type="number"
          placeholder="Enter value"
          disabled={action === "CONVERSION"}
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
        />

        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {unitOptions.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label} ({u.value})
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}