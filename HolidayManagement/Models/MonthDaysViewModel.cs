using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HolidayManagement.Models
{
    public class MonthDaysViewModel
    {
        public MonthDaysViewModel(int day, bool isfreedawy, string description)
        {
            this.Day = day;
            this.IsFreeDay = isfreedawy;
            this.Description = description;
        }
        public int Day { get; set; }
        public bool IsFreeDay { get; set; }
        public string Description { get; set; }
    }
}