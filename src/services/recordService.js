const prisma = require("../config/prisma");

const getRecords = async (filters) => {
    const where = {};

    if (filters.type){
        where.type = filters.type;
    }

    if (filters.category){
        where.category = filters.category;
    }

    if (filters.startDate || filters.endDate){
        where.date = {};

        if (filters.startDate){
            where.date.gte = new Date(filters.startDate);
        }
        if (filters.endDate){
            where.date.lte = new Date(filters.endDate);
        }
    }
    return prisma.record.findMany({
        where,
        orderBy: { date: "desc"},
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