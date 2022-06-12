import {Card, Grid, StepLabel, Stepper, Step } from '@mui/material';
import Container from 'layouts/Container/index';
import React, {FC, ReactNode} from 'react';
import styles from './styles.module.scss'

interface IStepWrapper {
    activeStep: number;
    children: ReactNode;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']
const StepWrapper: FC<IStepWrapper> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid className={styles.content} container justifyContent="center">
                <Card className={styles.card}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;