import { forwardRef, useId } from "react";
import { tw } from "../tw";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, ...props }, ref) => {
    const id = useId();
    return (
      <div className="grid w-full items-center gap-2">
        {label ? (
          <label
            htmlFor={id}
            className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        ) : null}
        <input
          id={id}
          type={type}
          className={tw(
            "flex h-11 w-full rounded-custom border border-custom bg-transparent px-3.5 py-1 text-sm transition-colors placeholder:text-muted hover:border-primary/20 focus:border-primary/40 focus:outline-none focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export { Input };
