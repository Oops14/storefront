import { ChangeEvent, FC, useState } from 'react'

interface ImageInputProps {
  onImageChange: (imageFile: File | null) => void
  classNameDivInput?: string
}

const ImageInput: FC<ImageInputProps> = ({ onImageChange, classNameDivInput }) => {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreview(reader.result as string)
      }

      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }

    onImageChange(file)
  }

  return (
    <div className={classNameDivInput}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <img src={preview} alt="Image Preview" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
      )}
    </div>
  )
}

export default ImageInput
