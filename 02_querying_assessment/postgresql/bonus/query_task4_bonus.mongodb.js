// Task 4 Bonus: Supplier Dependency Check
// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// Before deciding whether to source from an alternative supplier, they need to know exactly
// which ingredients depend on that supplier, so they can assess the impact on the menu.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// only the ingredient names.


use("chrome-burger-db");

db.ingredients.aggregate([
  {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id", 
      foreignField: "_id",       
      as: "s"
    }
  },
  {
    $unwind: "$s" 
  },
  {
    $match: {
      "s.name": "Freshest Farm Produce"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1
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
// 1.first step use $lookup, it's same like JOIN in SQL.
// we take ingredient supplier_id and match with _id in suppliers collection.
// and put them together inside "s"

// 2.use $unwind to unpack the "s" 
// because $lookup gives result as an array, we need to unpack it first 
// before we can search inside it.

// 3.next step use $match, it works like WHERE in SQL
// we want only the farm name 'Freshest Farm Produce'
// we use "s.name" to call the name inside s. other farms we don't want

// 4.last step use $project, it's like SELECT in SQL.
// we want to show just ingredient name, so we put 1 for name
// and we put 0 for _id because we don't want to show it in the output