using Controller;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace Test
{
	[TestClass]
	public class CalculadoraTests
	{
		[TestMethod]
		public void Dividir_DosNumeros_ResultadoCorrecto()
		{
			// Arrange
			var calculadora = new Calculadora();
			int numerador = 10;
			int denominador = 2;
			double resultadoEsperado = 5.0;

			// Act
			double resultado = calculadora.Dividir(numerador, denominador);

			// Assert
			Assert.AreEqual(resultadoEsperado, resultado);
		}

		[TestMethod]
		[ExpectedException(typeof(DivideByZeroException))]
		public void Dividir_DenominadorEsCero_LanzaDivideByZeroException()
		{
			// Arrange
			var calculadora = new Calculadora();
			int numerador = 10;
			int denominador = 0;

			// Act
			calculadora.Dividir(numerador, denominador);

			// Assert es manejado por el atributo ExpectedException
		}
	}
}
