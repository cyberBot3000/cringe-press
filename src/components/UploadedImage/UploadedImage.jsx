import React from 'react';
import './UploadedImage.css'

const UploadedImage = ({onDelete, uploadedFile, alt, className}) => {

    return (
        <div className={`uploaded-image ${className}`}>
            <div className="uploaded-image__delete-btn" onClick={e => (onDelete(uploadedFile))}>
                x
            </div>
            <img src={URL.createObjectURL(uploadedFile.fileObj)} alt={alt} className="uploaded-image__img"/>
        </div>
    );
};

export default UploadedImage;