let d = new Date()
document.querySelector('#secondi').innerHTML = d

var data = new Date(2018, 11, 24, 10, 33, 30, 7663)
document.write(data)

const r = new Date("October 13, 2014 11:13:00");
document.write("<br>" + r)

let f = Date.parse(2022)
document.write("<br>" + f)

const a = new Date(0);
document.write("<br>" + a)

document.write("<br>" + r.getMinutes())

document.write("<br>" + d.getDay())

document.write("<br>" + d.getHours() + ":" + d.getMinutes() + ":"  + d.getSeconds()  + "<br>" )

document.write(d.toLocaleDateString('it-IT'))