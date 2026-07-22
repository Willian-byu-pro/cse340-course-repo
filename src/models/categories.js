import db from './db.js'

const getAllCategories = async () => {
    const query = `
        SELECT category_id, name
        FROM category;
    `;

    const result = await db.query(query);

    return result.rows;
}

const getCategoryDetails = async (id) => {
    const query = `
        SELECT category_id, name
        FROM category
        WHERE category_id = $1;
    `;

    const queryParams = [id];
    const result = await db.query(query, queryParams);

    return result.rows.length > 0 ? result.rows[0] : null;
};

const getCategoriesByProjectId = async (projectId) => {
    const query = `
        SELECT c.category_id, c.name
        FROM project_category pc
        JOIN category c ON pc.category_id = c.category_id
        WHERE pc.project_id = $1;
    `;

    const queryParams = [projectId];
    const result = await db.query(query, queryParams);

    return result.rows;
};

const getProjectsByCategoryId = async (categoryId) => {
    const query = `
        SELECT sp.project_id, sp.title, sp.description, sp.location, sp.date
        FROM project_category pc
        JOIN service_project sp ON pc.project_id = sp.project_id
        WHERE pc.category_id = $1;
    `;

    const queryParams = [categoryId];
    const result = await db.query(query, queryParams);

    return result.rows;
};

// Export the model functions
export { getAllCategories, getCategoryDetails, getCategoriesByProjectId, getProjectsByCategoryId };
