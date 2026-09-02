import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabExercise.css';
import Routine from '../definitions/routine';
import RoutineCard from '../components/RoutineCard';
import { useState } from 'react';
import { weekdayInfo } from '../utils';
import { chevronBack, chevronForward } from 'ionicons/icons';

const TabExercise: React.FC = () => {
  const [ selectedDay, setSelectedDay ] = useState<number>(new Date().getDay());
  const { today, tomorrow, yesterday } = weekdayInfo(selectedDay);
  const routine = Routine[today.type];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{today.name}</IonTitle>
          <IonButtons slot='start'>
            <IonButton onClick={() => setSelectedDay(day => (day + 6) % 7)}>
              <IonIcon slot='start' icon={chevronBack} />
              {yesterday.name}
            </IonButton>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton onClick={() => setSelectedDay(day => (day + 1) % 7)}>
              <IonIcon slot='end' icon={chevronForward} />
              {tomorrow.name}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RoutineCard exercises={routine['preStretches']} title="Warmup Stretches" />
        <RoutineCard exercises={routine['dumbbells']} title="Dumbbell Workout" intensity />
        <RoutineCard exercises={routine['postStretches']} title="Cooldown Stretches" />
        <RoutineCard exercises={routine['cardio']} title="Evening Cardio" />
      </IonContent>
    </IonPage>
  );
};

export default TabExercise;
