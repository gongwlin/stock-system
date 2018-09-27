import React, {Component} from 'react'
import {Link} from 'react-router'
import {Col, Rate} from 'antd'
import * as config from '../../config'

const MovieItem = ({imgUrl, title, rating, genre, id}) => {
    // 返回JSX结构
    return (
        <Col span={24 / config.DEFAULT_COUNT} className='movie_item'>
            <div>
                <div className='movie_img'>
                    <Link to={'movie/' + id}>
                        <img src={imgUrl}/>
                    </Link>
                </div>
                <div className='movie_info'>
                    <div className='movie_title' style={{textAlign: 'center'}}><Link to={'movie/' + id}>{title}</Link>
                    </div>
                </div>
                <div className={'movie_score'}><Rate  disabled count={5} value={rating/2} allowHalf/>
                    {rating}</div>
            </div>
        </Col>
    );
}

export default MovieItem
