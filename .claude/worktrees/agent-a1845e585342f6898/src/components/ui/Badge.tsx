import React from "react";

export type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "secondary"
  | "outline"
  | "accent";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    primary: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
    error: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20",
    secondary: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20",
    accent: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-medium rounded-full",
    md: "text-xs px-2.5 py-1 font-semibold rounded-full",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
