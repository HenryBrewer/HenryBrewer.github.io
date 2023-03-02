function copyPassword() {
    var password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
  }
