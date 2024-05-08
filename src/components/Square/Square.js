export default function Square({index, value, onSquareClick }) {
    return (
      <button data-testid={`square-${index}`} className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
}