export type ExperienceDetails ={
    title: string,
    company: string,
    overview: string,
    duration: string, // e.g. jan 2020 - jul 2025
    location: string, // e.g. [CITY] or hybrid or remote
    contributions: Array<Contribution>
}
type Contribution = {
    title: string,
    details: Array<string>
}

export const experiences:Array<ExperienceDetails> = [
    {
        title: "Intern Software Developer",
        company: "Equoia",
        overview: `I collaborated with Equoia during my final year at RMIT as part of a core course project, where I served as the lead developer in a cross-functional team of five—including three developers, a designer, and a scrum master. Together, we built a prototype frontend for Equoia. Following the success of the project, I continued working with Equoia to develop and maintain internal tools.`,
        duration: '2024-2025 ',
        location: "Melbourne Hybrid",
        contributions:[
            {title: 'Lead developer of React Prototype',
            details: [
                'Liaised with senior management to gather and refine key project requirements',
                'Developed custom UI components from Figma designs using React and Tailwind CSS',
                'Monitored and guided team progress using a Kanban board',
                'Built a customer dashboard to visualize the usage of IoT devices (called "Droids")'
            ]},
            {
                title:'Internal Storage Tool for IoT Devices',
                details:[
                    'Replaced legacy storage system with a lightweight SQLite and Python-based solution to improve performance on IoT devices',
                    'Integrated the new storage module into the main device firmware',
                    'Reduced memory usage by ~20%, resulting in improved stability and performance'
                ]
            },
            {
                title: 'AWS migration Planning and documentation',
                details:[
                    'Used AWS Pricing Calculator to identify cost-effective solutions for a full-stack application',
                    'Drafted a migration architecture using API Gateway, DynamoDB, Lambda, and Amplify',
                    'Created a detailed data flow diagram to map the replacement of the existing frontend provider',
                    'Developed scripts for data migration, aggregation, and periodic cleanup in DynamoDB'
                ]
            }
        ]
    }
]