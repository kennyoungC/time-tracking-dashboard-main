`use strict`;

const activity = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const title = document.querySelectorAll(`.title`);
const hours = document.querySelectorAll(`.hours`);
const period = document.querySelectorAll(`.period`);
const daily = document.querySelector(`.daily`);
const monthly = document.querySelector(`.monthly`);
const weekly = document.querySelector(`.weekly`);
const openDaily = function () {
  title.forEach((tit, i) => {
    tit.textContent = activity[i].title;
    console.log(activity[i].title);
  });
  hours.forEach((hrs, i) => {
    hrs.textContent = `${activity[i].timeframes.daily.current}${
      activity[i].timeframes.daily.current <= 1 ? `hr` : `hrs`
    }`;
  });
  period.forEach((per, i) => {
    per.textContent = `Yesterday - ${activity[i].timeframes.daily.previous}${
      activity[i].timeframes.daily.previous <= 1 ? `hr` : `hrs`
    }`;
  });
  monthly.classList.remove(`active`);
  weekly.classList.remove(`active`);
  daily.classList.add(`active`);
};
const openWeekly = function () {
  title.forEach((tit, i) => {
    tit.textContent = activity[i].title;
    console.log(activity[i].title);
  });
  hours.forEach((hrs, i) => {
    hrs.textContent = `${activity[i].timeframes.weekly.current}hrs`;
  });
  period.forEach((per, i) => {
    per.textContent = `Last week - ${activity[i].timeframes.weekly.previous}hrs`;
  });
  daily.classList.remove(`active`);

  monthly.classList.remove(`active`);
  weekly.classList.add(`active`);
};
const openMonthly = function () {
  title.forEach((tit, i) => {
    tit.textContent = activity[i].title;
    console.log(activity[i].title);
  });
  hours.forEach((hrs, i) => {
    hrs.textContent = `${activity[i].timeframes.monthly.current}hrs`;
  });
  period.forEach((per, i) => {
    per.textContent = `Last Month - ${activity[i].timeframes.monthly.previous}hrs`;
  });
  weekly.classList.remove(`active`);
  daily.classList.remove(`active`);

  monthly.classList.add(`active`);
};
daily.addEventListener(`click`, openDaily);
monthly.addEventListener(`click`, openMonthly);
weekly.addEventListener(`click`, openWeekly);
openDaily();
