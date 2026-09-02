import { Exercise } from '../types';
import Exercises from '../definitions/exercises';
import './RoutineCard.css';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPopover, IonRange } from '@ionic/react';
import AmountButton from './AmountButton';
import { useState } from 'react';
import { scaleAmount } from '../utils';

interface ContainerProps {
    title: string,
    exercises: Exercise[],
    intensity?: boolean,
}

const ExploreContainer: React.FC<ContainerProps> = ({ title, exercises, intensity = false }) => {
    const [ scale, setScale ] = useState<number>(1);
    const scaledExercises = exercises.map(({ kind, amount }) => ({ kind, amount: scaleAmount(amount, scale) }));

    // Return empty fragment if no exercises
    if (exercises.length == 0)
        return <></>;

    // Skip lined list if there is only one exercise
    const linesProps = exercises.length > 1 ? { lines: 'full' as 'full' } : { lines: 'none' as 'none' };

    // Normal return
    return (
        <IonList inset {...linesProps}>
            <IonListHeader>{title}</IonListHeader>
            { intensity && <IonItem>
                    <IonRange
                        labelPlacement='start' label="Intensity" snaps ticks={false}
                        pin pinFormatter={(value) => `${Math.round(value * 100)}%`}
                        min={0.50} max={1.35} step={0.05} activeBarStart={1} value={scale}
                        onIonChange={({detail}) => setScale(detail.value as number)}
                    />
                </IonItem>
            }
            {scaledExercises.map((exercise) =>
                <IonItem key={exercise.kind} className='workout-item'>
                    <div className='workout-label-container' id={`${exercise.kind}-label`}>
                        <IonLabel>{Exercises[exercise.kind].name}</IonLabel>
                    </div>
                    <AmountButton amount={exercise.amount} double={Exercises[exercise.kind].double} />
                    <IonPopover trigger={`${exercise.kind}-label`} triggerAction='click'>
                        <IonContent className='ion-padding'>{Exercises[exercise.kind].description}</IonContent>
                    </IonPopover>
                </IonItem>
            )}
        </IonList>
    );
};

export default ExploreContainer;
