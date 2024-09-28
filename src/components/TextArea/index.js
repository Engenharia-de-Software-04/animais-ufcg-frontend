import './styles.css';

export default function TextArea({ value, placeholder, name, onChange }) {
  return (
    <div>
      <textarea
        onChange={onChange}
        value={value}
        name={name}
        className="generic-textarea text-area"
        rows="1"
        cols="55"
        placeholder={placeholder}
      />
    </div>
  );
}
