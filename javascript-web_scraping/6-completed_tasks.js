#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const tasks = JSON.parse(body);
  const completed = {};
  for (const task of tasks) {
    if (task.completed === true) {
      const key = task.userId.toString();
      if (completed[key] === undefined) {
        completed[key] = 0;
      }
        completed[key] = completed[key] + 1;
    }
  }
  console.log(completed);
});
