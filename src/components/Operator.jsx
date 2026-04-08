const ops = ["+", "-", "*", "/"];

export default function Operator({ operator, setOperator }) {
  return (
    <div className="operator">
      {ops.map((op) => (
        <button
          key={op}
          className={operator === op ? "active" : ""}
          onClick={() => setOperator(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );
}