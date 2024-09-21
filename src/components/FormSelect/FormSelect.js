export default function FormSelect({ defaultValue, options }) {
  return (
    <select name={defaultValue} defaultValue={defaultValue} className="input-small">
      <option value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((option) => 
        <option value={option}>{option}</option>

    )}
    </select>
  );
}
