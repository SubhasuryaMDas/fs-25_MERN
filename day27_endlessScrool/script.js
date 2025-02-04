





// Detecting Financial Fraud in Transactions (Finance)

// Operations Required:
// Grouping: Analyze spending patterns per customer.
// Filtering: Detect transactions with unusual spending spikes.
// Sorting: Rank flagged transactions by risk level.

// Sample Input:
// const transactions = [
//   { id: "T1", user: "U1", amount: 5000, pastAmounts: [100, 200, 150] },
//   { id: "T2", user: "U2", amount: 300, pastAmounts: [250, 270, 260] },
//   { id: "T3", user: "U3", amount: 8000, pastAmounts: [500, 600, 550] }
// ];

// Expected Output:
// ["T3", "T1"]




// Fraud Detection in Multi-Location Transactions

// Scenario:
// A bank needs to flag suspicious accounts where:
// The same account has transactions in different locations within a short time.
// The transaction amount is above their typical spending pattern .
// The flagged transactions should be sorted by severity .


// Sample Input:
// const transactions = [
//   { userId: "U1", location: "New York", amount: 200, time: "10:00" },
//   { userId: "U1", location: "Los Angeles", amount: 1000, time: "10:30" },
//   { userId: "U2", location: "Chicago", amount: 300, time: "12:00" },
//   { userId: "U2", location: "Chicago", amount: 320, time: "12:05" }
// ];


// Expected Output:
// [
//   { userId: "U1", flaggedTransactions: ["New York", "Los Angeles"] }
// ]










// console.log("hello world");

// Predicting Employee Attrition Risk (Human Resources)

// Operations Required:
// Grouping: Analyze performance and engagement trends per employee.
// Filtering: Remove employees with stable engagement.
// Sorting: Rank employees by highest attrition risk.

// Sample Input:
// const employees = [
//   { id: "E1", performance: [3, 2, 2], engagement: [80, 75, 60] },
//   { id: "E2", performance: [5, 5, 5], engagement: [90, 92, 93] },
//   { id: "E3", performance: [2, 1, 1], engagement: [60, 50, 40] }
// ];

// // ​
// // Expected Output:
// // ["E3", "E1"]

// function calculateRisk(employees){
//     let performanceDecline = employees.performance[0] - employees.performance[2];
//     let engagementDecline = employees.engagement[0] - employees.engagement[2];
//     return performanceDecline + engagementDecline;
// }

// let riskScores = employees
// .map(emp => ({id:emp.id, risk: calculateRisk(emp)}))
// .filter(emp => emp.risk > 0)
// .sort((a,b)=>b.risk - a.risk)
// .map(emp=>emp.id);
//     console.log(riskScores);
