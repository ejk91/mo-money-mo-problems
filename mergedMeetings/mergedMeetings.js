/*
Your company built an in-house calendar tool
called HiCal. You want to add a feature to see the
times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting
is stored as objects↴ with attributes startTime and endTime . These integers represent
the number of 30-minute blocks past 9:00am.

For example:

{startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time ranges and returns
an array of condensed ranges.

For example, given:
[
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10},
]

your function would return:

[
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.
Write a solution that's efficient even when we can't put a nice upper bound on the numbers
representing our time ranges. Here we've simplifed our times down to the number of 30-minute slots
past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In
any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an
upper bound.
*/

var mergeMeetings = function(meetings){
  let results = [];
  results.push(meetings[0])
  // loop through meetings times
  // for (let i = 1; i < meetings.length; i++) {
  //   console.log('i: ', i, results);
  //   // last meeting slot
  //   let lastMeeting = results.pop();
  //   let currentMeeting = meetings[i];

  //   // if start time is earlier 
  //     // update start time

  //   if (currentMeeting.startTime > lastMeeting.endTime) {
  //     results.push(currentMeeting);
  //   } else if (currentMeeting.startTime < lastMeeting.endTime && currentMeeting.endTime > lastMeeting.endTime) {
  //     lastMeeting.endTime = currentMeeting.endTime;
  //     results.push(lastMeeting);
  //   } else if (currentMeeting.startTime < lastMeeting.startTime) {
  //     lastMeeting.startTime = currentMeeting.startTime;
  //     results.push(lastMeeting);
  //   } 
  // }

  meetings.forEach((meeting, i) => {
    let currentMeeting = meeting;
    let lastMeeting = results.pop();
    console.log('i: ', i, currentMeeting, lastMeeting)

    if (currentMeeting.startTime > lastMeeting.endTime) {
      console.log(1);
      results.push(lastMeeting);
      results.push(currentMeeting);
      return;
    } else if (currentMeeting.startTime < lastMeeting.endTime && currentMeeting.endTime > lastMeeting.endTime) {
      console.log(2);
      lastMeeting.endTime = currentMeeting.endTime;
      console.log(lastMeeting)
      results.push(lastMeeting);
      return;
    } else if (currentMeeting.startTime < lastMeeting.startTime) {
      console.log(3);
      lastMeeting.startTime = currentMeeting.startTime;
      results.push(lastMeeting);
      return;
    } else {
      // put meeting back in
      results.push(lastMeeting);
      console.log(results)
    }
  })


  return results;


}


console.log('answer', mergeMeetings(
  [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10},
  ]
));










