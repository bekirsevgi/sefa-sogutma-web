type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`w-full border-4 border-red-500 ${className}`}
    >
      {children}
    </div>
  );
}