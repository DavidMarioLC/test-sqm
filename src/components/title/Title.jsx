import { cn } from "@/lib/utils";

export const Title = ({ level, className, children }) => {
  if (typeof level !== "number" || level < 1 || level > 6) {
    throw new Error(`Unrecognized heading level: ${level}`);
  }

  const Tag = `h${level}`;

  return (
    <Tag
      className={cn(
        "mb-8 font-museosans text-[2rem] font-black text-sqm-blue",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
