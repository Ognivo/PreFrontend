
var i = 0;
function knopka1(){
    document.location.href = "ya.ru";
};
function knopka2(){
    if((i%2)===0)
      elem.style.background = 'red';
    else
        elem.style.background = 'green';
    i++;
    if(i%5===0)
    {
    knop.style.marginTop = '50px';
    knop.style.marginLeft = '0px';
    }
    if(i%5===1)
    {
    knop.style.marginTop = '100px';
    knop.style.marginLeft = '100px';
    }
    if(i%5===2)
    {
    knop.style.marginTop = '150px';
    knop.style.marginLeft = '150px';
    }
    if(i%5===3)
    {
    knop.style.marginTop = '200px';
    knop.style.marginLeft = '200px';
    }
    if(i%5===4)
    {
    knop.style.marginTop = '250px';
    knop.style.marginLeft = '250px';
    }
};
function showNotification(options) {

    var notification = document.createElement('div');
    notification.className = "notification";
    var notification = document.createElement('div');
    notification.className = "notification";
    var notification = document.createElement('div');
    notification.className = "notification";
    if (options.cssText) {
      notification.style.cssText = options.cssText;
    }
    notification.style.top = (options.top || 0) + 'px'; // can use cssText
    notification.style.right = (options.right || 0) + 'px'; // can use cssText
    if (options.className) {
      notification.classList.add(options.className);
    }

    notification.innerHTML = options.html;
    document.body.appendChild(notification); // over cove
  }

  var a = 0;
    showNotification({
      top: 10,
      right: 10,
      html: 'Привет ' + ++a,
      className: "welcome"
    });


var elem = document.getElementById('container');
var knop = document.getElementById('knopik');