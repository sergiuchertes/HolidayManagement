using HolidayManagement.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HolidayManagement.Models
{
    public class MyCalendarViewModel
    {
        
        public List<BankHoliday> BankHolidays { get; set; }
        public List<Vacation> Vacations { get; set; }

        public List<MonthDaysViewModel> MonthDays { get; set; }

       // public MonthDaysViewModel MonthDays = new MonthDaysViewModel();//day(int), IsFreeDay(bool)
    }
}