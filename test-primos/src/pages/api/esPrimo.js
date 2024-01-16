export default function handler(req, res) {
    if (req.method === 'POST') {
        const { numero } = req.body;
        if (typeof numero !== 'number' || numero < 2) {
            return res.status(400).json({ error: 'Debe ingresar un número válido, ayor que 1' });
        }

        for (let i = 2; i * i <= numero; i++) {
            if (numero % i === 0) {
                return res.status(200).json({ esPrimo: false });
            }
        }

        return res.status(200).json({ esPrimo: true });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
