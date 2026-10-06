import type { ComponentProps } from "react";

export default function Button({type = "button", children,...rest}: ComponentProps<'button'>) {
    return (
        <button 
        type={type}
        {...rest}
        className="bg-surface border rounded-md text-label font-mono uppercase tracking-label border-border hover:border-accent hover:text-accent aria-pressed:bg-text aria-pressed:text-surface focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 p-2.5">
            {children}
        </button>
    );
}