// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.
use("chrome-burger-db");

db.staff.aggregate([
 
  {
    $lookup: {
      from: "orders",          
      localField: "staff_id",   
      foreignField: "staff_id", 
      as: "staff_orders"        
    }
  },
  {
    $project: {
      _id: 0, 
      full_name: { $concat: ["$first_name", " ", "$last_name"] },
      total_orders: { $size: "$staff_orders" } 
    }
  },
  {
    $sort: {
      total_orders: -1 
    }
  }
]);
// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//want to use aggregate similar a function in js
//1. $lookup like a left join orders on
//2. id = 0 mean don't want
//3.caoncat similar sql for connect first name and last name don't for get ' ' for space
//4.count total order by count size
//5.sort all by $sort similar order by in sql
