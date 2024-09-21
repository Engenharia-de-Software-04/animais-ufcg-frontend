import "./styles.css";

export default function FormSelect({ defaultValue, options }) {
  return (
    <select name={defaultValue} defaultValue={defaultValue} className="generic-select">
      <option value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((option) => 
        <option value={option}>{option}</option>

    )}
    </select>
  );
}
