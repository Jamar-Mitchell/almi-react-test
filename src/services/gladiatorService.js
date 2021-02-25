import csvFile from "../assets/gladiators.csv";
import Papa from "papaparse";
import { forwardRef } from "react";

var records = "";

const fetchData = () => {
  return new Promise((res, err) => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      complete: function (input) {
        records = input.data;
        res(records);
      },
    });
  });
};

const GladiatorService = {
  get: async function () {
    let records = await fetchData();
    //console.log(records);
    return records;
  },
};

export default GladiatorService;
