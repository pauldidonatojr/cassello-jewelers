import axios from 'axios';

const apiKey = 'keynvtUnmx7npeUX0';
const baseId = 'appN7zPWYUiqvcaL1';

const instance = axios.create({
    baseURL: `https://api.airtable.com/v0/${baseId}`,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  export const fetchRecords = async (tableName) => {
    const res = await instance.get(`/${tableName}`);
    return res.data.records;
  };

  export const createRecord = async (tableName, data) => {
    const res = await instance.post(`/${tableName}`, {
      fields: data,
    });
    return res.data;
  };