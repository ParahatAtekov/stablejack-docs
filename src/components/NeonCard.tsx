export function NeonGradientCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#D6FE51]/10 via-black to-black border border-[#D6FE51]/30 shadow-2xl shadow-[#D6FE51]/20 my-8">
      <div className="absolute inset-0 rounded-2xl bg-[#D6FE51] opacity-5 blur-3xl" />
      <div className="relative text-white text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}