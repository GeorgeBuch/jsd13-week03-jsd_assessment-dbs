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
  // ขั้นที่ 1: การ JOIN ตาราง (เทียบเท่า LEFT JOIN Orders ON ...)
  {
    $lookup: {
      from: "orders",           // ชื่อตาราง(collection) ที่จะไปดึงมาเชื่อม
      localField: "staff_id",   // รหัสพนักงานในแฟ้ม staff
      foreignField: "staff_id", // รหัสพนักงานในแฟ้ม orders
      as: "staff_orders"        // มัดรวมใบเสร็จทั้งหมดที่หาเจอใส่โฟลเดอร์ชื่อ staff_orders
    }
  },
  
  // ขั้นที่ 2: การเลือกข้อมูลและคำนวณ (เทียบเท่า SELECT, CONCAT, COUNT)
  {
    $project: {
      _id: 0, // ไม่เอา _id รกๆ มาแสดง
      // ใช้กาววิเศษต่อชื่อ (CONCAT)
      full_name: { $concat: ["$first_name", " ", "$last_name"] },
      
      // เครื่องกดนับจำนวน (COUNT) โดยการนับขนาด ($size) ของโฟลเดอร์ staff_orders
      total_orders: { $size: "$staff_orders" } 
    }
  },
  
  // ขั้นที่ 3: การเรียงลำดับ (เทียบเท่า ORDER BY total_orders DESC)
  {
    $sort: {
      total_orders: -1 // ใส่ -1 หมายถึง เรียงจากมากไปน้อย (DESC) / ถ้าใส่ 1 คือน้อยไปมาก (ASC)
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
//
