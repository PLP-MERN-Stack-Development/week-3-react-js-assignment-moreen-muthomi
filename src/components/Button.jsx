export default function Button ({children, onclick, variant="primary",
    type= "button",...props}) {
   const basestyle ="px-4 py-2 rounded-md font-semibold text-white transition-colors duration-300";
   const styles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    info: "bg-blue-500 hover:bg-blue-600",
   };
   return(
    <button
    type ={type}
    onClick = {onclick}
    className = {`${basestyle} ${styles[variant]}`}
    {...props}
    >
    {children}
    </button>
   );
}