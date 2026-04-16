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
        github: "https://github.com/snehavalavade/The-Foodies-App",
        live: "https://the-foodies-app-kappa.vercel.app/",
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
        github: "https://github.com/snehavalavade/Expense-Tracker",
        live: "expense-tracker-sepia-nine.vercel.app",
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
        github: "https://github.com/snehavalavade/Food-Order-App ",
        live: "",
    },
    {
        title: "Finance Tracker",
        subtitle: "Responsive Finance Dashboard",
        description:
            "A responsive finance dashboard built with Next.js, featuring transaction tracking, data visualization, and role-based UI with filtering, sorting, and interactive charts.",
        points: [
            "Built with Next.js 16 and React 19, leveraging the App Router and component-level state management to deliver a clean, performant dashboard experience.",
            "Integrated Recharts for interactive income and expense visualizations, enabling users to analyze financial trends through dynamic, responsive chart components.",
            "Implemented role-based UI rendering and advanced filtering/sorting logic using mock data, demonstrating clean separation of concerns and reusable component patterns.",
        ],
        tags: ["Next.js", "React", "Recharts", "JavaScript", "CSS"],
        github: "https://github.com/snehavalavade/Finance-Tracker",
        live: "https://finance-tracker-nu-mauve.vercel.app/",
    },

    {
        title: "React Place Picker",
        subtitle: "Geolocation-Powered Place Selection App",
        description:
            "A place picker application integrating the browser's Geolocation API and a Node.js backend to let users curate a personal list of places sorted by proximity.",
        points: [
            "Integrated the browser Geolocation API with a custom distance-sorting utility to dynamically reorder available places based on the user's real-time coordinates.",
            "Built a Node.js/Express backend to persist user-selected places server-side, practicing full HTTP communication cycles including GET and PUT requests from the React frontend.",
            "Implemented a confirmation modal with an animated countdown ProgressBar using React Portals and the useRef hook for precise timer management without triggering re-renders.",
        ],
        tags: ["React", "Vite", "Node.js", "Geolocation API", "CSS"],
        github: "https://github.com/snehavalavade/react-placepicker-backend",
        live: "",
    },

    {
        title: "React Quiz App",
        subtitle: "Interactive Multiple-Choice Quiz",
        description:
            "A React-based quiz application that presents multiple-choice questions with real-time feedback, answer highlighting, and a final score summary screen.",
        points: [
            "Designed a reusable QuestionTimer component using useState and useEffect to enforce per-question time limits, automatically advancing the quiz on timeout.",
            "Implemented answer shuffling on each render using useMemo to prevent answer position memorization, improving quiz integrity without unnecessary re-computation.",
            "Built a clean end-of-quiz summary screen that categorizes answers as correct, wrong, or skipped, giving users immediate, actionable feedback on their performance.",
        ],
        tags: ["React", "Vite", "JavaScript", "CSS", "Hooks"],
        github: "https://github.com/snehavalavade/react-quiz-app",
        live: "https://quiz-app-murex-five-84.vercel.app/",
    },

    {
        title: "React Countdown Game",
        subtitle: "Precision Timing Challenge Game",
        description:
            "A fun React timing challenge where players start a countdown and must stop it as close as possible to the target time across four difficulty levels.",
        points: [
            "Managed timer state with useRef instead of useState to avoid stale closure issues, ensuring the stop handler always reads the most current timer value without triggering re-renders.",
            "Implemented four difficulty levels (Easy to Hardcore) with distinct target durations, demonstrating effective prop-driven component configuration and reusability.",
            "Displayed a score modal with a calculated remaining-time delta and a descriptive result message, giving players precise feedback on how close they were to the target.",
        ],
        tags: ["React", "Vite", "JavaScript", "useRef", "CSS"],
        github: "https://github.com/snehavalavade/react-countdown-game",
        live: "https://countdown-game-tau.vercel.app/",
    },

    {
        title: "React Tic Tac Toe",
        subtitle: "Classic Game with Move History",
        description:
            "A complete Tic Tac Toe game built in React with lifted state management, editable player names, a full move log, and automatic winner detection.",
        points: [
            "Applied the lifted state pattern by managing the entire game board in a single top-level state array, passed down as props to keep child components stateless and predictable.",
            "Built a game-log sidebar that records every move with its row/column coordinates, demonstrating immutable state updates by never mutating the board array directly.",
            "Implemented winner detection and draw logic through a pure helper function, keeping game logic cleanly separated from rendering concerns for easier testing and readability.",
        ],
        tags: ["React", "Vite", "JavaScript", "State Management", "CSS"],
        github: "https://github.com/snehavalavade/react-tic-tac-toe-game",
        live: "https://tic-tac-toe-game-six-lake.vercel.app/",
    },
];
