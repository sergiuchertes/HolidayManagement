using HolidayManagement.Repository;
using HolidayManagement.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HolidayManagement.Models
{
    public class DashboardViewModel
    {
        public string Test { get; set; }
        public List<UserDetails> UsersList { get; set; }
        public List<Team> Teams { get; set; }


        /////////////
        public MyCalendarViewModel CalendarViewModel = new MyCalendarViewModel();

        /////////////
    }
}