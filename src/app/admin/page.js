"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Teste() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Não faça nada enquanto está carregando

        console.log(session)
        if (!session) {
            // Redireciona para a página de login se não houver sessão
            router.push("/admin/login");
        }
    }, [session, status, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return (
        <h1>Dashboard do administrador</h1>
    );
}
