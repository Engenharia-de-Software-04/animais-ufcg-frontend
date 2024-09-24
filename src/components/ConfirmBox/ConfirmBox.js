// ConfirmBox.js
import "./styles.css";

function ConfirmBox({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text">
          <p className="message">{message}</p>
        </div>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="remove-button">Remover</button>
          <button onClick={onClose} className="cancel-button">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;

