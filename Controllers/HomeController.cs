using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoMVC.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        [HttpPost]
        public IActionResult Somar([FromBody] ValoresModel model)
        {
            model.Resultado = model.ValorUm + model.ValorDois;
            return Ok(model);
        }

        [HttpPost]
        public IActionResult Subtrair([FromBody] ValoresModel model)
        {
            model.Resultado = model.ValorUm - model.ValorDois;
            return Ok(model);
        }

        [HttpPost]
        public IActionResult Dividir([FromBody] ValoresModel model)
        {
            model.Resultado = (model.ValorUm / model.ValorDois);
            return Ok(model);
        }

        [HttpPost]
        public IActionResult Multiplicar([FromBody] ValoresModel model)
        {
            model.Resultado = model.ValorUm * model.ValorDois;
            return Ok(model);
        }

        [HttpGet]
        public IActionResult Limpar([FromForm] ValoresModel model)
        {
            ModelState.Clear();
            return Ok(model);
        }
    }
}
