'use client';

import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@repo/ui/utils/cn.util';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  hideIcon?: boolean;
  iconType?: 'default' | 'plus-or-minus';
};

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, hideIcon, iconType = 'default', ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-center gap-3 py-4 font-medium transition-all hover:underline ',
        className,
        {
          '[&[data-state=open]>svg]:rotate-180': iconType === 'default',
          group: iconType === 'plus-or-minus',
        },
      )}
      {...props}
    >
      {children}
      {!hideIcon ? (
        iconType === 'default' ? (
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        ) : (
          <>
            <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
            <Minus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden" />
          </>
        )
      ) : null}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down [&_p]:text-center [&_p]:text-lg [&_p]:font-medium [&_p]:mb-3.5"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
