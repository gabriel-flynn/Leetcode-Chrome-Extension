export const generateDays = (patternArray:number[]=[1, 1, 2, 4, 7, 15], dateFormat:string="MM/DD/YY")  : string[] => {
    let date = new Date(Date.now());
    let dates : string[] = [];
    patternArray.forEach( daysToAdd => {
        date.setDate(date.getDate() + daysToAdd);
        dates.push(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()%100}`);
    });

    return dates;
}

export const getTodaysDateString = () => {
    const date = new Date(Date.now());
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()%100}`;
}