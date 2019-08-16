import Vue from "vue";
import CalendarService from "./CalendarService";
export default {
    name: "CalendarStore",
    data: function () {
        return {
            currentDate: new Date(),
            currentView: "DaySelect",
            stateMonth: true,
            numOfWeeksCustom: 6,
            yearId: 1970,
            monthId: false,
            dayId: false,
            from: false,
            to: false,
            checkedDays: {},
            defaultDays: {},
            options: {
                mondayFirst: true,
                multiselect: false
            },
            additional: {},

            MONTHS: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            WEEK: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            isCreated: false,
            originalOptions: {}
        }
    },
    computed: {
        dateId() {
            let dateId = CalendarService.getDayStr(
                this.yearId,
                CalendarService.getMonthById(this.monthId),
                CalendarService.getDayById(this.dayId)
            );
            console.log(`dateId is ${dateId}`);
            return dateId;
        },
        numOfWeeks() {
            return this.stateMonth ? 6 : this.numOfWeeksCustom;
        },
        month() {
            return CalendarService.getMonthById(this.monthId);
        },
        monthName() {
            return this.MONTHS[this.month];
        },
        multiselect() {
            return this.options.multiselect;
        }
    },
    watch: {
        dateId() { },
        numOfWeeks() {
            if (this.numOfWeeks != 6) this.currentView = "CustomSelect";
        },
        monthId() {
            if (this.isCreated) {
                let date = CalendarService.getDateByMonthId(this.monthId);
                this.dayId = CalendarService.getDayId(date.getTime());
                this.yearId = date.getFullYear();
            }
        },
        yearId() {
            if (this.isCreated) {
                let month = CalendarService.getMonthById(this.monthId);
                this.monthId = CalendarService.getMonthId(this.yearId, month);
            }
        },
        multiselect() {
            Vue.set(this, "checkedDays", {});
        }
    },
    methods: {
        setStore(options) {
            let timeStamp = this.currentDate.getTime();
            let y = this.currentDate.getFullYear();
            let m = this.currentDate.getMonth();
            this.yearId = y;
            this.monthId = CalendarService.getMonthId(y, m);
            this.dayId = CalendarService.getDayId(timeStamp);

            if (options) this.originalOptions = options;
            this.setStoreOptions(this.originalOptions);

            this.$nextTick(() => {
                this.isCreated = true;
            });
        },
        setStoreOptions(options) {
            for (let prop in options) {
                if (prop == "options" || prop == "additional") {
                    for (let option in options[prop])
                        Vue.set(this.options, option, options[prop][option]);
                }
                else Vue.set(this, prop, options[prop])
            }
        }
    },
};