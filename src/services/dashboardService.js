const prisma = require("../config/prisma");

const getSummary = async () => {
  const income = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { type: "INCOME" },
  });

  const expense = await prisma.record.aggregate({
    _sum: { amount: true },
    where: { type: "EXPENSE" },
  });

  const totalIncome = income._sum.amount || 0;
  const totalExpense = expense._sum.amount || 0;

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};

const getCategoryBreakdown = async () => {
  const data = await prisma.record.groupBy({
    by: ["category"],
    _sum: { amount: true },
  });

  return data;
};

module.exports = {
  getSummary,
  getCategoryBreakdown,
};