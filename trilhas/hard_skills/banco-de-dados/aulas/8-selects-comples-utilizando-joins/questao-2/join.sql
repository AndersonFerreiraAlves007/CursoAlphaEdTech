SELECT * FROM clients AS c 
LEFT JOIN users AS u on c.create_by=u.id
LEFT JOIN rooms AS r on c.create_by=r.id;