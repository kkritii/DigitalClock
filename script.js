function showTime(){
    var time = new Date();

    var date = time.getDate();
    var month = time.getMonth();
    var monList = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    month = monList[month];
    var year = time.getFullYear();
    var day = time.getDay();
    var dayList =["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"]; 
    day = dayList[day];
    day = checkTime(day);

    

    var h = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var period = "AM";

    if (h == 0){
        h = 12;
    }
    if ( h > 12){
        h = h-12;
        period = "PM";
    }

    h = checkTime(h)
    m = checkTime(min);
    s = checkTime(sec);

    document.getElementById('date').innerHTML = day + "day, " + date + " " + month + " " + year;

    

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + period;
    
    setTimeout('showTime()',1000);
}

function checkTime(i){
    if (i<10){
        i = "0" + i;
    }
    return i;
}
showTime();