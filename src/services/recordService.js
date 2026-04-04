const prisma = require("../config/prisma");

const getRecords = async () => {
    return prisma.record.findMany({
        orderBy: {date: "desc"},
    });
};

const createRecord = async (data, userId) => {
    return prisma.record.create({
        data: {
            amount: data.amount,
            type: data.type,
            category: data.category,
            date: new Date(data.date),
            notes: data.notes,
            userId,
        },       
    });
};

module.exports = { getRecords, createRecord };