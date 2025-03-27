export function Button({ text, onClick, type = 'primary' }) {
    const buttonClass = `button-${type}`;
    
    return (
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;