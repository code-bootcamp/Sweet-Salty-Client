export const getDate = (date: string | number | Date) => {
    const newdate = new Date(date);
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() + 1;
    const dd = newdate.getDate();
    return `${yyyy}년 ${mm}월 ${dd}일`;
};

export const getDateDot = (date: string | number | Date) => {
    const newdate = new Date(date);
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() + 1;
    const dd = newdate.getDate();
    return `${yyyy}.${mm}.${dd}`;
};