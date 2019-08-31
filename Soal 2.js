function is_username_valid(username){
  var username = /^[^0-9][a-zA-Z]/g;
  
  if(username.length = [5-9]  {
    	return true;
    }
    return false;
}
function is_password_valid(password) {
  
	var lowercaseRe = /[a-z]/g;
  
  var uppercaseRe = /[A-Z]{+}/g;

  
  var numberRe = /[0-9]/g;
  
  var specialRe = /[=]{1}/g;

  if(password.length = 8
     && lowercaseRe.test(password)
     && uppercaseRe.test(password)
     && numberRe.test(password)
     && specialRe.test(password)) {
     return true;
  }

  return false;
}
