"use client"

interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input = ({ placeholder, name, type, handleChange }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      onChange={(e) => handleChange(e, name)}
      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
    />
  );
};

export default Input;
