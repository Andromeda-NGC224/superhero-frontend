import { useState } from "react";
import css from "./ModalAddHero.module.css";
import { MdDriveFileRenameOutline, MdRecordVoiceOver } from "react-icons/md";
import { GiPowerLightning } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { FaPhotoFilm } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { createSuperhero } from "../../redux/operations.js";
import toast from "react-hot-toast";

export const ModalAddHero = ({ onModalClose }) => {
  const dispatch = useDispatch();

  const [superhero, setSuperhero] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    Images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuperhero({
      ...superhero,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSuperhero((prev) => ({
      ...prev,
      Images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", superhero.nickname);
    formData.append("real_name", superhero.real_name);
    formData.append("origin_description", superhero.origin_description);
    formData.append("superpowers", superhero.superpowers);
    formData.append("catch_phrase", superhero.catch_phrase);
    superhero.Images.forEach((file) => {
      formData.append("Images", file);
    });

    if (superhero.Images.length === 0) {
      toast("Please select at least one image file.", {
        icon: "🙏",
      });
      return;
    }

    dispatch(createSuperhero(formData));

    onModalClose();
  };

  return (
    <div className={css.modalContainer}>
      <div className={css.modalContainerWindow}>
        <button className={css.modalCloseButton} onClick={onModalClose}>
          ×
        </button>
        <p className={css.modalText}>Add a new Superhero</p>
        <form className={css.modalForm} onSubmit={handleSubmit}>
          <div className={css.modalFormContainer}>
            <label className={css.modalFormLabel} htmlFor="nickname">
              Nickname
            </label>
            <input
              required
              type="text"
              id="nickname"
              name="nickname"
              className={css.modalFormInput}
              value={superhero.nickname}
              onChange={handleChange}
            />
            <MdDriveFileRenameOutline size={18} className={css.modalFormIcon} />
          </div>

          <div className={css.modalFormContainer}>
            <label className={css.modalFormLabel} htmlFor="real_name">
              Real Name
            </label>
            <input
              required
              type="text"
              id="real_name"
              name="real_name"
              className={css.modalFormInput}
              value={superhero.real_name}
              onChange={handleChange}
            />
            <SlNotebook size={18} className={css.modalFormIcon} />
          </div>

          <div className={css.modalFormContainer}>
            <label className={css.modalFormLabel} htmlFor="origin_description">
              Origin Description
            </label>
            <textarea
              required
              id="origin_description"
              name="origin_description"
              className={css.modalFormTextarea}
              value={superhero.origin_description}
              onChange={handleChange}
            />
          </div>

          <div className={css.modalFormContainer}>
            <label className={css.modalFormLabel} htmlFor="superpowers">
              Superpowers
            </label>
            <input
              required
              type="text"
              id="superpowers"
              name="superpowers"
              className={css.modalFormInput}
              value={superhero.superpowers}
              onChange={handleChange}
            />
            <GiPowerLightning size={18} className={css.modalFormIcon} />
          </div>

          <div className={css.modalFormContainer}>
            <label className={css.modalFormLabel} htmlFor="catch_phrase">
              Catch Phrase
            </label>
            <input
              required
              type="text"
              id="catch_phrase"
              name="catch_phrase"
              className={css.modalFormInput}
              value={superhero.catch_phrase}
              onChange={handleChange}
            />
            <MdRecordVoiceOver size={18} className={css.modalFormIcon} />
          </div>

          <div className={css.modalFormContainer}>
            <div className={css.modalFormLabel}>Images</div>
            <label className={css.modalFormLabelPhoto} htmlFor="images">
              Select a photo to upload...
              <input
                type="file"
                id="images"
                name="images"
                multiple
                accept="image/*"
                className={css.modalFormInputPhoto}
                placeholder="Enter image URLs separated by commas"
                onChange={handleFileChange}
              />
            </label>
            <FaPhotoFilm size={18} className={css.modalFormIcon} />
          </div>

          <button type="submit" className={css.modalFormButton}>
            Add Superhero
          </button>
        </form>
      </div>
    </div>
  );
};
