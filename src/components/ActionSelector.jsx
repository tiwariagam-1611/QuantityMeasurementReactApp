export default function ActionSelector({ action, setAction }) {
  return (
    <div>
        <p className="section-title">CHOOSE ACTION</p>

        <div className="action-row">
            {["COMPARISON", "CONVERSION", "ARITHMETIC"].map((a) => (
                <button
                    key={a}
                    className={`btn ${action === a ? "active" : ""}`}
                    onClick={() => setAction(a)}
                >
                    {a}
                </button>
            ))}
      </div>
    </div>
    );
}