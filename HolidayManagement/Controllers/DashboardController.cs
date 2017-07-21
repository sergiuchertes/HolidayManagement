using HolidayManagement.Models;
using HolidayManagement.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HolidayManagement.Controllers 
{
    [Authorize]
    public class DashboardController : Controller
    {
        public UserDetailsRepository UserDetailsRepo = new UserDetailsRepository();

        //////////////////////////////////////
        public TeamRepository TeamRepo = new TeamRepository();
        //////////////////////////////////////

        public VacationRepository VacationRepo = new VacationRepository();
        public BankHolidayRepository BankHolidayRepo = new BankHolidayRepository();

        // GET: Dashboard
        public ActionResult Index()
        {
            DashboardViewModel dashboardVM = new DashboardViewModel()
            {
                Test = "Test Value"
            };

            dashboardVM.UsersList = UserDetailsRepo.GetUsers();

            //////////////////////////////////////            
            dashboardVM.Teams = TeamRepo.GetTeams();



            dashboardVM.CalendarViewModel.BankHolidays = BankHolidayRepo.GetBankHolidays();

            dashboardVM.CalendarViewModel.Vacations = VacationRepo.GetVacations();
            dashboardVM.CalendarViewModel.MonthDays = new List<MonthDaysViewModel>();
            //dashboardVM.CalendarViewModel.MonthDays.Day = 
            for(int i=1;i<= DateTime.DaysInMonth(2017, 7);i++)
            {
                DateTime dt = new DateTime(2017, 7, i);
                string aux = dt.DayOfWeek.ToString();
                dashboardVM.CalendarViewModel.MonthDays.Add(new MonthDaysViewModel(i, false, aux));
            }//ajax call from javascript
           
            //////////////////////////////////////
            //dashboardVM.Test = dashboardVM.UsersList[0].FirstName;
            return View("Index", dashboardVM);
        }

        //////////////////////////////////////
        [HttpPost]
        
        public ActionResult Vacations(int year, int month)
        {
            int dim;
            MyCalendarViewModel myCalendarVM = new MyCalendarViewModel();
            myCalendarVM.MonthDays = new List<MonthDaysViewModel>();
            for (int i = 1; i <= DateTime.DaysInMonth(year, month);i++)
            {
                DateTime dt2 = new DateTime(year, month, i);
                string aux = dt2.DayOfWeek.ToString();
                myCalendarVM.MonthDays.Add(new MonthDaysViewModel(i, false, aux));
            }
            dim = myCalendarVM.MonthDays.Count;
            return Json(new {dimension = dim, successed = true, messages= myCalendarVM.MonthDays[0].Description, newCalendar = myCalendarVM }, JsonRequestBehavior.DenyGet);
            //return View();
        }

        //////////////////////////////////////




        public ActionResult Users()
        {
            return View("Uusers");
        }
    }
}