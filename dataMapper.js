const fs = require('fs').promises;
const path = require('path');

const dataMapper = {
    async getAllDestination() {
        try {
            const filePath = path.join(__dirname, 'starter-code/data.json');
            const rawData = await fs.readFile(filePath, 'utf-8');
            const destinations = JSON.parse(rawData).destinations;
            return destinations;
        } catch (error) {
            throw new Error(`Error reading JSON file: ${error.message}`);
        }
    },
    async getAllCrew() {
        try {
            const filePath = path.join(__dirname, 'starter-code/data.json');
            const rawData = await fs.readFile(filePath, 'utf-8');
            const crews = JSON.parse(rawData).crew;
            return crews;
        } catch (error) {
            throw new Error(`Error reading JSON file: ${error.message}`);
        }
    },
    async getAllTechnology() {
        try {
            const filePath = path.join(__dirname, 'starter-code/data.json');
            const rawData = await fs.readFile(filePath, 'utf-8');
            const crews = JSON.parse(rawData).technology;
            return crews;
        } catch (error) {
            throw new Error(`Error reading JSON file: ${error.message}`);
        }
}}

module.exports = dataMapper;