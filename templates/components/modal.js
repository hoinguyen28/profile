export default function Modal({ data }) {
  const {
    cancelUrl,
    imgUrl,
    title1,
    description1,
    title2,
    quote,
    description2,
    list,
    description3,
    share,
  } = data;
  return (
    <div className="modal">
      <div className="modal__content">
        <img className="modal__img-cancel" src={cancelUrl}></img>
        <div className="modal__inner">
          <div className="modal__wrap">
            <div className="modal__image">
              {imgUrl ? <img className="modal__img" src={imgUrl}></img> : ''}
            </div>
            {title1 ? <h3 className="modal__title">{title1}</h3> : ''}
            {description1 ? (
              <>
                {description1.map((des1, index) => (
                  <p className="modal__description" key={index}>
                    {des1}
                  </p>
                ))}
              </>
            ) : (
              ''
            )}
            {quote ? <p>{quote}</p> : ''}
            {title2 ? <h3 className="modal__title">{title2}</h3> : ''}
            {description2 ? (
              <>
                {description2.map((des2, index) => (
                  <p className="modal__description" key={index}>
                    {des2}
                  </p>
                ))}
              </>
            ) : (
              ''
            )}
            {list ? (
              <ul className="modal__list">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              ''
            )}
            {description3 ? (
              <>
                {description3.map((des3, index) => (
                  <p className="modal__description" key={index}>
                    {des3}
                  </p>
                ))}
              </>
            ) : (
              ''
            )}
            {share ? (
              <div className="modal__share">
                <span>{share.title}</span>
                {share.iconUrl.map((icon, index) => (
                  <img key={index} src={icon.url} />
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
