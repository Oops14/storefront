import { FC, useState } from "react";
import { Category } from "../../store/useCategoriesStore";
import Button from "../../ui/Button";
import { generateUniqueId } from "../../utils/generateUniqueId";
import ImageInput from "../ImageInput";
import style from "./Popup.module.scss";

interface Popup {
  title: string;
  setIsOpen?: (isOpen: boolean) => void;
  addToStore: (newCategory: Category) => void;
}

const PopupCategory: FC<Popup> = ({ title, setIsOpen, addToStore }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [categoryTitle, setCategoryTitle] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const popupData = target.getAttribute("data-popup");

    if (popupData === "background" && setIsOpen) {
      setIsOpen(false);
    }
  };

  const handleImageChange = (imageFile: File | null) => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(imageFile);
    } else {
      setSelectedImage(null);
    }
  };

  const handleData = () => {
    const categoryItem = {
      id: generateUniqueId(),
      title: categoryTitle,
      img: selectedImage || "",
      quantity: 0,
    };

    if (setIsOpen && categoryTitle.length && selectedImage) {
      addToStore(categoryItem);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        data-popup="background"
        className={style.popup_bg}
        onClick={handleClick}
      ></div>
      <div className={style.popup}>
        <div className="container">
          <h5>Define a {title}</h5>
          <input
            type="text"
            onChange={e => {
              setCategoryTitle(e.currentTarget.value);
            }}
          />

          <h5>Upload an Image</h5>
          <ImageInput
            classNameDivInput={style.popup_input_block}
            onImageChange={handleImageChange}
          />
          {selectedImage && <p>Image file selected</p>}

          <Button className="btn" onClick={handleData}>
            Add category
          </Button>
        </div>
      </div>
    </>
  );
};

export default PopupCategory;
