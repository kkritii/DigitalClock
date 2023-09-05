function getTimeData(time) {
  var date = time.getDate();
  var month = time.getMonth();
  var monList = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  month = monList[month];
  var year = time.getFullYear();
  var day = time.getDay();
  var dayList = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  day = dayList[day];

  day = checkTime(day);

  var h = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var period = "AM";

  if (h >= 12) {
    if (h > 12) {
      h = h - 12;
    }
    period = "PM";
  }
  else if (h == 0) {
    h = 12;
  }

  h = checkTime(h);
  m = checkTime(min);
  s = checkTime(sec);

  return { day, date, month, year, h, m, s, period }
}

function displayClock(timezone, dateId, clockId) {
  document.getElementById(dateId).innerHTML = timezone.day + "day, " + timezone.date + " " + timezone.month + " " + timezone.year;
  document.getElementById(clockId).innerHTML = timezone.h + ":" + timezone.m + ":" + timezone.s + " " + timezone.period;
}

function showTime() {

  var time = new Date();

  var edtOptions = { timeZone: 'America/New_York' };
  var edtTime = getTimeData(new Date(time.toLocaleString('en-US', edtOptions)));

  var nptOptions = { timeZone: 'Asia/Kathmandu' };
  var nepalTime = getTimeData(new Date(time.toLocaleString('en-US', nptOptions)));

  displayClock(nepalTime, 'nepalDate', 'nepalClock')
  displayClock(edtTime, 'edtDate', 'edtClock')

  setTimeout('showTime()', 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

showTime();