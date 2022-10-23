function getoptions(method) {
  var options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
  };
  return options;
}
fetch("/auth/check", getoptions("GET"))
  .then(function (res) {
    if (res.status == 200) {
      return res.json();
    } else {
      location.href = "/auth/login";
    }
  })
  .then(function (response) {
    getList();
    console.log(response);
  });

function deleteitem(id) {
  if (confirm("are you sure delete it ")) {
    fetch("/contact/delete/"+id, getoptions("DELETE"))
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        } else {
          alert("err infomations");
        }
      })
      .then(function (res) {
        if(res.code == 1){
          alert("delete successfully!")
          getList();
        }
      });
  }
}
function updateitem(id) {
  location.href="/contact/update/"+id
}

function getList() {
  fetch("/contact/lists", getoptions("GET"))
    .then(function (res) {
      if (res.status == 200) {
        return res.json();
      } else {
        alert("err infomations");
      }
    })
    .then(function (res) {
      console.log(res);
      if (res.code == 1) {
        var listtbody = document.getElementById("listtbody");
        listtbody.innerHTML = "";
        res.contacts.forEach((item) => {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          td1.innerHTML = item.contactName;
          tr.appendChild(td1);
          var td2 = document.createElement("td");
          td2.innerHTML = item.email;
          tr.appendChild(td2);
          var td3 = document.createElement("td");
          td3.innerHTML = item.contactNumber;
          tr.appendChild(td3);

          var delBtn = document.createElement("button");
          delBtn.innerHTML = "delete";
          delBtn.addEventListener("click", () => {
            deleteitem(item._id);
          });
          var upBtn = document.createElement("button");
          upBtn.addEventListener("click", () => {
            updateitem(item._id);
          });
          upBtn.innerHTML = "update";
          var td4 = document.createElement("td");
          td4.style.display = "flex";
          td4.style.justifyContent = "space-around";
          td4.appendChild(upBtn);
          td4.appendChild(delBtn);
          tr.appendChild(td4);

          listtbody.appendChild(tr);
        });
      }
    });
}
