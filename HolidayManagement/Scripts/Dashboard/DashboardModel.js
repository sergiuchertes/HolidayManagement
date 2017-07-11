function DashboardModel() {
    var _self = this;

    this.test = "";

    this.initialize = function (data) {
        _self.test = data.Test;
    };
}

function InitializeDashboardModel(data) {

    DashboardModel.instance = new DashboardModel();

    DashboardModel.instance.initialize(data);

    ko.applyBindings(DashboardModel.instance);
}