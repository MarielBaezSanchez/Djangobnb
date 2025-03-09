interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string;//ayuda de chat para quitar error
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <div 
        onClick={onClick}
        className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl transition cursor-pointer $(className)`}>
            {label}
        </div>
    );
};
export default CustomButton;