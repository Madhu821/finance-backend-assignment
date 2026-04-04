const recordService = require("../services/recordService");

const getRecords = async (req, res) => {
    try {
        const records = await recordService.getRecords();
        res.json(records);
    }catch (err) {
        res.status(400).json({message: err.message});
    }
};

const createRecord = async (req, res) => {
    try {
        const record = await recordService.createRecord(
            req.body,
            req.user.id
        );
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = { getRecords, createRecord};