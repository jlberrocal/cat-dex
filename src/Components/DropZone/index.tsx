import React, {ChangeEvent, createRef, DragEvent, useState} from 'react';
import './style.css';

interface DropZoneProps {
    handleValueChange: (key: string, value: string) => void
}

function DropZone({handleValueChange}: DropZoneProps) {
    const ref = createRef<HTMLInputElement>();
    const [isHoverOver, setHoverOver] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleClick = () => {
        ref.current?.click();
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        handleValueChange('photo', e.target?.result as string);
    }

    const handleFileSelected = ({target: {files}}: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];
            setFileName(file.name);
            reader.readAsDataURL(file);
        }
    }

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.dropEffect = 'copy';
    }

    const handleDragEnter = (e: DragEvent) => {
        e.preventDefault();
        setHoverOver(true);
    }

    const handleDragLeave = (e: DragEvent) => {
        e.preventDefault();
        setHoverOver(false);
    }

    const handleOnDrop = (e: DragEvent) => {
        e.preventDefault();
        setHoverOver(false);
        const {files} = e.dataTransfer;
        if (files && files.length === 1) {
            setFileName(files[0].name);
            reader.readAsDataURL(files[0]);
        } else {
            alert('please set only 1')
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center drop-zone"
                 onClick={handleClick}
                 onDragOver={handleDragOver}
                 onDragEnter={handleDragEnter}
                 onDragLeave={handleDragLeave}
                 onDrop={handleOnDrop}>
                {
                    isHoverOver
                        ? 'Drop here'
                        : (fileName || 'Click here or drag a picture')
                }
            </div>
            <input accept="image/*" onChange={handleFileSelected} ref={ref} type="file" hidden/>
        </>
    )
}

export default DropZone
