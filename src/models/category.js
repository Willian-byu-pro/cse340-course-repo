    import db from './db.js'

    const getAllCategory = async() => {
        const query = `
            SELECT name
            FROM category;`;

        const result = await db.query(query);

        return result.rows;
    }

    export {getAllCategory} 