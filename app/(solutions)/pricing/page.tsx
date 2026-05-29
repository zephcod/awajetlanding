import Button from '@/components/button/button';
import styles from '@/components/pricing/page.module.css'
import GlassModal from '@/components/modal/modal';
import PopularOrders from '@/components/pricing/popular_orders';
import Subscriptions from '@/components/pricing/subscription';
import type { Metadata } from 'next'
import CallUs from '@/sections/ctas/call_us';
import Discount from '@/sections/ctas/discount';

export const metadata: Metadata = {
  title: 'Awaj pricing and plans',
  description: 'Awaj digital advertising monthly and annual subscription pricings and plans',
}

export default function Price(){

  return (
    <section className='w-full'>
      <div className={styles.container}>
      <>
        <h1 className="py-4 text-3xl text-center text-muted-foreground font-extrabold leading-[1.15] lg:text-4xl">
          Plans tailored to needs.
        </h1>
        <p className='text-base text-muted-foreground text-center max-w-3xl'>
          We offer subscription in three packages. 
          Test Awaj Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from August 2026. 
        </p>
        <br />
        <em className='text-base text-muted-foreground text-center max-w-3xl'>
          No hidden fees - Everything included.
        </em>
        <br/>
      </>
      <Subscriptions/>
      </div>
      <CallUs/>
      <div className='mt-8 text-base text-muted-foreground text-center max-w-3xl m-auto'>
        <br/>
        <h2 className=' font-semibold text-2xl'>
          Popular one time solutions
        </h2>
      </div>
      <PopularOrders/>
      <Discount/>
    </section>
  );
}