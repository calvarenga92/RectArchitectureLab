import { useMemo, useState } from "react";
import { StatusBadge } from "@/design-system/components/StatusBadge";
import { mfeRegistry } from "./mfeRegistry";
import { classNames } from "@/shared/utils/classNames";

export function MfeRegistrySection() {
  const [selected, setSelected] = useState(mfeRegistry[0]);
  const items = useMemo(() => mfeRegistry, []);
  const Icon = selected.icon;

  return (
    <section className="bg-[#f3e4dc] px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-black text-slate-950">
          Registro de MFEs
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((mfe) => {
              const MfeIcon = mfe.icon;
              const active = selected.id === mfe.id;

              return (
                <button
                  key={mfe.id}
                  onClick={() => setSelected(mfe)}
                  className={classNames(
                    "rounded-2xl border p-4 text-left transition",
                    active
                      ? "border-slate-950 bg-white shadow-xl"
                      : "border-white bg-white/70 hover:bg-white"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#ff6a2a] p-2 text-white">
                        <MfeIcon size={20} />
                      </div>

                      <div>
                        <p className="font-black text-slate-950">
                          {mfe.label}
                        </p>
                        <p className="text-xs font-bold text-slate-500">
                          {mfe.route}
                        </p>
                      </div>
                    </div>

                    <StatusBadge status={mfe.status} />
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-[#ff6a2a] p-4 text-white">
              <Icon size={34} />
            </div>

            <h3 className="text-3xl font-black text-slate-950">
              {selected.title}
            </h3>

            <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
              {selected.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-wide text-[#ff6a2a]">
                Paginas previstas
              </p>

              <div className="mt-3 grid gap-2">
                {selected.pages.map((page) => (
                  <div
                    key={page}
                    className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800"
                  >
                    {page}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}