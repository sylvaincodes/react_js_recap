import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "https://graphql-api-todos-app.onrender.com/graphql";
// const API_URL = "http://localhost:4000/graphql";

export const getTasks = createAsyncThunk("getTasks", async () => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
       allTasks {
         _id
         content
         done
       }
     }`,
    }),
  });
  const data = await res.json();
  return data.data.allTasks;
});

export const setTask = (content) =>
  createAsyncThunk("addTask", async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
        addTask(content: "${content}") {
          _id
          content
          done
        }
     }`,
      }),
    });
    const data = await res.json();
    return data.data.addTask;
  });
