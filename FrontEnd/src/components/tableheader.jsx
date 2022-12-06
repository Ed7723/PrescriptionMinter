//This component is used as a dynamic header file to change the headers of the table in tableform as necessary.
//Header is the display variable, accessor is the id we use to target that part and the filter is the filter used.
export const COLUMNS = [
    {
        Header:'First Name',
        accessor:'firstName',
    },
    {
        Header:'Last Name',
        accessor:'lastName',
    },
    {
        Header:'Date Of Birth',
        accessor:'dateOfBirth',
    },
    {
        Header:'Sex',
        accessor:'sex',
    },
];