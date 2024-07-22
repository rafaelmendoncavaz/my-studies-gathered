import { useState, useEffect } from "react";

function App() {
	const [address, setAddress] = useState("");
	const [loading, setLoading] = useState(false);
	const [cep, setCep] = useState("");
	const [input, setInput] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
		setCep(input);
		setInput("");
	};

	const resetAddress = () => {
		setAddress("");
		setCep("");
	};

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://viacep.com.br/ws/${cep}/json/`,
				);

				if (!response.ok) {
					throw new Error("Falha na requisição!");
				}

				const json = await response.json();

				if ("erro" in json) {
					alert("CEP não encontrado!");
					resetAddress();
					return;
				}

				setAddress(json);
			} catch (error) {
				console.log(error);
				resetAddress();
			} finally {
				setLoading(false);
			}
		};

		if (cep !== "" && cep.length === 8) {
			loadData();
		}
	}, [cep]);

	return (
		<div>
			{address ? (
				<div>
					<label>
						Cep:
						<input
							name="cep"
							type="text"
							id="cep"
							value={address.cep}
							size="10"
							disabled
						/>
					</label>
					<br />
					<label>
						Rua:
						<input
							name="rua"
							type="text"
							id="rua"
							value={address.logradouro}
							size="60"
							disabled
						/>
					</label>
					<br />
					<label>
						Bairro:
						<input
							name="bairro"
							type="text"
							id="bairro"
							value={address.bairro}
							size="40"
							disabled
						/>
					</label>
					<br />
					<label>
						Cidade:
						<input
							name="cidade"
							type="text"
							id="cidade"
							value={address.localidade}
							size="40"
							disabled
						/>
					</label>
					<br />
					<label>
						Estado:
						<input
							name="uf"
							type="text"
							id="uf"
							value={address.uf}
							size="2"
							disabled
						/>
					</label>
					<br />
					<button onClick={resetAddress}>Limpar busca</button>
				</div>
			) : (
				<form
					method="get"
					onSubmit={formSubmit}
				>
					<label>
						Cep:
						<input
							type="text"
							value={input}
							size="10"
							onChange={(e) => setInput(e.target.value)}
						/>
					</label>
					<br />
					<button type="submit">Buscar CEP</button>
					{loading ? <p>Carregando...</p> : null}
				</form>
			)}
		</div>
	);
}

export default App;
