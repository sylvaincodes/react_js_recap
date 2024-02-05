// import { createAsyncThunk } from "@reduxjs/toolkit";
// const API_URL = "https://graphql-api-todos-app.onrender.com/graphql";
import axios from "axios";

const API_URL = "http://localhost:4000/graphql/";

export const fetchTasks = (setTodos) => {
  axios
    .post(
      API_URL,
      {
        query: `query {
        allTasks {
        _id
        id
        content
        done
      }
    }`,
      },
      {
        headers: {
          // Authorization: "bearer our-bearer-token",
        },
      }
    )
    .then((response) => {
      setTodos(response.data.data.allTasks);
    });
};

export const addTask = (values) => {
  axios
    .post(
      API_URL,
      {
        query: `mutation {
              addTask(content: "${values.task}") {
                _id
                content
                done
              }
           }`,
      },
      {
        headers: {
          // Authorization: "bearer our-bearer-token",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    });
};

export const updateTask = async (single) => {
  console.log(single);
  await axios
    .post(
      API_URL,
      {
        query: `mutation {
          updateTask(id:"${single.id}", content: "${
          single.content
        }",done: ${!single.done}) {
            _id
            content
            done
          }
        }`,
      },
      {
        headers: {
          // Authorization: "bearer our-bearer-token",
        },
      }
    )
    .then(() => {});
};
