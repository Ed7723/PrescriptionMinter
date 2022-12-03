//This component is used as a dynamic header file to change the headers of the table in tableform as necessary.
//Header is the display variable, accessor is the id we use to target that part and the filter is the filter used.

import TableFilter from "./tablefilter";

export const COLUMNS = [
    {
        Header:'First Name',
        accessor:'firstName',
        Filter: TableFilter,
    },
    {
        Header:'Last Name',
        accessor:'lastName',
        Filter: TableFilter,
    },
    {
        Header:'Date Of Birth',
        accessor:'dob',
        Filter: TableFilter,
    },
    {
        Header:'Sex',
        accessor:'sex',
        Filter: TableFilter,
    },
    {
        Header:'ID',
        accessor:'patientID',
        Filter: TableFilter,
    },
];