import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';

export function SubscribeButton() {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJS();
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button type='button' className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
}
