'use client';
import './styles.css';
import Menu from '@/components/Menu';
import ButtonMenu from '@/components/ButtonMenu/ButtonMenu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Se o usuário não estiver autenticado, redireciona para a página de login
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    // Enquanto o status de autenticação está sendo carregado, você pode exibir um loader ou uma mensagem
    return <p>Carregando...</p>;
  }

  if (!session) {
    // Se a sessão não existir, exiba uma mensagem opcional ou redirecione como feito acima
    return null;
  }

  return (
    <div className="container">
      <Menu />
      <div className="container-text">
        <h2 className="text">Menu</h2>
      </div>
      <div className="container-menu">
        <Link href="/animalProfileAdmin">
          <ButtonMenu
            color={'#9849FC'}
            text={
              <>
                Adicionar
                <br />
                Animal
              </>
            }
          />
        </Link>

        <Link href="/registerAdoptionHistory">
          <ButtonMenu
            color={'#4998FC'}
            text={
              <>
                Cadastrar
                <br />
                Relato
              </>
            }
          />
        </Link>

        <Link href="/animalListAdmin">
          <ButtonMenu
            color={'#FFB223'}
            text={
              <>
                Listar Animais
                <br />
                Cadastrados
              </>
            }
          />
        </Link>

        <Link href="/adoptionHistoryAdmin">
          <ButtonMenu
            color={'#FC7C49'}
            text={
              <>
                Listar
                <br />
                Relatos
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
}
