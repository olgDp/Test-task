import React from "react";

import { compose } from "./helpers";

import { monthsArr, colors } from "./info";

const MonthList = ({ data, setPeopleList }) => {
  const getMonth = obj => {
    const ms = Date.parse(obj.dob);
    const month = new Date(ms).getMonth();

    return month;
  };

  const countUsersInMonth = num => {
    return data.reduce((res, next) => {
      const month = getMonth(next);

      return num === month ? res + 1 : res;
    }, 0);
  };

  const getColorForMonth = count => {
    if (count <= 2) return colors.grey;
    else if (count >= 3 && count <= 6) return colors.blue;
    else if (count >= 7 && count <= 10) return colors.green;
    else return colors.red;
  };

  const getPeopleByMonth = num => {
    const list = data.reduce((res, next) => {
      const month = getMonth(next);
      const { id, firstName, lastName } = next;

      return month === num ? [...res, { id, firstName, lastName }] : res;
    }, []);

    setPeopleList(list);
  };

  const getResultColor = num => {
    return compose(getColorForMonth, countUsersInMonth)(num);
  };

  return (
    <ul className="list">
      {monthsArr.map((month, i) => {
        const { from, to } = getResultColor(i);

        return (
          <li
            className="list-item"
            key={month}
            style={{
              background: `linear-gradient(to right, ${from}, ${to})`
            }}
            onMouseOver={() => getPeopleByMonth(i)}
            onMouseLeave={() => setPeopleList(null)}
          >
            {month.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};

export default MonthList;
