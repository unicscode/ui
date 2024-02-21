import * as React from "react";

import { tv, type VariantProps } from "tailwind-variants";

const alertVariants = tv({
  base: "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive:
        "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const alertTitleVariants = tv({
  base: "mb-1 font-medium leading-none tracking-tight",
});

const alertDescriptionVariants = tv({
  base: "text-sm [&_p]:leading-relaxed",
});

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={alertVariants({ variant, className })}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={alertTitleVariants({ className })} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={alertDescriptionVariants({ className })}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export {
  Alert,
  AlertTitle,
  AlertDescription,
  alertVariants,
  alertTitleVariants,
  alertDescriptionVariants,
};
