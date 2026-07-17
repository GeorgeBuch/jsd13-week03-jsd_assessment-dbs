use("chrome-burger-db");
// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql
db.ingredients.find(
    {
        stock_level: { $gte: NumberDecimal("100.00")}
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
//2.use db.ingredients.find for find all table in ingredients 
//3.in {} use stock_level for call to watch all stock_level field
//4. use $gte for greater than or equal this case want stock_level greater than or equal
//5.use NumberDecimal after $gte because this stock_level collect data in NumberDecimal
//but also id don't use it's can run and show the same but use NumberDecimal for correct type
//of data is way better
