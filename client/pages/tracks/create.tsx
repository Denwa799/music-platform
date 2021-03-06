import React, {useState} from 'react';
import MainLayout from "layouts/MainLayout";
import StepWrapper from "components/StepWrapper";
import styles from './styles.module.scss';
import FileUpload from 'components/FileUpload';
import {Button, Grid, TextField } from '@mui/material';
import { useInput } from 'hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create = () => {
    const router = useRouter();

    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('text', text.value);
            formData.append('artist', artist.value);
            formData.append('picture', picture);
            formData.append('audio', audio);
            axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(err => console.log(err));
        }
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
                                {...name}
                                className={styles.textField}
                                label={"Название трека"}
                            />
                            <TextField
                                {...artist}
                                className={styles.textField}
                                label={"Имя исполнителя"}
                            />
                            <TextField
                                {...text}
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