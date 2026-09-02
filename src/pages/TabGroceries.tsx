import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ShoppingList, { ShoppingListHandle } from '../components/ShoppingList';
import './TabGroceries.css';
import GroceryList from '../definitions/groceryList';
import { useRef } from 'react';

const TabGroceries: React.FC = () => {
  const shoppingListRef = useRef<ShoppingListHandle>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping List</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => shoppingListRef.current?.uncheckAll()}>Uncheck All</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ShoppingList ref={shoppingListRef} groceries={GroceryList} />
      </IonContent>
    </IonPage>
  );
};

export default TabGroceries;
