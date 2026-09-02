import { FoodEntry } from '../types';
import FoodItems from '../definitions/foods';
import { IonItem, IonLabel, IonList, IonListHeader} from '@ionic/react';
import './MealCard.css';

interface ContainerProps {
    title: string,
    items: FoodEntry[],
}

const ExploreContainer: React.FC<ContainerProps> = ({ title, items }) => {
    // Return empty fragment if no food
    if (items.length == 0)
        return <></>;

    // Skip lined list if there is only one item
    const linesProps = items.length > 1 ? { lines: 'full' as 'full' } : { lines: 'none' as 'none' };

    // Normal return
    return (
        <IonList inset {...linesProps}>
            <IonListHeader>{title}</IonListHeader>
            {items.map((item) =>
                <IonItem key={item.kind}>
                    <div className='meal-item'>
                        <IonLabel className='item-title'>{FoodItems[item.kind].name}</IonLabel>
                        <IonLabel className='item-servings'>{item.servings} {FoodItems[item.kind].unit}</IonLabel>
                    </div>
                </IonItem>
            )}
        </IonList>
    );
};

export default ExploreContainer;
