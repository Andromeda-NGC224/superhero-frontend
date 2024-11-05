import { useSelector } from "react-redux";
import { selectIsLoading, selectSuperheroes } from "../../redux/secectors.js";
import Loader from "../Loader/Loader.jsx";
import css from "./HeroDetail.module.css";
import { ListOfPhotos } from "../ListOfPhotos/ListOfPhotos.jsx";
import { useState } from "react";
import { ModalUpdateHero } from "../ModalUpdateHero/ModalUpdateHero.jsx";

import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import { DeleteHeroModal } from "../DeleteHeroModal/DeleteHeroModal.jsx";

export const HeroDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const data = useSelector(selectSuperheroes);
  const isLoading = useSelector(selectIsLoading);
  const superhero = data[0];

  const toggleDeleteModal = () => {
    setDeleteModalIsOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (!superhero) {
    return <NotFoundPage />;
  }

  return (
    <div className={css.profileContainer}>
      <div className={css.backgroundImage}></div>
      <div className={css.profileContent}>
        <div className={css.avatarContainer}>
          <img
            src={superhero.Images[0]}
            alt={superhero.nickname}
            className={css.avatar}
          />
        </div>
        <div className={css.contentBox}>
          <div className={css.contentBoxText}>
            <h1 className={css.username}>{superhero.nickname}</h1>

            <ul className={css.bio}>
              <li className={css.bioName}>
                Real name:{" "}
                <p className={css.bioDescription}>{superhero.real_name}</p>
              </li>
              <li className={css.bioName}>
                Description:{" "}
                <p className={css.bioDescription}>
                  {superhero.origin_description}
                </p>
              </li>
              <li className={css.bioName}>
                Superpowers:{" "}
                <p className={css.bioDescription}>{superhero.superpowers}</p>
              </li>
              <li className={css.bioName}>
                Catch phrase:
                <p className={css.bioDescription}>{superhero.catch_phrase}</p>
              </li>
            </ul>
          </div>
          <div className={css.buttons}>
            <button onClick={toggleModal} className={css.updateHero}>
              Update Hero
            </button>
            <button onClick={toggleDeleteModal} className={css.deleteHero}>
              Delete Hero
            </button>
          </div>
        </div>
      </div>
      <ListOfPhotos allImages={superhero.Images} />
      {modalIsOpen && (
        <ModalUpdateHero
          onModalClose={toggleModal}
          id={superhero._id}
          initialHeroData={superhero}
        />
      )}
      {deleteModalIsOpen && (
        <DeleteHeroModal onModalClose={toggleDeleteModal} id={superhero._id} />
      )}
    </div>
  );
};
