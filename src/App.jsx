import "./App.css"

export default function App() {

  return (

    <main>

      <h1>PORTFÓLIO COINTRIVE</h1>
      <p className="name">Daniel Camilo Anunciato Santos</p>

      <div className="intro-info">

        <img width="600" height="400" loading="lazy" src="/assets/logo-bright.png" alt="Website Logo" className="project-logo" />

        <div className="ods">
          <img width="100" height="100" loading="lazy" src="/assets/ods/ODS8.png" alt="ODS 8: Trabalho Decente e Crescimento Econômico" />
          <img width="100" height="100" loading="lazy" src="/assets/ods/ODS4.png" alt="ODS 4: Educação de Qualidade" />
          <img width="100" height="100" loading="lazy" src="/assets/ods/ODS1.png" alt="ODS 1: Erradicar da Pobreza" />
        </div>

        <p>
          Bem vindo ao meu portfólio relacionado ao meu projeto do meu <b>Trabalho de Conclusão de Curso</b> efetuado durante o curso técnico de <b>Desenvolvimento de Sistemas</b> em 2026.
        </p>
        <p>
          Cointrive é um projeto sustenável baseado nas ODS 8 <i>-- Trabalho decente e crescimento econômico --</i>, <i>ODS 1 que é apenas citado -- Erradicação da Pobreza --</i> e na <i>ODS 4 -- Educação de qualidade.</i>
        </p>
        <p>
          Este projeto tem em foco a gestão financeira pessoal com público-alvo de Jovens e Adultos para poderem ajustar suas vidas financeiras de forma econômica e organizada e juntamente ensinar sobre economia e educação financeira.
        </p>

      </div>


      <div className="ct-login-scr ct-scr-template">
        <h1>Tela de Cadastro</h1>

        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR01-Cadastro.png" alt="Sign Up Screen" />
        <p>
          Por aqui o projeto mantém um estilo simples e com uma paleta de cor mais focada na ODS de crescimento econômico, permitindo a criação de conta com nome, sobrenome, email e uma senha curta e válida e alteração de senha caso tenha esquecido.
        </p>

      </div>

      <div className="ct-dashboard-scr ct-scr-template">
        <h1>Tela de Dashboard</h1>

        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR02-Dashboard.png" alt="Dashboard Page" />
        <p>
          Aqui é apresentado seus dados do mês atual, contendo o quanto foi ganho no mês, quanto foi gasto no mês e a carteira que é um valor atualizado durante os meses para saber quanto se tem no momento, esse valor pode ser alterado manualmente por outra aba. Aqui também pode-se ver os seus gastos recentes, seus maiores gastos do mês, e um gráfico de pizza mostrando seus gastos distribuidos entre as categorias.
        </p>
      </div>

      <div className="ct-transactions-scr ct-scr-template">
        <h1>Tela de Transações</h1>

        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR03-Transacoes2.png" alt="Transactions Screen" />
        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR03-Transacoes-Criar.png" alt="New Transaction Modal" />
        <p>
          Aqui é onde se cria suas transações para definir o quanto foi ganho, gasto, atualização do valor da carteira manual, definição de categorias das transações, nomes e até datas dessas transações. Permite também você definir transações gastas como pagas caso você ja tenha pago o que foi gasto (como planos ou contas), e também contém filtragem por tipo, categoria e caracteres mais próximos da categoria ou nome de transação. Pode visualizar outros períodos de dados como mês passado, ano todo e todo período. Pode-se exportar a lista de transações atualmente visível para tabela em Excel.
        </p>
      </div>

      <div className="ct-relatorios-scr ct-scr-template">
        <h1>Tela de Relatórios</h1>

        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR04-Relatorios.png" alt="Full Reports Page" />
        <p>
          Aqui é tipo o Dashboard só que com um pouco mais de detalhes, pode-se visualizar os dados de renda, gasto e a distribuição de gastos, mas aqui também da para ver o quanto em dinheiro você poupou no mês, a sua taxa de poupança, a comparação de renda com os gastos e o quanto você gastou em cada categoria. Também, como em transações, também da para ver relatório de diferentes períodos e exportar para Excel o relatório atualmente visível.
        </p>
      </div>

      <div className="ct-feedback-scr ct-scr-template">
        <h1>Tela de Feedback</h1>

        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR05-Feedback.png" alt="Feedback Page" />
        <p>
          Aqui quem estiver utilizando o projeto pode avaliar em estrelas de 1 à 5 o quanto gostou do site e enviar uma sugestão de melhoria, adição ou alteração.
        </p>
      </div>

      <div className="ct-config-scr ct-scr-template">
        <h1>Tela de Configurações</h1>
        
        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR06-Config.png" alt="Configurations Page" />
        <img width="1200" height="800" loading="lazy" src="/assets/screenshots/SCR06-Config-DT.png" alt="Dark Theme variant of the configurations page" />
        <p>
          Aqui, por fim, o usuário pode alterar seus dados inicialmente cadastrados, alterar sua senha caso haja necessidade, desativar ou ativar suas notificações de gasto em excesso e contas que estão próximas ao vencimento, ativar o modo escuro para uma visualização mais confortável do site e um centro de notificações que é onde as notificações estarão.
        </p>
      </div>


    </main>

  )

}