import db from './db.js'

const getAllProjects = async() => {
    const query = `
         SELECT
            TO_CHAR(sp.date, 'YYYY-MM-DD') AS date,
            sp.title,
            o.name AS organization_name
         FROM service_project sp
         JOIN organization o ON sp.organization_id = o.organization_id
         ORDER BY sp.date;`;

    const result = await db.query(query);

    return result.rows;
}



const getUpcomingProjects = async() => {
    const query = `
          SELECT project_id, organization_id, title, description, location, date, organization_name
          FROM public.project
          WHERE date >= NOW()
          ORDER BY date ASC;
    `;
    const result = await db.query(query);

    return result.rows;
}



const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM project
        WHERE organization_id = $1
        ORDER BY date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};


// Export the model functions
export { getAllProjects, getProjectsByOrganizationId };