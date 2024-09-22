import "./styles.css";

export default function FormSelect({ onChange, name, defaultValue, options }) {
  return (
    <select onChange={onChange} name={name} defaultValue={defaultValue} className="generic-select">
      <option value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((option) => 
        <option value={option}>{option}</option>

    )}
    </select>
  );
}
