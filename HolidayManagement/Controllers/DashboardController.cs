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
            //////////////////////////////////////
            //dashboardVM.Test = dashboardVM.UsersList[0].FirstName;
            return View("Index", dashboardVM);
        }
        public ActionResult Users()
        {
            return View("Uusers");
        }
    }
}