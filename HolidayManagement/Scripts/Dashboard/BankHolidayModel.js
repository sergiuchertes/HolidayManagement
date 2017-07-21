function BankHolidayModel(data) {
    var _self = this;
    this.Id = 0;
    this.description = "";
    this.day = 0;
    this.month = 0;
    if(data!=null)
    {
        _self.Id = data.ID;
        _self.description = data.Description;
        _self.day = data.Day;
        _self.month = data.Month;
    }

    /*        public int ID { get; set; }

        public string Description { get; set; }

        public int Day { get; set; }

        public int Month { get; set; } */
}