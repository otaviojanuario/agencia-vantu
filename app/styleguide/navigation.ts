export interface NavItem {
    name: string
    href: string
}

export interface NavSection {
    title: string
    items: NavItem[]
}

export const navigation: NavSection[] = [
    {
        title: "Fundação",
        items: [
            { name: "Tokens de Design", href: "/styleguide" },
        ]
    },
    {
        title: "Componentes",
        items: [
            { name: "Field", href: "/styleguide/components/field" }
        ]
    }
]
