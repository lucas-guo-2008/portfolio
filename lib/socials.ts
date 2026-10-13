export type Social = {
    href: string;
    label: string;
    handle?: string;
    hero?: boolean;
};

export const email = "lucas.lu.guo@gmail.com";

export const socials: Social[] = [
    {href: "https://www.instagram.com/lucas.guo_/", label: "Instagram", handle: "@lucas.guo_"},
    {href: "https://www.linkedin.com/in/lucas-guo/", label: "LinkedIn", handle: "in/lucas-guo", hero: true},
    {href: "https://github.com/lucas-guo-2008", label: "GitHub", handle: "lucas-guo-2008", hero: true},
    {href: "https://www.strava.com/athletes/145385726", label: "Strava", handle: "Lucas Guo"},
    {href: `mailto:${email}`, label: "Email", handle: email, hero: true},
]

export const resumeUrl: string | undefined = '/resume.pdf';

// Set once the dashboard is live (T31); the footer link appears by itself.
export const dashboardUrl: string | undefined = undefined;
