export type Social = {
    href?: string;   // no href renders as plain text (the email, so it isn't a mailto)
    label: string;
    handle?: string;
};

export const socials: Social[] = [
    {href: "https://www.instagram.com/lucas.guo_/", label: "Instagram", handle: "@lucas.guo_"},
    {href: "https://www.linkedin.com/in/lucas-guo/", label: "LinkedIn", handle: "in/lucas-guo"},
    {href: "https://github.com/lucas-guo-2008", label: "Github", handle: "lucas-guo-2008"},
    {href: "https://www.strava.com/athletes/145385726", label: "Strava"},
    {label: "lucas.lu.guo [at] gmail [dot] com"}
]

// Set once the dashboard is live (T31); the footer link appears by itself.
export const dashboardUrl: string | undefined = undefined;
