import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { t } = useTranslation();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container-privacy">
      <h1>{t('privacy.title')} </h1>
      <h2>{t('privacy.company')}</h2>
      <h4>{t('privacy.date')}</h4>
      <h3>{t('privacy.content')}</h3>
      <ul>
        <li className='li-privacy-in' onClick={() => toggleSection('INTRODUCCIÓN')}>
        {t('privacy.intro_title')}
          {expandedSection === 'INTRODUCCIÓN' && (
            <p>{t('privacy.intro_text')}</p>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('disposicionesGenerales')}>
          {t('privacy.part1')}
          {expandedSection === 'disposicionesGenerales' && (
            <ul>
               {t('privacy.part1_articles', { returnObjects: true }).map((art, idx) => (
                <li key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('derechosYDeberes')}> 
          {t('privacy.part2')}
          {expandedSection === 'derechosYDeberes' && (
              <ul>
                {t('privacy.part2_articles', { returnObjects: true }).map((art, idx) => (
                <li key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </li>
              ))}
              </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('autorizacionYFinalidad')}>
          {t('privacy.part3')}
          {expandedSection === 'autorizacionYFinalidad' && (
           <ul>
              {t('privacy.part3_articles', { returnObjects: true }).map((art, idx) => (
                <li key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </li>
              ))}
           </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('procedimiento')}>
          {t('privacy.part4')}
          {expandedSection === 'procedimiento' && (
            <ul>
              {t('privacy.part4_articles', { returnObjects: true }).map((art, idx) => (
                <li key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </li>
              ))}
            </ul>
            
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('seguridadYConfidencialidad')}>
          {t('privacy.part5')}
          {expandedSection === 'seguridadYConfidencialidad' && (
            <div>
              {t('privacy.part4_articles', { returnObjects: true }).map((art, idx) => (
                <div key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </div>
              ))}
            </div>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('disposicionesFinales')}>
          {t('privacy.part6')}
          {expandedSection === 'disposicionesFinales' && (
            <ul>
              {t('privacy.part4_articles', { returnObjects: true }).map((art, idx) => (
                <li key={idx}>
                  <h3>{art.title}</h3>
                  {/* Mostrar todos los textos que existan en el artículo */}
                  {Object.keys(art)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) => (
                      <p key={i}>{art[key]}</p>
                    ))}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className='li-privacy-in' onClick={() => toggleSection('anexos')}>
          ANEXOS
          {expandedSection === 'anexos' && (
            <div>
              {t('privacy.annexes_parts', { returnObjects: true }).map((anexo, idx) => (
                <div key={idx} style={{ marginBottom: 32 }}>
                  <h4>{anexo.title}</h4>
                  <h5>{anexo.subtitle}</h5>
                  {/* Renderiza todos los textos que existan en el anexo */}
                  {Object.keys(anexo)
                    .filter(key => key.startsWith('text'))
                    .map((key, i) =>
                      anexo[key]
                        .split('\n\n')
                        .map((parrafo, j) => <p key={i + '-' + j}>{parrafo}</p>)
                    )}
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;