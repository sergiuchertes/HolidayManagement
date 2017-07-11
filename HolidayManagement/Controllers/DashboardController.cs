using HolidayManagement.Models;
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
        // GET: Dashboard
        public ActionResult Index()
        {
            DashboardViewModel dashboardVM = new DashboardViewModel()
            {
                Test = "orice"
            };

            return View(dashboardVM);
        }
        public ActionResult Users()
        {
            return View("Uusers");
        }
    }
}