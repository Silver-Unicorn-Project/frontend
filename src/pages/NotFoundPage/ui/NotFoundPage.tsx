import React from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { NotFoundBlock } from 'widgets/NotFoundBlock';
import { MayLikeBlock } from 'widgets/MayLikeBlock';
import { Footer } from 'widgets/Footer/ui/Footer';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return <div className='container'>
    <NotFoundBlock />
    <MayLikeBlock />
    <Footer />
  </div>
};
