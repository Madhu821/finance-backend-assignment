const dashboardService = require("../services/dashboardService");

const getSummary = async (req, res) => {
  try {
    const data = await dashboardService.getSummary();
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const data = await dashboardService.getCategoryBreakdown();
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getSummary,
  getCategories,
};