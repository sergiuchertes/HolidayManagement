function DashboardModel() {
    var _self = this;
    this.modalError = ko.observable(" ");
    this.test = "";
    this.aux = "";
    this.aux2 = ko.observable("test");
    this.users = ko.observableArray();
    this.teams = ko.observableArray();
    this.manageUser =ko.observable( new UserModel());


            
    this.initialize = function (data) {

        _self.manageUser.firstName = ko.observable("FirstName");
        _self.manageUser.lastName = ko.observable("LastName");
        _self.manageUser.email = ko.observable("name@domain.exe");
        _self.manageUser.password = ko.observable("Password1!");
        _self.manageUser.confirmPassword = ko.observable("Password1!");
        _self.manageUser.hireDate = ko.observable("01slash01slash1000");
        _self.manageUser.maxDays = ko.observable(0);
        _self.test = data.Test;
        _self.aux = "The first name";
        //_self.aux = data.Test;
        //_self.users = data.users;
        var users = _.map(data.UsersList, function(user){
            return new UserModel(user);
            });
        _self.users(users);


        var teams = _.map(data.Teams, function (team) {
            return new TeamModel(team);
        });
        _self.teams(teams);
    };





    this.createUser = function () {
        jQuery.post("/Account/CreateUser",
            {
                FirstName: _self.manageUser.firstName, LastName: _self.manageUser.lastName,
                Email: _self.manageUser.email, Password: _self.manageUser.password,
                ConfirmPassword: _self.manageUser.confirmPassword
            },
            function (data) {
                console.log("Success!" + data.messages);
                if (data.successed == true)               
                {
                    console.log("successed = true. the user's first name : " + data.newUser.FirstName + ", the user's last name: " + data.newUser.LastName + ". ");
                    //users.push({FirstName: data.newUser.FirstName, LastName: data.newUser.LastName});
                    var um = new UserModel();
                    um.firstName = data.newUser.FirstName;
                    um.lastName = data.newUser.LastName;
                    _self.users.push(um);
                }
                else if(data.successed == false){
                    _self.modalError(data.messages);
                }
            }, 
            "json"
            );
            
        
        
    };
    
}

function InitializeDashboardModel(data) {

    DashboardModel.instance = new DashboardModel();

    DashboardModel.instance.initialize(data);

    ko.applyBindings(DashboardModel.instance);
}