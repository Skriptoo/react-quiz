import "./Button.scss";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({onClick, children, style, type}: Props) => {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      type={type}
    >
      {children}
    </button>
  )
}

export default Button;