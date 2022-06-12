import React, {useState} from 'react';
import MainLayout from "layouts/MainLayout/index";
import StepWrapper from "components/StepWrapper/index";
import {Button, Grid, TextField} from 'node_modules/@mui/material/index';
import styles from './styles.module.scss';
import FileUpload from 'components/FileUpload/index';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const next = () => {
        if (activeStep !== 2) setActiveStep(prev => prev + 1);
    };

    const back = () => {
        setActiveStep(prev => prev - 1);
    };

    return (
        <MainLayout>
            <div className={styles.Create}>
                <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 &&
                        <Grid className={styles.content} container direction="column">
                            <TextField
                                className={styles.textField}
                                label={"Название трека"}
                            />
                            <TextField
                                className={styles.textField}
                                label={"Имя исполнителя"}
                            />
                            <TextField
                                className={styles.textField}
                                label={"Слова к треку"}
                                multiline
                                rows={3}
                            />
                        </Grid>
                    }
                    {activeStep === 1 &&
                        <FileUpload setFile={setPicture} accept="image/*">
                            <Button>Загрузить изображение</Button>
                        </FileUpload>
                    }
                    {activeStep === 2 &&
                        <FileUpload setFile={setAudio} accept="audio/*">
                            <Button>Загрузить аудио</Button>
                        </FileUpload>
                    }

                </StepWrapper>
                <Grid container justifyContent='space-between'>
                    <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                    <Button onClick={next}>Далее</Button>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Create;