import { TextFieldProps } from '../TextField';
import './styles.scss';
import {useState} from 'react';

const FileUpload = ({ label, name, register, ...props }: TextFieldProps) => {
  const [fileName, setFileName] = useState<string[]>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const names = Array.from(files).map(file => file.name);
      setFileName(names);
    }
  }

  return (
    <div className="file-upload__container">
      <label className="file-upload__label" htmlFor={props.id}>{fileName ? fileName : label}</label>
      <input type="file" id="file-upload" {...props} {...register(name)} onInput={handleFileChange}/>
      <label className="file-upload__button" htmlFor={props.id}>Escolher arquivo</label>
    </div>
  );
}

export default FileUpload;
