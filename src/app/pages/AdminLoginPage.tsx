import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { supabase } from "../lib/supabaseClient";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const entrar = async () => {
    setErrorMessage(null);
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: senha,
      });
      if (error) {
        setErrorMessage("E-mail ou senha inválidos.");
        return;
      }
      navigate("/painel");
    } catch {
      setErrorMessage("Não foi possível entrar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-8 md:px-12">
        <Link to="/" className="tracking-[0.28em] text-[15px] uppercase">
          Select<span className="text-muted-foreground">cars</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Voltar ao site
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-border bg-card">
              <Lock className="size-5" />
            </span>
            <h1 className="mt-6 text-[26px] font-medium tracking-[-0.02em]">
              Área administrativa
            </h1>
            <p className="mt-2 text-[14px] text-muted-foreground">
              Acesso restrito à gestão do acervo SELECTCARS.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void entrar();
            }}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-muted-foreground">E-mail</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="lojista@selectcars.com.br"
                className="h-12 rounded-xl"
                autoComplete="username"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-muted-foreground">Senha</label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="h-12 rounded-xl"
                autoComplete="current-password"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-[13px] text-destructive">{errorMessage}</p>
            )}

            <Button
              type="submit"
              className="mt-2 h-12 rounded-full px-6"
              disabled={submitting}
            >
              {submitting ? "Entrando…" : "Entrar"}{" "}
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
