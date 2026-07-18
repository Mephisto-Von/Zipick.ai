-- Sample products for demo
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score)
VALUES
  (gen_random_uuid(), 'ASUS ROG Zephyrus G14', '14-inch gaming laptop with AMD Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD', 'Laptops', 'ASUS', 'Amazon', 'USD', 1199.99, 1399.99, 1099.99, 1599.99, 4.6, 1247, true, true, 24, 94),
  (gen_random_uuid(), 'Dell XPS 15', '15.6-inch laptop with Intel i7, 16GB RAM, 512GB SSD, OLED display', 'Laptops', 'Dell', 'Amazon', 'USD', 1499.99, 1699.99, 1399.99, 1899.99, 4.5, 892, true, true, 36, 91),
  (gen_random_uuid(), 'MacBook Pro 14" M3 Pro', 'Apple M3 Pro chip, 18GB RAM, 512GB SSD, 14.2-inch Liquid Retina XDR', 'Laptops', 'Apple', 'Amazon', 'USD', 1999.99, 2099.99, 1899.99, 2399.99, 4.7, 2103, true, false, 12, 88),
  (gen_random_uuid(), 'Lenovo ThinkPad X1 Carbon Gen 11', '14-inch business laptop with Intel i7, 16GB RAM, 512GB SSD', 'Laptops', 'Lenovo', 'Amazon', 'USD', 1349.99, 1549.99, 1249.99, 1799.99, 4.4, 567, true, true, 36, 89),
  (gen_random_uuid(), 'HP Spectre x360 14', '14-inch 2-in-1 laptop with Intel i7, 16GB RAM, 1TB SSD, OLED', 'Laptops', 'HP', 'BestBuy', 'USD', 1299.99, 1449.99, 1199.99, 1649.99, 4.3, 345, true, false, 24, 86),
  (gen_random_uuid(), 'Samsung Galaxy Book3 Ultra', '16-inch laptop with Intel i9, RTX 4070, 32GB RAM, 1TB SSD', 'Laptops', 'Samsung', 'Amazon', 'USD', 1799.99, 1999.99, 1699.99, 2299.99, 4.2, 234, true, true, 24, 85),
  (gen_random_uuid(), 'Sony WH-1000XM5', 'Wireless noise-canceling headphones, 30hr battery, premium comfort', 'Headphones', 'Sony', 'Amazon', 'USD', 329.99, 399.99, 298.00, 429.99, 4.7, 15892, true, true, 24, 96),
  (gen_random_uuid(), 'Apple AirPods Pro 2', 'Wireless earbuds with Active Noise Cancellation, USB-C', 'Headphones', 'Apple', 'Amazon', 'USD', 249.99, 249.99, 199.99, 279.99, 4.6, 28451, true, true, 12, 93),
  (gen_random_uuid(), 'Samsung 990 Pro 2TB SSD', 'NVMe M.2 SSD, PCIe 4.0, read 7450MB/s, write 6900MB/s', 'Storage', 'Samsung', 'Amazon', 'USD', 209.99, 249.99, 179.99, 289.99, 4.8, 3451, true, true, 60, 97),
  (gen_random_uuid(), 'LG 27GP950-B 27" 4K Gaming Monitor', '27-inch UHD Nano IPS, 160Hz, 1ms, HDMI 2.1, G-Sync', 'Monitors', 'LG', 'BestBuy', 'USD', 699.99, 799.99, 649.99, 899.99, 4.5, 1234, true, false, 36, 90);

-- Sample suppliers
INSERT INTO suppliers (id, name, description, country, rating, order_count, verified, categories)
VALUES
  (gen_random_uuid(), 'Shenzhen TechSource Co.', 'Leading electronics supplier with 15 years experience in consumer electronics', 'China', 4.5, 12400, true, ARRAY['Electronics', 'Laptops', 'Components']),
  (gen_random_uuid(), 'Global Logistics HK Ltd.', 'Hong Kong based wholesale distributor for IT hardware and peripherals', 'Hong Kong', 4.3, 8900, true, ARRAY['Hardware', 'Peripherals', 'Networking']),
  (gen_random_uuid(), 'EuroTech Distributors GmbH', 'European distributor for premium electronics and business equipment', 'Germany', 4.7, 5600, true, ARRAY['Business', 'Enterprise', 'IT Infrastructure']),
  (gen_random_uuid(), 'PakTrade Importers', 'Pakistan-based importer and distributor of consumer electronics', 'Pakistan', 4.1, 2300, true, ARRAY['Consumer Electronics', 'Mobile', 'Laptops']);
