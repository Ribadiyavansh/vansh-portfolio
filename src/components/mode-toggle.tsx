import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/components/theme-provider";
import { forwardRef } from "react";

export const ModeToggle = forwardRef<HTMLButtonElement>((props, ref) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
