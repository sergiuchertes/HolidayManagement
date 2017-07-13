function DashboardModel() {
    var _self = this;

    this.test = "";
    this.aux = "";
    this.aux2 = ko.observable("test");
    this.users = ko.observableArray();
    this.teams = ko.observableArray();
    this.manageUser =ko.observable( new UserModel());



    this.initialize = function (data) {

        _self.manageUser.firstName = ko.observable("The manager user first name");
        _self.manageUser.lastName = ko.observable("The manager user last name");
        _self.manageUser.hireDate = ko.observable("01/01/1000");
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
    
}

function InitializeDashboardModel(data) {

    DashboardModel.instance = new DashboardModel();

    DashboardModel.instance.initialize(data);

    ko.applyBindings(DashboardModel.instance);
}