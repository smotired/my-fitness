import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabMealPlan.css';
import { useState } from 'react';
import { weekdayInfo } from '../utils';
import { chevronBack, chevronForward } from 'ionicons/icons';
import MealPlan from '../definitions/meals';
import MealCard from '../components/MealCard';

const Tab2: React.FC = () => {
  const [ selectedDay, setSelectedDay ] = useState<number>(new Date().getDay());
  const { today, tomorrow, yesterday } = weekdayInfo(selectedDay);
  const mealPlan = MealPlan[today.type];
  
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
        <MealCard items={mealPlan['breakfast']} title="Breakfast" />
        <MealCard items={mealPlan['lunch']} title="Lunch" />
        <MealCard items={mealPlan['dinner']} title="Dinner" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
