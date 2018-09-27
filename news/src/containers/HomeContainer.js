import React, {Component} from 'react'
import {Carousel, Card, BackTop, Icon} from 'antd'
import MovieColumn from '../components/Movie/MovieColumn'
import SpotColumn from '../components/Spot/SpotColumn'
import MusicColumn from '../components/Music/MusicColumn'
import BookColumn from '../components/Book/BookColumn'
import {PIC} from '../config'

export default class HomeContainer extends Component {
    render() {
        return (
            <Card className='home'>
                <div className='carousel'>
                    <Carousel autoplay>
                        <div><img key={1} src={'../image/img1.jpeg'} alt="网络随机图片（来源于必应）" width={1028} height={500}/></div>
                        <div><img key={2} src={'../image/img2.jpeg'} alt="网络随机图片（来源于必应）" width={1028} height={500}/></div>
                        <div><img key={3} src={'../image/img3.jpeg'} alt="网络随机图片（来源于必应）" width={1028} height={500}/></div>
                        <div><img key={4} src={'../image/img4.jpeg'} alt="网络随机图片（来源于必应）" width={1028} height={500}/></div>
                    </Carousel>
                </div>
                <MovieColumn
                    id='hotShowing'
                    title='热门电影'
                    type='in_theaters'
                    total={8}
                    noHead={true}
                    count={5}
                />
                <SpotColumn/>
                <MusicColumn/>
                <BookColumn/>
                <BackTop visibilityHeight={300}>
                    <div className="ant-back-top-inner">
                        <Icon type="arrow-up"/>
                    </div>
                </BackTop>
            </Card>
        )
    }
}
