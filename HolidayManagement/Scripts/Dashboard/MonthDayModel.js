function MonthDayModel(data)
{
    var _self = this;
    this.day = 0;
    this.isFreeDay = false;
    this.description = "";
    if(data != null)
    {
        _self.day = data.Day;
        _self.isFreeDay = data.IsFreeDay;
        _self.description = data.Description;
    }
    /*        public int Day { get; set; }
        public bool IsFreeDay { get; set; }
        public string Description { get; set; }*/
}