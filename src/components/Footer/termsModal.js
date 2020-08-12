import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import React from 'react'

export function TermsModal({ modal, toggle, locale }) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            {modalLocale(locale)}
        </Modal>
    )
}

const modalLocale = (locale) => {
    if(locale === 'es') {
        return(<Spanish />);
    } else if(locale === 'en') {
        return(<English />);
    } else {
        return(<Portuguese />);
    }
}

function Spanish() {
    return (
        <>
            <ModalHeader toggle={toggle}>
                TÉRMINOS Y CONDICIONES THE NOT COMPANY SpA
            </ModalHeader>
            <ModalBody>
                <p>
                    <strong>Versión 22 de abril de 2020</strong>
                </p>
                <p>
                    Desde el momento en que los usuarios accedan a los Sitios,
                    se sujetarán a los siguientes términos y condiciones. El
                    acceso y/o uso de los Sitios atribuye a quien accede la
                    condición de usuario, aceptando, desde ese mismo momento,
                    plenamente y sin reserva alguna, los presentes Términos y
                    Condiciones, así como las condiciones particulares que, en
                    su caso, complementen, modifiquen o sustituyan los Términos
                    y Condiciones, cuando así suceda, en relación con todos los
                    servicios y contenidos de los Sitios. Quien no aceptare los
                    presentes términos y condiciones, deberá abstenerse de
                    acceder a los Sitios, ya sea directa o indirectamente, y de
                    utilizar cualquier información o servicio provisto por los
                    mismos.
                </p>
                <p>
                    <strong>Definiciones</strong>. Para los fines de estos
                    Términos y Condiciones, los siguientes términos tendrán el
                    significado establecido en esta sección.
                </p>
                <p>
                    "<strong>Parte Relacionada</strong>": cualquier afiliado,
                    entidad que controle NotCo y/o filiales de NotCo.
                </p>
                <p>
                    "<strong>Proveedores de Servicios</strong>": cualquier
                    proveedor de servicios de terceros, que no sea una Parte
                    Relacionada, que puede realizar ciertos servicios para
                    nosotros, tales como alojamiento de sitios web, cumplimiento
                    de pedidos, entrega de materiales promocionales y ofertas de
                    productos de NotCo, compensación y procesamiento de crédito
                    y débito, pagos con tarjeta o realizar otros servicios en
                    nuestro nombre.
                </p>
                <p>
                    "<strong>Sitios Web de Terceros</strong>": significa otros
                    sitios web o ubicaciones que son operados y controlados por
                    terceros que no sean NotCo, sus Partes Relacionadas y/o sus
                    Filiales.
                </p>
                <p>
                    “<strong>Usuario</strong>” o “<strong>Usuarios</strong>
                    ”: cualquier persona que accede y/o utiliza los Sitios
                    controlados por NotCo.
                </p>
                <p>
                    <strong>Propiedad y Operación</strong>. Los Sitios
                    pertenecen a NotCo. Para obtener más información sobre NotCo
                    y sus marcas de productos, puede visitar www.notco.com. El
                    Usuario acepta y entiende que los Sitios están disponibles
                    para su uso personal y no comercial. Asimismo, acepta que
                    los Sitios son de propiedad de NotCo, incluyendo todos los
                    derechos de propiedad intelectual e industrial que se
                    deriven de o se incluyan en los mismos, sin que el Usuario
                    tenga ningún derecho a utilizarlos, salvo en los términos
                    establecidos en las presentes Términos y Condiciones. NotCo
                    no será responsable de ningún tipo de daño o perjuicio que
                    usted sufra en relación a cualquier uso que realice de los
                    Sitios con fines comerciales u otros propósitos no
                    autorizados bajo estos Términos y Condiciones. NotCo se
                    reserva el derecho de negarle o poner fin al acceso del
                    Usuario a los Sitios. La puesta a disposición de los Sitios
                    es gratuita y, sobre esta base, NotCo no tiene ninguna
                    obligación de mantenimiento o de servicio de soporte y no se
                    hace responsable de cualquier perjuicio o daño que el
                    Usuario pueda sufrir como consecuencia de un fallo derivado
                    del mantenimiento o actualización de los Sitios.
                </p>
                <p>
                    El Usuario no podrá copiar, modificar o reutilizar los
                    Sitios, sus actualizaciones o parte de las mismas,
                    incluyendo el software que incorporen. El Usuario podrá
                    hacer uso de los Sitios con propósitos lícitos y de acuerdo
                    con los presentes Términos y Condiciones. La aceptación de
                    estas condiciones implica la concesión de una licencia
                    revocable, intransferible y no exclusiva para ver, imprimir
                    y distribuir el contenido de los Sitios con fines personales
                    y no comerciales siempre y cuando no elimine u oculte el
                    aviso de derecho de autor o copyright o cualquier otra nota
                    que figure en el contenido de los Sitios. No podrá copiar,
                    reimprimir, modificar, exhibir, desarrollar, traducir,
                    distribuir, adaptar, transmitir, comunicar al público en
                    general a través de medios de telecomunicación, divulgar o
                    vender el contenido procedente de los Sitios de ninguna
                    manera, para ningún uso comercial o divulgarla a terceros
                    que tengan fines comerciales, incluyendo otras páginas web,
                    sin el consentimiento previo y por escrito de NotCo.
                </p>
                <p>
                    Adicionalmente, el Usuario se compromete a no (i) utilizar
                    los Sitios de ninguna forma que pudiera dañar, deshabilitar,
                    sobrecargar o perjudicar los Sitios, o interferir con
                    cualquier otro uso de los Sitios incluyendo la capacidad de
                    cualquier usuario para conectarse en actividades a tiempo
                    real a través de la web; (ii) usar ningún robot, “spider” u
                    otro dispositivo automático, proceso o medio para acceder a
                    esta web para cualquier propósito, incluyendo el scraping,
                    la minería de datos, la monitorización o copia de cualquier
                    material de esta web, (iii) utilizar cualquier proceso
                    manual para controlar o copiar cualquier material de los
                    Sitios, o para cualquier otro propósito no autorizado sin el
                    consentimiento previo y por escrito de NotCo; (iv) utilizar
                    cualquier otro dispositivo, software o rutina que interfiera
                    en el correcto funcionamiento de los Sitios; o (v) cualquier
                    otro intento de interferir en el correcto funcionamiento de
                    los Sitios.
                </p>
                <p>
                    <strong>Aceptación de estos Términos y Condiciones</strong>.
                    El acceso a los Sitios, en forma directa o indirecta, su uso
                    y/o la descarga de información contenida en éstos suponen
                    que el Usuario acepta los presentes términos y condiciones
                    en todas sus partes. El uso que el Usuario haga de los
                    Sitios y de cualquier aplicación, software, datos,
                    productos, competencias, promociones, sorteos y cualquier
                    otro servicio que NotCo le brinde en, o a través de los
                    Sitios (los "<u>Servicios</u>"), estarán sujetos a los
                    términos de un acuerdo legal entre el Usuario y NotCo.
                </p>
                <p>
                    <strong>Modificación de la Información</strong>. NotCo se
                    reserva la facultad y el derecho de actualizar, modificar o
                    eliminar, en parte o en todo, y sin expresión de causa,
                    cualquier contenido o información publicada en los Sitios
                    según lo estime conveniente, pudiendo hacer uso de tal
                    facultad en cualquier momento y sin previo aviso. Este
                    derecho abarca los contenidos referidos a disponibilidad o
                    stock productos o servicios, especificaciones, precio, o en
                    cuanto a la configuración y funcionalidades de los Sitios o
                    de la información de actividades promocionales. Asimismo,
                    NotCo podrá modificar unilateralmente y sin previo aviso,
                    siempre que lo considere oportuno, la estructura y diseño de
                    los Sitios, así como modificar o eliminar los servicios, los
                    contenidos y las condiciones de acceso y/o uso de los
                    Sitios.
                </p>
                <p>
                    <strong>Admisibilidad y Acceso</strong>. El acceso y
                    utilización de los Sitios efectuada por menores de edad, de
                    conformidad a la legislación vigente, es de responsabilidad
                    de sus respectivos padres, tutores legales o representantes.
                    Asimismo, NotCo hace presente que aquellos mayores de edad
                    que, de acuerdo a la legislación vigente, tengan el carácter
                    de padres, tutores legales o representantes, serán los
                    responsables en caso que menores de edad que se encuentran
                    bajo su tutela accedan a los Sitios, por lo que se les
                    recomienda enfáticamente tomar las precauciones oportunas
                    durante la navegación en los Sitios.
                </p>
                <p>
                    NotCo se reserva el derecho a limitar el acceso a los Sitios
                    y/o Servicios específicos a usuarios mayores de 18 años. En
                    dicho caso, NotCo identificará claramente aquellas partes de
                    los Sitios o aquellos Servicios donde el acceso es limitado
                    y los términos de uso aplicables. Sin perjuicio de lo
                    anterior, NotCo se reserva el derecho a denegar en cualquier
                    momento y sin necesidad de aviso previo, el acceso a los
                    Sitios a aquellos usuarios que incumplan estas condiciones
                    generales, o las particulares que en cada caso les sean
                    aplicables.
                </p>
                <p>
                    <strong>Registro</strong>. Para tener acceso a ciertas
                    funcionalidades de los Sitios, se le puede solicitar al
                    usuario que realice un registro específico. En estos casos,
                    o si el Usuario desea registrarse, incluso si dicho registro
                    no es obligatorio, debe completar su información personal en
                    los campos correspondientes. La información personal
                    incluye, a modo de ejemplo, entre otros, nombre completo,
                    documento de identidad, fecha de nacimiento e información de
                    contacto (número de teléfono, domicilio y dirección de
                    correo electrónico).
                </p>
                <p>
                    Al registrarse en los Sitios, es importante que el usuario
                    proporcione información precisa, completa y actualizada y
                    acepte actualizar dicha información, según corresponda, para
                    mantenerla lo más precisa posible. El usuario debe ingresar
                    un correo electrónico y crear una contraseña personal e
                    intransferible para iniciar sesión en los Sitios. El nombre
                    de usuario y la contraseña son confidenciales y el usuario
                    debe tomar las precauciones y medidas necesarias para evitar
                    el uso indebido por parte de terceros.
                </p>
                <p>
                    El usuario es el único responsable del acceso y las
                    actividades realizadas en los Sitios, y debe informar de
                    inmediato a NotCo en caso de uso indebido o acceso y uso no
                    autorizado por parte de terceros. En caso de pérdida o robo
                    de la contraseña de acceso, el usuario debe solicitar de
                    inmediato el cambie de su contraseña en los Sitios. Si dicha
                    solicitud no es posible por algún motivo, el usuario debe
                    comunicarse con NotCo, sujeto a seguir siendo responsable de
                    todas las acciones en los Sitios realizadas a través del
                    registro de dicho usuario.
                </p>
                <p>
                    El registro del usuario en los Sitios debe contener sólo
                    información verdadera. Cada usuario es responsable de actuar
                    con precaución y discernimiento, siendo responsable de todas
                    las actividades realizadas a través de los Sitios
                </p>
                <p>
                    <strong>Contacto</strong>. En caso de que el Usuario desee
                    contactarnos a través de los Sitios, NotCo solicitará
                    señalar el motivo del contacto, información personal, como
                    nombre y apellido, correo electrónico y país, así como la
                    redacción de un mensaje que explique los motivos del
                    contacto. Como parte del proceso de contacto, NotCo podría
                    solicitar un nombre de usuario y contraseña. El Usuario
                    acepta proporcionar información precisa y completa al
                    contactar y usar los Sitios y los Servicios. El Usuario
                    autoriza a NotCo a almacenar y usar su información para los
                    fines previstos en estos Términos y Condiciones, a fin de
                    responder a los requerimientos del Usuario, al ingresar a
                    los Sitios.
                </p>
                <p>
                    <strong>Privacidad</strong>. En cumplimiento de la Ley
                    19.628 sobre Protección de Datos de Carácter Personal, y con
                    el fin de proteger la seguridad de los datos de carácter
                    personal de los Usuarios de los Sitios, los datos que el
                    Usuario proporcione a NotCo a través de nuestros Sitios se
                    encuentran sujetos a nuestras Políticas de Privacidad,
                    disponible en www.notco.com.
                </p>
                <p>
                    <strong>
                        Propiedad y Uso de los Materiales, Productos y Servicios
                        del Sitio Web
                    </strong>
                    . NotCo posee los derechos de propiedad intelectual de todos
                    los materiales de los Sitios. NotCo tiene derecho a usar
                    todas las marcas comerciales, marcas de servicio, gráficos y
                    logotipos utilizados en los Sitios.A menos que se indique
                    expresamente, ninguna parte de los Sitios puede copiarse,
                    reproducirse, republicarse, cargarse, publicarse,
                    transmitirse o distribuirse de ninguna manera, excepto que
                    puede descargar una copia de los materiales en cualquier
                    computadora para su uso personal y no comercial, siempre y
                    cuando mantenga intactos los avisos de derechos de autor,
                    marcas comerciales y otros avisos de propiedad de los
                    materiales. Cualquier modificación de los materiales o el
                    uso de los materiales para cualquier otro propósito
                    constituye una violación de los derechos de propiedad
                    intelectual y derechos de propiedad de NotCo. El uso de
                    cualquier material de este tipo en cualquier otro sitio web
                    o red informática sin el consentimiento por escrito de NotCo
                    está estrictamente prohibido. El uso de las marcas
                    comerciales, marcas de servicio, gráficos y logotipos de los
                    Sitios de manera distinta a la autorizada en estos Términos
                    y Condiciones, o como está autorizado por escrito por NotCo,
                    está estrictamente prohibido.
                </p>
                <p>
                    En caso de que el Usuario descargara un software u otro
                    contenido digital, incluyendo aplicaciones, desde los Sitios
                    (“
                    <u>Productos</u>”), NotCo le otorgará la licencia de los
                    Productos y todos los archivos, imágenes y datos
                    relacionados con los términos y condiciones aplicables. El
                    Usuario acepta y reconoce no ser el propietario de los
                    Productos descargados, y que NotCo no le transfiere la
                    propiedad de los Productos. NotCo mantiene la propiedad
                    absoluta y el título de los Productos descargados y todos
                    los derechos de propiedad intelectual relacionados con los
                    mismos. No puede redistribuir, vender, descompilar, aplicar
                    ingeniería inversa, desmontar o reducir los Productos a una
                    forma legible para el ser humano.
                </p>
                <p>
                    <strong>Consentimiento</strong>. El Usuario otorga a NotCo
                    todos los permisos y consentimientos requeridos de
                    conformidad con la Ley 19.628 sobre Protección de Datos de
                    Carácter Personal, que puedan ser requeridas para ser
                    utilizadas por NotCo, Partes Relacionadas, Filiales y/o
                    Prestadores de Servicios, de conformidad a estos Términos y
                    Condiciones para el procesamiento de su Información Personal
                    de conformidad con las Políticas de Privacidad disponibles
                    en www.notco.com.
                </p>
                <p>
                    <strong>Ámbito Territorial del Sitio Web</strong>. NotCo
                    controla y opera los Sitios desde la República de Chile. A
                    menos de indicarse lo contrario en los Sitios, este pretende
                    promocionar solo aquellos productos de NotCo vendidos por
                    NotCo en la República de Chile, y, por lo tanto, NotCo no
                    garantiza que los Sitios o los productos descritos en él
                    sean apropiados o se encuentren disponibles para su uso en
                    otros lugares. El Usuario será responsable del cumplimiento
                    de la legislación vigente, aplicable al contenido y el
                    funcionamiento de los Sitios.
                </p>
                <p>
                    <strong>Enlaces a Sitios Web de Terceros</strong>. Los
                    Sitios pueden contener enlaces o referencias a Sitios Web de
                    Terceros. Estos enlaces se proporcionan únicamente para
                    conveniencia del Usuario. Ninguna información, material o
                    contenido de terceros que esté contenido, se referencie, se
                    incluya, o se vincule a o desde los Sitios y no implica la
                    aprobación de productos, servicios o información de
                    terceros. Toda la información, datos, opiniones,
                    recomendaciones, productos o servicios que proporcionen
                    estas terceras partes, bien mediante enlaces a otros sitios
                    web, o bien directamente a través de sus sitios web,
                    pertenecen únicamente a esas terceras partes y no a NotCo.
                    El uso que el Usuario haga de los Sitios Web de Terceros
                    está sujeto a los términos de uso y a las políticas de
                    privacidad de dichos sitios web.
                </p>
                <p>
                    <strong>
                        Exclusión de Garantías relativas al Uso y Funcionamiento
                        de los Sitios y Enlaces visibles en el mismo
                    </strong>
                    . El material disponible en los Sitios se proporciona de la
                    manera en que se encuentran, como están disponibles y sin
                    condiciones ni garantías de ningún tipo, ya sean expresas o
                    implícitas. En la máxima medida permitida por la legislación
                    aplicable, el Usuario renuncia a todas las condiciones y
                    garantías, expresas o implícitas, incluidas, entre otras,
                    todas las garantías implícitas de comerciabilidad, idoneidad
                    para un propósito particular, título y no infracción. NotCo
                    no ofrece ninguna garantía de que los Sitios cumplan con los
                    requerimientos, o de que el acceso al mismo sea
                    ininterrumpido, puntual, seguro o libre de errores, o que
                    los defectos, en caso de haberlos, vayan a ser subsanados.
                    NotCo no ofrece ningún tipo de garantía en cuanto a los
                    resultados que se puedan obtener del uso de los Sitios o en
                    cuanto a la exactitud, calidad o fiabilidad de la
                    información obtenida a través del mismo. El material en los
                    Sitios podría incluir inexactitudes técnicas o errores
                    tipográficos y podría ser inexacto o volverse inexacto como
                    resultado de desarrollos posteriores a sus respectivas
                    fechas. NotCo no asume la obligación de verificar o mantener
                    la vigencia de dicha información.
                </p>
                <p>
                    En cuanto al funcionamiento de los Sitios, NotCo no
                    garantiza que (i) el funcionamiento de los Sitios cumpla con
                    los requisitos del Usuario; (ii) el acceso a los Sitios será
                    ininterrumpido, oportuno, seguro, libre de virus, gusanos,
                    caballos de Troya u otros componentes dañinos, o libre de
                    defectos o errores; (iii) los resultados que puedan
                    obtenerse del uso de los Sitios serán precisos o confiables;
                    o (iv) los defectos serán corregidos. El Usuario entiende y
                    acepta que la utilización de cualquier material y/o datos
                    descargados u obtenido a través de los Sitios se realizará
                    bajo su propia responsabilidad y será el único responsable
                    de cualquier daño a su sistema informático o pérdida de
                    datos en su ordenador que resulte de la descarga de dicho
                    material y/o datos.
                </p>
                <p>
                    NotCo no se responsabiliza en modo alguno de aquellos
                    contenidos, actividades comerciales, productos y servicios
                    incluidos que pudiesen visualizarse mediante enlaces
                    electrónicos (links), directa o indirectamente, a través de
                    los Sitios, en especial los que pudieran corresponder a
                    contenidos de valor agregado para el Usuario, como de ocio,
                    entretenimiento, curiosidades, consejos u otros. La
                    presencia de links en los Sitios, salvo manifestación
                    expresa en contrario, tiene una finalidad meramente
                    informativa y en ningún caso supone sugerencia, invitación o
                    recomendación sobre los mismos. Estos enlaces no representan
                    ningún tipo de relación entre NotCo y los particulares o
                    empresas titulares de los sitios web a los que puede
                    accederse mediante estos links. NotCo se reserva el derecho
                    de retirar de modo unilateral y en cualquier momento los
                    links que aparecen en los Sitios.
                </p>
                <p>
                    <strong>Limitaciones de Responsabilidad</strong>. De
                    conformidad a la legislación vigente, bajo ninguna
                    circunstancia NotCo, sus Partes Relacionadas, Filiales y/o
                    Prestadores de Servicios, sus licenciantes o licenciatarios
                    serán responsables ante el Usuario o cualquier otra persona
                    o entidad por daños directos, indirectos, especiales,
                    incidentales, consecuentes, punitivos o de otro tipo,
                    incluidas las perdidas, lesiones personales (incluida la
                    muerte) y daños a la propiedad, que puedan resultar de (i)
                    el uso o la imposibilidad de usar los Sitios o cualquier
                    material publicado en los Sitios; (ii) la conducta de
                    cualquier otro Usuario o terceros en los Sitios; (iii) el
                    acceso no autorizado o la modificación de datos personales
                    del Usuario; y (iv) cualquier otra cuestión relativa a los
                    Sitios. NotCo no será responsable, incluso si NotCo o un
                    representante autorizado de esta ha sido informado de la
                    posibilidad de dichos daños. Estos incluyen, pero no están
                    limitados a, daños o lesiones causadas por error, omisión,
                    interrupción, defecto, falla de funcionamiento, retraso en
                    la operación o transmisión, falla de línea o virus de
                    computadora, gusano, caballo de Troya u otro componente
                    dañino.
                </p>
                <p>
                    En el evento que la legislación vigente puede no permitir la
                    exclusión de ciertas garantías o la limitación o exclusión
                    total de responsabilidad en cuyo caso la limitación de
                    responsabilidad antedicha será interpretada en la máxima
                    extensión que permita la ley.
                </p>
                <p>
                    <strong>Indemnización</strong>. El Usuario acepta defender e
                    indemnizar a NotCo, sus Partes Relacionadas, sus Filiales
                    y/o Prestadores de Servicios, y a cada uno de sus
                    respectivos agentes, licenciatarios, sucesores y
                    cesionarios, de cualquier reclamo, demanda, acción o
                    procedimiento de cualquier tipo y de cualesquiera y todos
                    los daños y responsabilidades, costos y gastos, incluidos
                    los honorarios legales razonables, relacionados con el uso
                    de los Sitios en incumplimiento de lo permitido en estos
                    Términos y Condiciones, y/o cualquier incumplimiento o
                    presunto incumplimiento de cualquiera de sus garantías,
                    representaciones o acuerdos establecidos en este texto.
                </p>
                <p>
                    <strong>Duración</strong>. La duración de la prestación del
                    servicio de los Sitios y de los servicios es de carácter
                    indefinido. Sin perjuicio de lo anterior, NotCo se reserva
                    el derecho de interrumpir, suspender o terminar la
                    prestación del servicio de los Sitios o de cualquiera de los
                    servicios que lo integran, sin expresión de causa.
                </p>
                <p>
                    <strong>Modificación de Términos</strong>. NotCo se reserva
                    el derecho de efectuar, esporádicamente, cambios en los
                    Términos y Condiciones a su entera discreción mediante su
                    actualización en los Sitios, y la indicación de la fecha de
                    aplicación de la nueva versión de las mismas. La fecha de
                    “Última Actualización” incluida al final de este aviso legal
                    indicará cuándo se realizaron los cambios. Que el Usuario
                    continúe usando los Sitios tras la publicación de una nueva
                    versión de los Términos y Condiciones implicará su
                    aceptación de tales cambios.
                </p>
                <p>
                    <strong>Ley Aplicable y Competencia</strong>. Los presentes
                    Términos y Condiciones, así como la relación entre el
                    Usuario y NotCo, se regirán e interpretarán con arreglo a la
                    legislación vigente de la República de Chile. Para todos los
                    efectos legales, el Usuario y NotCo fijan su domicilio en la
                    comuna y ciudad de Santiago de Chile, y prorrogan
                    competencia a sus tribunales ordinarios de justicia.
                </p>
                <p>
                    <strong>Independencia de las Cláusulas</strong>. Si se
                    determina que alguna disposición de estos Términos y
                    Condiciones es ilegal, nula o inaplicable por algún motivo,
                    dicha disposición se considerará separable de estos Términos
                    y Condiciones y no afectará la validez y aplicabilidad de
                    las disposiciones restantes.
                </p>
                <p>
                    <strong>Ausencia de Renuncia</strong>. Ninguna imprecisión
                    por parte de NotCo en el incumplimiento de estos Términos y
                    Condiciones constituirá una renuncia a ninguno de los
                    derechos de NotCo bajo estos Términos y Condiciones ya sea
                    por acciones pasadas o futuras por parte de cualquier
                    persona. Solamente una renuncia por escrito y firmada por un
                    representante legal de NotCo tendrá efecto legal.
                </p>
                <p>
                    Si el usuario tiene alguna pregunta o desea comunicarse con
                    NotCo, puede escribir a whynot@thenotcompany.com
                </p>
            </ModalBody>
        </>
    )
}

function Portuguese() {
    return (
        <>
            <ModalHeader toggle={toggle}>
                TERMS AND CONDITIONS THE NOT COMPANY SpA
            </ModalHeader>
            <ModalBody>
                <p>
                    <strong>Version April 22th, 2020</strong>
                </p>
                <p>
                    Estes termos e condições (os “
                    <u>
                        <strong>Termos e Condições</strong>
                    </u>
                    ”), aplicáveis ao Usuário (conforme definido abaixo),
                    regulam o acesso e/ou uso dos websites onde são publicados
                    estes Termos e Condições (os “
                    <u>
                        <strong>Sites</strong>
                    </u>
                    ”), controlados pela{' '}
                    <strong>
                        NOTCO BRASIL DISTRIBUIÇÃO E COMÉRCIO DE PRODUTOS
                        ALIMENTÍCIOS LTDA.
                    </strong>
                    , inscrita no CNPJ/ME no 33.119.545/0001-70 (“
                    <u>
                        <strong>NotCo</strong>
                    </u>
                    ”), e são regidos pelas leis da República Federativa do
                    Brasil, incluindo a Lei no 8.078/1990 (Código de Defesa do
                    Consumidor).
                </p>
                <p>
                    A partir do momento em que os Usuários acessem os Sites,
                    eles estarão sujeitos aos seguintes Termos e Condições. O
                    acesso e/ou uso dos Sites atribui a quem acessa a condição
                    de Usuário, concordando, nesse exato momento, plenamente e
                    sem reserva alguma, com os presentes Termos e Condições, e
                    aceitando as condições particulares que, quando couberem,
                    complementem, modifiquem ou substituam os Termos e
                    Condições, com relação a todos os serviços e conteúdos dos
                    Sites. Quem não aceitar os presentes Termos e Condições,
                    deverá abster-se de acessar os Sites, seja direta ou
                    indiretamente, e de utilizar qualquer informação ou serviço
                    fornecido por tais Sites.
                </p>
                <p>
                    <strong>
                        Definições. Para os fins destes Termos e Condições, os
                        termos a seguir terão o significado estabelecido nesta
                        seção.
                    </strong>
                </p>
                <p>
                    "<strong>Parte Relacionada</strong>": qualquer afiliado,
                    entidade controlada e/ou filiais da NotCo.
                </p>
                <p>
                    "<strong>Prestadores de Serviços</strong>": qualquer
                    prestador de serviços, que não seja Parte Relacionada, que
                    possa prestar serviços para a NotCo, tais como hospedagem de
                    sites, cumprimento de pedidos, entrega de materiais
                    promocionais e ofertas de produtos da NotCo, compensação e
                    processamento de crédito e débito, pagamentos com cartão ou
                    que possa realizar outros serviços em nome da NotCo.
                </p>
                <p>
                    "<strong>Websites de Terceiros</strong>": significam outros
                    websites ou endereços da web que sejam operados e
                    controlados por terceiros que não a NotCo ou suas Partes
                    Relacionadas.
                </p>
                <p>
                    “<strong>Usuário</strong>” ou “<strong>Usuários</strong>”:
                    qualquer pessoa que acessa e/ou utiliza os Sites controlados
                    pela NotCo.
                </p>
                <p>
                    <strong>Propriedade e Operação</strong>. Os Sites pertencem
                    à NotCo. Para obter mais informações sobre a NotCo e suas
                    marcas de produtos, clique www.notco.com. O Usuário concorda
                    e reconhece que os Sites estão disponíveis para seu uso
                    pessoal e não comercial. Igualmente, concorda que os Sites
                    são de propriedade da NotCo, incluídos todos os direitos de
                    propriedade intelectual e industrial decorrentes ou
                    inerentes aos Sites, não tendo o Usuário direito algum à sua
                    utilização, salvo nos termos estabelecidos nos presentes
                    Termos e Condições. A NotCo não será responsável por dano ou
                    prejuízo de qualquer natureza que o Usuário possa sofrer
                    relacionado com o uso dos Sites para fins comerciais ou
                    outras finalidades não autorizadas por estes Termos e
                    Condições. A NotCo reserva-se o direito de negar ou cancelar
                    o acesso do Usuário aos Sites. A disponibilização dos Sites
                    é gratuita e, nesse sentido, a NotCo não tem qualquer
                    obrigação de manutenção dos Sites ou de oferecer qualquer
                    serviço de suporte, bem como não assume responsabilidade por
                    qualquer prejuízo ou dano que o Usuário possa sofrer como
                    consequência de alguma falha derivada da manutenção ou
                    atualização dos Sites.
                </p>
                <p>
                    O Usuário não poderá copiar, modificar ou reutilizar os
                    Sites, suas atualizações ou parte destas, incluindo o
                    software incorporado. O Usuário poderá fazer uso dos Sites
                    com propósitos lícitos e de acordo com os presentes Termos e
                    Condições. A aceitação destas condições implica a concessão
                    de uma licença revogável, intransferível e não exclusiva
                    para visualizar, imprimir e distribuir o conteúdo dos Sites
                    para fins pessoais e não comerciais, desde que não elimine
                    ou oculte o aviso de direito de autor ou copyright ou
                    qualquer outro aviso que constar no conteúdo dos Sites. O
                    Usuário não poderá copiar, reimprimir, modificar, exibir,
                    desenvolver, traduzir, distribuir, adaptar, transmitir,
                    comunicar ao público em geral por meio dos meios de
                    telecomunicação, divulgar ou vender o conteúdo proveniente
                    dos Sites de forma alguma, utilizá- lo para nenhum uso
                    comercial, ou divulgá-lo a terceiros que tenham fins
                    comerciais, incluindo outras páginas web, sem consentimento
                    prévio e por escrito da NotCo.
                </p>
                <p>
                    Adicionalmente, o Usuário compromete-se a (i) não utilizar
                    os Sites de forma que possa danificar, desabilitar,
                    sobrecarregar ou prejudicar os Sites, ou interferir com
                    qualquer outro uso dos Sites, inclusive a capacidade de
                    qualquer Usuário para se conectar em atividades online por
                    meio da web; (ii) não usar nenhum robot, “spider” ou outro
                    dispositivo automático, processo ou meio para acessar esta
                    web para qualquer finalidade, incluindo o scraping, a
                    mineração de dados, o monitoramento ou cópia de qualquer
                    material desta web, (iii) não utilizar qualquer processo
                    manual para controlar ou copiar qualquer material dos Sites,
                    ou para qualquer outra finalidade não autorizada sem o
                    consentimento prévio e por escrito da NotCo; (iv) não
                    utilizar qualquer outro dispositivo, software ou rotina que
                    interfira no correto funcionamento dos Sites; ou (v) não
                    realizar qualquer outra tentativa de interferir no correto
                    funcionamento dos Sites.
                </p>
                <p>
                    Concordância com os presentes Termos e Condições. O acesso
                    aos Sites, de forma direta ou indireta, seu uso e/ou o
                    download de informações neles contida pressupõem que o
                    Usuário concorda integralmente com os presentes Termos e
                    Condições. O uso pelo Usuário dos Sites e de qualquer
                    aplicativo, software, dados, produtos, concorrências,
                    promoções, sorteios e qualquer outro serviço que a NotCo
                    ofereça nos Sites ou por seu intermédio (os "Serviços")
                    poderá estar sujeito a termos e condições específicas
                    divulgadas pela NotCo.
                </p>
                <p>
                    <strong>Modificação da Informação</strong>. A NotCo
                    reserva-se o poder e o direito de atualizar, modificar ou
                    eliminar, no todo ou em parte, e sem causa justificada,
                    qualquer conteúdo ou informação publicada nos Sites, a seu
                    critério, podendo fazer uso desse poder a qualquer momento e
                    sem aviso prévio. Este direito abrange os conteúdos
                    referentes à disponibilidade ou estoque de produtos ou
                    Serviços, especificações, preço, ou relativos à configuração
                    e funcionalidades dos Sites ou da informação de atividades
                    promocionais. Igualmente, a NotCo poderá alterar
                    unilateralmente e sem aviso prévio, sempre que considerar
                    oportuno, a estrutura e desenho dos Sites, bem como
                    modificar ou eliminar os Serviços, os conteúdos e as
                    condições de acesso e/ou uso dos Sites.
                </p>
                <p>
                    <strong>Admissibilidade e Acesso</strong>. O acesso e
                    utilização dos Sites por menores de idade, de acordo com a
                    legislação vigente, é da responsabilidade de seus
                    respectivos pais, tutores legais ou representantes.
                    Igualmente, a NotCo adverte que aqueles maiores de idade
                    que, de acordo com a legislação vigente, assumem a condição
                    de pais, tutores legais ou representantes, serão
                    responsáveis pelos menores de idade que, estando sob sua
                    tutela, acessarem os Sites, pelo que se recomenda
                    enfaticamente que tomem as devidas precauções durante a
                    navegação nos Sites.
                </p>
                <p>
                    A NotCo reserva-se o direito de limitar o acesso aos Sites
                    e/ou Serviços específicos a Usuários com idade ou maiores de
                    18 anos. Nesse caso, a NotCo identificará claramente as
                    partes dos Sites ou Serviços aos quais o acesso é limitado e
                    os termos de uso aplicáveis. Sem prejuízo do disposto
                    anteriormente, a NotCo reserva-se o direito de negar a
                    qualquer momento e sem necessidade de prévio aviso, o acesso
                    aos Sites aos Usuários que descumpram as condições gerais ou
                    as específicas que sejam aplicáveis em cada caso.
                </p>
                <p>
                    <strong>Cadastro</strong>: Para ter acesso a determinadas
                    funcionalidades dos Sites, o Usuário poderá ser solicitado a
                    realizar um cadastro específico. Nesses casos, ou caso o
                    Usuário queira se cadastrar ainda que tal cadastro não seja
                    exigido, o Usuário deverá preencher, nos campos próprios,
                    suas informações pessoais. Entre as informações pessoais,
                    incluem-se, exemplificativamente, mas não limitado a nome
                    completo, documento de identidade, data de nascimento e
                    informações de contato (número de telefone fixo, telefone
                    celular, residência ou domicílio e endereço de e- mail).
                </p>
                <p>
                    Ao se cadastrar nos Sites, é importante que o Usuário
                    forneça informações precisas, completas e atualizadas e
                    concorde em atualizar referidas informações, conforme
                    aplicável, de forma a mantê-las o mais precisa possível. O
                    Usuário deverá inserir um e-mail e criar senha pessoal e
                    intrasferível para realizar o login nos Sites. O login e
                    senha do Usuário são confidenciais e sigilosos, devendo o
                    Usuário adotar as cautelas e diligências necessárias para
                    impedir a utilização indevida por terceiros.
                </p>
                <p>
                    O Usuário é o único responsável pelo acesso e atividades
                    realizadas nos Sites, devendo informar prontamente à NotCo
                    em caso de utilização inadequada ou acesso e uso não
                    autorizados por parte de terceiros. Em caso de perda ou
                    furto da senha de acesso, o Usuário deverá solicitar
                    imediatamente a alteração de sua senha nos Sites. Caso tal
                    solicitação não seja possível por qualquer motivo, o Usuário
                    deverá comunicar a NotCo, sob pena de permanecer responsável
                    por todas as ações nos Sites feitas por meio do cadastro de
                    tal Usuário.
                </p>
                <p>
                    O cadastro do Usuário nos Sites deverá conter apenas
                    informações verídicas. Cada usuário é responsável por agir
                    com cautela e discernimento, sendo responsável por todas as
                    atividades realizadas por médio dos Sites.
                </p>
                <p>
                    <strong>Contato</strong>. Se o Usuário quiser nos contatar
                    por meio dos Sites, a NotCo solicitará que informe o motivo
                    do contato, alguns dados pessoais, como nome e sobrenome,
                    e-mail e país, e que escreva uma mensagem explicando os
                    motivos do contato. Como parte do processo de contato, a
                    NotCo poderá solicitar o nome de Usuário e a senha. O
                    Usuário concorda em prestar informações precisas e completas
                    ao contatar e usar os Sites e os Serviços. O Usuário
                    autoriza a NotCo a armazenar e fazer uso de sua informação
                    para os fins previstos nestes Termos e Condições, a fim de
                    responder aos requerimentos do Usuário ao acessar os Sites.
                </p>
                <p>
                    <strong>Privacidade</strong>. Em cumprimento ao disposto na
                    Lei no 13.709/2018 sobre Proteção de Dados Pessoais
                    (“LGPD”), e com o objeto de proteger a segurança dos dados
                    de caráter pessoal dos Usuários dos Sites, os dados
                    informados pelo Usuário à NotCo por meio de nossos Sites
                    estão sujeitos a nossa Política de Privacidade, disponível
                    em www.notco.com.
                </p>
                <p>
                    <strong>
                        Propriedade e Uso dos Materiais, Produtos e Serviços dos
                        Sites
                    </strong>
                    . A NotCo possui os direitos de propriedade intelectual de
                    todos os materiais dos Sites e tem o direito de usar todas
                    as marcas comerciais, marcas de serviço, gráficos e
                    logotipos utilizados nos Sites. A não ser que esteja
                    indicado expressamente, nenhuma parte dos Sites poderá ser
                    copiada, reproduzida, baixada, publicada, transmitida ou
                    distribuída por qualquer forma, exceto em caso de cópia dos
                    materiais em qualquer computador para seu uso pessoal e não
                    comercial, desde que sejam mantidos intactos os avisos de
                    direitos de autor, marcas comerciais e outros avisos de
                    propriedade dos materiais. Qualquer modificação dos
                    materiais ou o uso dos materiais para qualquer outra
                    finalidade constitui violação aos direitos de propriedade
                    intelectual e direitos de propriedade da NotCo. Fica
                    proibido o uso de qualquer material desse tipo em qualquer
                    outro website ou rede eletrônica sem o consentimento prévio
                    e por escrito da NotCo. O uso das marcas comerciais, marcas
                    de serviço, gráficos e logotipos dos Sites de forma diversa
                    à autorizada nestes Termos e Condições, ou conforme
                    autorizado por escrito pela NotCo, fica estritamente
                    proibido.
                </p>
                <p>
                    Se o Usuário tiver que baixar um software ou outro conteúdo
                    digital, inclusive aplicativos, para utilizar ou acessar os
                    Sites (“<u>Conteúdo Digital</u>”), a NotCo lhe concederá uma
                    licença do Conteúdo Digital e de todos os arquivos, imagens
                    e dados relacionados com os termos e condições aplicáveis. O
                    Usuário concorda e reconhece não ser o proprietário do
                    Conteúdo Digital baixado, e que a NotCo não lhe transfere a
                    propriedade do Conteúdo Digital. A NotCo mantém a
                    propriedade absoluta e o título do Conteúdo Digital baixado
                    e todos os direitos de propriedade intelectual relacionados
                    aos produtos. O Usuário não poderá redistribuir, vender,
                    descompilar, aplicar engenharia reversa, desmontar ou
                    reduzir o Conteúdo Digital de forma legível para o ser
                    humano.
                </p>
                <p>
                    <strong>Consentimento</strong>. O Usuário outorga à NotCo
                    todas as autorizações e consentimentos previstos na LGPD
                    sobre proteção de dados pessoais, necessários para o
                    tratamento de suas informações pela NotCo, Partes
                    Relacionadas, filiais e/ou Prestadores de Serviços, de
                    acordo com estes Termos e Condições e conforme a Política de
                    Privacidade disponível em www.notco.com.
                </p>
                <p>
                    <strong>Âmbito Territorial dos Sites</strong>. A NotCo
                    controla e opera os Sites na República Federativa do Brasil.
                    Na falta de indicação em contrário nos Sites, estes
                    pretendem promover somente os produtos NotCo vendidos pela
                    NotCo na República Federativa do Brasil e, portanto, a NotCo
                    não garante que os Sites ou os produtos nele descritos sejam
                    adequados ou se encontrem disponíveis para uso em outros
                    locais. O Usuário será responsável pelo cumprimento da
                    legislação vigente aplicável a ele e em relação ao conteúdo
                    e funcionamento dos Sites.
                </p>
                <p>
                    <strong>Links para Websites de Terceiros</strong>. Os Sites
                    podem conter links ou referências a Websites de Terceiros.
                    Estas ligações são proporcionadas somente para conveniência
                    do Usuário. Nenhuma informação, material ou conteúdo de
                    terceiros que esteja contido, referenciado ou seja incluído
                    ou vinculado para ou a partir dos Sites implica aprovação de
                    produtos, serviços ou informações de terceiros. Todas as
                    informações, dados, opiniões, recomendações, produtos ou
                    serviços fornecidos por estes terceiros, mediante links para
                    outros websites ou diretamente, por meio de seus websites,
                    pertencem exclusivamente a esses terceios e não à NotCo, não
                    sendo a NotCo responsável por seus conteúdos. O uso que
                    fizer o Usuário dos Websites de Terceiros está sujeito aos
                    termos de uso e às políticas de privacidade dos referidos
                    websites.
                </p>
                <p>
                    <strong>
                        Exclusão e Garantias relativas ao Uso e Funcionamento
                        dos Sites e Ligações visíveis nos Sites
                    </strong>
                    . O material disponível nos Sites é fornecido no estado em
                    que se encontra e conforme disponibilizado, sem garantias de
                    qualquer natureza, sejam expressas ou implícitas. Na máxima
                    extensão permitida pela legislação aplicável, o Usuário
                    renuncia a todas as condições e garantias, expressas ou
                    implícitas, incluindo, sem limitação, todas as garantias
                    implícitas de comerciabilidade, adequação para finalidade
                    específica, propriedade e não violação. A NotCo não oferece
                    qualquer garantia de que os Sites cumpram quaisquer
                    requisitos, ou de que o acesso ao Site seja ininterrupto,
                    pontual, seguro ou livre de erros, ou que quaisquer
                    defeitos, se houver, sejam corrigidos pela NotCo. A NotCo
                    não oferece qualquer tipo de garantia quanto aos resultados
                    que possam ser obtidos a partir do uso dos Sites, ou quanto
                    à exatidão, qualidade ou confiabilidade das informações
                    obtidas por meio do Site. O material nos Sites poderá conter
                    inexatidões técnicas ou erros tipográficos e poderá ser
                    inexato, ou tornar-se inexato como resultado de
                    desenvolvimentos posteriores às suas respectivas datas de
                    publicação. A NotCo não assume a obrigação de verificar ou
                    manter a vigência das referidas informações.
                </p>
                <p>
                    Quanto ao funcionamento dos Sites, a NotCo não garante que
                    (i) o funcionamento dos Sites cumpra os requisitos do
                    Usuário; (ii) o acesso aos Sites será ininterrupto,
                    oportuno, seguro, livre de vírus, worms, cavalos de Troia ou
                    outros componentes daninhos, ou livre de defeitos ou erros;
                    (iii) os resultados que possam ser obtidos no uso dos Sites
                    serão precisos ou confiáveis; ou (iv) os defeitos serão
                    corrigidos. O Usuário reconhece e concorda que a utilização
                    de qualquer material e/ou dados baixados ou obtidos através
                    dos Sites será realizado sob sua própria responsabilidade e
                    o Usuário será o único responsável por qualquer dano a seu
                    sistema informático ou perda de dados em seu computador que
                    resultar do download do referido material e/ou dados.
                </p>
                <p>
                    A NotCo não se responsabiliza de modo algum pelos conteúdos,
                    atividades comerciais, produtos e serviços incluídos que
                    possam ser visualizados mediante conexões eletrônicas
                    (links) direta ou indiretamente, por meio dos Sites,
                    especialmente os relacionados com conteúdos de valor
                    agregado para o Usuário, como de lazer, entretenimento,
                    curiosidades, conselhos ou outros. A presença de links nos
                    Sites, salvo manifestação expressa em contrário, tem uma
                    finalidade meramente informativa e não implica, em nenhum
                    caso, sugestão, convite ou recomendação sobre referidos
                    links. Estas conexões não representam qualquer tipo de
                    relação entre a NotCo e os particulares ou empresas
                    titulares dos websites aos que se pode acessar mediante
                    estes links. A NotCo se reserva o direito de retirar
                    unilateralmente e a qualquer momento os links que aparecem
                    nos Sites.
                </p>
                <p>
                    <strong>Limitações de Responsabilidade</strong>. De acordo
                    com a legislação em vigor, sob nenhuma circunstância a
                    NotCo, suas Partes Relacionadas, filiais e/ou Prestadores de
                    Serviços, seus licenciantes o licenciados serão responsáveis
                    perante o Usuário ou qualquer outra pessoa ou entidade por
                    danos diretos, indiretos, especiais, incidentais,
                    consequentes, punitivos ou de outro tipo, incluídas as
                    perdas, lesões pessoais (inclusive a morte) e danos à
                    propriedade, que possam resultar de (i) o uso ou
                    impossibilidade de usar os Sites ou qualquer material
                    publicado nos Sites; (ii) a conduta de qualquer outro
                    Usuário ou terceiros nos Sites; (iii) o acesso não
                    autorizado ou a alteração de dados pessoais do Usuário; e
                    (iv) qualquer outra questão relativa aos Sites. A NotCo não
                    será responsável, mesmo que a NotCo ou seu representante
                    autorizado tenha sido avisado sobre a possibilidade de tais
                    danos. Estes incluem, entre outros, danos ou lesões causadas
                    por erro, omissão, interrupção, defeito, falha de
                    funcionamento, atraso na operação ou transmissão, falha da
                    linha ou vírus do computador, worms, cavalo de Troia ou
                    outro componente danoso.
                </p>
                <p>
                    Se a legislação vigente não admitir a exclusão de certas
                    garantias ou a limitação ou exclusão total de
                    responsabilidade, nesse caso a limitação de responsabilidade
                    mencionada anteriormente será interpretada na máxima
                    extensão permitida pela lei.
                </p>
                <p>
                    <strong>Indenização</strong>. O Usuário concorda em defender
                    e indenizar a NotCo, suas Partes Relacionadas, suas filiais
                    e/ou Prestadores de Serviços, e a cada um de seus
                    respectivos agentes, licenciados, sucessores e cessionários,
                    de qualquer reclamação, demanda, ação ou processo de
                    qualquer tipo e de todos e quaisquer danos e
                    responsabilidades, custos e despesas, inclusive honorários
                    advocatícios relacionados com o uso dos Sites por
                    descumprimento do permitido nestes Termos e Condições, e/ou
                    qualquer descumprimento ou suposto descumprimento de
                    qualquer de suas garantias, declarações ou acordos
                    estabelecidos neste texto.
                </p>
                <p>
                    <strong>Duração</strong>. A duração da prestação do serviço
                    dos Sites e dos Serviços é indeterminada. Sem prejuízo do
                    anteriormente disposto, a NotCo reserva-se o direito de
                    interromper, suspender ou terminar a prestação do Serviço
                    dos Sites ou de qualquer dos serviços que o integram, sem
                    causa justificada.
                </p>
                <p>
                    <strong>Alteração dos Termos</strong>. A NotCo reserva-se o
                    direito de efetuar, esporadicamente, alterações nos Termos e
                    Condições a seu exclusivo critério, mediante atualização nos
                    Sites, e a indicação da data de aplicação da nova versão
                    destes Termos e Condições. A data da “Última Atualização”
                    incluída ao final deste aviso legal, indicará quando foram
                    realizadas as alterações. Se o Usuário continuar usando os
                    Sites após a publicação de uma nova versão dos Termos e
                    Condições, o uso implicará a aceitação de tais alterações.
                </p>
                <p>
                    <strong>Lei Aplicável e Jurisdição</strong>. Os presentes
                    Termos e Condições, bem como a relação entre o Usuário e a
                    NotCo, serão regidos e interpretados de conformidade com a
                    legislação vigente da República Federativa do Brasil. Para
                    todos os efeitos legais, o Usuário e a NotCo elegem foro da
                    Comarca da Capital do Estado de São Paulo, com a exclusão de
                    qualquer outro, por mais privilegiado que seja.
                </p>
                <p>
                    <strong>Independência das Cláusulas</strong>. Se alguma
                    disposição destes Termos e Condições for declarada ilegal,
                    nula o inaplicável por algum motivo, a referida disposição
                    será desconsiderada nestes Termos e Condições e não afetará
                    a validade e aplicabilidade das disposições restantes.
                </p>
                <p>
                    <strong>Ausência de Renúncia</strong>. Nenhuma imprecisão
                    por parte da NotCo no descumprimento dos presentes Termos e
                    Condições constituirá renúncia a nenhum dos direitos da
                    NotCo sob estes Termos e Condições, seja por ações passadas
                    ou futuras por parte de qualquer pessoa. Somente a renúncia
                    por escrito e assinada por um representante legal da NotCo
                    terá efeito legal.
                </p>
                <p>
                    Caso o Usuário tenha alguma dúvida ou deseje entrar em
                    contato com a NotCo, poderá fazê-lo por meio do
                    whynot@thenotcompany.com.
                </p>
            </ModalBody>
        </>
    )
}

function English() {
    return (
        <>
            <ModalHeader>TERMS AND CONDITIONS THE NOT COMPANY SpA</ModalHeader>
            <ModalBody>
                <p>
                    <strong>Version April 22th, 2020</strong>
                </p>
                <p>
                    This terms and conditions (the “<u>Terms of Use</u>”)
                    applicable to the User, regulate the access to and/or use of
                    the websites where this Terms of Use (the “<u>Sites</u>”)
                    are posted controlled by The Not Company SpA (“<u>NotCo</u>
                    ”).
                </p>
                <p>
                    From the time users access the Sites, they are subject to
                    the following terms and conditions. The access to and/or use
                    of the Sites attributes to whoever accesses the condition of
                    user, accepting, from that very moment, fully and without
                    any reservation, the present Terms of Use, as well as the
                    particular conditions that, in their case, complement,
                    modify or substitute the Terms of Use, when this happens, in
                    relation to all the services and contents of the Sites.
                    Anyone who does not accept these terms and conditions must
                    refrain from accessing the Sites, either directly or
                    indirectly, and from using any information or service
                    provided by them.
                </p>
                <p>
                    <strong>Definitions</strong>. For the purpose of this Terms
                    of Use, the following terms shall have the meaning set forth
                    in this section.
                </p>
                <p>
                    “<strong>Related Party</strong>”: means any affiliates,
                    entities which control NotCo and/or subsidiaries of NotCo.
                </p>
                <p>
                    “<strong>Service Providers</strong>”: means any third party
                    service providers, that are not a Related Party, that may
                    perform certain services for us, such as website hosting,
                    order fulfillment, delivery of NotCo’s promotional materials
                    and product offers, clearing and processing credit and debit
                    card payments, or performing other services on our behalf.
                </p>
                <p>
                    “<strong>Third Party Websites</strong>”: means other
                    websites or locations that are operated and controlled by
                    third parties other than NotCo or its Related Parties.
                </p>
                <p>
                    “<strong>User</strong>” or “<strong>Users</strong>”: any
                    person that access to and/or uses the Sites controlled by
                    NotCo.
                </p>
                <p>
                    <strong>Ownership and Operation</strong>. The Sites belong
                    to NotCo. For more information on NotCo, our product brands,
                    please visit, www.notco.com. The User agrees and
                    acknowledges that the Sites are available for his/her
                    personal and non-commercial use. The User further agrees
                    that the Sites are the property of NotCo, including all
                    intellectual and industrial property rights arising from or
                    included in the Sites, and that you have no right to use the
                    Sites except as provided in these Terms of Use. NotCo will
                    not be liable for any loss or damage the Users suffer in
                    connection with any use of the Sites for commercial or other
                    purposes not authorized under these Terms of Use. NotCo may
                    deny or terminate the User’s access to the Sites. The
                    provision of the Sites is free of charge and, on this basis,
                    NotCo has no maintenance or support service obligation and
                    is not liable for any loss or damage that the User may
                    suffer as a result of a failure to maintain or update the
                    Sites.
                </p>
                <p>
                    The User may not copy, modify or reuse the Sites, their
                    updates or any part of them, including the software they
                    incorporate. The User may use the Sites for lawful purposes
                    and in accordance with these Terms of Use. The acceptance of
                    these conditions constitutes the granting of a revocable,
                    non- transferable and non-exclusive license to view, print
                    and distribute the content of the Sites for personal and
                    non-commercial purposes provided that the User does not
                    remove or obscure the copyright notice or any other notice
                    contained in the content of the Sites. The User may not
                    copy, reprint, modify, display, develop, translate,
                    distribute, adapt, transmit, communicate to the general
                    public by telecommunication means, disclose or sell the
                    content from the Sites in any manner, for any commercial use
                    or disclose it to any third party for commercial purposes,
                    including other websites, without the prior written consent
                    of NotCo.
                </p>
                <p>
                    Additionally, the User agrees not to (i) use the Sites in
                    any way that could damage, disable, overburden or impair the
                    Sites, or interfere with any other use of the Sites
                    including the ability of any user to engage in real-time
                    activities through the web; (ii) use any robot, spider or
                    other automatic device, process or means to access this Site
                    for any purpose, including scraping, data mining, monitoring
                    or copying any material from this Site; (iii) use any manual
                    process to monitor or copy any material from the Sites, or
                    for any other unauthorized purpose without the prior written
                    consent of NotCo; (iv) use any other device, software or
                    routine to interfere with the proper working of the Sites;
                    or (v) any other attempt to interfere with the proper
                    working of the Sites.
                </p>
                <p>
                    <strong>Acceptance of these Terms of Use</strong>. The
                    access to the Sites, directly or indirectly, its use and/or
                    download of information from them implies that the User
                    accepts the Terms of Use in whole. The User's use of the
                    Sites and any applications, software, data, products,
                    contests, promotions, sweepstakes and other services
                    provided to the User by NotCo on or through the Sites (the "
                    <u>Services</u>"), shall be subject to the terms of a legal
                    agreement between the User and NotCo.
                </p>
                <p>
                    <strong>Changes to the Information</strong>. NotCo reserves
                    the right and ability to update, modify or remove, in part
                    or in whole, and without notice, any content or information
                    posted on the Sites as it sees fit, and may use such power
                    at any time without notice. This right cover content
                    referring to availability or stock of products or services,
                    specifications, price, or regarding the configuration and
                    functionalities of the Sites or information on promotional
                    activities. Likewise, NotCo may unilaterally modify without
                    prior notice, whenever it considers it appropriate, the
                    structure and design of the Sites, as well as modify or
                    eliminate the services, contents and conditions of access
                    and/or use of the Sites.
                </p>
                <p>
                    <strong>Eligibility and Access</strong>. The access to and
                    use of the Sites by minors, in accordance with current
                    legislation, is the responsibility of their respective
                    parents, legal guardians or representatives. Likewise, NotCo
                    acknowledges that those of legal age who, in accordance with
                    the legislation in force, are parents, legal guardians or
                    representatives, shall be responsible in the event that
                    minors under their guardianship access the Sites, and
                    therefore, they are strongly recommended to take the
                    appropriate precautions while browsing the Sites.
                </p>
                <p>
                    NotCo may limit the access to certain parts of the Sites
                    and/or specific Services to users aged 18 and over. In said
                    case, NotCo shall clearly identify those parts of the Sites
                    or those Services where access is limited together with the
                    applicable terms of use. Notwithstanding the foregoing,
                    NotCo may deny access to the Sites and/or the Services
                    without prior notice to users who breach these general terms
                    and conditions, or the particular terms and conditions
                    applicable to them.
                </p>
                <p>
                    <strong>Registration</strong>. To have access to certain
                    functionalities of the Sites, the user may be asked to make
                    a specific registration. In these cases, or if the user
                    wishes to register, even if such registration is not
                    mandatory, the user must complete their personal information
                    in the corresponding fields. Personal information includes,
                    by way of example, but not limited to, full name, identity
                    document, date of birth, and contact information (phone
                    number, home address, and email address).
                </p>
                <p>
                    When registering on the Sites, it is important that the user
                    provides accurate, complete and updated information and
                    agrees to update such information, as appropriate, to keep
                    it as accurate as possible. The user must enter an email and
                    create a personal and non-transferable password to log into
                    the Sites. The username and password are confidential, and
                    the user must take the necessary precautions and measures to
                    avoid misuse by third parties.
                </p>
                <p>
                    The user is solely responsible for the access and activities
                    carried out on the Sites, and must immediately inform NotCo
                    in case of misuse or unauthorized access and use by third
                    parties. In case of loss or theft of the access password,
                    the user must immediately request the change of the password
                    on the Sites. If said request is not possible for any
                    reason, the user must contact NotCo, subject to remain
                    responsible for all actions on the Sites made through the
                    registration of said user.
                </p>
                <p>
                    The user's registration on the Sites must contain only true
                    information. Each user is responsible for acting with
                    caution and discernment, being responsible for all
                    activities carried out through the Sites.
                </p>
                <p>
                    <strong>Contact</strong>. In the event that the User wishes
                    to contact us through the Sites, NotCo will ask for the
                    reason of the contact, personal information such as first
                    and last name, e- mail address and country, as well as the
                    drafting of a message explaining the reasons for the
                    contact. As part of the contact process, NotCo may request a
                    username and password. The User agrees to provide accurate
                    and complete information when contacting and using the Sites
                    and Services. The User authorizes NotCo to store and use his
                    or her information for the purposes set forth in these Terms
                    and Conditions in order to respond to the User's requests
                    when accessing the Sites.
                </p>
                <p>
                    <strong>Privacy</strong>. In compliance with Law No. 19,628
                    on the Protection of Personal Data, and in order to protect
                    the security of the personal data of the Users of the Sites,
                    the data that the User provides to NotCo through our Sites
                    are subject to our Privacy Policy, available at
                    www.notco.com.
                </p>
                <p>
                    <strong>
                        Ownership and Use of Sites’ Matrials, Products and
                        Services
                    </strong>
                    . NotCo owns the intellectual property rights for all of the
                    materials on the Sites. NotCo also owns or has a valid right
                    to use all trademarks, service marks, graphics and logos
                    used on the Sites. Unless expressly stated, no part of the
                    Sites may be copied, reproduced, republished, uploaded,
                    posted, transmitted, or distributed in any way, except that
                    you may download one copy of the materials on any single
                    computer for your personal, non-commercial use, provided you
                    keep intact all copyright, trademark, and other proprietary
                    notices on the materials. Any use, reproduction,
                    republication, upload, posting, transmission, modification
                    of the materials or use of the materials for any other
                    purpose is a violation of NotCo's intellectual property
                    rights and proprietary rights. The use of any such
                    material(s) on any other website or computer network without
                    NotCo's written consent is strictly prohibited. Your use of
                    the trademarks, service marks, graphics and logos on the
                    Sites in any manner other than as authorized in these Terms
                    of Use, or as authorized in writing by NotCo, is strictly
                    prohibited.
                </p>
                <p>
                    In case the Users download software or other digital
                    content, including apps, from the Sites (“<u>Products</u>”),
                    the Products, and all files, images and data relating
                    thereto, will be licensed to you by NotCo under the
                    applicable terms and conditions. The User agrees and
                    acknowledges not to own the downloaded Products, and that
                    NotCo does not transfer ownership of the Products to you.
                    NotCo retains full ownership of and title to the downloaded
                    Products and all intellectual property rights related
                    thereto. You may not redistribute, sell, decompile, reverse
                    engineer, disassemble, or otherwise reduce the Products to a
                    human-readable form.
                </p>
                <p>
                    <strong>Consent</strong>. The User grants NotCo all consents
                    required pursuant to Law N° 19,628 on the Protection of
                    Personal Data, which may be required for the use by NotCo,
                    its Related Parties, Affiliates and/or Service Providers, in
                    accordance with these Terms of Use for the Personal
                    Information processing in accordance with the Privacy Policy
                    available at www.notco.com.
                </p>
                <p>
                    <strong>Geographic Scope of the Sites</strong>. NotCo
                    controls and operates the Sites from the Republic of Chile.
                    Unless otherwise specified on or by the Sites, it is
                    intended to promote only those NotCo products that are sold
                    by NotCo in the Republic of Chile, and therefore, NotCo
                    makes no representation that materials in the Sites or the
                    products described thereby are appropriate or available for
                    use in other locations. The User shall be responsible for
                    compliance with all local laws applicable to them with
                    respect to the content and operation of the Sites.
                </p>
                <p>
                    <strong>Third Party Links</strong>. There may be hyperlinks
                    on the Sites to Third Party. These links are provided solely
                    for the Users’ convenience. No information, material or
                    content of third parties contained in, referenced by,
                    included in, or linked to or from the Sites does not imply
                    endorsement of the products, services or information of the
                    third parties. Any information, data, opinions,
                    recommendations, products or services provided by these
                    third parties, whether through links to other websites or
                    directly through their websites, are solely those of the
                    third parties and not of NotCo. User's use of Third-Party
                    Websites is subject to the terms of use and privacy policies
                    of those websites.
                </p>
                <p>
                    <strong>
                        Exclusion of Warranties regarding the Use and
                        Functioning of the Sites and Links visible in it
                    </strong>
                    . The material available on the Sites is provided as is, as
                    available and without conditions or warranties of any kind,
                    either express or implied. To the fullest extent permitted
                    by applicable law, User disclaims all conditions and
                    warranties, express or implied, including, but not limited
                    to, all implied warranties of merchantability, fitness for a
                    particular purpose, title and non- infringement. NotCo makes
                    no warranty that the Sites will meet your requirements, or
                    that access to the Sites will be uninterrupted, timely,
                    secure or error-free, or that defects, if any, will be
                    corrected. NotCo does not warrant or makes representations
                    regarding the use or results of the use of the material on
                    the Sites in terms of correctness, accuracy, reliability, or
                    otherwise. The material on the Sites may include technical
                    inaccuracies or typographical errors and may be inaccurate
                    or become inaccurate as a result of developments after their
                    respective dates. NotCo undertakes no obligation to verify
                    or maintain the currency of such information.
                </p>
                <p>
                    Regarding the functioning of the Sites, NotCo makes no
                    warranty that (i) the operation of the website will meet the
                    User's requirements; (ii) access to the Sites will be
                    uninterrupted, timely, secure, free of viruses, worms,
                    trojan horses or other harmful components, or free of
                    defects or errors; (iii) the results that may be obtained
                    from the use of the Sites will be accurate or reliable; or
                    (iv) defects will be corrected. The User understands and
                    agrees that any material and/or data downloaded or otherwise
                    obtained through the Sites is used at your own risk and that
                    you will be solely responsible for any damage to your
                    computer system or loss of data that results from the
                    download of such material and/or data.
                </p>
                <p>
                    NotCo is not responsible in any way for those contents,
                    commercial activities, products and services included that
                    could be viewed through electronic links (links), directly
                    or indirectly, through the Sites, especially those that
                    could correspond to value-added content for the User, such
                    as leisure, entertainment, curiosities, advice or others.
                    The presence of links on the Sites, unless expressly stated
                    otherwise, is merely for information purposes and in no case
                    implies a suggestion, invitation or recommendation about
                    them. These links do not represent any type of relationship
                    between NotCo and the individuals or companies that own the
                    websites that can be accessed through these links. NotCo
                    reserves the right to unilaterally remove the links that
                    appear on the Sites at any time.
                </p>
                <p>
                    <strong>Limitation of Liability</strong>. Subject to
                    applicable law, under no circumstances shall NotCo, its
                    Related Party, Affiliates and/or Service Providers, and each
                    of their licensors or licensees, be liable before the User
                    or any other person or entity for any direct, indirect,
                    special, incidental, consequential, punitive or other
                    damages, including lost profits, personal injury (including
                    death) and property damage, that may result from (i) the use
                    of, or the inability to use, the Sites or any material on
                    the Sites; (ii) the conduct of any other User or third party
                    of the Sites; (iii) the unauthorized access to or amendment
                    of the Personal Information of the User; (iv) and any other
                    matter related to the Sites. NotCo shall not be liable even
                    if NotCo or an authorized representative of NotCo has been
                    advised of the possibility of such damages. These include
                    but are not limited to damages or injury caused by error,
                    omission, interruption, defect, failure of performance,
                    delay in operation or transmission, line failure or computer
                    virus, worm, trojan horse or other harmful component.
                </p>
                <p>
                    In the event that applicable law may not allow the exclusion
                    of certain warranties or the limitation or total exclusion
                    of liability in which case the above limitation of liability
                    shall be construed to the maximum extent permitted by law.
                </p>
                <p>
                    <strong>Indemnification</strong>. User hereby agrees to
                    indemnify and hold NotCo and its Related Party, its
                    Affiliates and/or Service Providers, and each of their
                    respective agents, licensees, successors and assigns,
                    harmless from and against any and all claims, actions or
                    proceedings of any kind and from any and all damages,
                    liabilities, costs and expenses, including reasonable legal
                    fees, relating to or arising out of your use of the website,
                    any use of your User Submissions as permitted in these Terms
                    of Use, and/or any breach or alleged breach of any of your
                    warranties, representations or agreements hereunder.
                </p>
                <p>
                    <strong>Termination</strong>. The duration of the service of
                    the Sites and of the services is indefinite. Notwithstanding
                    the foregoing, NotCo may interrupt, suspend or terminate the
                    provision of the service of the Sites or any of the services
                    that comprise it, without expression of cause.
                </p>
                <p>
                    <strong>Changes to the Terms of Use</strong>. NotCo may,
                    from time to time, change or revise these Terms of Use at is
                    sole discretion by updating this posting on the Site, and
                    indicating the date of application of the new version of the
                    Terms of Use. The date of the “Last Update” included at the
                    end of this legal notice shall indicate when the changes
                    have been made. Your use of the Site and your participation
                    in the application process reaffirms your continuing
                    agreement to the then-current Terms of Use.
                </p>
                <p>
                    <strong>Applicable Law and Jurisdiction</strong>. These
                    Terms of Use, as well as the relation between User and
                    NotCo, shall be governed by and construed in accordance with
                    the laws of the Republic of Chile. For all legal purposes,
                    the User and NotCo establish their domicile in the borough
                    and city of Santiago, Chile, and extend the jurisdiction of
                    their ordinary courts of justice.
                </p>
                <p>
                    <strong>Severability</strong>. If any provision of these
                    Terms of Use shall be found to be unlawful, void, or for any
                    reason unenforceable, then that provision shall be deemed
                    severable from these Terms of Use and shall not affect the
                    validity and enforceability of any remaining provisions.
                </p>
                <p>
                    <strong>Waiver</strong>. No failure on the part of NotCo to
                    enforce any part of these Terms of Use shall constitute a
                    waiver of any of NotCo's rights under these Terms of Use
                    whether for past or future actions on the part of any
                    person. Only a written waiver signed by a legal
                    representative of NotCo will have legal effect.
                </p>
                <p>
                    If the user has any questions or wishes to contact NotCo,
                    they can write to whynot@thenotcompany.com
                </p>
            </ModalBody>
        </>
    )
}
