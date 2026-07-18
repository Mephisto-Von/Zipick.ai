-- Massive product catalog seed
-- Laptops (15)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'ASUS ROG Zephyrus G14', '14-inch gaming laptop with AMD Ryzen 9 7940HS, NVIDIA RTX 4060, 16GB DDR5, 1TB SSD, QHD 165Hz display', 'Laptops', 'ASUS', 'Amazon', 'USD', 1199.99, 1399.99, 1099.99, 1599.99, 4.6, 1247, true, true, 24, 94),
  (gen_random_uuid(), 'ASUS ROG Zephyrus G16', '16-inch gaming laptop with Intel i9-13900H, RTX 4070, 32GB RAM, 1TB SSD, QHD 240Hz', 'Laptops', 'ASUS', 'Amazon', 'USD', 1799.99, 1999.99, 1699.99, 2199.99, 4.5, 823, true, true, 24, 91),
  (gen_random_uuid(), 'Dell XPS 15', '15.6-inch OLED laptop with Intel Core i7-13700H, 16GB RAM, 512GB SSD, 3.5K OLED InfinityEdge', 'Laptops', 'Dell', 'Amazon', 'USD', 1499.99, 1699.99, 1399.99, 1899.99, 4.5, 892, true, true, 36, 91),
  (gen_random_uuid(), 'Dell XPS 13', '13.4-inch ultraportable with Intel i7-1360P, 16GB RAM, 512GB SSD, FHD+ display', 'Laptops', 'Dell', 'Amazon', 'USD', 1099.99, 1249.99, 999.99, 1399.99, 4.4, 1567, true, true, 36, 89),
  (gen_random_uuid(), 'MacBook Pro 14" M3 Pro', 'Apple M3 Pro chip with 12-core CPU, 18-core GPU, 18GB unified memory, 512GB SSD', 'Laptops', 'Apple', 'Amazon', 'USD', 1999.99, 2099.99, 1899.99, 2399.99, 4.7, 2103, true, false, 12, 88),
  (gen_random_uuid(), 'MacBook Pro 16" M3 Max', 'Apple M3 Max chip with 16-core CPU, 40-core GPU, 48GB unified memory, 1TB SSD', 'Laptops', 'Apple', 'Amazon', 'USD', 3499.99, 3699.99, 3299.99, 3999.99, 4.8, 1456, true, false, 12, 87),
  (gen_random_uuid(), 'MacBook Air 15" M3', 'Apple M3 chip, 16GB unified memory, 256GB SSD, 15.3-inch Liquid Retina display', 'Laptops', 'Apple', 'BestBuy', 'USD', 1299.99, 1399.99, 1249.99, 1499.99, 4.6, 3245, true, true, 12, 93),
  (gen_random_uuid(), 'Lenovo ThinkPad X1 Carbon Gen 11', '14-inch business laptop with Intel i7-1365U, 16GB RAM, 512GB SSD, 4G LTE', 'Laptops', 'Lenovo', 'Amazon', 'USD', 1349.99, 1549.99, 1249.99, 1799.99, 4.4, 567, true, true, 36, 89),
  (gen_random_uuid(), 'Lenovo Legion Pro 5', '16-inch gaming laptop with AMD Ryzen 7 7745HX, RTX 4070, 32GB RAM, 1TB SSD', 'Laptops', 'Lenovo', 'Walmart', 'USD', 1499.99, 1699.99, 1399.99, 1899.99, 4.3, 445, true, true, 24, 87),
  (gen_random_uuid(), 'HP Spectre x360 14', '14-inch 2-in-1 convertible with Intel i7-1355U, 16GB RAM, 1TB SSD, 3K2K OLED touch', 'Laptops', 'HP', 'BestBuy', 'USD', 1299.99, 1449.99, 1199.99, 1649.99, 4.3, 345, true, false, 24, 86),
  (gen_random_uuid(), 'HP Envy 16', '16-inch creator laptop with Intel i7-13700H, RTX 4060, 16GB RAM, 1TB SSD', 'Laptops', 'HP', 'Amazon', 'USD', 1149.99, 1299.99, 1049.99, 1449.99, 4.2, 289, true, true, 24, 84),
  (gen_random_uuid(), 'Samsung Galaxy Book3 Ultra', '16-inch laptop with Intel i9-13900H, RTX 4070, 32GB RAM, 1TB SSD, AMOLED display', 'Laptops', 'Samsung', 'Amazon', 'USD', 1799.99, 1999.99, 1699.99, 2299.99, 4.2, 234, true, true, 24, 85),
  (gen_random_uuid(), 'Acer Predator Helios 16', '16-inch gaming laptop with Intel i9-13900HX, RTX 4080, 32GB RAM, 2TB SSD, Mini-LED', 'Laptops', 'Acer', 'Amazon', 'USD', 2299.99, 2499.99, 2199.99, 2799.99, 4.4, 678, true, true, 24, 90),
  (gen_random_uuid(), 'Microsoft Surface Laptop 5', '15-inch touchscreen laptop with Intel i7-1265U, 16GB RAM, 512GB SSD', 'Laptops', 'Microsoft', 'BestBuy', 'USD', 1299.99, 1499.99, 1199.99, 1699.99, 4.1, 189, true, true, 12, 82),
  (gen_random_uuid(), 'Razer Blade 15', '15.6-inch gaming laptop with Intel i9-13900H, RTX 4070, 32GB RAM, 1TB SSD, QHD 240Hz', 'Laptops', 'Razer', 'Amazon', 'USD', 2199.99, 2499.99, 2099.99, 2799.99, 4.3, 567, true, true, 24, 86);

-- Smartphones (15)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'iPhone 15 Pro Max', 'Apple iPhone 15 Pro Max with A17 Pro chip, 256GB storage, 48MP camera, titanium design', 'Smartphones', 'Apple', 'Amazon', 'USD', 1199.99, 1299.99, 1099.99, 1399.99, 4.7, 15892, true, true, 12, 95),
  (gen_random_uuid(), 'iPhone 15 Pro', 'Apple iPhone 15 Pro with A17 Pro chip, 128GB storage, 48MP camera, Action button', 'Smartphones', 'Apple', 'Amazon', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.6, 12456, true, true, 12, 94),
  (gen_random_uuid(), 'iPhone 15', 'Apple iPhone 15 with A16 Bionic chip, 128GB storage, 48MP camera, Dynamic Island', 'Smartphones', 'Apple', 'BestBuy', 'USD', 799.99, 899.99, 749.99, 949.99, 4.5, 23478, true, true, 12, 92),
  (gen_random_uuid(), 'Samsung Galaxy S24 Ultra', 'Samsung Galaxy S24 Ultra with Snapdragon 8 Gen 3, 256GB, 200MP camera, S Pen, Titanium', 'Smartphones', 'Samsung', 'Amazon', 'USD', 1299.99, 1399.99, 1199.99, 1499.99, 4.6, 8923, true, true, 24, 93),
  (gen_random_uuid(), 'Samsung Galaxy S24+', 'Samsung Galaxy S24+ with Snapdragon 8 Gen 3, 256GB, 50MP camera, QHD+ display', 'Smartphones', 'Samsung', 'Amazon', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.5, 5678, true, true, 24, 91),
  (gen_random_uuid(), 'Samsung Galaxy S24', 'Samsung Galaxy S24 with Snapdragon 8 Gen 3, 128GB, 50MP camera, 120Hz AMOLED', 'Smartphones', 'Samsung', 'BestBuy', 'USD', 799.99, 899.99, 749.99, 949.99, 4.4, 7890, true, true, 24, 89),
  (gen_random_uuid(), 'Google Pixel 8 Pro', 'Google Pixel 8 Pro with Tensor G3, 128GB, 50MP main + 48MP ultrawide + 48MP telephoto', 'Smartphones', 'Google', 'Amazon', 'USD', 899.99, 999.99, 849.99, 1099.99, 4.5, 4567, true, true, 24, 91),
  (gen_random_uuid(), 'Google Pixel 8', 'Google Pixel 8 with Tensor G3, 128GB, 50MP main + 12MP ultrawide, 7 years of updates', 'Smartphones', 'Google', 'BestBuy', 'USD', 699.99, 749.99, 649.99, 799.99, 4.4, 3456, true, true, 24, 90),
  (gen_random_uuid(), 'OnePlus 12', 'OnePlus 12 with Snapdragon 8 Gen 3, 256GB, 50MP Hasselblad camera, 100W charging', 'Smartphones', 'OnePlus', 'Amazon', 'USD', 799.99, 849.99, 749.99, 899.99, 4.3, 2345, true, true, 24, 88),
  (gen_random_uuid(), 'Samsung Galaxy Z Fold 5', 'Samsung Galaxy Z Fold 5, 256GB, foldable 7.6-inch AMOLED, Snapdragon 8 Gen 2', 'Smartphones', 'Samsung', 'Amazon', 'USD', 1799.99, 1899.99, 1699.99, 1999.99, 4.2, 1890, true, true, 24, 84),
  (gen_random_uuid(), 'Samsung Galaxy Z Flip 5', 'Samsung Galaxy Z Flip 5, 256GB, foldable 6.7-inch AMOLED, 3.4-inch cover screen', 'Smartphones', 'Samsung', 'BestBuy', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.3, 2345, true, true, 24, 86),
  (gen_random_uuid(), 'Xiaomi 14 Pro', 'Xiaomi 14 Pro with Snapdragon 8 Gen 3, 256GB, 50MP Leica optics, 120W HyperCharge', 'Smartphones', 'Xiaomi', 'AliExpress', 'USD', 699.99, 749.99, 649.99, 849.99, 4.2, 1234, true, false, 12, 85),
  (gen_random_uuid(), 'ASUS ROG Phone 8 Pro', 'Gaming phone with Snapdragon 8 Gen 3, 16GB RAM, 512GB, 165Hz AMOLED, AirTrigger', 'Smartphones', 'ASUS', 'Amazon', 'USD', 1099.99, 1199.99, 999.99, 1299.99, 4.4, 890, true, true, 24, 88),
  (gen_random_uuid(), 'Nothing Phone 2', 'Nothing Phone 2 with Snapdragon 8+ Gen 1, 256GB, 50MP dual camera, Glyph Interface', 'Smartphones', 'Nothing', 'Amazon', 'USD', 599.99, 649.99, 549.99, 699.99, 4.1, 1678, true, true, 24, 83),
  (gen_random_uuid(), 'Motorola Edge 40 Pro', 'Motorola Edge 40 Pro with Snapdragon 8 Gen 2, 256GB, 50MP camera, 125W TurboPower', 'Smartphones', 'Motorola', 'Amazon', 'USD', 699.99, 799.99, 649.99, 899.99, 4.0, 567, true, true, 24, 81);

-- Headphones (12)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Sony WH-1000XM5', 'Wireless noise-canceling headphones, 30hr battery, premium comfort, LDAC support', 'Headphones', 'Sony', 'Amazon', 'USD', 329.99, 399.99, 298.00, 429.99, 4.7, 15892, true, true, 24, 96),
  (gen_random_uuid(), 'Sony WH-1000XM4', 'Wireless noise-canceling headphones, 30hr battery, multipoint connection, DSEE Extreme', 'Headphones', 'Sony', 'Amazon', 'USD', 279.99, 329.99, 248.00, 349.99, 4.6, 28451, true, true, 24, 94),
  (gen_random_uuid(), 'Apple AirPods Pro 2', 'Wireless earbuds with Active Noise Cancellation, Adaptive Audio, USB-C MagSafe', 'Headphones', 'Apple', 'Amazon', 'USD', 249.99, 249.99, 199.99, 279.99, 4.6, 28451, true, true, 12, 93),
  (gen_random_uuid(), 'Apple AirPods Max', 'Over-ear wireless headphones with Active Noise Cancellation, Spatial Audio, H1 chip', 'Headphones', 'Apple', 'Amazon', 'USD', 549.99, 549.99, 479.99, 599.99, 4.4, 12345, true, true, 12, 87),
  (gen_random_uuid(), 'Bose QuietComfort Ultra', 'Wireless noise-canceling headphones with Immersive Audio, CustomTune, 24hr battery', 'Headphones', 'Bose', 'Amazon', 'USD', 429.99, 449.99, 379.99, 479.99, 4.6, 6789, true, true, 24, 93),
  (gen_random_uuid(), 'Bose QuietComfort Earbuds 2', 'True wireless earbuds with CustomTune noise cancellation, 6hr battery, IPX4', 'Headphones', 'Bose', 'BestBuy', 'USD', 279.99, 299.99, 249.99, 329.99, 4.4, 4567, true, true, 24, 89),
  (gen_random_uuid(), 'Sennheiser Momentum 4', 'Wireless noise-canceling headphones with aptX Adaptive, 60hr battery, leather pads', 'Headphones', 'Sennheiser', 'Amazon', 'USD', 349.99, 379.99, 319.99, 399.99, 4.5, 3456, true, true, 24, 91),
  (gen_random_uuid(), 'Sennheiser IE 600', 'HiFi wired IEMs with amorphous zirconium housing, dual-resonator, audiophile grade', 'Headphones', 'Sennheiser', 'Amazon', 'USD', 699.99, 749.99, 649.99, 799.99, 4.7, 1234, true, true, 24, 95),
  (gen_random_uuid(), 'Audio-Technica ATH-M50x', 'Professional studio monitor headphones with 45mm drivers, collapsible, detachable cable', 'Headphones', 'Audio-Technica', 'Amazon', 'USD', 149.99, 169.99, 129.99, 179.99, 4.7, 45234, true, true, 24, 96),
  (gen_random_uuid(), 'Beats Studio Buds+', 'True wireless earbuds with Active Noise Cancellation, Transparency mode, IPX4', 'Headphones', 'Beats', 'Amazon', 'USD', 169.99, 199.99, 149.99, 199.99, 4.2, 18902, true, true, 12, 85),
  (gen_random_uuid(), 'JBL Tune 770NC', 'Wireless over-ear headphones with Adaptive ANC, 70hr battery, JBL Pure Bass', 'Headphones', 'JBL', 'Walmart', 'USD', 99.99, 129.99, 89.99, 149.99, 4.2, 7890, true, true, 12, 86),
  (gen_random_uuid(), 'Anker Soundcore Space Q45', 'Wireless over-ear headphones with Adaptive ANC, 50hr battery, Hi-Res Audio, LDAC', 'Headphones', 'Anker', 'Amazon', 'USD', 129.99, 149.99, 109.99, 159.99, 4.4, 12345, true, true, 18, 90);

-- Monitors (12)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'LG 27GP950-B 27" 4K Gaming Monitor', '27-inch UHD Nano IPS, 160Hz, 1ms, HDMI 2.1, G-Sync Compatible, VESA DisplayHDR 600', 'Monitors', 'LG', 'BestBuy', 'USD', 699.99, 799.99, 649.99, 899.99, 4.5, 1234, true, false, 36, 90),
  (gen_random_uuid(), 'LG 27UL850-W 27" 4K', '27-inch UHD IPS, 60Hz, USB-C 60W PD, HDR10, sRGB 99%, height adjustable', 'Monitors', 'LG', 'Amazon', 'USD', 449.99, 499.99, 399.99, 549.99, 4.4, 2345, true, true, 36, 89),
  (gen_random_uuid(), 'Samsung Odyssey G7 32"', '32-inch WQHD Curved VA, 240Hz, 1ms, G-Sync Compatible, HDR600, 1000R curve', 'Monitors', 'Samsung', 'Amazon', 'USD', 599.99, 699.99, 549.99, 799.99, 4.5, 3456, true, true, 36, 91),
  (gen_random_uuid(), 'Samsung Odyssey OLED G8 34"', '34-inch UWQHD OLED, 175Hz, 0.1ms, G-Sync Compatible, HDR400 True Black', 'Monitors', 'Samsung', 'Amazon', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.6, 890, true, true, 36, 92),
  (gen_random_uuid(), 'Dell S2722QC 27" 4K', '27-inch UHD IPS, 60Hz, USB-C 65W PD, built-in speakers, VESA mountable', 'Monitors', 'Dell', 'Amazon', 'USD', 349.99, 399.99, 319.99, 449.99, 4.4, 5678, true, true, 36, 90),
  (gen_random_uuid(), 'Dell Alienware AW3423DWF', '34-inch QD-OLED Curved, 165Hz, 0.1ms, G-Sync Compatible, HDR400 True Black', 'Monitors', 'Dell', 'Amazon', 'USD', 899.99, 999.99, 849.99, 1099.99, 4.6, 1567, true, true, 36, 93),
  (gen_random_uuid(), 'ASUS ROG Swift PG27AQDM', '27-inch QHD OLED, 240Hz, 0.03ms, G-Sync Compatible, HDR400, anti-glare', 'Monitors', 'ASUS', 'Amazon', 'USD', 799.99, 899.99, 749.99, 999.99, 4.5, 1234, true, true, 36, 91),
  (gen_random_uuid(), 'ASUS ProArt PA279CRV', '27-inch 4K IPS, 60Hz, USB-C 96W PD, Delta E<2, 99% AdobeRGB, for creators', 'Monitors', 'ASUS', 'Amazon', 'USD', 499.99, 549.99, 449.99, 599.99, 4.4, 890, true, true, 36, 89),
  (gen_random_uuid(), 'Apple Studio Display', '27-inch 5K Retina display, 60Hz, 12MP Ultra Wide camera, six-speaker system', 'Monitors', 'Apple', 'Amazon', 'USD', 1599.99, 1599.99, 1499.99, 1699.99, 4.3, 2345, true, true, 12, 84),
  (gen_random_uuid(), 'Gigabyte M32U 32" 4K', '32-inch UHD SS IPS, 144Hz, 1ms, HDMI 2.1, G-Sync Compatible, KVM built-in', 'Monitors', 'Gigabyte', 'Amazon', 'USD', 649.99, 749.99, 599.99, 799.99, 4.4, 2345, true, true, 36, 89),
  (gen_random_uuid(), 'BenQ EW3270U 32" 4K', '32-inch UHD VA, 60Hz, HDR10, USB-C, built-in speakers, eye-care technology', 'Monitors', 'BenQ', 'Amazon', 'USD', 429.99, 479.99, 399.99, 499.99, 4.3, 1234, true, true, 36, 87),
  (gen_random_uuid(), 'ViewSonic VX2758-2KP-MHD', '27-inch QHD IPS, 144Hz, 1ms, FreeSync, DisplayPort, budget gaming choice', 'Monitors', 'ViewSonic', 'Walmart', 'USD', 249.99, 299.99, 229.99, 329.99, 4.3, 4567, true, true, 36, 88);

-- Storage (10)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Samsung 990 Pro 2TB', 'NVMe M.2 SSD, PCIe 4.0 x4, read 7450MB/s, write 6900MB/s, Samsung V-NAND', 'Storage', 'Samsung', 'Amazon', 'USD', 209.99, 249.99, 179.99, 289.99, 4.8, 3451, true, true, 60, 97),
  (gen_random_uuid(), 'Samsung 990 Pro 1TB', 'NVMe M.2 SSD, PCIe 4.0 x4, read 7450MB/s, write 6900MB/s, hardware encryption', 'Storage', 'Samsung', 'Amazon', 'USD', 129.99, 149.99, 109.99, 169.99, 4.7, 5678, true, true, 60, 95),
  (gen_random_uuid(), 'WD Black SN850X 2TB', 'NVMe M.2 SSD, PCIe 4.0, read 7300MB/s, write 6600MB/s, Game Mode 2.0', 'Storage', 'Western Digital', 'Amazon', 'USD', 179.99, 219.99, 159.99, 249.99, 4.7, 2345, true, true, 60, 95),
  (gen_random_uuid(), 'Seagate FireCuda 530 2TB', 'NVMe M.2 SSD, PCIe 4.0, read 7300MB/s, write 6900MB/s, heatsink', 'Storage', 'Seagate', 'Amazon', 'USD', 199.99, 239.99, 179.99, 269.99, 4.6, 1234, true, true, 60, 93),
  (gen_random_uuid(), 'Crucial P5 Plus 2TB', 'NVMe M.2 SSD, PCIe 4.0, read 6600MB/s, write 5000MB/s, Micron 3D NAND', 'Storage', 'Crucial', 'Amazon', 'USD', 149.99, 179.99, 129.99, 199.99, 4.6, 3456, true, true, 60, 93),
  (gen_random_uuid(), 'SanDisk Extreme Pro 2TB', 'Portable SSD, USB 3.2 Gen 2x2, read 2000MB/s, IP65, drop-proof up to 2m', 'Storage', 'SanDisk', 'Amazon', 'USD', 179.99, 199.99, 159.99, 219.99, 4.7, 7890, true, true, 36, 95),
  (gen_random_uuid(), 'Samsung T7 Shield 2TB', 'Portable SSD, USB 3.2 Gen 2, read 1050MB/s, IP65, AES 256-bit encryption', 'Storage', 'Samsung', 'Amazon', 'USD', 159.99, 179.99, 139.99, 199.99, 4.7, 12345, true, true, 36, 94),
  (gen_random_uuid(), 'SK Hynix Platinum P41 2TB', 'NVMe M.2 SSD, PCIe 4.0, read 7000MB/s, write 6500MB/s, 176-layer NAND', 'Storage', 'SK Hynix', 'Amazon', 'USD', 189.99, 219.99, 169.99, 249.99, 4.7, 890, true, true, 60, 95),
  (gen_random_uuid(), 'WD My Passport 5TB', 'External HDD, USB 3.0, 5TB, hardware encryption, auto-backup software', 'Storage', 'Western Digital', 'Amazon', 'USD', 129.99, 139.99, 109.99, 149.99, 4.5, 24567, true, true, 36, 91),
  (gen_random_uuid(), 'Synology DS923+ 4-Bay NAS', '4-bay NAS with AMD Ryzen, 8GB DDR4, 2x M.2 NVMe, 2x 2.5GbE', 'Storage', 'Synology', 'Amazon', 'USD', 599.99, 649.99, 549.99, 699.99, 4.6, 1234, true, true, 36, 92);

-- Graphics Cards (10)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'NVIDIA RTX 4090 Founders Edition', 'NVIDIA GeForce RTX 4090, 24GB GDDR6X, 16384 CUDA cores, 2520MHz boost', 'Graphics Cards', 'NVIDIA', 'BestBuy', 'USD', 1799.99, 1999.99, 1599.99, 2399.99, 4.8, 4567, true, false, 36, 93),
  (gen_random_uuid(), 'NVIDIA RTX 4080 Super Founders Edition', 'NVIDIA GeForce RTX 4080 Super, 16GB GDDR6X, 10240 CUDA cores, 2550MHz boost', 'Graphics Cards', 'NVIDIA', 'BestBuy', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.7, 3456, true, false, 36, 92),
  (gen_random_uuid(), 'ASUS ROG Strix RTX 4090', 'ASUS ROG Strix GeForce RTX 4090 OC, 24GB GDDR6X, triple fan, RGB', 'Graphics Cards', 'ASUS', 'Amazon', 'USD', 2099.99, 2299.99, 1999.99, 2599.99, 4.7, 2345, true, true, 36, 90),
  (gen_random_uuid(), 'MSI Gaming X Trio RTX 4080 Super', 'MSI GeForce RTX 4080 Super Gaming X Trio, 16GB GDDR6X, Triple Fan', 'Graphics Cards', 'MSI', 'Amazon', 'USD', 1099.99, 1199.99, 1049.99, 1299.99, 4.6, 1890, true, true, 36, 91),
  (gen_random_uuid(), 'Gigabyte RTX 4070 Ti Super', 'Gigabyte GeForce RTX 4070 Ti Super Gaming OC, 16GB GDDR6X, Windforce cooling', 'Graphics Cards', 'Gigabyte', 'Amazon', 'USD', 799.99, 849.99, 749.99, 899.99, 4.5, 3456, true, true, 36, 90),
  (gen_random_uuid(), 'ASUS Dual RTX 4070 Super', 'ASUS Dual GeForce RTX 4070 Super, 12GB GDDR6X, dual fan, 2-slot design', 'Graphics Cards', 'ASUS', 'Amazon', 'USD', 599.99, 649.99, 549.99, 699.99, 4.5, 4567, true, true, 36, 90),
  (gen_random_uuid(), 'PowerColor Red Devil RX 7900 XTX', 'AMD Radeon RX 7900 XTX, 24GB GDDR6, 6144 stream processors, triple fan', 'Graphics Cards', 'PowerColor', 'Amazon', 'USD', 899.99, 999.99, 849.99, 1099.99, 4.5, 1234, true, true, 36, 89),
  (gen_random_uuid(), 'XFX Speedster MERC310 RX 7900 XT', 'AMD Radeon RX 7900 XT, 20GB GDDR6, 5376 stream processors', 'Graphics Cards', 'XFX', 'Amazon', 'USD', 749.99, 799.99, 699.99, 849.99, 4.4, 890, true, true, 36, 87),
  (gen_random_uuid(), 'Sapphire Pulse RX 7800 XT', 'AMD Radeon RX 7800 XT, 16GB GDDR6, 3840 stream processors, dual fan', 'Graphics Cards', 'Sapphire', 'Amazon', 'USD', 499.99, 549.99, 469.99, 599.99, 4.4, 2345, true, true, 36, 88),
  (gen_random_uuid(), 'EVGA RTX 3060 XC Gaming', 'EVGA GeForce RTX 3060 XC Black Gaming, 12GB GDDR6, dual fan, compact', 'Graphics Cards', 'EVGA', 'Walmart', 'USD', 299.99, 329.99, 279.99, 379.99, 4.4, 12345, true, true, 36, 87);

-- Keyboards (10)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Logitech MX Keys S', 'Full-size wireless keyboard, spherically dished keys, backlit, USB-C, multipair', 'Keyboards', 'Logitech', 'Amazon', 'USD', 109.99, 119.99, 99.99, 129.99, 4.6, 18902, true, true, 24, 94),
  (gen_random_uuid(), 'Logitech G Pro X TKL', 'Tenkeyless mechanical gaming keyboard, GX Brown/Blue/Red switches, LIGHTSYNC', 'Keyboards', 'Logitech', 'Amazon', 'USD', 129.99, 149.99, 119.99, 169.99, 4.4, 5678, true, true, 24, 89),
  (gen_random_uuid(), 'Apple Magic Keyboard with Touch ID', 'Full-size wireless keyboard with Touch ID, USB-C, for Mac models with Apple silicon', 'Keyboards', 'Apple', 'Amazon', 'USD', 149.99, 149.99, 129.99, 179.99, 4.5, 12345, true, true, 12, 90),
  (gen_random_uuid(), 'Razer Huntsman V2 Analog', 'Full-size optical keyboard with analog switches, adjustable actuation, PBT keycaps', 'Keyboards', 'Razer', 'Amazon', 'USD', 199.99, 219.99, 179.99, 249.99, 4.4, 2345, true, true, 24, 88),
  (gen_random_uuid(), 'SteelSeries Apex Pro TKL', 'Tenkeyless mechanical keyboard, OmniPoint adjustable switches, OLED smart display', 'Keyboards', 'SteelSeries', 'Amazon', 'USD', 179.99, 199.99, 159.99, 219.99, 4.5, 3456, true, true, 24, 90),
  (gen_random_uuid(), 'Corsair K70 RGB Pro', 'Full-size mechanical keyboard, Cherry MX Speed/Silver, PBT keycaps, USB-C', 'Keyboards', 'Corsair', 'Amazon', 'USD', 159.99, 179.99, 139.99, 189.99, 4.5, 7890, true, true, 24, 91),
  (gen_random_uuid(), 'Keychron Q1 Pro', '75% wireless mechanical keyboard, Gateron Jupiter switches, QMK/VIA, aluminum', 'Keyboards', 'Keychron', 'Amazon', 'USD', 199.99, 219.99, 179.99, 239.99, 4.6, 2345, true, true, 24, 93),
  (gen_random_uuid(), 'Ducky One 3 Mini', '60% mechanical keyboard, Cherry MX switches, hot-swap, USB-C, RGB', 'Keyboards', 'Ducky', 'Amazon', 'USD', 119.99, 129.99, 109.99, 149.99, 4.5, 4567, true, true, 24, 91),
  (gen_random_uuid(), 'Wooting 60HE+', '60% analog optical keyboard, Lekker switches, rapid trigger, competitive gaming', 'Keyboards', 'Wooting', 'Amazon', 'USD', 175.99, 189.99, 159.99, 199.99, 4.7, 2345, true, true, 24, 95),
  (gen_random_uuid(), 'NuPhy Air75 V2', '75% low-profile wireless keyboard, Gateron KS-33 switches, PBT keycaps, RGB', 'Keyboards', 'NuPhy', 'Amazon', 'USD', 119.99, 129.99, 109.99, 139.99, 4.5, 3456, true, true, 12, 91);

-- Mice (10)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Logitech MX Master 3S', 'Wireless ergonomic mouse, 8K DPI, quiet clicks, MagSpeed scroll, USB-C, multipair', 'Mice', 'Logitech', 'Amazon', 'USD', 99.99, 119.99, 89.99, 129.99, 4.7, 34567, true, true, 24, 96),
  (gen_random_uuid(), 'Logitech G502 X Plus', 'Wireless gaming mouse, LIGHTFORCE hybrid switches, HERO 25K sensor, RGB', 'Mice', 'Logitech', 'Amazon', 'USD', 139.99, 159.99, 129.99, 179.99, 4.6, 12345, true, true, 24, 93),
  (gen_random_uuid(), 'Logitech G Pro X Superlight 2', 'Wireless gaming mouse, 60g, HERO 2 sensor, 32000 DPI, LIGHTFORCE switches', 'Mice', 'Logitech', 'Amazon', 'USD', 159.99, 169.99, 149.99, 189.99, 4.7, 15678, true, true, 24, 95),
  (gen_random_uuid(), 'Razer DeathAdder V3 Pro', 'Wireless ergonomic gaming mouse, 63g, Focus Pro 30K sensor, optical switches', 'Mice', 'Razer', 'Amazon', 'USD', 149.99, 159.99, 139.99, 169.99, 4.6, 8901, true, true, 24, 93),
  (gen_random_uuid(), 'Razer Viper V2 Pro', 'Wireless lightweight gaming mouse, 58g, Focus Pro 30K sensor, optical Gen 3', 'Mice', 'Razer', 'Amazon', 'USD', 129.99, 149.99, 119.99, 159.99, 4.5, 5678, true, true, 24, 91),
  (gen_random_uuid(), 'Apple Magic Mouse', 'Wireless multi-touch mouse, rechargeable battery, seamless pairing, USB-C', 'Mice', 'Apple', 'Amazon', 'USD', 79.99, 79.99, 69.99, 99.99, 4.2, 23456, true, true, 12, 82),
  (gen_random_uuid(), 'SteelSeries Rival 650', 'Wireless gaming mouse with Quantum 2.0 dual sensor, 26000 CPI, tactile alerts', 'Mice', 'SteelSeries', 'Amazon', 'USD', 99.99, 119.99, 89.99, 139.99, 4.4, 3456, true, true, 24, 88),
  (gen_random_uuid(), 'Corsair Darkstar RGB', 'Wireless MMO gaming mouse, 15 buttons, Marksman 26K sensor, 18000 DPI, Qi', 'Mice', 'Corsair', 'Amazon', 'USD', 149.99, 159.99, 139.99, 179.99, 4.3, 1234, true, true, 24, 86),
  (gen_random_uuid(), 'Pulsar X2H Mini', 'Ultra-lightweight wireless gaming mouse, 52g, PAW3395 sensor, Huano switches', 'Mice', 'Pulsar', 'Amazon', 'USD', 89.99, 99.99, 79.99, 109.99, 4.5, 2345, true, true, 12, 91),
  (gen_random_uuid(), 'Finalmouse Starlight-12 Last Legend', 'Ultra-lightweight wireless gaming mouse, magnesium alloy, <47g, custom sensor', 'Mice', 'Finalmouse', 'Amazon', 'USD', 189.99, 199.99, 169.99, 249.99, 4.4, 890, true, true, 12, 87);

-- Tablets (8)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'iPad Pro 12.9" M2', 'Apple iPad Pro 12.9-inch with M2 chip, 256GB, Liquid Retina XDR, Thunderbolt', 'Tablets', 'Apple', 'Amazon', 'USD', 1099.99, 1199.99, 999.99, 1299.99, 4.7, 7890, true, true, 12, 93),
  (gen_random_uuid(), 'iPad Pro 11" M2', 'Apple iPad Pro 11-inch with M2 chip, 128GB, Liquid Retina, Thunderbolt/USB 4', 'Tablets', 'Apple', 'Amazon', 'USD', 799.99, 899.99, 749.99, 949.99, 4.6, 5678, true, true, 12, 92),
  (gen_random_uuid(), 'iPad Air 5 M1', 'Apple iPad Air 10.9-inch with M1 chip, 64GB, Liquid Retina, Touch ID', 'Tablets', 'Apple', 'Amazon', 'USD', 599.99, 649.99, 549.99, 699.99, 4.6, 12345, true, true, 12, 92),
  (gen_random_uuid(), 'iPad 10th Gen', 'Apple iPad 10.9-inch with A14 Bionic, 64GB, Liquid Retina, USB-C', 'Tablets', 'Apple', 'Amazon', 'USD', 449.99, 449.99, 399.99, 499.99, 4.5, 34567, true, true, 12, 91),
  (gen_random_uuid(), 'Samsung Galaxy Tab S9 Ultra', 'Samsung Galaxy Tab S9 Ultra 14.6-inch, 256GB, Snapdragon 8 Gen 2, Dynamic AMOLED 2X', 'Tablets', 'Samsung', 'Amazon', 'USD', 999.99, 1099.99, 949.99, 1199.99, 4.5, 2345, true, true, 24, 90),
  (gen_random_uuid(), 'Samsung Galaxy Tab S9+', 'Samsung Galaxy Tab S9+ 12.4-inch, 256GB, Snapdragon 8 Gen 2, Dynamic AMOLED 2X', 'Tablets', 'Samsung', 'Amazon', 'USD', 799.99, 899.99, 749.99, 949.99, 4.4, 1890, true, true, 24, 89),
  (gen_random_uuid(), 'Amazon Fire Max 11', 'Amazon Fire Max 11, 64GB, 11-inch 2K display, octa-core, up to 14hr battery', 'Tablets', 'Amazon', 'Amazon', 'USD', 229.99, 249.99, 199.99, 279.99, 4.2, 23456, true, true, 12, 85),
  (gen_random_uuid(), 'Microsoft Surface Pro 9', 'Microsoft Surface Pro 9, Intel i7, 16GB RAM, 256GB SSD, 13-inch PixelSense Flow', 'Tablets', 'Microsoft', 'BestBuy', 'USD', 1599.99, 1799.99, 1499.99, 1999.99, 4.3, 1234, true, true, 12, 85);

-- Smart Home (8)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Amazon Echo Studio', 'Premium smart speaker with 3D audio, Dolby Atmos, Zigbee smart home hub built-in', 'Smart Home', 'Amazon', 'Amazon', 'USD', 199.99, 219.99, 179.99, 249.99, 4.4, 34567, true, true, 12, 89),
  (gen_random_uuid(), 'Amazon Echo Dot 5th Gen', 'Smart speaker with Alexa, improved audio, temperature sensor, Eero mesh', 'Smart Home', 'Amazon', 'Amazon', 'USD', 49.99, 59.99, 39.99, 69.99, 4.5, 123456, true, true, 12, 92),
  (gen_random_uuid(), 'Google Nest Hub Max', 'Smart display with Google Assistant, 10-inch HD, Nest Cam built-in, Thread', 'Smart Home', 'Google', 'Amazon', 'USD', 199.99, 229.99, 179.99, 249.99, 4.3, 23456, true, true, 12, 87),
  (gen_random_uuid(), 'Google Nest Audio', 'Smart speaker with Google Assistant, rich sound, adaptive room tuning', 'Smart Home', 'Google', 'BestBuy', 'USD', 99.99, 119.99, 89.99, 129.99, 4.3, 45678, true, true, 12, 87),
  (gen_random_uuid(), 'Apple HomePod 2', 'Apple smart speaker with room sensing, Spatial Audio, Siri, Thread, Matter support', 'Smart Home', 'Apple', 'Amazon', 'USD', 299.99, 299.99, 279.99, 329.99, 4.5, 8901, true, true, 12, 90),
  (gen_random_uuid(), 'Philips Hue Starter Kit', 'Philips Hue White and Color Ambiance 4-bulb starter kit with Hue Bridge', 'Smart Home', 'Philips', 'Amazon', 'USD', 199.99, 219.99, 179.99, 249.99, 4.5, 56789, true, true, 24, 91),
  (gen_random_uuid(), 'Ring Video Doorbell Pro 2', 'Ring Video Doorbell Pro 2, 1536p HD, 3D motion detection, bird''s eye view', 'Smart Home', 'Ring', 'Amazon', 'USD', 229.99, 249.99, 199.99, 269.99, 4.3, 89012, true, true, 12, 86),
  (gen_random_uuid(), 'Nest Learning Thermostat 4th Gen', 'Google Nest Learning Thermostat with Nest Temperature Sensor, auto-schedule', 'Smart Home', 'Google', 'Amazon', 'USD', 249.99, 279.99, 229.99, 299.99, 4.5, 34567, true, true, 24, 91);

-- Gaming Consoles (8)
INSERT INTO products (id, name, description, category, brand, source, currency, current_price, average_price, lowest_price, highest_price, rating, review_count, in_stock, free_shipping, warranty_months, buying_score) VALUES
  (gen_random_uuid(), 'Sony PlayStation 5 Slim', 'Sony PS5 Slim with disc drive, 825GB SSD, DualSense controller, 4K Blu-ray', 'Gaming', 'Sony', 'Amazon', 'USD', 499.99, 499.99, 449.99, 549.99, 4.7, 78901, true, true, 12, 94),
  (gen_random_uuid(), 'Sony PlayStation 5 Digital Slim', 'Sony PS5 Slim Digital Edition, 825GB SSD, DualSense controller, all-digital', 'Gaming', 'Sony', 'Amazon', 'USD', 449.99, 449.99, 399.99, 499.99, 4.6, 34567, true, true, 12, 93),
  (gen_random_uuid(), 'Microsoft Xbox Series X', 'Microsoft Xbox Series X, 1TB SSD, 4K gaming, 12 TFLOPs, 120fps, Game Pass', 'Gaming', 'Microsoft', 'Amazon', 'USD', 499.99, 499.99, 449.99, 549.99, 4.6, 56789, true, true, 12, 93),
  (gen_random_uuid(), 'Microsoft Xbox Series S', 'Microsoft Xbox Series S, 512GB SSD, 1440p gaming, all-digital, Game Pass', 'Gaming', 'Microsoft', 'Amazon', 'USD', 299.99, 299.99, 249.99, 329.99, 4.5, 45678, true, true, 12, 91),
  (gen_random_uuid(), 'Nintendo Switch OLED', 'Nintendo Switch OLED model, 7-inch OLED screen, 64GB, enhanced audio', 'Gaming', 'Nintendo', 'Amazon', 'USD', 349.99, 349.99, 319.99, 379.99, 4.7, 123456, true, true, 12, 95),
  (gen_random_uuid(), 'Nintendo Switch Lite', 'Nintendo Switch Lite, compact handheld, 5.5-inch screen, 32GB internal', 'Gaming', 'Nintendo', 'Amazon', 'USD', 199.99, 199.99, 179.99, 219.99, 4.5, 89012, true, true, 12, 91),
  (gen_random_uuid(), 'Steam Deck OLED 1TB', 'Valve Steam Deck OLED, 1TB NVMe SSD, 7.4-inch HDR OLED, WiFi 6E', 'Gaming', 'Valve', 'Amazon', 'USD', 649.99, 649.99, 599.99, 699.99, 4.7, 23456, true, true, 12, 94),
  (gen_random_uuid(), 'ASUS ROG Ally X', 'ASUS ROG Ally X handheld gaming PC, Ryzen Z1 Extreme, 24GB RAM, 1TB SSD', 'Gaming', 'ASUS', 'Amazon', 'USD', 799.99, 849.99, 749.99, 899.99, 4.3, 5678, true, true, 24, 86);
