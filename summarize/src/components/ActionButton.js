const ActionButton = ({ text, onClick, className = '' }) => {
    return (
      <button type="button" className={`btn ${className}`} onClick={onClick}>
        {text} 
      </button>
    );
  };
  export default ActionButton;