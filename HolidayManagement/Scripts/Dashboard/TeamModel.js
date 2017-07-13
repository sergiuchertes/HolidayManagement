function TeamModel(data) {
    var _self = this;
    this.name = "";
    this.ID = "";
    if (data != null) {
        _self.ID = data.ID;
        _self.name = data.Description;
    }
}