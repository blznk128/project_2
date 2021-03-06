/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Code here handles what happens when a user submits a new account.

console.log("Accounts.js loaded");

// ADD    ****************
$("#add-account").on("click", function(event) {
  event.preventDefault();

  console.log("Entere'd add account button.");
  // make a newAccount obj
  var newAccount = {
    first_name: $("#inputFirst")
      .val()
      .trim(),
    last_name: $("#inputLast")
      .val()
      .trim(),
    email: $("#inputEmail")
      .val()
      .trim(),
    account_key: $("#inputPassword")
      .val()
      .trim()
  };
  console.log(newAccount);
  if (
    newAccount.account_key.length > 0 &&
    newAccount.email.length > 0 &&
    newAccount.account_key.length > 0 &&
    newAccount.last_name.length > 0 &&
    newAccount.first_name.length > 0
  ) {
    $.ajax({
      type: "post",
      url: "/signup",
      data: newAccount
    }).then(function(data) {
      $(location).attr("href", "/landing");
    });
  } else {
    console.log("**Please fill out entire form**");
    $("#create-err-msg")
      .empty("")
      .text("**Please fill out entire form**");
  }
});
// UPDATE      **********************
$("#update-account").on("click", function(event) {
  event.preventDefault();

  // capture All changes
  var changeAccount = {
    first_name: $("#inputFirst")
      .val()
      .trim(),
    last_name: $("#inputLast")
      .val()
      .trim(),
    email: $("#inputEmail")
      .val()
      .trim(),
    account_key: $("#inputPassword")
      .val()
      .trim(),
    account_id: $("#account-number").attr("data-accountid")
  };
  $("#err-msg").empty("");
  // $("#change-account-modal").modal("show");
  console.log(changeAccount);

  if (
    changeAccount.account_id.length > 0 &&
    changeAccount.account_key.length > 0 &&
    changeAccount.email.length > 0 &&
    changeAccount.account_key.length > 0 &&
    changeAccount.last_name.length > 0 &&
    changeAccount.first_name.length > 0
  ) {
    $.ajax({
      type: "PUT",
      url:
        "/accounts/" +
        changeAccount.account_id +
        "/" +
        changeAccount.account_key,
      data: changeAccount
    }).then(function() {
      console.log("Updated account", changeAccount);
      // Reload the page to get the updated list
      res.redirect("/thelanding");
    });
  } else {
    console.log("**Please fill out entire form**");
    $("#update-err-msg")
      .empty("")
      .text("**Please fill out entire form**");
  }
});
