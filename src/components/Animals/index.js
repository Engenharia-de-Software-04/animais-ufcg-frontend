'use client';
import './styles.css';

export default function Animals({ title }) {
  return (
    <div className="animals-wrapper">
      <div className="animals-header"></div>
      <div className="animals-body">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
