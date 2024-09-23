function sendNotification(email) {
    if (!email.includes("@")) return "Invalid email";
    let emailAray = email.split("@");
    let emailUser = emailAray[0];
    let domain = emailAray[1];
    return `${emailUser} sent you an email from ${domain}`;
}
  console.log(sendNotification("zihad@gmail.com"))