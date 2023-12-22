
import '../../tailwind.css';

export const Button= ({ text = "Botón", color = "orange-400", onClick, textColor="text-white", className }) => {
  return (
    <button
      className={`rounded-full bg-${color} ${textColor} m-5 p-2 ${className}`}
      onClick={onClick} 
    >
      {text}
    </button>
  );
};
