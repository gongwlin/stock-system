import React, {Component} from 'react';

class App extends Component {
    getInfo(cityCode) {
        const url = `/data/cityinfo/${cityCode}.html`;
        fetch(url).then((req) => {
            if (req.status === 200) {
                console.log(req);
                this.setState({weatherInfo: req.weatherInfo})
            }
        }).catch(() => {
            console.log('error');
            this.setState({weatherInfo:null});
        })
    }

    state = {
        weatherInfo: null
    };

    componentDidMount(){
        this.getInfo(101010100)
    }
    componentDidUpdate(){

    }
    render() {
        return (
            <div className="App">
                {/*{"weatherinfo":{"city":"北京","cityid":"101010100","temp1":"18℃","temp2":"31℃","weather":"多云转阴","img1":"n1.gif","img2":"d2.gif","ptime":"18:00"}}*/}
                {
                    !this.state.weatherInfo?"暂无数据":<div>城市：{this.state.weatherInfo.city}
                        最高温度{this.state.weatherInfo.temp2}
                        最低温度{this.state.weatherInfo.temp1}</div>
                }
            </div>
        );
    }
}

export default App;
