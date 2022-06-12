import React, {ChangeEvent, FC, ReactNode, useRef} from 'react';

interface IFileUpload {
    setFile: Function;
    accept: string;
    children: ReactNode;
}

const FileUpload: FC<IFileUpload> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files[0]);
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
