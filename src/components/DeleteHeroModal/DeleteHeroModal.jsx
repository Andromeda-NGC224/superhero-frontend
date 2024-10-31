import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSuperhero } from "../../redux/operations.js";
import css from "./DeleteHeroModal.module.css";

export const DeleteHeroModal = ({ onModalClose, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteHero = async () => {
    await dispatch(deleteSuperhero(id));
    onModalClose();
    navigate("/superheroes");
  };

  return (
    <div className={css.modalContainer}>
      <div className={css.modalContainerWindow}>
        <button className={css.modalCloseButton} onClick={onModalClose}>
          ×
        </button>
        <h2>Delete Hero</h2>
        <p>Are you sure you want to delete this hero?</p>
        <div className={css.modalButtons}>
          <button onClick={handleDeleteHero} className={css.yesBtn}>
            Yes
          </button>
          <button onClick={onModalClose} className={css.noBtn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
