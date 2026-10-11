export type Social = {
    href?: string;   // no href renders as plain text (the email, so it isn't a mailto)
    label: string;
};

export const socials: Social[] = [
    {href: "https://www.instagram.com/lucas.guo_/", label: "Instagram"},
    {href: "https://www.linkedin.com/in/lucas-guo/", label: "LinkedIn"},
    {href: "https://github.com/lucas-guo-2008", label: "Github"},
    {href: "https://www.strava.com/athletes/145385726", label: "Strava"},
    {label: "lucas.lu.guo [at] gmail [dot] com"}
]