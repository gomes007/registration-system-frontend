import React from 'react';
import ImageUploading from 'react-images-uploading';
import EmployeeModel from "../model/EmployeeModel";
import {saveEmployee} from "../services/EmployeeService";

export function Img() {
    const [image, setImage] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImage(imageList);
    };

    const clickSaveEmployee = () => {
        const employee = new EmployeeModel(image);
        saveEmployee(employee).then(() => {

        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={image}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                    <button className="btn btn-primary" onClick={clickSaveEmployee}>Save</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}