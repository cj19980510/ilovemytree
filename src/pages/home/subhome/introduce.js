import React, { Component } from 'react'
import 'style/introduce.scss'
import BScroll from 'better-scroll'
export default class Introduce extends Component {
   
        componentDidMount(){
            const bs =new BScroll('.container',{
                pullUpLoad:{
                    threshold:30
                }
            })
            // bs.on('pullingUp',()=>{
            //     console.log('1')
            // })
            bs.finishPullUp()
        }
    
    render() {
        return (
            <div className="intro-box">
                <div><img src={[require('../../../assets/img/6_02.gif')]}/></div>
                <div className="h-s-content">
                    <div className="h-s-title"><img  src={[require('../../../assets/img/2-left.gif')]}/><h2>项目简介</h2><img  src={[require('../../../assets/img/2-right.gif')]}/></div>
                    <p className="p1">为实现“全民践行低碳环保“的社会理念,我爱我树自主研发
                        了活力木测绘技术,联合林业部门创办“生态公益林认养“项
                        目。通过我爱我树APP实现线上一站式认养,让人人都能轻
                        松拥有属于自己的树,同时还能助力脱贫攻坚,共建绿色生
                        态文明。</p>

                    <p> 生态林位于安徽省池州市,通过设立完善的林长制组织体
                        系,推动转变林业增长方式,提升林业综合效益,做到“一林
                        一档“一林一策“一林一技““一林一警“一林一员“的系统
                        方针,有效形成人与自然和谐发展的新格局。您的每一次认
                        养都是推动林业现代化建设的助力。
                    </p>
                    <div className="h-s-title"><img  src={[require('../../../assets/img/2-left.gif')]}/><h2>认养权益</h2><img  src={[require('../../../assets/img/2-right.gif')]}/></div>
                    <ul className="quanyi">
                        <li>
                            <div><img src={[require('../../../assets/img/xiangmu1.gif')]}/></div>
                            <div className="p2">
                                <p>实施专业养护</p>
                                <p>被认养的树木都会得到最专业的养护</p>
                            </div>
                        </li>
                        <li>
                            <div><img src={[require('../../../assets/img/xiangmu2.gif')]}/></div>
                            <div className="p2">
                                <p>实施专业养护</p>
                                <p>被认养的树木都会得到最专业的养护</p>
                            </div>
                        </li>
                        <li>
                            <div><img src={[require('../../../assets/img/xiangmu3.gif')]}/></div>
                            <div className="p2">
                                <p>实施专业养护</p>
                                <p>被认养的树木都会得到最专业的养护</p>
                            </div>
                        </li>
                    </ul>
                    <div className="h-s-title"><img  src={[require('../../../assets/img/2-left.gif')]}/><h2>认养金用途</h2><img  src={[require('../../../assets/img/2-right.gif')]}/></div>
                    <p className="money">每一棵被认养的树都会获得唯一的树木编码,每一份游暖的
                        善款都将用于树木的种植与养护,让您既省心又安心还舒
                        心。感谢您对生态公益林的支持!

                    </p>
                    <div className="h-s-title"><img  src={[require('../../../assets/img/2-left.gif')]}/><h2>认养依据</h2><img  src={[require('../../../assets/img/2-right.gif')]}/></div>
                    <div><button className="btn-intro">点击这里了解详情</button></div>
                </div>
            </div>
        )
    }
}
