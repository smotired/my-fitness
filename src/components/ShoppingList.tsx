/**
 * Grocery list whose state just gets saved to local storage
 */

import { IonItem, IonLabel, IonList } from "@ionic/react";
import { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import './ShoppingList.css';

interface ComponentProps {
    groceries: string[],
}

interface GroceryItem {
    name: string;
    checked: boolean;
}

export interface ShoppingListHandle {
    uncheckAll: () => void,
}

const ShoppingList = forwardRef<ShoppingListHandle, ComponentProps>(
    ({ groceries }, ref) => {
        const [ list, setList ] = useState<GroceryItem[]>(() => {
            const saved = localStorage.getItem("shopping-list");
            return saved ? JSON.parse(saved) : groceries.map((item) => ({ name: item, checked: false }));
        });

        useEffect(() => {
            localStorage.setItem("shopping-list", JSON.stringify(list));
        }, [list]);

        useImperativeHandle(ref, () => ({
            uncheckAll() {
                setList(old => old.map(item => ({ ...item, checked: false })));
            }
        }));

        return <>
            <IonList inset lines='full'>
                {
                    list.map(({ name, checked }, index) =>
                        // index key is fine because there's no add/remove/reorder atm
                        <IonItem key={index} button detail={false} onClick={() => setList(old => 
                            old.map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
                        )}>
                            <IonLabel><span className={checked ? 'checked' : ''}>{name}</span></IonLabel>
                        </IonItem>
                    )
                }
            </IonList>
        </>
    }
);

export default ShoppingList;