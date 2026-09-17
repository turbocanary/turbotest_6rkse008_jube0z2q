function anotherInsecurePassword() {
  // GOOD: use a cryptographically secure random suffix
  var crypto = require("crypto");
  var suffix = crypto.randomBytes(16).toString("hex");
  var password = "sssAAAA" + suffix;
  return password;
}