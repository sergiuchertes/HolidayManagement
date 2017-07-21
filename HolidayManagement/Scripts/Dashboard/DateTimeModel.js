function DateTimeModel(data)
{
    var _self = this;
    this.year = 0;
    this.month = 0;
    this.day = 0;
    if(data!=null)
    {
        _self.day = data.Day;
        _self.month = data.Month;
        _self.year = data.Year;
    }
}