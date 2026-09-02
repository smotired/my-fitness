import { IonContent, IonHeader, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabExercise.css';
import Routine from '../definitions/routine';
import RoutineCard from '../components/RoutineCard';
import { useMemo } from 'react';
import { getWeekday } from '../utils';

const TabExercise: React.FC = () => {
  const [ weekdayIndex, weekday ] = useMemo(getWeekday, []);
  const today = Routine[weekdayIndex];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{weekday}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RoutineCard exercises={today['preStretches']} title="Warmup Stretches" />
        <RoutineCard exercises={today['dumbbells']} title="Dumbbell Workout" />
        <RoutineCard exercises={today['postStretches']} title="Cooldown Stretches" />
        <RoutineCard exercises={today['cardio']} title="Evening Cardio" />
      </IonContent>
    </IonPage>
  );
};

export default TabExercise;
