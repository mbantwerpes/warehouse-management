import React from 'react';
import styles from './FileInput.module.css';

export type FileInputProps = {
  setFieldValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ setFieldValue }: FileInputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor="file" className={styles.inputFileButton}>
        Bild hochladen
      </label>
      <input
        className={styles.fileInput}
        id="file"
        name="file"
        type="file"
        onChange={setFieldValue}
      />
    </div>
  );
};

export default FileInput;
