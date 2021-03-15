import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import style from 'styles/components/Home.module.scss';
import Navbar from '../components/Navbar/index';
import Tasks from '../components/Tasks';
import ViewTask from '../components/Tasks/ViewTask';

 const Index: NextPage = () => {
  const { query } = useRouter();

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

       <div className={style.main}>
         <Navbar />
         <Tasks />
         {query.taskID && <ViewTask taskID={String(query.taskID)} />}
       </div>
     </div>
   );
 };

export default Index;