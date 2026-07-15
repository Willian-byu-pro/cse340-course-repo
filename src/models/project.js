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

export {getAllProjects} 