import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "./dataFetchReducer";
import MonthList from "./monthList";
import UsersList from "./usersList";
import Loading from "./loading";
import Error from "./error";
import "./main.scss";

const App = () => {
  const [{ data, isLoading, isError }, dispatch] = useReducer(reducer, {
    data: null,
    isLoading: false,
    isError: false
  });

  const [peopleList, setPeopleList] = useState(null);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const { data } = await axios.get(
          "https://yalantis-react-school.herokuapp.com/api/task0/users"
        );
        if (!didCancel) dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        if (!didCancel) dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}

      {data && (
        <div className="main">
          <MonthList data={data} setPeopleList={setPeopleList} />
          <UsersList peopleList={peopleList} />
        </div>
      )}
    </div>
  );
};

export default App;
