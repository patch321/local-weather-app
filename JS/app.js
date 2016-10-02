var locLongitude = 0;
var locLatitude = 0;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'freegeoip.net/jsonp', true);

xhr.onload = function(){
	if (this.readyState === 4){
		if (this.status ===200){
		//Success!
		var data = JSON.parse(this.responseText);
		}
	}
	else{
		alert("Location cannot be found!");
	}
};

xhr.send();
xhr.null;