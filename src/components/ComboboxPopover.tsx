"use client";

import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverTriggerProps,
} from "@/components/Popover";
import { cn } from "@/utils/cn";

export interface Item {
  readonly value: string;
  readonly label: string | JSX.Element;
}

export interface ComboboxPopoverProps
  extends Omit<PopoverTriggerProps, "value" | "defaultValue"> {
  readonly items: readonly Item[];
  readonly defaultValue: string;
  readonly placeholder: string;
  readonly emptyText?: string;
  readonly value?: string;
  readonly setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

/** Combobox = search input + dropdown */
export const ComboboxPopover: React.FC<ComboboxPopoverProps> = ({
  items,
  defaultValue,
  placeholder,
  emptyText,
  value,
  setValue,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover isOpen={open}>
      <PopoverTrigger asChild {...props}>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between rounded-full font-normal lg:min-w-[180px]'
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : defaultValue}
          <ChevronDown className='ml-2 h-5 w-4 shrink-0 pt-0.5 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='max-h-80 w-[200px] overflow-y-scroll p-0'>
        <Command>
          <CommandInput placeholder={placeholder} className='h-9' />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {item.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
