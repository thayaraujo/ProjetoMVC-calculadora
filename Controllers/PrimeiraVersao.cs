using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoMVC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculadoraMVC.Controllers
{
    public class PrimeiraVersao : Controller
    {
        private readonly ILogger<PrimeiraVersao> _logger;

        public PrimeiraVersao(ILogger<PrimeiraVersao> logger)
        {
            _logger = logger;
        }

        public IActionResult CalculadoraUm()
        {
            return View();
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
            model.Resultado = model.ValorUm / model.ValorDois;
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
