import React from 'react'
import { Swiper } from 'widgets/Swiper'
import { GoodsCategories } from 'widgets/GoodsCategories'
import { SalesBlock } from 'widgets/SalesBlock'
import { BrandsBlock } from 'widgets/BrandsBlock'
import { ArticlesBlock } from 'widgets/ArticlesBlock'
import { AboutUsBlock } from 'widgets/AboutUsBlock'
import { CommentsBlock } from 'widgets/CommentsBlock'
import { Footer } from 'widgets/Footer/ui/Footer'


const MainPage = () => {
    return (
        <div className="container">
            <div>
                <Swiper/>
            </div>
            <GoodsCategories/>
            <SalesBlock/>
            <BrandsBlock/>
            <ArticlesBlock/>
            <AboutUsBlock/>
            <CommentsBlock/>
            <Footer/>
        </div>
    )
}
export default MainPage
