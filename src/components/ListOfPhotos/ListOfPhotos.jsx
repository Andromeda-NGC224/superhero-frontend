import css from "./ListOfPhotos.module.css";

export const ListOfPhotos = ({ allImages }) => {
  return (
    <div className={css.container}>
      <p>Actual photos of the hero</p>
      <div className={css.galleryContainer}>
        {allImages.map((item, index) => (
          <div key={index} className={css.card}>
            <img src={item} alt="heroPic" className={css.cardImage} />
          </div>
        ))}
      </div>
    </div>
  );
};
