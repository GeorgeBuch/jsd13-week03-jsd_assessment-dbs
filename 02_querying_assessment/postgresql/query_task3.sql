-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.
SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    COUNT(o.order_id) AS total_orders
FROM 
    Staff s
LEFT JOIN 
    Orders o ON s.staff_id = o.staff_id
GROUP BY 
    s.staff_id, s.first_name, s.last_name
ORDER BY 
    total_orders DESC;
-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js


-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
--first we use CONCAT for connect in this case we want to connect firstname and last name
-- we use ' ' for space between f and l and use s. before first,last_name cause
--s. like a nick name we want to shortcut to call Staff that we assign after Staff s in FROM
--so we change fist and last to full name and similar in orders  we use COUNT for show every order id as total_orders
--so we want staff is main that why we use left join and we want to match line staff table match to orders table
--after that we have to group by use group by for group staff id and name of staff for count the number of orders for each staff
--last after select join and group we have to order by staff from staff who most order to less order