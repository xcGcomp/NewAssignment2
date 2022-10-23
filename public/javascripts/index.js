if (document.querySelector("#form")) {
  document.querySelector("#submit").addEventListener("click", function () {
    const data = new FormData(document.getElementById("form"));
    const value = Object.fromEntries(data.entries());
    email: "";
    firstName: "";
    lastName: "";
    console.log(value);

    if (!value.email) {
      alert("pls input email!");
      return;
    }
    if (!value.firstName) {
      alert("pls input firstName!");
      return;
    }
    if (!value.lastName) {
      alert("pls input lastName!");
      return;
    }
    if (!value.content) {
      alert("pls input message!");
      return;
    }
    if (!value.phone) {
      alert("pls input phone!");
      return;
    }
    alert("thanks , i Will contact you sooner");
    document.location = "/";
  });
}



if (document.querySelector("#loginform")) {
  document.querySelector("#loginsubmit").addEventListener("click", function () {
    const data = new FormData(document.getElementById("loginform"));
    const values = Object.fromEntries(data.entries());
    if (!values.username || !values.password) {
      alert("form fileds must no be empty");
    }
    var options = {
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(values) ,
    };
    fetch("/auth/login", options)
      .then(function (res) {
        if(res.status == 200){
          return res.json();
        }else{
          alert("invalid authorized info")
        }
      })
      // the second then returns value
      .then(function (response) {
          if(response.code ==1){
            alert("login successfully");
            location.href="/contact/list"
            localStorage.setItem('token',response.token);
          }else{
            alert("invalid authorized info")
          }
      });
  });
}
