use("chrome-burger-db");
// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql
db.orders.aggregate([
  {
    $group: {
      _id: null,
      total_revenue: {
        $sum: "$total_price"
      }
    }
  }
])
// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//1. we use aggregate for use collection orders come to process we we call pipeline
//pipe line similar function in Javascript but have more process to do with data
//2.we use $group for like group by example we want tp group by firstname but this case
//3.Just want only "Revenue" to show we have to give null to _id meaning not group by anything
//it's change to one group
//4.last we use $sum for calculate all price(total_price) for show revenue
//5.but before we have to create new field name total_revenue before calculate to show name of column after print
