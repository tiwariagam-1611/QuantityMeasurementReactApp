export default function Result({ result }) {
  return (
    <div className="result">
      <h2>{result ?? "—"}</h2>
    </div>
  );
}