var variable = ko.observable("Global variable");
var Operation;
var dashBoardInstanceVar = 0;
function DashboardModel() {
    var today = new Date();
    var currentYear = today.getYear();
    var currentMonth = today.getMonth();
    this.mmm = ko.observable(today.t);
    this.mm = ko.observable(today.getMonth().toString());
    var _self = this;
    //var _
    this.modalError = ko.observable(" beginning ");
    this.test = "";
    this.aux = "";
    this.aux2 = ko.observable("test");
    this.users = ko.observableArray();
    this.teams = ko.observableArray();
    this.vacations = ko.observableArray();
    this.monthDays = ko.observableArray();
    this.bankHolidays = ko.observableArray();
    this.manageUser =ko.observable( new UserModel());


    var setDateWithZero = function (date) {
        if (date < 10)
            date = "0" + date;

        return date;
    };

    var dateTimeReviver = function (value) {
        var match;

        if (typeof value === 'string') {
            match = /\/Date\((\d*)\)\//.exec(value);
            if (match) {
                var date = new Date(+match[1]);
                return date.getFullYear() + "-" + setDateWithZero(date.getMonth() + 1) + "-" + setDateWithZero(date.getDate()) +
                       "T" + setDateWithZero(date.getHours()) + ":" + setDateWithZero(date.getMinutes()) + ":" + setDateWithZero(date.getSeconds()) + "." + date.getMilliseconds();
            }
        }
        return value;
    };

            
    this.initialize = function (data) {
        

        _self.manageUser.firstName = ko.observable("FirstName" + variable());
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

        var monthDays = _.map(data.CalendarViewModel.MonthDays, function(MonthDay){
            return new MonthDayModel(MonthDay);
        });
        _self.monthDays(monthDays);
        var vacations = _.map(data.CalendarViewModel.Vacations, function (Vacation) {
            return new VacationModel(Vacation);
        });
        _self.vacations(vacations);
        var bankHolidays = _.map(data.CalendarViewModel.BankHolidays, function (BankHoliday) {
            return new BankHolidayModel(BankHoliday);
        });
        _self.bankHolidays(bankHolidays);
        ///////////////////////////////

        _self.modalError(variable());
        ///////////////////////////////


        var monthDaysDim = _self.monthDays().length;
        var bankHolidaysDim = _self.bankHolidays().length;
        var i;
        var j;
        for( i=0;i<monthDaysDim;i++)
        {
            for(j=0;j<bankHolidaysDim;j++)
            {
                if((_self.monthDays()[i].day == _self.bankHolidays()[j].day)&&(_self.bankHolidays()[j].month == 1))
                {
                    _self.monthDays()[i].isFreeDay = true;
                }
            }
        }



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
                    um.Id = data.newUser.UserID;
                    _self.users.push(um);
                }
                else if(data.successed == false){
                    _self.modalError(data.messages);
                }
            }, 
            "json"
            );
            
        
        
    };
    this.changeMonth = function (year, month) {
        var i;
        jQuery.post("/Dashboard/Vacations",
            {
                Year:year, Month:month
            },
            function (data) {
                if (data.successed == true)
                {
                    console.log("Success! The day specified by the numbers is: " + data.messages);
                    _self.monthDays.removeAll();
                    var aux = _self.monthDays.length;

                    for(i=0;i<data.dimension;i++)
                    {
                        var mdm = new MonthDayModel();
                        mdm.day = data.newCalendar.MonthDays[i].Day;
                        mdm.isFreeDay = data.newCalendar.MonthDays[i].IsFreeDay;
                        mdm.description = data.newCalendar.MonthDays[i].Description;
                        _self.monthDays.push(mdm);
                    }
                }

                else
                {
                    console.log("FAIL: " + data.messages);
                }
            },
            "json"
            );
    };
    this.setPreviousMonth = function () {
        currentMonth = currentMonth - 1;
        _self.changeMonth(currentYear, currentMonth);
    }
    this.setNextMonth = function () {
        currentMonth = currentMonth + 1;
        _self.changeMonth(currentYear, currentMonth);
    }
    this.editUser = function(){
        _self.mm("Value changed from edituser function");
        _self.changeMonth();
    };
    this.setCreateOption = function () {
        _self.manageUser.fistName("Numele schimbat oruin onclick la butonul de create");
    };

    this.setEditOption = function () {

        var dim = dashBoardInstanceVar.users().lenght;
        variable("There are "+dim+" users in the database");
        _self.manageUser.firstName("The name is changed becouse of the edit button click");
    };

    this.openUser = function (data) {

    }
}

function InitializeDashboardModel(data) {
    
   /* DashboardModel.instance = new DashboardModel();
    dashBoardInstanceVar = DashboardModel.instance;
    DashboardModel.instance.initialize(data);

    

    ko.applyBindings(DashboardModel.instance);*/
    dashBoardInstanceVar = new DashboardModel();
    dashBoardInstanceVar.initialize(data);
    ko.applyBindings(dashBoardInstanceVar);
}

function AccessFunction() {
    variable("changed variable");
    
}

function SetCreateOption(data) {
    variable(data);
    Operation = "Create";
}
function SetEditOption(data) {

    variable(data);
    
    Operation = "Edit";


}