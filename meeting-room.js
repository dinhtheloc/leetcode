function canAttendMeetings(intervals) {
    if(intervals.length < 2) return true;
    intervals.soft((a,b) => {return a[0] - b[0]});

    let end = intervals[0][1];

    for (let index = 1; index < intervals.length; index++) {
        if(end > intervals[i][0]) return false;
        if(end < intervals[i][1]) end = intervals[i][1];
        
    }
    return true;
}

// example1: 
// input [[0,30], [5,10], [15,20]]
// output false

// example2
// input: [[7,10], [2,4]]
// output: true