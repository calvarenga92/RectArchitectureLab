export function TopBar() {
  return (
    <div className="sticky top-0 z-40 flex h-12 items-center justify-between bg-slate-950/90 px-4 text-white backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-slate-800 px-3 py-1 text-xs font-bold">
          Fechar
        </div>
        <div className="hidden text-sm text-slate-300 sm:block">
          React Architecture Lab
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <button className="rounded-md bg-slate-800 px-3 py-1">
          Preview
        </button>
        <button className="rounded-md bg-white px-3 py-1 font-bold text-slate-950">
          Publicar site
        </button>
      </div>
    </div>
  );
}