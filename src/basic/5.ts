enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

const isWeekend = (day: DayOfWeek): boolean => {
    const weekend = DayOfWeek.Saturday || DayOfWeek.Sunday;
    return day === weekend ? true : false;
};
