import React, { useState } from 'react';
import styles from './FileInput.module.css';

export type FileInputProps = {
  setFieldValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ setFieldValue }: FileInputProps): JSX.Element => {
  const [inputChanged, setInputChanged] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event);
    setInputChanged(true);
  };
  return (
    <div>
      <label htmlFor="file" className={styles.inputFileButton}>
        {inputChanged ? 'Bild hochgeladen' : 'Bild hochladen'}
      </label>
      <input
        className={styles.fileInput}
        id="file"
        name="file"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default FileInput;
