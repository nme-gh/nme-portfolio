using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace nme_portfolio.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Title = "Home";
            ViewBag.Message = "My home page.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "About";
            ViewBag.Message = "My about page.";

            return View();
        }

        public ActionResult Portfolio()
        {
            ViewBag.Title = "My Works";
            ViewBag.Message = "My works page.";

            return View();
        }

        [NonAction]
        public ActionResult Contact()
        {
            ViewBag.Title = "Contact";
            ViewBag.Message = "My contact page.";

            return View();
        }

        #region nonaction
        [NonAction]
        public ActionResult Resume()
        {
            ViewBag.Title = "Resume";

            return View();
        }
        #endregion
    }
}