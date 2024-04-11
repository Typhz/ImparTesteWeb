import { TextFieldProps } from '../TextField';
import './styles.scss';

const FileUpload = ({ label, name, register, ...props }: TextFieldProps) => {
  return (
    <div className="file-upload__container">
      <label htmlFor={props.id}>{label}</label>
      <input type="file" {...props} {...register(name)}/>
    </div>
  );
}

export default FileUpload;
