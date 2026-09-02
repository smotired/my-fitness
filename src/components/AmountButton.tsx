import { IonButton, IonIcon } from '@ionic/react';
import { Amount } from '../types';
import './AmountButton.css';
import { chevronForward } from 'ionicons/icons';
import { DoubleType } from '../definitions/exercises';

function contentFromAmount(amount: Amount): React.ReactNode {
    switch (amount.kind) {
        case 'count':
            return <span className='amount-text'>{`${amount.count}`}</span>;
        case 'duration':
            if (amount.seconds < 60)
                return <span className='amount-text'>{amount.seconds}s</span>;
            else {
                const seconds = amount.seconds % 60;
                const minutes = Math.floor(amount.seconds / 60) % 60;
                const hours = Math.floor(amount.seconds / 3600);

                if (hours > 0)
                    return <span className='amount-text'>{hours}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>;
                else
                    return <span className='amount-text'>{minutes}:{String(seconds).padStart(2, '0')}</span>;
            }
        case 'sets':
            return <>
                <span className='sets-text'>{`${amount.sets}`}</span>
                <IonIcon icon={chevronForward} />
                {contentFromAmount(amount.amount)}
            </>;
    }
}

interface ComponentProps {
    amount: Amount,
    double: DoubleType,
    slot?: 'start' | 'end',
}

const AmountButton: React.FC<ComponentProps> = ({ amount, double, slot = 'end' }) => {
    // Return different content based on amount type
    const content = contentFromAmount(amount);

    return (
        <IonButton className='amount-button' slot={slot}>
            <span className='amount-content'>
                <span className='amount-line'>{content}</span>
                {double && <span className='double-text'>each {double}</span>}
            </span>
        </IonButton>
    )
}

export default AmountButton;