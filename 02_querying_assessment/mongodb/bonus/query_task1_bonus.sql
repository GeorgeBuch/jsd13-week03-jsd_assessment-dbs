-- Task 1 Bonus: Budget Meal Deal
-- The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
-- which menu items could be included. To qualify, an item must be priced under $10.00,
-- so they can offer good value without cutting too deep into margins.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name and price of all rows in the MenuItems table
-- where the price is less than 10.


-- Select rows where price is less than 20


-- Select rows where price is less than 20
SELECT *
FROM MenuItems
WHERE price < 20;
-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--1.use database same as mongodb in this cause we don't have to
--updateMany from string to int cause sql read price value
--2.we use select * mean select all table in this database (chrome-burgur-db)
--3. FROM MenuItems is name of database in sql but in mongo we call menu_items
--4.use where for field and it's a price wa want price less than 20 
--5.we have to use price < 20
