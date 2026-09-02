import { Exercise } from '../types';
import Exercises from '../definitions/exercises';
import './RoutineCard.css';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPopover } from '@ionic/react';
import AmountButton from './AmountButton';

interface ContainerProps {
    title: string,
    exercises: Exercise[],
}

const ExploreContainer: React.FC<ContainerProps> = ({ title, exercises }) => {
    // Return empty fragment if no exercises
    if (exercises.length == 0)
        return <></>;

    // Skip lined list if there is only one exercise
    const linesProps = exercises.length > 1 ? { lines: 'full' as 'full' } : { lines: 'none' as 'none' };

    // Normal return
    return (
        <IonList inset {...linesProps}>
            <IonListHeader>{title}</IonListHeader>
            {exercises.map((exercise) =>
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
