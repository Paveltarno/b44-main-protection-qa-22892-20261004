export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "radial-gradient(circle at 50% 40%, rgba(88,166,255,0.08), transparent 60%), #0D1117" }}
    >
      <div className="w-full max-w-[560px] p-8 sm:p-12 rounded-lg border border-[#30363D] bg-[#161B22]">
        <h1 className="flex items-center gap-3 text-[32px] leading-[40px] font-bold text-[#C9D1D9]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#58A6FF] shrink-0" />
          Hello World
        </h1>
        <p className="mt-2 text-sm text-[#8B949E]" style={{ fontFamily: "'Inter', sans-serif" }}>
          GitHub branch protection QA
        </p>
      </div>
    </main>
  );
}