function UserModel(data) {
    var _self = this;
    this.email = "initial email";
    this.password = "Password1!";
    this.confirmPassword = "Password1!";
    this.firstName="initial name";
    this.lastName="initial lastname";
    this.hireDate;
    this.maxDays;

    if (data != null) {
        _self.email = data.Email;
        //_self.password = data.password
        _self.firstName = data.FirstName;
        _self.lastName = data.LastName;
        _self.hireDate = data.HireDate;
        _self.maxDays = data.MaxDays;
    }
}