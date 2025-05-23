import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import { tw } from "../tw";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={tw(
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[state=closed]:fade-out data-[state=open]:fade-in",
        "data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
        "data-[align=start]:data-[state=closed]:slide-out-to-left-2 data-[align=start]:data-[state=open]:slide-in-from-left-2",
        "data-[align=center]:data-[state=closed]:slide-out-to-top-2 data-[align=center]:data-[state=open]:slide-in-from-top-2",
        "data-[align=end]:data-[state=closed]:slide-out-to-right-2 data-[align=end]:data-[state=open]:slide-in-from-right-2",
        "z-50 max-w-screen-sm rounded-custom border border-strong bg-theme shadow-custom outline-none",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

export { Popover, PopoverTrigger, PopoverContent };
