import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabExercise.css';

const TabExercise: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Exercise</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Exercise" />
      </IonContent>
    </IonPage>
  );
};

export default TabExercise;
