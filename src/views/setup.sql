CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);




INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
    (
        'BrightFuture Builders',
        'A nonprofit focused on improving community infrastructure through sustainable construction projects.',
        'info@brightfuturebuilders.org',
        'brightfuture-logo.png'
    ),
    (
        'GreenHarvest Growers',
        'An urban farming collective promoting food sustainability and education in local neighborhoods.',
        'contact@greenharvest.org',
        'greenharvest-logo.png'
    ),
    (
        'UnityServe Volunteers',
        'A volunteer coordination group supporting local charities and service initiatives.',
        'hello@unityserve.org',
        'unityserve-logo.png'
    );




---- /Service projects/ -----

CREATE TABLE service_project (
    project_id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL REFERENCES organization(organization_id),
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);


INSERT INTO service_project (organization_id, title, description, location, date)
VALUES
    -- BrightFuture Builders (organization_id = 1)
    (1, 'Community Center Renovation', 'Renovating the roof and electrical system of the downtown community center.', 'Belo Horizonte, MG', '2026-08-10'),
    (1, 'Playground Construction', 'Building a new accessible playground for a low-income neighborhood.', 'Nova Lima, MG', '2026-08-24'),
    (1, 'Wheelchair Ramp Installation', 'Installing wheelchair ramps at three public buildings.', 'Contagem, MG', '2026-09-05'),
    (1, 'Solar Panel Installation', 'Installing solar panels on the roof of a local shelter to reduce energy costs.', 'Belo Horizonte, MG', '2026-09-19'),
    (1, 'Bridge Repair Initiative', 'Repairing a pedestrian bridge damaged by recent flooding.', 'Ibirité, MG', '2026-10-03'),

    -- GreenHarvest Growers (organization_id = 2)
    (2, 'Urban Garden Expansion', 'Expanding the community garden with new raised beds and irrigation.', 'Belo Horizonte, MG', '2026-08-15'),
    (2, 'Composting Workshop', 'Teaching residents how to compost food waste for garden use.', 'Nova Lima, MG', '2026-08-29'),
    (2, 'School Vegetable Garden', 'Building and planting a vegetable garden at a local elementary school.', 'Contagem, MG', '2026-09-12'),
    (2, 'Seed Bank Launch', 'Setting up a community seed bank to preserve local plant varieties.', 'Belo Horizonte, MG', '2026-09-26'),
    (2, 'Farmers Market Setup', 'Organizing a monthly farmers market to sell produce from urban farms.', 'Sabará, MG', '2026-10-10'),

    -- UnityServe Volunteers (organization_id = 3)
    (3, 'Food Drive Coordination', 'Organizing volunteers to collect and distribute food donations.', 'Belo Horizonte, MG', '2026-08-08'),
    (3, 'Senior Citizen Companionship Program', 'Coordinating volunteers to visit and assist elderly residents.', 'Nova Lima, MG', '2026-08-22'),
    (3, 'Clothing Donation Drive', 'Collecting and sorting winter clothing donations for families in need.', 'Contagem, MG', '2026-09-01'),
    (3, 'Blood Donation Campaign', 'Partnering with local hospitals to organize a community blood drive.', 'Belo Horizonte, MG', '2026-09-15'),
    (3, 'Neighborhood Cleanup Day', 'Mobilizing volunteers to clean up litter in public parks and streets.', 'Ibirité, MG', '2026-09-29');