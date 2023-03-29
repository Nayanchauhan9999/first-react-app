import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const AgeCalculator = () => {
  const [state, setState] = useState({
    birthdate: "2000-01-31",
    currentdate: dayjs().format("YYYY-MM-DD"),
  });
  const [ageData, setAgeData] = useState({
    second: "",
    minute: "",
    hour: "",
    totalDay: "",
    week: "",
    weekWithDay: "",
    year: "",
    yearWithMonth: "",
    yearMonthAndDay: "",
  });
  const [show, setShow] = useState(false);
  useEffect(() => {}, [show]);

  const handleSelectDate = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const calculateAge = () => {
    const birthdateTime = new Date(state.birthdate).getTime();
    const currentdateTime = new Date(state.currentdate).getTime();
    const milliSecondBetweenTwoDate = birthdateTime - currentdateTime;
    const secondBetweenTwoDate = Math.abs(milliSecondBetweenTwoDate / 1000);
    const minuteBetweenTwoDate = Math.abs(secondBetweenTwoDate / 60);
    const hourBetweenTwoDate = Math.abs(minuteBetweenTwoDate / 60);
    const dayBetweenTwoDate = Math.abs(hourBetweenTwoDate / 24);

    // week + day
    const weekAndDayBetweenTwoDate1 = Math.trunc(dayBetweenTwoDate / 7);
    const weekAndDayBetweenTwoDate2 = (dayBetweenTwoDate / 7)
      .toString()
      .split(".")[1][0];

    const birthdateYear = new Date(state.birthdate).getFullYear();
    const currentdateYear = new Date(state.currentdate).getFullYear();
    let yearDifference = currentdateYear - birthdateYear;
    const birthdateMonth = new Date(state.birthdate).getMonth();
    const currentdateMonth = new Date(state.currentdate).getMonth();
    let monthDifference = currentdateMonth - birthdateMonth;
    const bDate = new Date(state.birthdate).getDate();
    const cDate = new Date(state.currentdate).getDate();
    let dayDifference = cDate - bDate;
    const february =
      (birthdateYear % 4 === 0 && birthdateYear % 100 !== 0) ||
      birthdateYear % 400 === 0
        ? 29
        : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }
    if (dayDifference < 0) {
      if (monthDifference < 0) {
        yearDifference--;
        monthDifference = 11;
      } else {
        monthDifference--;
      }
      dayDifference += daysInMonth[birthdateMonth];
    }
    setAgeData({
      second: secondBetweenTwoDate.toLocaleString("hi-IN"),
      minute: minuteBetweenTwoDate.toLocaleString("hi-IN"),
      hour: hourBetweenTwoDate.toLocaleString("hi-IN"),
      totalDay: dayBetweenTwoDate.toLocaleString("hi-IN"),
      week: weekAndDayBetweenTwoDate1.toLocaleString("hi-IN"),
      weekWithDay: weekAndDayBetweenTwoDate2.toLocaleString("hi-IN"),
      year: yearDifference.toLocaleString("hi-IN"),
      yearWithMonth: monthDifference.toLocaleString("hi-IN"),
      yearMonthAndDay: dayDifference.toLocaleString("hi-IN"),
    });
    setShow(true);
  };
  return (
    <div>
      <div className="container text-center">
        <h2>Age Calculator</h2>
        <label htmlFor="birthdate">Your Birthdate : </label>
        <input
          type="date"
          value={state.birthdate}
          onChange={handleSelectDate}
          name="birthdate"
        />
        <br />
        <br />
        <label htmlFor="birthdate">Current Date : </label>
        <input
          type="date"
          value={state.currentdate}
          onChange={handleSelectDate}
          name="currentdate"
        />
        <br />
        <br />
        <button className="btn btn-primary" onClick={calculateAge}>
          Calculate
        </button>
        {show ? (
          <div className="container agecalculatordiv">
            {!ageData ? (
              <h4 className="display-6">
                Please wait, Your PC is not a superman!
              </h4>
            ) : (
              <div className="agecalculator mt-3">
                <h2>
                  <span className="text-danger">{ageData.totalDay}</span> Days
                </h2>
                <h2>
                  <span className="text-danger">{ageData.hour} </span>Hours
                </h2>
                <h2>
                  <span className="text-danger">{ageData.minute}</span> Minutes
                </h2>
                <h2>
                  <span className="text-danger">{ageData.second} </span>Seconds
                </h2>
                <h2>
                  <span className="text-danger">{ageData.week}</span> Weeks and
                  <span className="text-danger"> {ageData.weekWithDay} </span>
                  Days
                </h2>
                <h2>
                  <span className="text-danger"> {ageData.year} </span> Year
                  <span className="text-danger"> {ageData.yearWithMonth} </span>
                  Month And
                  <span className="text-danger">
                    {" "}
                    {ageData.yearMonthAndDay}{" "}
                  </span>
                  Days
                </h2>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AgeCalculator;
