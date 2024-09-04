import { FC, useState } from "react";
import Button from "../../../../ui/Button";
import { Category } from "../categories/store/useCategoriesStore";
import ImageInput from "../ImageInput";
import style from "./Popup.module.scss";

interface Popup {
  title: string;
  setIsOpen?: (isOpen: boolean) => void;
  addToStore: (newCategory: Category) => void;
}

const Popup: FC<Popup> = ({ title, setIsOpen }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const popupData = target.getAttribute("data-popup");

    if (popupData === "background" && setIsOpen) {
      setIsOpen(false);
    }
  };

  const handleImageChange = (imageFile: File | null) => {
    setSelectedImage(imageFile);
    console.log("Selected image:", imageFile);
  };

  return (
    <>
      <div
        data-popup="background"
        className={style.popup_bg}
        onClick={handleClick}
      ></div>
      <div className={style.popup}>
        <div className="conatiner">
          <h5>Define a {title}</h5>
          <input type="text" />

          <h5>Upload an Image</h5>
          <ImageInput
            classNameDivInput={style.popup_input_block}
            onImageChange={handleImageChange}
          />
          {selectedImage && <p>Image file selected: {selectedImage.name}</p>}

          <Button className="btn">Add category</Button>
        </div>
      </div>
    </>
  );
};

export default Popup;
