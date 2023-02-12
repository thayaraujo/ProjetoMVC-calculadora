using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculadoraMVC.Controllers
{
    public class SegundaVersao : Controller
    {
        public IActionResult CalculadoraDois()
        {
            return View();
        }
    }
}
