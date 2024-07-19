import {differenceInYears} from "date-fns";

export const calculateAge = (dob: Date) => differenceInYears(new Date(), dob);