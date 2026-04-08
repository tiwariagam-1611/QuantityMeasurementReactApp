export default function History({ history }) {
  const opSymbolMap = {
    ADD: "+",
    SUBTRACT: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
  };

  return (
    <div className="history">
      <h3>History</h3>

      <ul>
        {history.map((h) => {
          const symbol = opSymbolMap[h.operation];

          return (
            <li key={h.id}>
              {/* Arithmetic */}
              {symbol ? (
                <>
                  {h.thisValue} {symbol} {h.thatValue} = {h.resultValue}
                </>
              ) : h.operation === "COMPARE" ? (
                <>
                  {h.thisValue} {h.thisUnit} ? {h.thatValue} {h.thatUnit} = {h.resultString}
                </>
              ) : (
                <>
                  {h.thisValue} {h.thisUnit} → {h.resultValue} {h.resultUnit}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}