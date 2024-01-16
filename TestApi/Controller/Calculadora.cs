namespace Controller
{
	public class Calculadora
	{
		public double Dividir(int numerador, int denominador)
		{
			if (denominador == 0)
			{
				throw new DivideByZeroException("El denominador no puede ser cero.");
			}

			return (double)numerador / denominador;
		}
	}


}
