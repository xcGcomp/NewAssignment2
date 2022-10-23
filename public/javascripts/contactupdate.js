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
    getrecord();
  });

function deleteitem(id) {
  if (confirm("are you sure delete it ")) {
    fetch("/contact/delete/" + id, getoptions("DELETE"))
      .then(function (res) {
        if (res.status == 200) {
          return res.json();
        } else {
          alert("err infomations");
        }
      })
      .then(function (res) {
        if (res.code == 1) {
          alert("delete successfully!");
          location.href = "/contact/list";
        }
      });
  }
}

function updaterecord() {
  const data = new FormData(document.getElementById("contactupdateform"));
  const values = Object.fromEntries(data.entries());
  if (!values.email || !values.contactName || !values.contactNumber) {
    alert("form fileds must no be empty");
  }
  var options = getoptions("PUT");
  options.body = JSON.stringify(values);
  fetch("/contact/update/" + id, options)
    .then(function (res) {
      if (res.status == 200) {
        return res.json();
      } else {
        alert("invalid authorized info");
      }
    })

    .then(function (response) {
      if (response.code == 1) {
        alert("update successfully");
        location.href = "/contact/list";
      } else {
        alert("update failed");
      }
    });
}
function getrecord() {
  fetch("/contact/get/" + id, getoptions("GET"))
    .then(function (res) {
      if (res.status == 200) {
        return res.json();
      } else {
        location.href = "/auth/login";
      }
    })
    .then(function (res) {
      if (res.code == 1) {
        document.getElementById("email").value = res.contact.email;
        document.getElementById("contactName").value = res.contact.contactName;
        document.getElementById("contactNumber").value =
          res.contact.contactNumber;

        document.getElementById("submitbtn").addEventListener("click", () => {
          updaterecord();
        });
        document.getElementById("delete").addEventListener("click", () => {
          deleteitem(id);
        });
        document.getElementById("cancel").addEventListener("click", () => {
          location.href = "/contact/list";
        });
      } else {
        alert("error!");
      }
    });
}
