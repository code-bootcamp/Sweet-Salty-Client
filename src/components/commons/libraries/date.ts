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

export const timeForToday=(date: string | number | Date)=>{
    const today = new Date();
        const timeValue = new Date(date);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return getDate(date);
}