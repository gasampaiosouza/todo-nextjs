import { NextPage } from 'next';
import Head from 'next/head';
import style from 'styles/components/Home.module.scss';
import Navbar from '../components/Navbar/index';

 const Index: NextPage = () => {
   return (
     <div className={style.container}>
       <Head>
         <title>do.to | Home</title>
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&amp;display=swap"
           rel="stylesheet"
         />
       </Head>

       <main className={style.main}>
         <Navbar />
       </main>
     </div>
   );
 };

export default Index;