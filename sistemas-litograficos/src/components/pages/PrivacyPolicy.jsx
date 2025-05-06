import React, { useState } from 'react';
import '../../App.css';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container-privacy">
      <h1>MANUAL DE POLÍTICAS Y PROCEDIMIENTOS EN MATERIA DE PROTECCIÓN DE DATOS PERSONALES</h1>
      <h2>SISTEMAS LITOGRÁFICOS</h2>
      <h4>Octubre 01 2016</h4>
      <h3>Contenido</h3>
      <ul>
        <li className='li-privacy-in' onClick={() => toggleSection('INTRODUCCIÓN')}>
        INTRODUCCIÓN
          {expandedSection === 'INTRODUCCIÓN' && (
            <p>
              A continuación se enuncian las políticas de Tratamiento de información que rigen la actividad desarrollada por Sistemas litográficos y el manejo de sus bases de datos. El presente documento se desarrolla en cumplimiento de la Ley 1581 de 2012, “Por la cual se dictan disposiciones generales para la protección de datos personales”, según la cual todas las entidades públicas o privadas que manejen datos personales, deberán adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la ley y en especial, para asegurar el efectivo ejercicio de los derechos de los titulares.

              Toda la información recibida por Sistemas litográficos  través de sus diferentes canales de comunicación, en medios digitales o impresos, y que conforma nuestras bases de datos, obtenidos de clientes, proveedores, empleados o contratistas, y demás titulares de información, se rige por las siguientes políticas de uso.

              Si usted se encuentra relacionado en alguna de nuestras bases de datos es porque ha tenido o mantiene una relación comercial con sistemas litográficos o con nuestra red de concesionarios, o porque ha entregado sus datos de manera voluntaria en eventos y actividades desarrollados por sistemas litográficos o directamente en nuestras oficinas.

              Información del responsable del tratamiento de los datos:

              Sistemas litográficos. identificada con NIT: 890.922.323-1
            </p>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('disposicionesGenerales')}>
          PARTE I. DISPOSICIONES GENERALES
          {expandedSection === 'disposicionesGenerales' && (
            <ul>
              <li>
                <h3>ARTÍCULO 1. LEGISLACIÓN APLICABLE.</h3>
                <p>
                  Este manual fue elaborado teniendo en cuenta las disposiciones contenidas en la Ley 1581 de 2012 “Por la cual se dictan disposiciones generales para la protección de datos personales” y el Decreto 1377 de 2013 “Por el cual se reglamenta parcialmente la Ley 1581 de 2012”.
                </p>
              </li>
              <li>
                <h3>ARTÍCULO 2. ÁMBITO DE APLICACIÓN.</h3>
                  <p>
                  Este manual se aplicará al tratamiento de los datos de carácter personal que recoja y maneje sistemas litográficos.
                  </p>
              </li>
              <li>
                <h3>ARTÍCULO 3. OBJETO.</h3>
                  <p>
                  Proteger y garantizar con base en el presente manual el derecho fundamental de habeas data reglamentado por la Ley 1581 de 2012, que regula los procedimientos de recolección, manejo y tratamiento de los datos de carácter personal que realiza sistemas litográficos
                  </p>
              </li>
              <li>
                <h3>ARTÍCULO 4. VIGENCIA DE LA BASE DE DATOS</h3>
                  <p>
                  Sistemas litográficos, aplicará las políticas y procedimientos contenidos en el presente manual a las bases de datos sobre las que tengan poder de decisión, por un término igual al estatutariamente establecido para la duración de la sociedad.
                  </p>
              </li>
              <li>
                <h3>ARTÍCULO 5. PRINCIPIOS PARA EL TRATAMIENTO DE DATOS PERSONALES.</h3>
            
                  <p>
                  En el desarrollo, interpretación y aplicación de la presente ley, se aplicarán, de manera armónica e integral, los siguientes principios:
                  </p>
                  <p> 
                    a) Principio de finalidad: El Tratamiento de los datos personales recogidos por sistemas litográficos debe ser informada al Titular.
                  </p>
                  <p>
                  b) Principio de libertad: El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado del titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.
                  </p>
                  <p>
                  c) Principio de veracidad o calidad: La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.
                  </p>
                  <p>
                  d) Principio de transparencia: En el Tratamiento debe garantizarse el derecho del Titular a obtener del Responsable en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.
                  </p>
                  <p>
                  e) Principio de acceso y circulación restringida: Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los titulares o terceros autorizados.
                  </p>
                  <p>
                  f) Principio de seguridad: La información sujeta a Tratamiento por parte del Responsable, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                  </p>
                  <p>
                  g) Principio de confidencialidad: Todas las personas que intervengan en el tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento.
                  </p>
              
              </li>
            </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('derechosYDeberes')}> 
          PARTE II. DERECHOS Y DEBERES
          {expandedSection === 'derechosYDeberes' && (
              <ul>
                <li>
                  <h4>ARTÍCULO 6. DERECHOS DE LOS TITULARES DE LA INFORMACIÓN.</h4>
                  <ul>
                    <li>
                    Conocer, actualizar y corregir sus Datos Personales. Con la facultad de ejercer este derecho, entre otros, en relación con la información, parcial, inexacta, incompleta, dividida, información engañosa o cuyo tratamiento sea prohibido o no autorizado.
                    </li>
                    <li>
                    Requerir prueba del consentimiento otorgado para la recolección y el tratamiento de los Datos Personales.
                    </li>
                    <li>
                    Ser informado por sistemas litográficos. del uso que se le han dado a los Datos Personales.
                    </li>
                    <li>
                    Presentar quejas ante la Superintendencia de Industria y Comercio en el caso en que haya una violación por parte de sistemas litográficos., de las disposiciones de la Ley 1581 de 2012, el Decreto 1377 de 2013 y otras normas que los modifiquen, adicionen o complementen, de conformidad con las disposiciones sobre el requisito de procedibilidad establecido en el artículo 16 Ley 1581 de 2012.
                    </li>
                    <li>
                      Revocar la autorización otorgada para el tratamiento de los Datos Personales.
                      </li>
                    <li>
                      Solicitar ser eliminado de su base de datos. Esta supresión o eliminación implica la eliminación total o parcial de la información personal de acuerdo con lo solicitado por el titular en las bases de datos sistemas litográficos.. Es importante tener en cuenta que el derecho de supresión no es absoluto y el responsable puede negar el ejercicio del mismo cuando: El titular tenga el deber legal y/o contractual de permanecer en la base de datos, la supresión de los datos obstaculice actuaciones judiciales o administrativas o la investigación y persecución de delitos, los datos que sean necesarios para cumplir con una obligación legalmente adquirida por el titular.
                      </li>
                    <li>
                    Tener acceso a los Datos Personales que la marca y/o sistemas litográficos. hayan recolectado y tratado.
                    </li>
                  </ul>
                </li>
                <li>
                    <h4>
                      ARTÍCULO 7. DEBERES DEL RESPONSABLE DE LA INFORMACIÓN:
                    </h4>
                    <p>
                      En calidad de Responsable del Tratamiento de los datos personales, y de conformidad con lo establecido en la Ley 1581 de 2012, sistemas litográficos., se compromete a cumplir con los siguientes deberes, en lo relacionado con el tratamiento de datos personales:
                    </p>
                    <ul>
                      <li>
                      Garantizar al titular de la información, en todo tiempo, el pleno y efectivo ejercicio del derecho de habeas data.
                      </li>
                      <li>
                      Conservar copia de la respectiva autorización otorgada por el titular.
                      </li>
                      <li>
                      Informar debidamente al titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.
                      </li>
                      <li>
                      Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                      </li>
                      <li>
                      Tramitar las consultas y reclamos formulados por los titulares de la información en los términos señalados por los artículos 14 y 15 de la ley 1581 de 2012.
                      </li>
                      <li>
                      Informar a solicitud del Titular sobre el uso dado a sus datos.
                      </li>
                      <li>
                      Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares.
                      </li>
                      <li>
                      Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.
                      </li>
                      <li>
                      Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte de la autoridad competente, sobre procesos judiciales relacionados con la calidad o detalles del dato personal.
                      </li>
                      <li>
                      Abstenerse de circular información que esté siendo controvertida por el titular y cuyo bloqueo haya sido ordenado por la Superintendencia de Industria y Comercio
                      </li>
                      <li>
                      Permitir el acceso a la información únicamente a las personas autorizadas.
                      </li>
                      <li>
                      Informar a través de los medios que considere pertinentes los nuevos mecanismos que implemente para que los titulares de la información hagan efectivos sus derechos.
                      </li>
                    </ul>
                </li>
              </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('autorizacionYFinalidad')}>
          PARTE III. AUTORIZACIÓN Y FINALIDAD
          {expandedSection === 'autorizacionYFinalidad' && (
           <ul>
              <li>
                <h4>ARTICULO 8. AUTORIZACIÓN.</h4>
                <p>
                Sistemas litográficos, en su condición de Responsable del tratamiento de datos personales, ha dispuesto de los mecanismos necesarios para obtener la autorización de los titulares, garantizando en todo caso que sea posible verificar el otorgamiento de dicha autorización.
                </p>
              </li>
              <li>
                <h4>
                  ARTICULO 9. FINALIDAD DE LA AUTORIZACION. 
                </h4>
                <p>
                  El Tratamiento de los datos personales de los Titulares se llevará a cabo por parte de sistemas litográficos., con la siguiente finalidad: Medir niveles de satisfacción, Informar sobre Campañas de Servicio, Comunicar Campañas promocionales, Realizar Encuestas, Realizar Recordatorio para Mantenimientos, Ejecutar Campañas de Fidelización, Enviar Invitaciones a eventos, Realizar actualización de datos, Invitar a pruebas de vehículos, ofrecimiento de productos y servicios, comunicar noticias de la marca Sistemas litográficos  y de la red de ventas y servicios, comunicar información relacionada con productos para la financiación en la adquisición de nuestros bienes y servicios.
                </p>
              </li>
              <li>
                <h4>
                  ARTÍCULO 10. FORMA Y MECANISMOS PARA OTORGAR LA AUTORIZACIÓN.
                </h4>
                <p>
                  En el Anexo 1 de este documento se presenta el formato de autorización que ha definido sistemas litográficos., para la recolección y tratamiento de datos personales. La autorización será obtenida por alguno de los siguientes medios: a. Cotizaciones, b. Facturas de Venta, c. Actividades de Mercadeo, d. Eventos, e. Registro de Propietarios, f. Órdenes de servicio, g. Medios digitales, h. Acta de Entrega de Vehículo
                </p>
              </li>
              <li>
                <h4>
                  ARTÍCULO 11. AVISO DE PRIVACIDAD.
                </h4>
                <p>
                  En el Anexo 2 de este documento se presenta el formato de aviso de privacidad definido por sistemas litográficos. 
                </p>
              </li>
           </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('procedimiento')}>
          PARTE IV. PROCEDIMIENTO PARA EL EJERCICIO DE LOS DERECHOS DEL TITULAR DE LA INFORMACIÓN
          {expandedSection === 'procedimiento' && (
            <ul>
              <li>
              <h4>
                ARTÍCULO 12. PROCEDIMIENTO PARA GARANTIZAR EL DERECHO A PRESENTAR RECLAMOS Y EJERCICIO DE SUS DERECHOS. 
            </h4>
            <p>
              Los titulares de la información podrán ejercer sus derechos en cualquier momento y de manera gratuita, previa acreditación de su identidad.

              La solicitud deberá hacerse por alguno de los siguientes medios: Correo electrónico: www.sistemaslitograficos.com o contactando al Centro de Acompañamiento al Cliente en Medellín: +574 448 17 88
            </p>
              </li>
            </ul>
            
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('seguridadYConfidencialidad')}>
          PARTE V. SEGURIDAD Y CONFIDENCIALIDAD DE LA INFORMACIÓN
          {expandedSection === 'seguridadYConfidencialidad' && (
            <div>
              <h4>
                ARTÍCULO 13. MEDIDAS DE SEGURIDAD Y CONFIDENCIALIDAD DE LA INFORMACIÓN. 
              </h4>
              <p>
                Para el almacenamiento de los datos, la Compañía cuenta con una técnica de encriptación de datos personales y la transmisión de los datos a los encargados, se hace con archivos protegidos con contraseña. Los accesos a los sistemas están protegidos con un alto nivel de seguridad en la autenticación y autorización. Las bases de datos están alojadas en Data Center que otorgan altos niveles de integridad, confidencialidad y disponibilidad.
              </p>
            </div>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('disposicionesFinales')}>
          PARTE VI. DISPOSICIONES FINALES
          {expandedSection === 'disposicionesFinales' && (
            <div>
              <h4>ARTÍCULO 14. DESIGNACIÓN.</h4>
              <p>
              Sistemas litográficos., designa al Centro de Acompañamiento al Cliente o quien haga sus veces, para cumplir con la función de protección de datos personales, así como para dar trámite a las solicitudes de los titulares, para el ejercicio de los derechos como titular de la información.
              </p>
              <h4>ARTÍCULO 15. VIGENCIA DEL MANUAL.</h4>
              <p>
                El presente manual rige a partir de octubre de 2016.
              </p>
            </div>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('anexos')}>
          ANEXOS
          {expandedSection === 'anexos' && (
            <div>
              <h4>ANEXO 1</h4>
              <h5> AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES</h5>
                <p>
                  De conformidad con lo dispuesto en la Ley 1581 de 2012 y el Decreto 1377 de 2013, declaro que entrego de forma libre y voluntaria los siguientes datos personales: Nombres y apellidos, documento de identificación, género, dirección, ciudad, departamento, teléfonos, celular, fecha de nacimiento, correo electrónico (en adelante los “Datos Personales”) a nombre de la empresa(en adelante el “Sistemas litográficos.,”). En los términos de las definiciones de la Ley 1581 de 2012, Sistemas litográficos.,  actúa como responsable y encargado del tratamiento de mis Datos Personales. Doy mi autorización expresa para que Sistemas litográficos.,  recolecte y de cualquier otra manera trate mis Datos Personales para las siguientes finalidades: Medir niveles de satisfacción, Informar sobre Campañas de Servicio, Comunicar Campañas promocionales, Realizar Encuestas, Realizar Recordatorio para Mantenimientos, Ejecutar Campañas de Fidelización, Enviar Invitaciones a eventos, Realizar actualización de datos, Invitar a pruebas de vehículos, ofrecimiento de productos y servicios, comunicar noticias de la marca Sistemas litográficos.,  y de la red de ventas y servicios, comunicar información relacionada con productos para la financiación en la adquisición de nuestros bienes y servicios..

                  Con la firma de este documento autorizo a que mis Datos Personales sean recolectados y tratados de conformidad con la política de privacidad o política de tratamiento de la información de Sistemas litográficas., A, la cual está disponible en la página web www.sistemaslitograficos.com

                  En relación con los Datos Personales recolectados y tratados y de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013, he sido informado que tengo los siguientes derechos:
                </p>
                <ul>
                  <li>
                    Conocer, actualizar y corregir mis Datos Personales. Puedo ejercer este derecho, entre otros, en relación con la información, parcial, inexacta, incompleta, dividida, información engañosa o cuyo tratamiento sea prohibido o no autorizado.
                  </li>
                  <li>
                    Requerir prueba del consentimiento otorgado para la recolección y el tratamiento de mis Datos Personales.
                  </li>
                  <li>
                    Ser informado por Sistemas litográficas., del uso que se le han dado a mis Datos Personales.
                  </li>
                  <li>
                    Presentar quejas ante la Superintendencia de Industria y Comercio en el caso en que haya una violación por parte de Sistemas litográficos., de las disposiciones de la Ley 1581 de 2012, el Decreto 1377 de 2013 y otras normas que los modifiquen, adicionen o complementen, de conformidad con las disposiciones sobre el requisito de procedibilidad establecido en el artículo 16 Ley 1581 de 2012.
                  </li>
                  <li>
                    Revocar la autorización otorgada para el tratamiento de mis Datos Personales.
                  </li>
                  <li>
                    Solicitar ser eliminado de su base de datos.
                  </li>
                  <li>
                    Tener acceso a mis Datos Personales que Sistemas litográficos., haya recolectado y tratado.
                  </li>
                </ul>
                <p>
                  Con el fin de ejercer los derechos anteriormente descritos, realizar consultas o reclamos relacionados con mis Datos Personales, puedo contactar al Centro de Acompañamiento al Cliente en www.sistemaslitograficos.como a los teléfonos +574 448 17 88

                  Firma del cliente:

                  Nombre:

                  CC:

                  Fecha:

                  Si el titular de los datos es menor de edad, la autorización debe ser firmada por su Representante Legal.
                </p>
              <h4>ANEXO 2</h4>
              <h5>AVISO DE PRIVACIDAD</h5>
                <p>
                  Responsable: sistemas litográficos identificada con NIT. 890.922.323-1

                  De conformidad con lo dispuesto en la ley 1581 de 2012, le informamos que los datos personales que usted nos ha entregado, como cliente o prestador de bienes y servicios, harán parte de nuestra base de datos para ser usados con la siguiente finalidad: Medir niveles de satisfacción, Informar sobre Campañas de Servicio, Comunicar Campañas promocionales, Realizar Encuestas, Realizar Recordatorio para Mantenimientos, Ejecutar Campañas de Fidelización, Enviar Invitaciones a eventos, Realizar actualización de datos, Invitar a pruebas de vehículos, ofrecimiento de productos y servicios, comunicar noticias de la marca Sistemas litográficos y de la red de ventas y servicios, comunicar información relacionada con productos para la financiación en la adquisición de nuestros bienes y servicios.

                  El manejo de dichos datos se hará de acuerdo a lo establecido en el “Manual de Políticas y Procedimientos para el Tratamiento de Datos Personales”, que contiene las políticas establecidas por nuestra Compañía para el tratamiento de datos, los mecanismos para la efectividad de los derechos del Titular de la información a conocer, actualizar, rectificar, suprimir los datos que reposan en nuestra base de datos, así como a reclamar al responsable y revocar la autorización para su uso. Dicho manual puede ser consultado en la página web: www.sistemaslitograficos.com

 
                </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;