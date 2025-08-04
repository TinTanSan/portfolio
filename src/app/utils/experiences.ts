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
        overview: `I worked with Equoia during my final year at RMIT for a core subject for my course, where i was a lead developer of a team of 3 developers, a designer and a scrum master;
              building a prototype frontend for Equoia. After which i continued work with Equoia, where I worked on internal tools.`,
        duration: '2024-2025 ',
        location: "Melbourne Hybrid",
        contributions:[
            {title: 'Lead developer of React Prototype',
            details: [
                'liased with the CEO and CO-CEO to better understand key requirements',
                'built custom components based on Figma design using React and tailwindcss',
                'Ensured team was keeping up with the KanBan chart',
                'Created an customer dashboard to showcase usage of IOT devices called droids'
            ]},
            {
                title:'Internal Storage tool',
                details:[
                    `Replaced existing storage system on IOT devices to use SQLite and Python to ensure lightweight operations without sacrificing
                  storage capabilites`,
                  "Integrated the module into the main program on the IOT device",
                  "Improved memory usage by ~20% allowing for a more stable program"
                ]
            },
            {
                title: 'AWS migration Planning and documentation',
                details:[
                    `Used AWS cost calculator to mix and match best solution for a Full stack application hosted on AWS`,
                    `Documented a solution using API Gateway, DynamoDB, Lambda functions and Amplify`,
                    `Created a data flow diagram to document the ways in which AWS can be used to replace existing frontend provider`,
                    `Implemented functions to help migrate data to DynamoDB and to aggregate and drop data after month`
                ]
            }
        ]
    }
]