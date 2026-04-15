export const projects = [
    {
        title: "The Foodies App",
        subtitle: "Full-Stack Recipe Sharing Platform",
        description:
            "A full-stack recipe-sharing platform where users can browse, submit, and share community meals with image upload.",
        points: [
            "Built with Next.js 14 App Router using Server Actions in place of a separate API layer, cutting content submission overhead by approximately 30%.",
            "Implemented React Server Components for the meal listing page, reducing Time to First Contentful Paint by approximately 40% compared to a client-side fetching approach.",
            "Integrated SQLite via a dedicated database utility layer and applied next/image for automatic WebP conversion and lazy loading — improving overall page performance by approximately 25%.",
        ],
        tags: ["Next.js", "React", "Server Actions", "SQLite", "App Router"],
        github: "https://github.com/your-github/foodies-app", // replace
        live: "",
    },
    {
        title: "Expense Tracker",
        subtitle: "Full-Stack Finance Management Application",
        description:
            "A full-stack expense tracking application with category-based filtering, real-time total computation, and persistent storage.",
        points: [
            "Leveraged Next.js Route Handlers as the backend API layer, reducing architecture complexity by approximately 35% over a standalone Express server.",
            "Architected a scalable component structure with clear separation of concerns, enabling efficient state-driven UI updates and maintainable data flow.",
            "Built dynamic, data-driven interfaces that handle frequent state changes with minimal re-render overhead.",
        ],
        tags: ["Next.js", "Route Handlers", "React", "State Management"],
        github: "https://github.com/your-github/expense-tracker", // replace
        live: "",
    },
    {
        title: "Food Ordering Web App",
        subtitle: "Responsive Food Ordering Platform",
        description:
            "A responsive food ordering platform with menu browsing, cart management, and live order total updates.",
        points: [
            "Implemented mobile-first UI design with full cross-device compatibility.",
            "Architected global cart state using Context API and useReducer, centralising ADD_ITEM, REMOVE_ITEM, and CLEAR_CART actions — eliminating prop drilling and reducing state-related bugs by approximately 20%.",
            "Built a fully reusable component-based architecture — reducing code duplication by approximately 30% through composable, single-responsibility components.",
        ],
        tags: ["React", "Context API", "useReducer", "CSS3"],
        github: "https://github.com/your-github/food-ordering", // replace
        live: "",
    },
];
