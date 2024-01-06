SELECT CONCAT(people.first_name, ' ', people.last_name) AS name,
    COALESCE(STRING_AGG(phones.number, ','), 'N/A') AS numbers
    FROM people LEFT JOIN phones ON people.id = phones.user_id
    GROUP BY people.first_name, people.last_name
    ORDER BY people.last_name, people.first_name;