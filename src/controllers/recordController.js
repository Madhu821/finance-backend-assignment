const recordService = require("../services/recordService");

const getRecords = async (req, res) => {
    try {
        const records = await recordService.getRecords(req.query);
        res.json(records);
    }catch (err) {
        res.status(400).json({message: err.message});
    }
};

const createRecord = async (req, res) => {
    try {
        const {amount, type, category, date} = req.body;

        if (amount || amount<=0){
            return res.status(400).json({ message: "Amount must be greater than 0"});
        }

        if (!["INCOME", "EXPENSE"].includes(type)){
            return res.status(400).json({ message: "Invalid type"});
        }

        if (!category) {
            return res.status(400).json({ message: "Category is required"});
        }


        const record = await recordService.createRecord(
            req.body,
            req.user.id
        );
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};


const updateRecord = async (req, res) => {
    try {
        const record = await recordService.updateRecord(
            req.params.id,
            req.body
        );
        res.json(record);
    } catch (err){
        res.status(400).json({
            message: err.message,
        });
    }
};


const deleteRecord = async (req, res) => {
    try {
        await recordService.deleteRecord(req.params.id);

        res.json({
            message: "Record deleted Successfully",
        });
    }catch (err){
        res.status(400).json({
            message: err.message,
        });
    }
};

module.exports = { getRecords, createRecord, updateRecord, deleteRecord};