import './styles.css';

export default function ButtonMenu(props) {
  return (
    <button style={{ backgroundColor: props.color }} className="button">
      {props.text}
    </button>
  );
}
