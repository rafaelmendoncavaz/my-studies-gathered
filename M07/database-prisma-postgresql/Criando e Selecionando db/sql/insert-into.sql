INSERT INTO products (
  "name", 
  "description", 
  "price", 
  "createdAt", 
  "updatedAt"
)
VALUES (
  'Celular',
  'iPhone 15',
  600000,
  NOW(),
  NOW()
),
(
  'Monitor',
  'ASUS VG278Q',
  220000,
  NOW(),
  NOW()
);
VALUES (
  'Notebook',
  'Acer Nitro 5',
  250000,
  NOW(),
  NOW()
)
RETURNING *;