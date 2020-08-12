import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import React from 'react'

export function PrivacyModal({ modal, toggle, locale }) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            {modalLocale(locale)}
        </Modal>
    )
}

const modalLocale = locale => {
    if (locale === 'es') {
        return <Spanish />
    } else if (locale === 'en') {
        return <English />
    } else {
        return <Portuguese />
    }
}

function Portuguese() {
    return (
        <>
            <ModalHeader toggle={toggle}>
                TÉRMINOS Y CONDICIONES THE NOT COMPANY SpA
            </ModalHeader>
            <ModalBody>
                <h1 className="font-bold">
                    POLÍTICA DE PRIVACIDADE DA NOTCO BRASIL DISTRIBUIÇÃO E
                    COMÉRCIO DE PRODUTOS ALIMENTÍCIOS LTDA.
                </h1>
                <p>
                    <strong>Versão 22 de abril de 2020</strong>
                </p>
                <p>
                    Esta política de privacidade (a “
                    <u>
                        <strong>Política de Privacidade</strong>
                    </u>
                    ”) regula a forma em que a{' '}
                    <strong>
                        NOTCO BRASIL DISTRIBUIÇÃO E COMÉRCIO DE PRODUTOS
                        ALIMENTÍCIOS LTDA.
                    </strong>
                    , inscrita no CNPJ/ME n° 33.119.545/0001-70 ("
                    <u>
                        <strong>NotCo</strong>
                    </u>
                    "), tratará as informações e dados pessoais dos usuários que
                    visitam os websites controlados pela NotCo nos quais seja
                    publicada esta Política de Privacidade (em conjunto, os “
                    <u>
                        <strong>Sites</strong>
                    </u>
                    ”), ou no caso de outras funções interativas ou{' '}
                    <i>downloads</i> que sejam de propriedade ou controladas
                    pela NotCo e que estejam disponíveis por meio dos Sites, ou
                    que interajam com os Sites.
                </p>
                <p>
                    A NotCo é a controladora da informação e dos dados pessoais
                    dos usuários que são coletados por meio dos Sites,
                    diretamente, ou por meio de afiliadas locais indicadas ao
                    final desta Política de Privacidade, dependendo do país ou
                    região que figure na parte superior dos Sites. Esta Política
                    de Privacidade foi criada para fornecer as informações sobre
                    nossas práticas de privacidade e coleta de dados online,
                    tais como os tipos de informação que coletamos com relação
                    aos visitantes dos Sites. Esta Política de Privacidade não
                    abrange informações coletadas em outro website (a não ser
                    que esteja indicado especificamente no respectivo website) e
                    não se aplica a websites operados por Partes Relacionadas,
                    conforme definido abaixo.
                </p>
                <p>
                    Por favor, leia com atenção a presente Política de
                    Privacidade. Se tiver alguma dúvida ou pergunta relacionada
                    com esta Política de Privacidade, entre em contato com o
                    coordenador de privacidade da sua respectiva jurisdição,
                    conforme indicado ao final desta Política de Privacidade, ou
                    envie uma carta para a NotCo ou ao endereço local
                    correspondente à região ou ao país informado ao final desta
                    Política de Privacidade. Além disso, verifique os Termos de
                    Uso, que reguem o uso dos Sites.
                </p>
                <p>
                    Ao clicar na caixa aplicável da página de registro desta
                    Política de Privacidade, você aceita estes termos e concorda
                    em se vincular a este instrumento.
                </p>
                <p>
                    <strong>
                        Definições. Para os fins da presente Política de
                        Privacidade, os termos a seguir terão o significado
                        estabelecido nesta seção.
                    </strong>
                </p>
                <p>
                    <strong>"Anonimização dos Dados Pessoais"</strong>:
                    significa qualquer Tratamento de Dados Pessoais para que a
                    informação obtida não possa ser associada com nenhuma pessoa
                    identificada ou identificável.
                </p>
                <p>
                    <strong>"Anunciantes"</strong>: significa qualquer
                    anunciante que não a NotCo.
                </p>
                <p>
                    <strong>"Base de Dados"</strong>: significa qualquer
                    conjunto organizado de Dados Pessoais que esteja sujeito ao
                    Tratamento de Dados (conforme definido a seguir), por meios
                    eletrônicos ou por qualquer outra forma, qualquer que seja a
                    forma de coleta, armazenamento, organização ou acesso.
                </p>
                <p>
                    <strong>"Controlador de Dados"</strong> ou{' '}
                    <strong>
                        "Controlador de arquivo, registro, Base de Dados ou
                        banco de dados"
                    </strong>
                    : significa a pessoa física ou jurídica, pública ou privada,
                    que tenha o controle sobre um arquivo, registro, Base de
                    Dados ou banco de dados ou que tenha autoridade para decidir
                    como e por que os Dados Pessoais serão processadas.
                </p>
                <p>
                    <strong>"Dados Pessoais"</strong>: significa qualquer
                    informação relacionada com uma pessoa ou entidade
                    identificada ou identificável (dependendo da jurisdição da
                    qual sejam acessados os Sites), como nome pessoal, caixa
                    postal, e-mail e número de telefone; data de nascimento;
                    gênero; número de identidade; endereço; e, se aplicável,
                    nome da empresa e função desempenhada.
                </p>
                <p>
                    <strong>"Parte Relacionada"</strong>: qualquer afiliado,
                    entidade controlada e/ou filiais da NotCo.
                </p>
                <p>
                    <strong>"Prestadores de Serviços"</strong>: qualquer
                    prestador de serviços que não seja uma Parte Relacionada,
                    que possa prestar serviços para a NotCo, tais como
                    hospedagem de sites, cumprimento de pedidos, entrega de
                    materiais promocionais e ofertas de produtos da NotCo,
                    compensação e processamento de crédito e débito, pagamentos
                    com cartão, ou que possa realizar outros serviços em nome da
                    NotCo.
                </p>
                <p>
                    <strong>"Promoção"</strong>: significa qualquer sorteio,
                    concursos e outras promoções oferecidas por meio dos Sites
                    que requeiram registro para a participação do usuário.
                </p>
                <p>
                    <strong>"Tratamento"</strong>: significa qualquer operação,
                    eletrônica ou física, de coleta, registro, organização,
                    armazenamento, alteração, vinculação, avaliação, bloqueio,
                    eliminação, dissociação, compartilhamento, transferência e
                    em geral o tratamento de Dados Pessoais, mediante
                    transmissão, buscas, interconexões ou transferências.
                </p>
                <p>
                    <strong>"Websites de Terceiros"</strong>: significam outros
                    websites ou endereços da web que sejam operados e
                    controlados por terceiros que não a NotCo ou suas Partes
                    Relacionadas.
                </p>
                <p>
                    Os Dados Pessoais podem ser solicitados e registrados nos
                    cadastros realizados nos Sites.
                </p>
                <p>
                    Você sempre poderá optar por não enviar Dados Pessoais;
                    entretanto isso poderá impedir o acesso a certas
                    características e funcionalidades dos Sites. Você é
                    responsável pela veracidade e exatidão das informações que
                    nos envia.
                </p>
                <p>
                    <strong>Uso de Dados Pessoais</strong>. A NotCo pode
                    utilizar seus Dados Pessoais, sejam eles coletados ativa ou
                    passivamente, para: (1) fornecer ao usuário informações ou
                    serviços, ou processar transações que o usuário tenha
                    solicitado ou tenha acordado receber; (2) processar e manter
                    seu cadastro nos Sites, inclusive para verificar a vigência
                    e a validade de seu endereço eletrônico; (3) melhorar os
                    Sites ou nossos serviços, personalizar sua experiência nos
                    Sites, ou com seu consentimento para oferecer-lhe conteúdo
                    específico que seja relevante para você; (4) entrar em
                    contato com você para tratar sobre seu uso dos Sites e, a
                    nosso critério, as alterações de nossas políticas; (5) para
                    fins comerciais internos; e (6) para os propósitos revelados
                    no momento em que você nos fornecer seus Dados Pessoais.
                    Adicionalmente, com uma finalidade secundária e sua
                    concordância, a NotCo poderá utilizar seus Dados Pessoais
                    para comercialização direta ou indireta de produtos da
                    NotCo.
                </p>
                <p>
                    <strong>Coleta Ativa de Dados Pessoais</strong>. Geralmente,
                    você pode visitar os Sites sem revelar sua identidade ou nos
                    dar informações sobre você. Entretanto, para acessar ou
                    aproveitar algumas áreas dos Sites, podemos solicitar que
                    nos forneça algum Dado Pessoal. Para tanto, a NotCo também
                    solicitará seu expresso consentimento para coletar
                    ativamente seus Dados Pessoais. Se você consentir com tal
                    coleta, a continuação do uso dos Sites por você será
                    interpretada como confirmação de seu consentimento para
                    futuras solicitações de coleta de Dados Pessoais. Podemos
                    obter informações demográficas ou similares dos Prestadores
                    de Serviços e, com seu consentimento, podemos combinar essas
                    informações com os Dados Pessoais que coletamos e rastreamos
                    para criarmos um perfil do indivíduo que acessa os Sites, a
                    fim de podermos fornecer serviços personalizados e uma
                    comunicação interativa, informarmos sobre novos produtos que
                    possam ser de seu interesse, e para fins de pesquisa de
                    mercado interno e desenvolvimento de produtos. Tratamos
                    todas essas informações como Dados Pessoais sujeitas a esta
                    Política de Privacidade.
                </p>
                <p>
                    <strong>Coleta Passiva de Informação</strong>. Além dos
                    Dados Pessoais que você nos forneça ativamente, nós ou
                    nossos Provedores de Serviços podemos utilizar uma variedade
                    de tecnologias para coletar informações automaticamente
                    quando você utilizar os Sites e quando utilizar determinados
                    Websites de Terceiros (para mais informações, favor
                    consultar "Publicidade online e Retargeting" abaixo). Estas
                    informações podem incluir informações demográficas, tipo de
                    navegador, sistema operacional, endereço IP, identificadores
                    de dispositivos móveis e outras informações dessa natureza.
                    Tais informações podem incluir dados de fluxo de cliques,
                    que consiste na informação sobre o caminho de página a
                    página que você visita enquanto navega pelos Sites e
                    determinados Websites de Terceiros. Alguns terceiros também
                    podem coletar informações similares quando você visitar os
                    Sites ou outros Websites de Terceiros e serviços online.
                </p>
                <p>
                    Os métodos que nós e nossos Provedores de Serviços podemos
                    utilizar para coletar automaticamente as referidas
                    informações são os seguintes:
                </p>
                <ul className="list-outside list-line">
                    <li>
                        <p>
                            <strong>Cookies:</strong> Os cookies são arquivos de
                            dados enviados a seu computador quando você visita
                            um website. Estes cookies podem ser utilizados para
                            muitos propósitos, incluindo, entre outros, o
                            acompanhamento das preferências do usuário e as
                            páginas da web visitadas enquanto você utiliza os
                            Sites e determinados Websites de Terceiros para fins
                            de marketing, dentre outros. Estes Prestadores de
                            Serviços utilizam cookies ou web beacons que nos
                            ajudam a oferecer o conteúdo dos Sites, compilar
                            métricas e análises dos Sites e nos ajudam a
                            personalizar suas experiências nos Sites e a
                            direcionar nossos esforços publicitários. Podemos
                            disponibilizar uma lista desses Prestadores de
                            Serviço quando solicitado. Os cookies podem ser
                            desativados utilizando as preferências de seu
                            navegador. Entretanto, é possível que algumas
                            funções dos Sites não funcionem corretamente ou
                            funcionem lentamente caso você desabilite os
                            cookies. Também, deve-se levar em consideração que,
                            ao desabilitar os cookies, eliminará todos os
                            cookies de seu sistema, incluindo os que podem ser
                            úteis, como senhas e nomes de usuário que tenha
                            guardado em websites visitados com frequência.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Web Beacons e Pixels:</strong> Podemos
                            incluir pequenas imagens gráficas denominadas web
                            beacons, também conhecidas como "etiquetas de
                            Internet" ou "clear gifs", ou pixels em nossos Sites
                            e mensagens de correio eletrônico. Podemos usar web
                            beacons, pixels ou tecnologias similares para uma
                            série de propósitos, incluindo, mas não se limitando
                            a, para contar o número de visitantes dos Sites,
                            monitorar a forma de navegação dos usuários pelos
                            Sites, contar quantos e-mails enviados foram abertos
                            efetivamente ou para contar quantos artigos ou links
                            foram realmente vistos, e para o marketing de
                            terceiros, conforme descrito a seguir em "Rede de
                            Publicidade e Remarketing".
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Scripts:</strong> um script é um código de
                            programação inserido que foi desenhado para coletar
                            informações sobre suas interações com os Sites. É
                            baixado temporariamente no seu computador a partir
                            de nosso servidor web ou de um terceiro com o qual
                            trabalhamos, permanecendo ativo somente enquanto
                            estiver conectado aos Sites e sendo posteriormente
                            excluído ou desativado.
                        </p>
                    </li>
                </ul>
                <p>
                    As informações coletadas passivamente sobre você podem ser
                    combinadas ou associadas com seus Dados Pessoais.
                    Adicionalmente, podemos enviar a você promoções de produtos
                    que acreditamos que você tenha interesse em receber,
                    baseados nas informações coletadas passivamente. Se
                    associarmos qualquer informação coletada passivamente com
                    seus Dados Pessoais, tais informações combinadas serão
                    tratadas como Dados Pessoais. Em cada uma destas instâncias,
                    aplicaremos esta Política de Privacidade a qualquer
                    informação recebida, salvo se manifestarmos expressamente o
                    contrário.
                </p>
                <p>
                    <strong>Publicidade online e Retargeting</strong>. Na
                    extensão em que possa ser legalmente utilizado, a NotCo
                    poderá participar de redes de publicidade online e de
                    intercâmbios que mostrem anúncios relevantes aos visitantes
                    dos Sites baseados nos interesses refletidos em sua
                    navegação nos Sites e em determinados Websites de Terceiros
                    que participam das mesmas redes e intercâmbios. Os
                    Anunciantes podem coletar informações dos anúncios que
                    aparecem durante o uso dos Sites e determinados Websites de
                    Terceiros, verificando em quais anúncios você clica. Estas
                    empresas utilizam cookies, web beacons, pixels e outras
                    tecnologias similares para coletar de forma passiva
                    informações sobre você por meio de e-mails enviados pela
                    NotCo e baseadas em sua atividade nos Sites e em
                    determinados Websites de Terceiros que podem ser usados para
                    personalizar a publicidade que você vê nos Sites ou em outra
                    parte da rede. A coleta de informações através destes
                    métodos pode permitir que os Anunciantes rastreiem cada vez
                    que lhe seja enviado um anúncio online desse Anunciante.
                    Isso significa que algumas informações sobre sua navegação
                    nos Sites e determinados Websites de Terceiros podem ser
                    compartilhadas com estas empresas a fim de publicar anúncios
                    nos Sites e em determinados Websites de Terceiros, e a NotCo
                    pode receber de algumas destas empresas informações sobre
                    sua atividade nos Sites e nos Websites de Terceiros que
                    visitou.
                </p>
                <p>
                    Esta informação é utilizada para fins de marketing e a
                    prática se denomina "retargeting", indicando que a
                    informação de um comerciante é utilizada para sugerir-lhe
                    produtos relevantes oferecidos por outro comerciante. Esta
                    Política de Privacidade não abrange o uso de informações que
                    esses terceiros possam ter coletado sobre você (por exemplo,
                    tipo de navegador, sistema operacional, nome do domínio, dia
                    e hora da visita, página(s) visitada) ou os métodos
                    utilizados por tais terceiros para coletar essas informações
                    (por exemplo, cookies, web beacons e “clear gifs”). Não
                    fazemos declarações nem damos garantias relativas às
                    políticas ou práticas comerciais dos referidos Anunciantes,
                    e recomendamos que você se familiarize com as respectivas
                    políticas de privacidade. Você pode também obter mais
                    informações sobre como inabilitar a ressegmentação ou
                    retargeting de publicidade online em "Optar por Cancelar o
                    Recebimento de Publicidade de Retargeting”.
                </p>
                <p>
                    <strong>Informações de Terceiros</strong>. Podemos, de vez
                    em quando, obter informações complementares a seu respeito
                    provenientes de fontes de terceiros ou por meio de nossos
                    parceiros de marketing, que sejam relacionadas com Websites
                    de Terceiros ou promoções de marcas compartilhadas e com
                    serviços de publicidade online (ver acima). Se recebermos
                    Dados Pessoais de uma fonte de terceiros e/ou combinarmos as
                    informações recebidas dessas fontes de terceiros com seus
                    Dados Pessoais, trataremos essas informações e a informação
                    combinada como Dados Pessoais. Não assumimos
                    responsabilidade pela exatidão das informações fornecidas
                    por terceiros nem pela forma como os terceiros coletam e
                    usam as referidas informações.
                </p>
                <p>
                    <strong>Loterias, Concursos e Promoções</strong>. Podemos
                    realizar Promoções. Ao participar de uma Promoção, você
                    concorda com os termos, as condições ou as regras oficiais
                    que regem a referida Promoção, que podem conter exigências
                    específicas em relação a você, incluindo, salvo se proibido
                    na lei aplicável, que os patrocinadores da Promoção façam
                    uso de seu nome, voz e/ou interesse na publicidade ou
                    marketing associados com a Promoção. Se você decidir
                    participar em uma Promoção, algum ou todos os seus Dados
                    Pessoais, conforme aplicável, podem ser compartilhados com
                    terceiros ou com o público em conexão com a administração da
                    referida Promoção, incluindo, mas não se limitando à seleção
                    do ganhador, cumprimento dos prêmios e, conforme previsto na
                    lei aplicável ou permitido pelas regras oficiais da
                    Promoção, em lista de ganhadores.
                </p>
                <p>
                    <strong>Compartilhamento de Informações</strong>. Exceto
                    quando disposto em contrário, a NotCo não compartilha, aluga
                    ou vende nenhuma Informação Pessoal que coletar a terceiros
                    para fins de marketing ou solicitações. No entanto, podemos,
                    a nosso exclusivo critério, compartilhar com anunciantes e
                    parceiros de negócios informações de navegação, sempre
                    sujeito à Anonimização dos Dados Pessoais. Por exemplo,
                    podemos comunicar a segmentação etária dos visitantes de
                    nossos Sites.
                </p>
                <p>
                    <strong>Seus Direitos.</strong>
                </p>
                <p>
                    <strong>
                        Direito de Acesso, Retificação, Exclusão e Oposição ao
                        Tratamento de seus Dados Pessoais
                    </strong>
                    . Você poderá exercer seus direitos para (i) ter acesso aos
                    Dados Pessoais que possuímos sobre você, bem como sobre o
                    Tratamento utilizado com seus Dados Pessoais, (ii) retificar
                    quaisquer Dados Pessoais se incompletos ou inexatos, (iii)
                    solicitar a exclusão dos Dados Pessoais que estão sendo
                    utilizados para um dos usos previstos nesta Política de
                    Privacidade e (iv) opor-se ao Tratamento de seus Dados
                    Pessoais a qualquer momento, enviando uma carta ou um e-mail
                    ao endereço da NotCo indicado abaixo referente à sua
                    jurisdição.
                </p>
                <p>
                    Para atender corretamente sua solicitação, por favor,
                    indique seu nome, sobrenome, endereço, telefone, e-mail e
                    qualquer outro dado para contato que possamos utilizar para
                    verificar sua identidade e entrar em contato, envie uma
                    cópia de seu documento de identidade ou identificação com
                    foto e uma descrição clara e precisa de seus Dados Pessoais
                    em relação aos quais deseja ter acesso, retificar, excluir,
                    limitar seu uso ou divulgação ou se opor ao Tratamento, bem
                    como qualquer outra informação útil para localizar seus
                    Dados Pessoais. Todas nossas comunicações com você serão
                    encaminhadas sob os mais altos níveis disponíveis de reserva
                    e confidencialidade. A reclamação estará sujeita à
                    regulamentação aplicável em matéria de proteção de dados no
                    que se refere aos prazos e a outros requisitos.
                </p>
                <p>
                    <strong>
                        Revogação do Consentimento e limitação do uso e
                        divulgação
                    </strong>
                    . A qualquer tempo você poderá revogar o consentimento
                    outorgado à NotCo sobre seus Dados Pessoais entrando em
                    contato com a equipe de proteção de dados por meio do
                    endereço eletrônico da NotCo indicado abaixo referente à sua
                    jurisdição. Dentro do prazo estabelecido na lei aplicável,
                    contado do momento em que recebermos sua solicitação,
                    excluiremos todos os Dados Pessoais armazenados em nossas
                    Bases de Dados. Todavia, deve ser levado em conta que nem
                    sempre é possível excluir ou excluir completamente todas as
                    informações de nossas Bases de Dados sem que fiquemos com
                    alguns dados residuais devido a cópias de segurança e por
                    outras razões. Você também poderá limitar o uso ou a
                    divulgação de seus Dados Pessoais entrando em contato com a
                    equipe de proteção de dados no endereço eletrônico indicado
                    anteriormente (ou no e-mail aplicável ao final desta
                    Política de Privacidade, dependendo da jurisdição da qual
                    acessar os Sites), indicando sua vontade de revogar seu
                    consentimento ou limitar seus Dados Pessoais. Nesta
                    hipótese, enviaremos uma resposta de acordo com o mecanismo
                    e o prazo requerido pela legislação aplicável.
                </p>
                <p>
                    <strong>
                        Cancelar Inscrição das Listas de Correspondência
                    </strong>
                    . A qualquer tempo você poderá solicitar a exclusão de seu
                    nome das nossas listas de correspondência. Para excluir seu
                    nome de uma lista de correspondência, ou se quiser atualizar
                    suas informações (por exemplo, mudar seu endereço), você
                    poderá, a qualquer momento, enviar uma notificação à NotCo
                    por carta ou por e-mail ao endereço indicado ao final deste
                    documento referente à sua jurisdição.
                </p>
                <p>
                    <strong>
                        Optar por não receber e-mail comercial da NotCo
                    </strong>
                    . Se não quiser receber notificações por e- mail a respeito
                    de nossos produtos ou serviços, você poderá optar por não
                    receber tais e-mails comerciais cada vez que nos fornecer
                    seus Dados Pessoais. Igualmente, você poderá optar por não
                    receber e-mails comerciais enviados pela NotCo selecionando
                    a opção "cancelar inscrição" ou similar incluída em cada
                    mensagem eletrônica enviada.
                </p>
                <p>
                    <strong>
                        Optar por Cancelar o Recebimento de Publicidade de
                        Retargeting
                    </strong>
                    . Se você não quiser receber publicidade de retargeting da
                    NotCo, em função de sua atividade em Websites de Terceiros,
                    poderá, a qualquer momento, desativar os cookies conforme
                    foi descrito anteriormente na seção de cookies e apagar o
                    histórico de seu navegador.
                </p>
                <p>
                    <strong>Proteção da Privacidade de Crianças</strong>. O
                    acesso e utilização dos Sites por menores de idade, de
                    acordo com legislação vigente, é integral responsabilidade
                    de seus respectivos pais, tutores ou representantes.
                    Igualmente, a NotCo adverte que os maiores de idade que, de
                    acordo com a legislação vigente, sejam pais ou assumam a
                    condição de tutores ou representantes, serão responsáveis
                    pelos menores de idade que, estando sob sua tutela ou sendo
                    representados por eles, acessarem os Sites, de modo que se
                    recomenda enfaticamente que tais pais, tutores ou
                    representantes tomem as devidas precauções a navegação nos
                    Sites.
                </p>
                <p>
                    <strong>Websites de Terceiros</strong>. Pode haver
                    hiperlinks nos Sites para Websites de Terceiros (incluídos,
                    entre outros, os sites e aplicativos de redes sociais).
                    Estes Websites de Terceiros podem utilizar seus próprios
                    cookies, web beacons e outras tecnologias para coletar
                    informações sobre você de forma independente, e podem
                    solicitar seus Dados Pessoais. Os Websites de Terceiros têm
                    práticas próprias de privacidade e de coleta de dados, e a
                    NotCo, uma vez que você sair dos Sites, não tem controle ou
                    responsabilidade alguma sobre as normas de privacidade ou
                    sobre as atividades de coleta de dados em Websites de
                    Terceiros. Não assumimos obrigação ou fazemos qualquer
                    declaração com relação às políticas ou práticas comerciais
                    dos referidos Websites de Terceiros e recomendamos que se
                    familiarize com as suas respectivas políticas de privacidade
                    antes de fornecer seus Dados Pessoais.
                </p>
                <p>
                    <strong>
                        Armazenamento e Transferência de Informações
                    </strong>
                    . Os Sites são operados na jurisdição indicada na parte
                    superior do Site que você acessa (a "
                    <u>Jurisdição Relevante</u>"). Assim, você deverá ter em
                    mente que as informações que coletamos, incluídos os Dados
                    Pessoais, serão processadas e armazenadas na Jurisdição
                    Relevante, mas também poderão ser transferidos, processados
                    e armazenados em outras jurisdições, cujas leis de
                    privacidade e proteção de dados podem divergir das do seu
                    país. Consequentemente, os tribunais e outras autoridades da
                    Jurisdição Relevante e em outras jurisdições poderão ter
                    direito, em certas circunstâncias, a acessar seus Dados
                    Pessoais. Ao utilizar os Sites ou nos fornecer informações
                    através dos Sites, você concorda com essa transferência,
                    processamento e armazenamento de suas informações na
                    Jurisdição Relevante e em outras jurisdições, incluindo para
                    Tratamento de Dados Pessoais. Entretanto, destacamos que,
                    independentemente do local onde seja realizado o Tratamento,
                    os Provedores de Serviços da NotCo estão obrigados por
                    contrato a proteger a confidencialidade e a segurança de
                    seus Dados Pessoais.
                </p>
                <p>
                    <strong>Segurança</strong>. A NotCo conserva seus Dados
                    Pessoais durante o tempo que for necessário para cumprir a
                    finalidade para a qual foram coletados e para cumprir a
                    legislação aplicável. A NotCo adota medidas comercialmente
                    justas para proteger os Dados Pessoais. Entretanto, você
                    deve estar ciente que a transmissão de dados através da
                    Internet, transmissão sem fio ou armazenamento eletrônico da
                    informação jamais será 100% segura, de modo que a NotCo, na
                    máxima extensão permitida pela lei aplicável, não garantirá
                    a segurança de nenhuma informação que coletar. Assim, a
                    utilização dos nossos Sites e o fornecimento de suas
                    informações deverá ser feito por você sob seu próprio risco.
                </p>
                <p>
                    <strong>Alterações nesta Política</strong>. De tempos em
                    tempos, a NotCo pode modificar esta Política de Privacidade.
                    Qualquer alteração lhe será comunicada se assim o exigir a
                    legislação local e terá efeitos imediatos a partir da
                    publicação da política revisada nos Sites. Dessa forma,
                    recomendamos que você visite os Sites periodicamente, a fim
                    de permanecer informado sobre qualquer alteração.
                    Entretanto, não utilizaremos seus Dados Pessoais de forma
                    substancialmente diversa à estabelecida na Política de
                    Privacidade vigente no momento em que foram coletados a não
                    ser que você manifeste seu consentimento.
                </p>
                <p>
                    <strong>Contato</strong>. Se tiver dúvidas sobre nossa
                    Política de Privacidade, nossas práticas ou seu trato com os
                    Sites, ou solicitar acesso ou correção ou atualização de
                    seus Dados Pessoais, revogar seu consentimento (sujeito a
                    limitações legais ou contratuais e a aviso prévio) ou tiver
                    motivos para crer que a NotCo não tenha cumprido com esta
                    Política de Privacidade, por favor escreva para
                    whynot@thenotcompany.com.
                </p>
            </ModalBody>
        </>
    )
}

function English() {
    return (
        <>
            <ModalHeader>PRIVACY POLICY THE NOT COMPANY SpA</ModalHeader>
            <ModalBody>
                <p>
                    <strong>Version April 22th, 2020</strong>
                </p>
                <p>
                    This privacy policy (the “<u>Privacy Policy</u>”) regulates
                    how The Not Company SpA (“<u>NotCo</u>”) shall treat the
                    personal information and data of users who visit websites
                    controlled by NotCo where this Privacy Policy are posted
                    (collectively, the “<u>Sites</u>”) or other interactive
                    features or downloads owned or controlled by NotCo and
                    available through the Sites, or which interact with the
                    Sites.
                </p>
                <p>
                    NotCo is the controller of the information and personal data
                    of users collected through the Sites, either by itself or by
                    its local subsidiaries listed at the end of this Privacy
                    Policy, depending on the country or region at the top of
                    this website. This Privacy Policy is designed to provide
                    information about our online privacy and data collection
                    practices, such as the type of information we collect
                    regarding visitors to the Sites. This Privacy Policy does
                    not cover any information collected on any other website
                    (unless specifically stated on such website). This Privacy
                    Policy does not apply to websites operated or managed by
                    Related Parties.
                </p>
                <p>
                    Please review this Privacy Policy carefully. If you have
                    questions or concerns regarding this Privacy Policy, please
                    contact the privacy coordinator for your respective
                    jurisdiction listed at the end of this Privacy Policy, or
                    send a letter to The Not Company SpA or to the address
                    applicable to the country or region listed at the end of
                    this Privacy Policy. In addition, please review the Terms of
                    Use, which govern your use of the Sites.
                </p>
                <p>
                    By clicking on the appropriate box on the registration page
                    of this Privacy Policy, you accept these terms and agree to
                    be bound by this instrument
                </p>
                <p>
                    <strong>Definitions</strong>. For the purpose of this
                    Privacy Policy, the following terms shall have the meaning
                    set forth in this section.
                </p>
                <p>
                    <strong>“Personal Information”</strong>: Any information
                    relating to an identified or identifiable natural person or
                    entity (depending on the jurisdiction from which you access
                    the Sites), such as personal name, mailing address, e- mail
                    address and telephone number; birth date; gender; identity
                    number; company name, mailing address, e-mail address and
                    telephone number; and job position.
                </p>
                <p>
                    <strong>“Database”</strong>: Any organized set of Personal
                    Information which is subject to Information Processing (as
                    defined below), by electronic means or otherwise, whatever
                    the mode of collection, storage, organization or access.
                </p>
                <p>
                    <strong>“Information Processing”</strong>: Any operation and
                    systematic process, electronic or otherwise, enabling the
                    collection, recording, organization, storage, alteration,
                    linkage, assessment, blocking, erasure, dissociation and in
                    general Personal Information Processing, as well as its
                    assignment to third parties through transmission, searches,
                    interconnections or transfers.
                </p>
                <p>
                    <strong>"Data Controller"</strong> or{' '}
                    <strong>
                        "Controller of a file, registry, database or databank"
                    </strong>
                    : The natural person or entity, public or private, who is
                    the owner of a file, registry, Database or databank, or who
                    has the authority to decide how and why Personal Information
                    will be processed.
                </p>
                <p>
                    <strong>“Information Dissociation”</strong>:Any processing
                    of Personal Information so that the information obtained
                    cannot be associated with any identified or identifiable
                    person.
                </p>
                <p>
                    <strong>“Related Party”</strong>: means any affiliates,
                    entities which control NotCo and/or subsidiaries of NotCo.
                </p>
                <p>
                    <strong>“Promotion”</strong>: means any sweepstakes,
                    contests, and other promotions offered through the Sites
                    that may require registration.
                </p>
                <p>
                    <strong>“Service Providers”</strong>: means any third party
                    service providers, that are not a Related Party, that may
                    perform certain services for us, such as website hosting,
                    order fulfillment, delivery of NotCo’s promotional materials
                    and product offers, clearing and processing credit and debit
                    card payments, or performing other services on our behalf.
                </p>
                <p>
                    <strong>“Advertisers”</strong>: means any third-party
                    advertiser.
                </p>
                <p>
                    <strong>“Third Party Websites”</strong>: means other
                    websites or locations that are operated and controlled by
                    third parties other than NotCo or its Related Parties.
                </p>
                <p>
                    <strong>Use of Personal Information</strong>. NotCo may use
                    your Personal Information, whether collected actively or
                    passively: (1) to provide you with information or services,
                    or process transactions that you have requested or agreed to
                    receive; (2) to process your registration with the Sites,
                    including verifying that your e-mail address is active and
                    valid; (3) to improve the Sites or our services, to
                    customize your experience on the Sites, or with your consent
                    to serve you specific content that is relevant to you; (4)
                    to contact you with regard to your use of the Sites and, in
                    our discretion, changes to our policies; (5) for internal
                    business purposes; and (6) for purposes disclosed at the
                    time you provide your Personal Information. In addition, as
                    a secondary purpose, with your consent, NotCo may use your
                    Personal Information for direct or indirect marketing of
                    NotCo’s products to you.
                </p>
                <p>
                    <strong>Active Collection of Personal Information</strong>.
                    In general, you can visit the Sites without revealing your
                    identity or giving us any information about yourself.
                    However, in order to access or take advantage of some areas
                    of the Sites, we may ask you to provide Personal
                    Information. Upon such request, NotCo shall also ask for
                    your express consent to actively collect Personal
                    Information from you. If you consent such action, the
                    continuous use of the Sites shall be understood as an
                    affirmation of your consent on further requests for Personal
                    Information. We may obtain demographic or similar
                    information from Service Providers and, with your consent,
                    may combine that information with the Personal Information
                    we collect and track in order to create a profile on an
                    individual so that we may provide you with personalized
                    services and interactive communication, advise you about new
                    products that may be of interest to you, and for internal
                    market research and product development purposes. We treat
                    all such information as Personal Information subject to this
                    Privacy Policy.
                </p>
                <p>
                    Personal Information may be requested and collected at
                    various locations and on various forms on the Sites.
                </p>
                <p>
                    You may always elect not to submit Personal Information,
                    however, as a result, you may not be able to access certain
                    of the Sites' features and functionality. You are
                    responsible for maintaining the accuracy of the information
                    you submit to us.
                </p>
                <p>
                    <strong>Passive Collection of Information</strong>. In
                    addition to the Personal Information that you actively
                    provide to us, we or our Service Providers may use a variety
                    of technologies to automatically collect information when
                    you use the Sites and when you use certain third party sites
                    (see "Network Advertising and Retargeting," below). This
                    information may include demographic information, browser
                    type, operating system, IP address, mobile device
                    identifiers and other information of this kind. This
                    information may also include clickstream data, which is
                    information about the page-by-page paths you take as you
                    browse through the Sites and certain third-party sites. Some
                    third parties may also collect similar information when you
                    visit the Sites or other online websites and services.
                </p>
                <p>
                    The methods that we and our Service Providers may use to
                    automatically collect such information include the
                    following:
                </p>
                <ul className="list-outside list-line">
                    <li>
                        <p>
                            <strong>Cookies:</strong> Cookies are data files
                            that are placed on a computer when it is used to
                            visit a website. These cookies may be used for many
                            purposes, including, without limitation, tracking
                            user preferences and web pages visited while using
                            the Sites and certain third-party sites for
                            marketing and other purposes. These Service
                            Providers use cookies or web beacons to help us
                            deliver Site content, compile Site metrics and
                            analytics, and help us improve and customize your
                            experiences on the Sites and in our advertising
                            efforts. A list of these companies is available on
                            request. You may disable cookies using your
                            browser's preferences. However, some features of the
                            Sites may not function properly or may operate
                            slowly if you disable the cookies. Please also be
                            aware that disabling cookies will remove all cookies
                            from your system including those you may find useful
                            such as passwords and usernames you have saved on
                            frequently visited websites.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Web Beacons and Pixels:</strong> We may
                            include small graphic images called web beacons,
                            also known as "Internet tags" or "clear gifs," or
                            pixels in our web pages and e-mail messages. We may
                            use web beacons, pixels or similar technologies for
                            a number of purposes, including, without limitation,
                            to count the number of visitors to the Sites, to
                            monitor how users navigate the Sites, to count how
                            many e-mails that we sent were actually opened or to
                            count how many particular articles or links were
                            actually viewed, and for third party marketing as
                            described below in "Network Advertising and
                            Retargeting."
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Embedded Scripts:</strong> An embedded
                            script is programming code that is designed to
                            collect information about your interactions with the
                            Sites. It is temporarily downloaded onto your
                            computer from our web server or a third party we
                            work with, is active only while you are connected to
                            the Sites and is deleted or deactivated thereafter.
                        </p>
                    </li>
                </ul>
                <p>
                    Passively collected information about you, may be combined
                    or associated with your Personal Information. In addition,
                    we may send you product promotions that we think you may be
                    interested in receiving based on the passively collected
                    information. If we associate any such passively collected
                    information with Personal Information about you, we will
                    treat the combined information as Personal Information. In
                    each of these instances, we will apply this Privacy Policy
                    to any information received, unless otherwise specifically
                    disclosed by us.
                </p>
                <p>
                    <strong>Network Advertising and Retargeting</strong>. NotCo
                    participates in online advertising networks and exchanges
                    that display relevant advertisements to site visitors based
                    on their interests as reflected in their browsing of the
                    Sites and certain third-party sites participating in the
                    same networks and exchanges. These companies use cookies,
                    web beacons, pixels and other similar technologies to
                    passively collect information from you which may be used to
                    tailor the advertising you see on the Site or elsewhere on
                    the web. This means that some information about your
                    browsing of the Service and certain third party sites may be
                    shared with these companies for the purpose of delivering
                    ads to you on the Service and certain third party sites, and
                    NotCo may receive from some of these companies information
                    about third party sites that you have visited. This
                    information is used for marketing purposes and the practice
                    is sometimes termed "retargeting" to indicate that
                    information from one retailer is used to suggest to you
                    relevant products offered by another retailer.
                </p>
                <p>
                    This information is used for marketing purposes and the
                    practice is sometimes termed "retargeting" to indicate that
                    information from one retailer is used to suggest to you
                    relevant products offered by another retailer. This Privacy
                    Policy does not cover any use of information that such third
                    parties themselves may have collected from you (e.g., type
                    of browser, operating system, domain name, day and time of
                    visit, page(s) visited) or the methods used by the third-
                    parties to collect that information (e.g., cookies, web
                    beacons and clear gifs). We make no representations or
                    warranties regarding the policies or business practices of
                    such third-party advertisers and we encourage you to
                    familiarize yourself with their privacy policies. You can
                    also learn more about opting out of network advertising
                    retargeting below under "Opting Out of Network Advertising
                    Retargeting.The Sites do not respond to “do not track”
                    signals.
                </p>
                <p>
                    <strong>Information from Third Parties</strong>. We may,
                    from time to time, obtain supplemental information about you
                    from third party sources or from our marketing partners in
                    connection with co-branded websites or promotions and from
                    network advertising services (see above). If we receive
                    Personal Information from a third-party source and/or we
                    combine the information we receive from these third-party
                    sources with your Personal Information, we will treat that
                    information and the combined information as Personal
                    Information. We are not responsible for the accuracy of the
                    information provided by third parties or how such third
                    parties collect and use such information.
                </p>
                <p>
                    <strong>Sweepstakes, Contests and Promotions</strong>. We
                    may offer Promotions. By participating in a Promotion, you
                    are agreeing to the terms, conditions or official rules that
                    govern that Promotion, which may contain specific
                    requirements of you, including, except where prohibited by
                    law, allowing the sponsor(s) of the Promotion to use your
                    name, voice and/or likeness in advertising or marketing
                    associated with the Promotion. If you choose to enter a
                    Promotion, your Personal Information may be disclosed to
                    third parties or the public in connection with the
                    administration of such Promotion, including, without
                    limitation, in connection with winner selection, prize
                    fulfillment, and as required by law or permitted by the
                    Promotion's official rules, such as on a winners list.
                </p>
                <p>
                    <strong>Disclosure of Information</strong>. Except as
                    otherwise provided herein, NotCo does not share, rent, or
                    sell any Personal Information it collects to any third party
                    for marketing or solicitations purposes. We may, however, in
                    our sole discretion, share browsing information with third
                    parties such as advertisers and business partners, always
                    subject to the anonymity of personal data. For example, we
                    may communicate the age segmentation of visitors to our
                    Sites.
                </p>
                <p>
                    <strong>Your Rights.</strong>
                </p>
                <p>
                    <strong>
                        Right to Access, Rectify, Erase and Object to
                        Information Processing of Personal Information
                    </strong>
                    . You can exercise your rights to (i) access the Personal
                    Information we have about you as well as about the
                    Information Processing done with your Personal Information,
                    (ii), rectify the Personal Information in the event that it
                    is incomplete or inaccurate, (iii) erase the Personal
                    Information that its being used for one of the intended uses
                    stated in this Privacy Policy and (iv) object to the
                    Information Processing of your Personal Information at any
                    time by sending a letter to NotCo’s address mentioned below
                    or writing to the e-mail address below for your respective
                    jurisdiction.
                </p>
                <p>
                    In order to properly attend your request, please attach your
                    name, surname, postal address, telephone, e-mail address and
                    any other contact details that we can use to verify your
                    identity and contact you, a copy of you ID card or a
                    photo-ID and a clear and precise description of the Personal
                    Information which you wish to access, rectify, erase, limit
                    the use or disclosure of, or object to the Information
                    Processing of, as well as any other information useful to
                    locate the Personal Information. All our communications with
                    you will be delivered with the highest available reserve and
                    confidentiality levels. The claim shall be subject to the
                    applicable data protection regulation regarding time periods
                    and other requirements.
                </p>
                <p>
                    <strong>
                        Revocation of Consent and limitation of use and
                        disclosure
                    </strong>
                    . At any time, you may revoke the consent given to NotCo
                    over your Personal Information by contacting the data
                    protection team at the e-mail address stated above. After
                    that, we shall eliminate all Personal Information stored in
                    our databases. However, you should be aware that it is not
                    always possible to completely remove or delete all of your
                    information from our databases without some residual data
                    because of backups and other reasons. You may also limit the
                    use or disclosure of your personal information by reaching
                    the data protection team at the e-mail address stated above
                    (or the applicable email address at the bottom of this
                    Privacy Policy depending on the jurisdiction from which you
                    are accessing the Sites), indicating your desire to withdraw
                    or limit your information. An answer will be provided to you
                    according to the mechanism and timeframe required by
                    applicable law.
                </p>
                <p>
                    <strong>Opting Out of Mailing Lists</strong>. You can always
                    ask us to delete your name from our lists of correspondence.
                    In the event that you want to delete your name from a
                    mailing list, or if you wish to update your information
                    (e.g., change your address), you can do so at any time by
                    notifying NotCo by letter to the address listed below or by
                    sending an email to the address below for your respective
                    jurisdiction.
                </p>
                <p>
                    <strong>
                        Opting Out Of Receiving Commercial E-mail Correspondence
                        from NotCo
                    </strong>
                    . If you do not wish to receive e-mail notices regarding our
                    products or services, you may opt-out at the time you
                    provide your Personal Information to us. Otherwise, at any
                    other time you may opt-out by any commercial e-mail you
                    receive from NotCo by selecting the "unsubscribe" or similar
                    option included with each e-mail.
                </p>
                <p>
                    <strong>
                        Opting Out of Network Advertising Retargeting
                    </strong>
                    . If you do not wish to receive retargeted advertising from
                    NotCo based on your activity on third party sites, you may
                    disable cookies as described above in the cookies section
                    and clear your browser history.
                </p>
                <p>
                    <strong>Children’s Privacy Protection</strong>. The access
                    to and use of the Sites by minors, in accordance with
                    current legislation, is the responsibility of their
                    respective parents, legal guardians or representatives.
                    Likewise, NotCo acknowledges that those of legal age who, in
                    accordance with the legislation in force, are parents, legal
                    guardians or representatives, shall be responsible in the
                    event that minors under their guardianship access the Sites,
                    and therefore, they are strongly recommended to Children’s
                    Privacy Protection. The access to and use of the Sites by
                    minors, in accordance with current legislation, is the
                    responsibility of their respective parents, legal guardians
                    or representatives. Likewise, NotCo acknowledges that those
                    of legal age who, in accordance with the legislation in
                    force, are parents, legal guardians or representatives,
                    shall be responsible in the event that minors under their
                    guardianship access the Sites, and therefore, they are
                    strongly recommended to
                </p>
                <p>
                    <strong>Third Party Links</strong>. There may be hyperlinks
                    on the Sites to Third Party Websites (including but not
                    limited to social media sites and applications). These
                    Third-Party Websites may use their own cookies, web beacons
                    and other technology to independently collect information
                    about you. In addition, these Third-Party Websites may
                    solicit Personal Information from you. The Third-Party
                    Websites have separate privacy and data collection
                    practices. Once you leave this site, NotCo has no control or
                    liability of any kind on privacy standards or on the
                    activities of collecting data on other sites. We make no
                    representations regarding the policies or business practices
                    of such Third-Party Websites and encourage you to
                    familiarize yourself with their privacy policies before
                    providing them with your Personal Information.
                </p>
                <p>
                    <strong>Storage and Transfer of Information</strong>. The
                    Sites are operated in the jurisdiction shown at the top of
                    the Site which you access (the "<u>Relevant Jurisdiction</u>
                    "). Please be aware that information we collect, including
                    Personal Information, will be processed and stored in the
                    Relevant Jurisdiction and may also be transferred to,
                    processed and stored in other jurisdictions, where the
                    privacy and data protection laws may differ from those of
                    your country. Accordingly, courts and other authorities in
                    the Relevant Jurisdiction and in such other jurisdictions
                    may, in certain circumstances, be entitled to access your
                    Personal Information. By using the Sites or providing us
                    with any information through the Sites, you consent to this
                    transfer, processing and storage of your information in the
                    Relevant Jurisdiction and in such other jurisdictions,
                    included for the treatment of personal data. Regardless of
                    where the processing takes place, NotCo’s Service Providers
                    are required by contract to protect the confidentiality and
                    security of your Personal Information.
                </p>
                <p>
                    <strong>Security</strong>. NotCo retains your Personal
                    Information for as long as necessary to fulfill the
                    purpose(s) for which it was collected and to comply with
                    applicable laws. NotCo takes commercially reasonable steps
                    to help protect and secure Personal Information. However, no
                    data transmission over the Internet, wireless transmission
                    or electronic storage of information can be guaranteed to be
                    100% secure. Please note that we cannot ensure or warrant
                    the security of any information we collect, and you use our
                    Sites and provide us with your information at your own risk.
                </p>
                <p>
                    <strong>Changes to this Policy</strong>. NotCo may from time
                    to time revise its Privacy Policy. You will be advised if
                    required by local law of any changes and will be effective
                    immediately when revised policy is posted on the Sites.
                    Please check the Sites regularly for any changes. We will
                    not, however, use your existing Personal Information in a
                    manner materially different from that set forth in the
                    policy posted on the Sites at the time your Personal
                    Information was collected unless we receive your consent.
                </p>
                <p>
                    <strong>Contacting us</strong>. If you have any questions
                    about our Privacy Policy, the practices of the Site, or your
                    dealings with the Site, wish to request access or correction
                    or updated of your Personal Information, wish to withdraw
                    your consent (subject to legal or contractual restrictions
                    and reasonable notice) or have reason to believe that NotCo
                    may have failed to comply with this Privacy Policy, please
                    write to whynot@thenotcompany.com.
                </p>
            </ModalBody>
        </>
    )
}

function Spanish() {
    return (
        <>
            <ModalHeader toggle={toggle}>
                POLÍTICAS DE PRIVACIDAD THE NOT COMPANY SpA
            </ModalHeader>
            <ModalBody>
                <p>
                    <strong>Versión 22 de abril de 2020</strong>
                </p>
                <p>
                    Estas políticas de privacidad (las “
                    <u>Políticas de Privacidad</u>”) regulan la forma en que The
                    Not Company SpA ("<u>NotCo</u>") tratará la información y
                    datos personales de los usuarios que visitan los sitios web
                    controlados por NotCo en donde se publiquen estas Políticas
                    de Privacidad (colectivamente los “<u>Sitios</u>”) o a otras
                    funciones interactivas o descargas que sean de propiedad o
                    controladas por NotCo y que estén disponibles a través de
                    los Sitios, o que interactúen con los Sitios.
                </p>
                <p>
                    NotCo es el controlador de la información y datos personales
                    de los usuarios que se recogen a través de los Sitios, por
                    sí o por medio de sus filiales locales enumeradas al final
                    de estas Políticas de Privacidad, dependiendo del país o
                    región que se encuentre en la parte superior de esta página
                    web. Estas Políticas de Privacidad están diseñadas para
                    proporcionar información sobre nuestras prácticas de
                    privacidad y recopilación de datos en línea, tales como los
                    tipos de información que recopilamos con respecto a los
                    visitantes de los Sitios. Estas Políticas de Privacidad no
                    cubren ninguna información recopilada en ningún otro sitio
                    web (a menos que se indique específicamente en dicho sitio
                    web). Estas Políticas de Privacidad no aplican a sitios web
                    operados por Partes Relacionadas.
                </p>
                <p>
                    Por favor revise cuidadosamente estas Políticas de
                    Privacidad. Si tiene preguntas o inquietudes con respecto a
                    estas Políticas de Privacidad, comuníquese con el
                    coordinador de privacidad para su respectiva jurisdicción
                    señalado al final de estas Políticas de Privacidad, o
                    enviando una carta a The Not Company SpA o a la dirección
                    local aplicable al país o región que se indica al final de
                    estas Políticas de Privacidad. Además, revise los Términos
                    de Uso, que rigen en el uso de los Sitios.
                </p>
                <p>
                    Al hacer clic en el cuadro correspondiente en la página de
                    registro de esta Política de privacidad, acepta estos
                    términos y acepta estar sujeto a este instrumento
                </p>
                <p>
                    <strong>Definiciones</strong>. Para los fines de estas
                    Políticas de Privacidad, los siguientes términos tendrán el
                    significado establecido en esta sección.
                </p>
                <p>
                    <strong>"Información Personal"</strong>: cualquier
                    información relacionada con una persona o entidad
                    identificada o identificable (dependiendo de la jurisdicción
                    desde la cual usted acceda a los Sitios), como nombre
                    personal, dirección postal, dirección de correo electrónico
                    y número de teléfono; fecha de nacimiento; género; número de
                    identidad; nombre de la empresa, dirección postal, dirección
                    de correo electrónico y número de teléfono; y puesto de
                    trabajo.
                </p>
                <p>
                    <strong>"Base de Datos"</strong>: Cualquier conjunto
                    organizado de Información Personal que esté sujeto al
                    Procesamiento de Información (como se define a
                    continuación), por medios electrónicos o de cualquier otra
                    forma, cualquiera que sea el modo de recolección,
                    almacenamiento, organización o acceso.
                </p>
                <p>
                    <strong>"Procesamiento de la Información"</strong>:
                    Cualquier operación y proceso sistemático, electrónico u
                    otro, que permita la recopilación, registro, organización,
                    almacenamiento, alteración, vinculación, evaluación,
                    bloqueo, borrado, disociación y en general el Procesamiento
                    de Información Personal; mediante transmisión búsquedas,
                    interconexiones o transferencias.
                </p>
                <p>
                    <strong>"Controlador de Datos"</strong> o{' '}
                    <strong>
                        "Controlador de un archivo, registro, base de datos o
                        banco de datos"
                    </strong>
                    : La persona física o jurídica, pública o privada, que sea
                    titular de un archivo, registro, Base de Datos o banco de
                    datos o que tenga la autoridad para decidir cómo y por qué
                    la Información Personal será procesada.
                </p>
                <p>
                    <strong>"Disociación de la Información"</strong>: Cualquier
                    Procesamiento de Información Personal para que la
                    información obtenida no pueda ser asociada con ninguna
                    persona identificada o identificable.
                </p>
                <p>
                    <strong>"Parte Relacionada"</strong>: cualquier afiliado,
                    entidad que controle NotCo y/o filiales de NotCo.
                </p>
                <p>
                    <strong>"Promoción"</strong>: significa cualquier sorteo,
                    concursos y otras promociones ofrecidas a través de los
                    Sitios que requieran registrarse.
                </p>
                <p>
                    <strong>“Proveedores de Servicios”</strong>: cualquier
                    proveedor de servicios de terceros, que no sea una Parte
                    Relacionada, que puede realizar ciertos servicios para
                    nosotros, tales como alojamiento de sitios web, cumplimiento
                    de pedidos, entrega de materiales promocionales y ofertas de
                    productos de NotCo, compensación y procesamiento de crédito
                    y débito, pagos con tarjeta o realizar otros servicios en
                    nuestro nombre.
                </p>
                <p>
                    <strong>Anunciantes</strong>: significa cualquier
                    “Advertisers”: means any third-party anunciante de terceros.
                </p>
                <p>
                    <strong>“Sitios Web de Terceros”</strong>: significa otros
                    sitios web o ubicaciones que son operados y controlados por
                    terceros que no sean NotCo, sus Partes Relacionadas y/o
                    Filiales.
                </p>
                <p>
                    <strong>Uso de Información Personal</strong>. NotCo puede
                    utilizar su Información Personal, ya sea recopilada
                    activamente o pasivamente: (1) para proporcionarle
                    información o servicios, o procesar transacciones que haya
                    solicitado o haya acordado recibir; (2) procesar su registro
                    con los Sitios, incluyendo la verificación de que su
                    dirección de correo electrónico está activa y es válida; (3)
                    mejorar los Sitios o nuestros servicios, personalizar su
                    experiencia en los Sitios, o con su consentimiento para
                    servirle contenido específico que sea relevante para usted;
                    (4) ponerse en contacto con usted con respecto a su uso de
                    los Sitios y, a nuestra discreción, los cambios a nuestras
                    políticas; (5) para fines comerciales internos; Y (6) para
                    los propósitos revelados en el momento en que usted
                    proporcione su Información Personal. Además, con un
                    propósito secundario, con su consentimiento, NotCo podrá
                    utilizar su Información Personal para la comercialización
                    directa o indirecta de productos de NotCo.
                </p>
                <p>
                    <strong>Colección Activa de Información Personal</strong>.
                    En general, puede visitar los Sitios sin revelar su
                    identidad o darnos información sobre usted. Sin embargo,
                    para acceder o aprovechar algunas áreas de los Sitios,
                    podemos solicitarle que proporcione Información Personal. A
                    tal solicitud, NotCo también solicitará su consentimiento
                    expreso para recopilar activamente Información Personal de
                    usted. Si usted acepta tal acción, el uso continuo de los
                    Sitios se entenderá como una afirmación de su consentimiento
                    en otras solicitudes de Información Personal. Podemos
                    obtener información demográfica o similar de los Proveedores
                    de Servicios y, con su consentimiento, podemos combinar esa
                    información con la Información Personal que recopilamos y
                    rastreamos para crear un perfil en un individuo para que
                    podamos proporcionarle comunicación interactiva, informarle
                    sobre nuevos productos que puedan ser de su interés, y para
                    la investigación de mercado interno y el desarrollo de
                    productos. Tratamos toda esa información como Información
                    Personal sujeta a estas Políticas de Privacidad.
                </p>
                <p>
                    La Información Personal puede ser solicitada y recogida en
                    los formularios de contacto en los Sitios.
                </p>
                <p>
                    Usted siempre puede optar por no enviar Información
                    Personal, sin embargo, como resultado, es posible que no
                    pueda acceder a ciertas características y funcionalidades de
                    los Sitios. Usted es responsable de mantener la exactitud de
                    la información que nos envía.
                </p>
                <p>
                    <strong>Recolección Pasiva de Información</strong>. Además
                    de la Información Personal que usted nos proporciona
                    activamente, nosotros o nuestros Proveedores de Servicios
                    podemos utilizar una variedad de tecnologías para recopilar
                    información automáticamente cuando utiliza los Sitios y
                    cuando utiliza ciertos sitios de terceros (consulte
                    "Publicidad en red y retargeting" abajo). Esta información
                    puede incluir información demográfica, tipo de navegador,
                    sistema operativo, dirección IP, identificadores de
                    dispositivos móviles y otra información de este tipo. Esta
                    información también puede incluir datos de flujo de clics,
                    que es información acerca de las rutas de página por página
                    que toma mientras navega por los Sitios y determinados
                    sitios de terceros. Algunos terceros también pueden
                    recopilar información similar cuando visite los Sitios u
                    otros sitios web y servicios en línea.
                </p>
                <p>
                    Los métodos que nosotros y nuestros Proveedores de Servicios
                    podemos usar para recopilar automáticamente dicha
                    información son los siguientes:
                </p>
                <ul className="list-outside list-line">
                    <li>
                        <p>
                            <strong>Cookies:</strong> Las cookies son archivos
                            de datos que se colocan en una computadora cuando se
                            usa para visitar un sitio web. Estas cookies pueden
                            utilizarse para muchos propósitos, incluyendo, sin
                            limitación, el seguimiento de las preferencias del
                            usuario y las páginas web visitadas mientras se
                            utilizan los Sitios y ciertos sitios de terceros
                            para fines de marketing y otros. Estos proveedores
                            de servicios utilizan cookies o web beacons para
                            ayudarnos a ofrecer contenido del sitio, compilar
                            métricas y análisis del sitio y ayudarnos a mejorar
                            y personalizar sus experiencias en los sitios y en
                            nuestros esfuerzos publicitarios. Una lista de estas
                            compañías está disponible a petición. Puede
                            desactivar las cookies utilizando las preferencias
                            de su navegador. Sin embargo, es posible que algunas
                            funciones de los sitios no funcionen correctamente o
                            que funcionen lentamente si deshabilita las cookies.
                            Tenga en cuenta también que la deshabilitación de
                            cookies eliminará todas las cookies de su sistema,
                            incluidas las que considere útiles, como contraseñas
                            y nombres de usuario que haya guardado en sitios web
                            visitados con frecuencia.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Web Beacons y Pixeles:</strong> Podemos
                            incluir pequeñas imágenes gráficas llamadas web
                            beacons, también conocidas como "etiquetas de
                            Internet" o "clear gifs", o píxeles en nuestras
                            páginas web y mensajes de correo electrónico.
                            Podemos usar web beacons, píxeles o tecnologías
                            similares para una serie de propósitos, incluyendo,
                            sin limitación, contar el número de visitantes a los
                            Sitios, monitorear cómo los usuarios navegan por los
                            Sitios, contar cuántos correos electrónicos que
                            enviamos fueron efectivamente se abrieron o para
                            contar cuántos artículos o vínculos concretos fueron
                            realmente vistos, y para el marketing de terceros
                            como se describe a continuación en "Red de
                            Publicidad y Retargeting".
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Scripts:</strong> un script es un código de
                            programación embebido diseñado para recopilar
                            información sobre sus interacciones con los sitios.
                            Se descarga temporalmente en su computadora desde
                            nuestro servidor web o un tercero con el que
                            trabajamos, está activo sólo mientras está conectado
                            a los sitios y se elimina o se desactiva a partir de
                            ese momento.
                        </p>
                    </li>
                </ul>
                <p>
                    La información recopilada pasivamente sobre usted puede
                    combinarse o asociarse con su Información Personal. Además,
                    podemos enviarle promociones de productos que creemos usted
                    pueda estar interesado en recibir, basados en la información
                    recopilada pasivamente. Si asociamos cualquier información
                    recopilada pasivamente con Información Personal sobre usted,
                    trataremos la información combinada como Información
                    Personal. En cada una de estas instancias, aplicaremos estas
                    Políticas de Privacidad a cualquier información recibida, a
                    menos que se especifique lo contrario por nosotros.
                </p>
                <p>
                    <strong>Publicidad en Red y Retargeting</strong>. Donde se
                    pueda legalmente utilizar, NotCo podrá participar en redes
                    de publicidad en línea y en intercambios que muestren
                    anuncios relevantes a los visitantes del Sitio basados en
                    sus intereses reflejados en su navegación en los Sitios y en
                    determinados sitios de terceros que participan en las mismas
                    redes e intercambios. Los Anunciantes pueden recopilar
                    información sobre los anuncios que aparecen durante el uso
                    de Sitios y determinados sitios de terceros en qué anuncios
                    se hace clic. Estas compañías utilizan cookies, web beacons,
                    píxeles y otras tecnologías similares para recopilar de
                    manera pasiva información de usted a través de correos
                    electrónicos de NotCo y basada en su actividad en los Sitios
                    y en determinados sitios de terceros que pueden usarse para
                    personalizar la publicidad que ve en el Sitio o en otra
                    parte en la red. La recopilación de dicha información a
                    través de estos métodos puede permitir que los Anunciantes
                    rastreen cada vez que se le envía un anuncio en línea de ese
                    anunciante. Esto significa que algunas informaciones sobre
                    su navegación en los Sitios y determinados sitios de
                    terceros pueden ser compartidas con estas empresas con el
                    fin de publicar anuncios en los Sitios y en determinados
                    sitios de terceros, y NotCo puede recibir de algunas de
                    estas compañías información sobre su actividad en los Sitios
                    y en los sitios de terceros que ha visitado.
                </p>
                <p>
                    Esta información se utiliza con fines de marketing y la
                    práctica se denomina a veces "retargeting" para indicar que
                    la información de un retailer se utiliza para sugerirle
                    productos relevantes ofrecidos por otro retailer. Estas
                    Políticas de Privacidad no cubren el uso de información que
                    dichos terceros puedan haber recopilado de usted (por
                    ejemplo, tipo de navegador, sistema operativo, nombre de
                    dominio, día y hora de visita, página (s) visitada) o los
                    métodos utilizados por los terceros para recopilar esa
                    información (por ejemplo, cookies, web beacons y gifs
                    claros). No hacemos ninguna declaración ni otorgamos ninguna
                    garantía con respecto a las políticas o prácticas
                    comerciales de dichos Anunciantes de terceros y le animamos
                    a familiarizarse con sus políticas de privacidad. También
                    puede obtener más información sobre cómo inhabilitar la
                    re-segmentación o retargeting de publicidad de red en "Salir
                    de re- segmentación de publicidad”.
                </p>
                <p>
                    <strong>Información de Terceros</strong>. Podemos, de vez en
                    cuando, obtener información suplementaria acerca de usted de
                    fuentes de terceros o de nuestros socios de marketing en
                    relación con sitios web o promociones de marcas compartidas
                    y de servicios de publicidad en red (ver arriba). Si
                    recibimos Información Personal de una fuente de terceros y/o
                    combinamos la información que recibimos de estas fuentes de
                    terceros con su Información Personal, trataremos esa
                    información y la información combinada como Información
                    Personal. No somos responsables de la exactitud de la
                    información proporcionada por terceros ni de cómo tales
                    terceros recopilan y usan dicha información.
                </p>
                <p>
                    <strong>Loterías, Concursos y Promociones</strong>. Podemos
                    ofrecer Promociones. Al participar en una Promoción, usted
                    está de acuerdo con los términos, las condiciones o las
                    reglas oficiales que rigen dicha Promoción, que pueden
                    contener requisitos específicos de usted, incluyendo,
                    excepto cuando la ley lo prohíba, que los patrocinadores de
                    la Promoción usen su nombre, voz y / o agrado en publicidad
                    o marketing asociados con la Promoción. Si usted decide
                    ingresar a una Promoción, su Información Personal puede ser
                    revelada a terceros o al público en relación con la
                    administración de dicha Promoción, incluyendo, sin
                    limitación, en relación con la selección del ganador, el
                    cumplimiento de los premios y según lo requerido por la ley
                    o permitido por las reglas oficiales de la Promoción, como
                    en una lista de ganadores.
                </p>
                <p>
                    <strong>Revelación de Información</strong>. Salvo que se
                    disponga lo contrario, NotCo no comparte, alquila ni vende
                    ninguna Información Personal que recopile a terceros para
                    propósitos de comercialización o solicitud de terceros.
                    Podemos, sin embargo, a nuestra entera discreción, compartir
                    información de navegación con terceros tales como
                    anunciantes y socios de negocios, siempre sujeto al
                    anonimato de los datos personales. Por ejemplo, podemos
                    comunicar la segmentación etaria de los visitantes de
                    nuestros Sitios.
                </p>
                <p>
                    <strong>Sus Derechos.</strong>
                </p>
                <p>
                    <strong>
                        Derecho a Acceder, Rectificar, Borrar y Objetar al
                        Procesamiento de Información de su Información Personal
                    </strong>
                    . Usted puede ejercitar sus derechos para (i) acceder a la
                    Información Personal que tenemos sobre usted, así como sobre
                    el Procesamiento de Información que se hace con su
                    Información Personal, (ii) rectificar la Información
                    Personal en caso de que esté incompleta o sea inexacta,
                    (iii) Borrar la Información Personal que está siendo
                    utilizada para uno de los usos previstos en estas Políticas
                    de Privacidad y (iv) objetar el Procesamiento de Información
                    de su Información Personal en cualquier momento enviando una
                    carta o un correo electrónico a la dirección de NotCo
                    mencionada abajo para su respectiva jurisdicción.
                </p>
                <p>
                    Para atender correctamente su solicitud, sírvase adjuntar su
                    nombre, apellido, dirección postal, teléfono, dirección de
                    correo electrónico y cualquier otro detalle de contacto que
                    podamos utilizar para verificar su identidad y contactar con
                    usted, una copia de su tarjeta de identificación o
                    identificación con foto y una descripción clara y precisa de
                    la Información Personal a la que desea acceder, rectificar,
                    borrar, limitar el uso o divulgación u oponerse al
                    Procesamiento de Información, así como cualquier otra
                    información útil para localizar la Información Personal.
                    Todas nuestras comunicaciones con usted serán entregadas con
                    los más altos niveles disponibles de reserva y
                    confidencialidad. La reclamación estará sujeta a la
                    reglamentación aplicable en materia de protección de datos
                    con respecto a los plazos y otros requisitos.
                </p>
                <p>
                    <strong>
                        Revocación del Consentimiento y limitación del uso y
                        divulgación
                    </strong>
                    . En cualquier momento puede revocar el consentimiento dado
                    a NotCo sobre su Información Personal contactando al equipo
                    de protección de datos en la dirección de correo electrónico
                    indicada anteriormente. Después de eso, eliminaremos toda la
                    Información Personal almacenada en nuestras bases de datos.
                    Sin embargo, debe tener en cuenta que no siempre es posible
                    eliminar o eliminar completamente toda la información de
                    nuestras bases de datos sin algunos datos residuales debido
                    a copias de seguridad y otras razones. También puede limitar
                    el uso o la divulgación de su Información Personal
                    contactando al equipo de protección de datos en la dirección
                    de correo electrónico indicada anteriormente (o la dirección
                    de correo electrónico aplicable al final de estas Políticas
                    de Privacidad dependiendo de la jurisdicción desde la cual
                    acceda a los Sitios), indicando su deseo de retirar o
                    limitar su información. Se le proporcionará una respuesta de
                    acuerdo con el mecanismo y el calendario requerido por la
                    ley aplicable.
                </p>
                <p>
                    <strong>Anular Suscripción de las Listas de Correo</strong>.
                    Siempre puede pedirnos que borremos su nombre de nuestras
                    listas de correspondencia. En caso de que desee borrar su
                    nombre de una lista de correo, o si desea actualizar su
                    información (por ejemplo, cambiar su dirección), puede
                    hacerlo en cualquier momento mediante notificación a NotCo
                    por carta o un correo electrónico a la dirección indicada al
                    final de este documento para su respectiva jurisdicción.
                </p>
                <p>
                    <strong>
                        Optar por no recibir correspondencia comercial de NotCo
                    </strong>
                    . Si no desea recibir notificaciones por correo electrónico
                    con respecto a nuestros productos o servicios, puede optar
                    por no recibir la información cada vez que nos proporcione
                    su Información Personal. También puede optar por no recibir
                    ningún correo electrónico comercial que reciba de NotCo
                    seleccionando la opción de "anular suscripción" o similar
                    incluida con cada correo electrónico.
                </p>
                <p>
                    <strong>
                        Optando por Anular el Recibir Publicidad de Retargeting
                    </strong>
                    . Si no desea recibir publicidad de retargeting de NotCo, en
                    función de su actividad en sitios de terceros, puede
                    desactivar las cookies como se describe anteriormente en la
                    sección de cookies y borrar el historial de su navegador.
                </p>
                <p>
                    <strong>Protección de la Privacidad de los Niños</strong>.
                    El acceso y utilización de los Sitios efectuada por menores
                    de edad, de conformidad a la legislación vigente, es de
                    responsabilidad de sus respectivos padres, tutores legales o
                    representantes. Asimismo, NotCo hace presente que aquellos
                    mayores de edad que, de acuerdo a la legislación vigente,
                    tengan el carácter de padres, tutores legales o
                    representantes, serán los responsables en caso que menores
                    de edad que se encuentran bajo su tutela accedan a los
                    Sitios, por lo que se les recomienda enfáticamente tomar las
                    precauciones oportunas durante la navegación en los Sitios.
                </p>
                <p>
                    <strong>Sitios Web de Terceros</strong>. Puede haber
                    hipervínculos en los sitios a sitios web de terceros
                    (incluidos, pero no limitados, entre otros, los sitios y
                    aplicaciones de redes sociales). Estos Sitios Web de
                    Terceros pueden utilizar sus propias cookies, web beacons y
                    otras tecnologías para recopilar información de forma
                    independiente sobre usted. Además, estos sitios web de
                    terceros pueden solicitar Información Personal de usted. Los
                    sitios web de terceros tienen prácticas separadas de
                    privacidad y recopilación de datos. Una vez que abandone
                    este sitio, NotCo no tiene ningún control o responsabilidad
                    de ningún tipo sobre las normas de privacidad o sobre las
                    actividades de recolección de datos en otros sitios. No
                    hacemos ninguna representación con respecto a las políticas
                    o prácticas comerciales de dichos sitios web de terceros y
                    le alentamos a familiarizarse con sus políticas de
                    privacidad antes de proporcionarles su Información Personal.
                </p>
                <p>
                    <strong>
                        Almacenamiento y Transferencia de Información
                    </strong>
                    . Los Sitios son operados en la jurisdicción mostrada en la
                    parte superior del Sitio a la que usted accede (la "
                    <u>Jurisdicción Relevante</u>"). Tenga en cuenta que la
                    información que recopilamos, incluida la Información
                    Personal, será procesada y almacenada en la Jurisdicción
                    Relevante y también podrá ser transferida, procesada y
                    almacenada en otras jurisdicciones, donde las leyes de
                    privacidad y protección de datos pueden diferir a las de su
                    país. En consecuencia, los tribunales y otras autoridades de
                    la Jurisdicción Relevante y en otras jurisdicciones pueden,
                    en ciertas circunstancias, tener derecho a acceder a su
                    Información Personal. Al utilizar los Sitios o
                    proporcionarnos información a través de los Sitios, usted
                    acepta esta transferencia, procesamiento y almacenamiento de
                    su información en la Jurisdicción Relevante y en otras
                    jurisdicciones, incluido para el tratamiento de datos
                    personales. Independientemente de donde se realice el
                    Procesamiento, los Proveedores de Servicios de NotCo están
                    obligados por contrato a proteger la confidencialidad y la
                    seguridad de su Información Personal.
                </p>
                <p>
                    <strong>Seguridad</strong>. NotCo retiene su Información
                    Personal durante el tiempo que sea necesario para cumplir
                    con los propósitos para los cuales fue recolectada y para
                    cumplir con las leyes aplicables. NotCo toma medidas
                    comercialmente razonables para ayudar a proteger y proteger
                    la Información Personal. Sin embargo, no se garantiza que la
                    transmisión de datos a través de Internet, transmisión
                    inalámbrica o almacenamiento electrónico de información sea
                    100% segura. Tenga en cuenta que no podemos garantizar la
                    seguridad de ninguna información que recopilamos, y utiliza
                    nuestros Sitios y nos proporciona su información bajo su
                    propio riesgo.
                </p>
                <p>
                    <strong>Cambios en esta Política</strong>. De vez en cuando,
                    NotCo puede modificar esta Política de Privacidad. Cualquier
                    cambio será notificado a usted si es requerido por la ley
                    local y será efectivo inmediatamente cuando la política
                    revisada es publicada en los Sitios. Visite los Sitios
                    periódicamente para informarse sobre cualquier cambio. Sin
                    embargo, no utilizaremos su Información Personal de una
                    manera materialmente diferente a la que se estableció en la
                    política publicada en los Sitios en el momento en que se
                    recopiló su Información Personal a menos que recibamos su
                    consentimiento.
                </p>
                <p>
                    <strong>Contacto</strong>. Si tiene preguntas sobre nuestras
                    Políticas de Privacidad, nuestras prácticas o sus tratos con
                    los Sitios, desea solicitar acceso o corrección o
                    actualización de su Información Personal, desea retirar su
                    consentimiento (sujeto a restricciones legales o
                    contractuales y aviso razonable) o tiene razones para creer
                    que NotCo puede no haber cumplido con estas Políticas de
                    Privacidad, por favor escribir a whynot@thenotcompany.com.
                </p>
            </ModalBody>
        </>
    )
}
