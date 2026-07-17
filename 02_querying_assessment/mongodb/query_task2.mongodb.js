use("chrome-burger-db");
// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

  db.orders.find(
  {
    "staff.first_name": "Jane",
    "staff.last_name": "Doe"
  },
  {
    order_date: 1,
    total_price: 1,
    _id: 0
  }
)

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1. line 1 import  database name chrome-burger-db
//2.use db.find order for find all table in orders
//3.in first {} want to find staff 
// but joe in fistname of staff we have to use "" coverall
//  and.(dot) between staff and first name for call fistname in staff
// and the same for lastname
// 4. another {} we want to show just order date and total price 
//we have to use 1 with field that we want and use 0 for
//we don't want in this case wa don't want to show id 
