const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysX = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

class CalendarServiceClass {
    constructor() { }

    getMonthId(y, m) {
        return y * 12 + m;
    }
    getDayId(timeStamp) {
        return Math.floor(timeStamp / 86400000);
    }
    getMonthById(monthId, withZero) {
        let y = Math.floor(monthId / 12);
        let m = monthId - (y * 12);
        return withZero ? this.zeroToNum(m) : m;
    }
    getDayById(dayId, withZero) {
        let t = new Date(dayId * 86400000);
        let d = t.getDate();
        return withZero ? this.zeroToNum(d) : d;
    }

    getYearByMonthId(monthId) {
        return Math.floor(monthId / 12);
    }
    getMonthByMonthId(year, monthId) {
        return monthId - (year * 12);
    }
    getMonthByDayId(dayId) {
        let t = new Date(dayId * 86400000);
        return t.getMonth();
    }

    getDateByMonthId(monthId) {
        let year = this.getYearByMonthId(monthId);
        let month = this.getMonthByMonthId(year, monthId);
        return new Date(`${year}-${this.zeroToNum(month + 1)}`);
    }

    getDayStr(year, month, day) {
        return `${year}-${this.zeroToNum(month + 1)}-${this.zeroToNum(day)}`;
    }

    zeroToNum(num) {
        num = num.toString();
        return num.length < 2 ? '0' + num : num;
    }

    getDaysInMonth(year, month) {
        if ((!(year % 4) && !!(year % 100)) || !(year % 400))
            return daysX[month];
        else
            return days[month];
    }

    getDaysInMonthByDayId(dayId) {
        let date = new Date(dayId * 86400000);
        return this.getDaysInMonth(
            date.getFullYear(),
            date.getMonth()
        );
    }

    getWeeks(dayId, numOfWeeks, mondayFirst) {
        let weeks = [];
        if (numOfWeeks == 6) {
            let day = this.getDayById(dayId);
            // let daysNum = this.getDaysInMonthByDayId(dayId);
            for (let i = 1; i <= 36; i += 7) {
                let id = (dayId - day + i);
                weeks.push({
                    id: `week${id}`,
                    week: this.getWeek(id, mondayFirst)
                });
            }
        } else {
            for (let i = 0; i < numOfWeeks * 7; i += 7, dayId += 7)
                weeks.push({
                    id: `week${dayId}`,
                    week: this.getWeek(dayId, mondayFirst)
                });
        }
        return weeks;
    }

    getWeek(dayId, mondayFirst) {
        let t = new Date(dayId * 86400000);
        let mid = t.getDay();
        let arr = [];

        if (mondayFirst) {
            if (mid == 0)
                for (let i = 0; i < 7; i++)
                    arr.unshift(dayId - i);
            else
                for (let i = 1; i < 8; i++)
                    arr.push(dayId - (mid - i));
        }
        else {
            for (let i = 0; i < 7; i++)
                arr.push(dayId - (mid - i));
        }
        return arr;
    }

    get10Years(year) {
        let years = [year - year % 10];
        for (let i = 1; i <= 10; i++)
            years.push(years[0] + i);
        return years;

    }

    /* For another Service */

    getWeeksInMonth(monthId, mondayFirst) {
        let monthObj = this.getMonthObj(monthId);
        let weeksInMonth = [];
        for (let i = 1; (i - monthObj.days) <= 7; i += 7) {
            let dayNM = i > monthObj.days ? monthObj.days : i;
            let dayStr = this.getDayStr(monthObj.year, monthObj.month, dayNM);

            dayNM = new Date(dayStr);
            dayNM = Math.floor(dayNM.getTime() / 86400000);
            weeksInMonth.push(this.getWeek(dayNM, mondayFirst));
        }
        if (weeksInMonth[weeksInMonth.length - 1][0] == weeksInMonth[weeksInMonth.length - 2][0])
            weeksInMonth.pop();
        return weeksInMonth;
    }

    getMonthObj(monthId) {
        let year = this.getYearByMonthId(monthId);
        let month = this.getYearByMonthId(year, monthId);

        let monthObj = {
            year,
            month,
            days: null,
        }

        monthObj.days = this.getDaysInMonth(year, month);
        return monthObj;
    }

    addHourDelimiter(value) {
        return value.slice(0, 2) + ":" + value.slice(2, 4);
    }

    getScheduleCopy(schedule) {
        return JSON.parse(JSON.stringify(schedule));
    }

    getIntHours(time) {
        if (time.length < 2) return "";
        time = time.split(":").join("");
        return parseInt(time);
    }

    convertTime24to12(date) {
        date = date.split(":");
        var hours = parseInt(date[0]);
        var minutes = parseInt(date[1]);
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes;
        return {
            time: strTime,
            ampm: ampm
        }
    }

    convertTime12to24(time12h) {
        const [time, modifier] = time12h.split(' ');

        let [hours, minutes] = time.split(':');

        if (hours === '12') {
            hours = '00';
        }

        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}`;
    }

    getWeekRefByDateRef(ref) {
        let date = new Date(ref.split("d").join());
        return WEEK[date.getDay()];
    }
}

const CalendarService = new CalendarServiceClass();
export default CalendarService;