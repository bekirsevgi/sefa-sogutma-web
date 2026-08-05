type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-bold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-700 text-white shadow-lg hover:-translate-y-1 hover:bg-blue-800 hover:shadow-2xl active:translate-y-0",

    secondary:
      "border border-slate-300 bg-white text-slate-900 shadow-sm hover:-translate-y-1 hover:border-blue-700 hover:text-blue-700 hover:shadow-xl",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}