import { useEffect, useState } from "react";
import '../styles/global.css';
import '../styles/Register.css';

type Data = {
  name: string;
  email: string;
  phone?: string;
  age?: string;
};

function Register() {
  const [form, setForm] = useState<Data>({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const [jsonOutput, setJsonOutput] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);

        setForm((prev) => ({
          ...prev,
          name: user.name || "",
          email: user.email || "",
        }));
      } catch (error) {
        console.error("Erro ao ler usuário:", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Nome e Email são obrigatórios!");
      return;
    }

    const userJSON = JSON.stringify(form, null, 2);

    console.log("Usuário cadastrado:", userJSON);
    setJsonOutput(userJSON);
  };

  return (
    <div className="page">
        <div className="card">
            <h1 className="title">Cadastro de Usuário</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" />
                </div>
                <div className="input-group">
                    <input name="email" value={form.email} onChange={handleChange} placeholder="E-mail" />
                </div>
                <div className="input-group">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefone" />
                </div>
                <div className="input-group">
                    <input name="age" value={form.age} onChange={handleChange} placeholder="Idade" />
                </div>
                <button className="btn" type="submit">Cadastrar</button>
            </form>

            {}
            {jsonOutput && (
                <div className="json-box">
                    <h2>JSON Gerado:</h2>
                    <pre>{jsonOutput}</pre>
                </div>
            )}
        </div>
    </div>
  );
}

export default Register;