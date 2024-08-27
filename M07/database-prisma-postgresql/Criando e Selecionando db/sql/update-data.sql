UPDATE products SET "price" = 225000 WHERE id = 1;

UPDATE products SET ("price", "updatedAt") = ROW (250000, NOW()) WHERE id = 1;