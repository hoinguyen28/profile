export default function BoxText({ data }) {
  const { bg, title, description } = data;
  return (
    <div className={`${bg === 'gray' ? 'bg--gray' : 'bg--white'} box-text`}>
      <h2 className="box-text__title">{title}</h2>
      <p className="box-text__description">{description}</p>
    </div>
  );
}
