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
      localField: "supplier_id", // ดึงจากบรรทัด supplier_id ในตาราง ingredients ของคุณ
      foreignField: "_id",       // ไปเทียบกับบรรทัด _id ในตาราง suppliers
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
//1. we use lookup it same like join in sql
//we take ingredient and find supplier have same id
//and put them together in "s"
//2.we use $match it work like where
//we want only farm name'Freshest Farm Produce'
// we have to use "s.name" for call name inside s
// other farm we don't want
/// 3. use $project it like SELECT from sql
// we want to show just ingredient name so we put 1 for name
// and we use 0 for _id because we don't want to show it in output