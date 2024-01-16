using Microsoft.AspNetCore.Mvc;

namespace Controller.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CalculadoraController : ControllerBase
	{
		[HttpGet("dividir")]
		public IActionResult Dividir(int numerador, int denominador)
		{
			var calculadora = new Calculadora();
			try
			{
				var resultado = calculadora.Dividir(numerador, denominador);
				return Ok(resultado);
			}
			catch (DivideByZeroException)
			{
				return BadRequest("El denominador no puede ser cero");
			}
		}
	}
}
