import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a0e] text-cream/40 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo image */}
          <div className="relative h-16 w-36">
            <Image
              src="/images/logo-vertical.png"
              alt="Casa Oro"
              fill
              className="object-contain brightness-0 invert opacity-50"
            />
          </div>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

          <p className="font-sans text-[10px] tracking-wider">
            &copy; 2026 Casa Oro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
