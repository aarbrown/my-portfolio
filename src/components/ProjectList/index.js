import React from 'react'
import Project from '../Project';

function ProjectList() {
    const projects = [
        {
            name: 'Salesforce+',
            website: 'https://www.salesforce.com/plus',
            isPrivate: true,
            githubUrl: '',
            description: 'Salesforce+ is the first streaming platform for business.  As a member of the team, I have been responsible for developing the frontend (LWC) and backend (GraphQL / NodeJS).',
            thumbnail: 'salesforceplus.jpeg',
        },
        {
            name: 'Notre Dame - Planned Giving',
            website: 'https://plannedgiving.nd.edu',
            isPrivate: true,
            githubUrl: '',
            description: 'Created a theme for Concrete5 CMS so the planned giving content could match the nd.edu website.',
            thumbnail: 'nd.jpg',
        },
        {
            name: 'Uindy',
            website: 'https://www.uindy.edu',
            isPrivate: true,
            githubUrl: '',
            description: 'Worked on various web applications as part of the UIndy web development team.',
            thumbnail: 'uindy.jpg',
        },
        {
            name: 'PLTW',
            website: 'https://www.pltw.org',
            isPrivate: true,
            githubUrl: '',
            description: 'Worked on the public website and internal (my.pltw.org) applicaiton used by schools, students, and educators.',
            thumbnail: 'pltw.jpg',
        },
        {
            name: 'Agenda Builder',
            website: 'https://trailblazer.salesforce.com/sessions?eventId=a1Q3A000021ea1UUAQ',
            isPrivate: true,
            githubUrl: '',
            description: 'React application for viewing, planning, and filtering sessions for the Dreamforce event.',
            thumbnail: 'ab.jpg',
        },
        {
            name: 'Photo Port',
            website: 'https://aarbrown.github.io/photo-port/',
            isPrivate: false,
            githubUrl: 'https://github.com/aarbrown/photo-port',
            description: 'React application for showcasing photography images',
            thumbnail: 'photoport.jpg',
        }
    ]
    return (
        <section className="my-5" >
            <h1 id="portfolio">Portfolio</h1>
            <div className="flex-row my-2">
                {projects.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectList;