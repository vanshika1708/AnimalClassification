document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'Light4403@') {
      document.getElementById('login').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    } else {
      console.log('Invalid username or password');
    }
});

const rlbtn = document.getElementById('rlbtn');
const vlbtn = document.getElementById('vlbtn');
const vltxt = document.getElementById('vltxt');

vlbtn.addEventListener("click", function(){
    rlbtn.click();
});

rlbtn.addEventListener("change", function(){
    if(rlbtn.value){
        vltxt.innerHTML=rlbtn.value;
    }else{
        vltxt.innerHTML="No file";
    };
});