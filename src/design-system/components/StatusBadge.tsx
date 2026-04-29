import { classNames } from "@/shared/utils/classNames";

interface StatusBadgeProps {
    status: "ativo" | "planejado";
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const isActive = status === "ativo";

    return (
        <span
            className={
                classNames(
                    "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
                    isActive
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-orange-100 text-orange-800"
                )
            }
        >
            {status}
        </span>
    );
}