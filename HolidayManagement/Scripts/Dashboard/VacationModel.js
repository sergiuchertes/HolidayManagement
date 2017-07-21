function VacationModel(data) {
    var _self = this;
    this.Id = 0;
    this.stateId = 0;
    this.userId = 0;
    this.startDate = null;
    this.endDate = null;
    this.date = null;
    if(data != null)
    {
        /*        var monthDays = _.map(data.CalendarViewModel.MonthDays, function(MonthDay){
            return new MonthDayModel(MonthDay);
        });*/
        _self.Id = data.ID;
        _self.stateId = data.StateId;
        _self.userId = data.UserId;
        _self.startDate = new DateTimeModel(data.StartDate);
        _self.endDate = new DateTimeModel(data.EndDate);
        _self.date = new DateTimeModel(data.Date);
        
    }
    /*
            [Key]
        public int ID { get; set; }

        public int StateId { get; set; }

        public int UserId { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public DateTime Date { get; set; }

        [ForeignKey("StateId")]
        public virtual VacationState State {get;set;}
    */
}