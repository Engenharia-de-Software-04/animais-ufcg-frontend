'use client';
import './styles.css';

export default function FormInput({
  onChange,
  value,
  placeholder,
  contentEditable,
  sizeInput,
  name,
}) {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        type="text"
        name={name}
        className={`generic-input input-${sizeInput}`}
        placeholder={placeholder}
        contentEditable={contentEditable}
      />
    </div>
  );
}
