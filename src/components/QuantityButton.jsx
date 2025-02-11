function QuantityButton({ text, onClick }) {
  return (
    <button className="px-2 py-1 border rounded" onClick={onClick}>
      {text}
    </button>
  );
}

export default QuantityButton;
