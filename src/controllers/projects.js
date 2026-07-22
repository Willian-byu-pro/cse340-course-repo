import { getUpcomingProjects, getProjectDetails } from '../models/projects.js';
import { getCategoriesByProjectId } from '../models/categories.js';

// Number of upcoming projects to show on the main projects page
const NUMBER_OF_UPCOMING_PROJECTS = 5;

// Main projects page: list only the upcoming service projects
const showProjectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
    const title = 'Upcoming Service Projects';
    res.render('projects', { title, projects, currentPage: 'projects' });
};

// Details page for a single service project (/project/:id)
const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const project = await getProjectDetails(projectId);
    const categories = await getCategoriesByProjectId(projectId);
    const title = project.title;
    res.render('project', { title, project, categories, currentPage: 'projects' });
};

// Export the controller functions
export { showProjectsPage, showProjectDetailsPage };
