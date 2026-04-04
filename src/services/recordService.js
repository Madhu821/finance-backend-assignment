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


const updateRecord = async (id, data) => {
    return prisma.record.update({
        where: {id: Number(id)},
        data: {
            amount: data.amount,
            type: data.type,
            category: data.category,
            date: data.date ? new Date(data.date) : undefined,
            notes: data.notes,
        },
    });
};

const deleteRecord = async(id) => {
    return prisma.record.delete({
        where: { id: Number(id)},
    });
};

module.exports = {
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
}