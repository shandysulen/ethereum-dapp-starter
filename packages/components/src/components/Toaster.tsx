"use client";

import { Check, X } from "lucide-react";
import React from "react";
import { useToast } from "../hooks/useToast";
import { Spinner } from "./Spinner";
import { Stack } from "./Stack";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        let iconElement = <></>;
        if (variant === "info") {
          iconElement = <Spinner />;
        } else if (variant === "success") {
          iconElement = (
            <div className='text-cyan-400'>
              <Check size={20} fill='currentColor' />
            </div>
          );
        } else if (variant === "error") {
          iconElement = (
            <div className='text-cyan-400'>
              <X size={20} stroke='currentColor' />
            </div>
          );
        }

        return (
          <Toast key={id} {...props}>
            <div className='flex items-start gap-2'>
              {iconElement}
              <Stack>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </Stack>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
