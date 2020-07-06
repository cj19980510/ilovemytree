 import React from 'react'
export default class Map extends React.Component{
    MP(ak) {
        return new Promise(function(resolve, reject) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
        document.head.appendChild(script)
        window.init = () => {
            resolve(window.BMap)
        }
        })
    }
 
    componentDidMount(){
        this.MP("TX4lhyIaNQL7fkRnvGf2je3pgHt1wxcm").then(BMap=>{
            var map = new BMap.Map('allmap');            // 创建Map实例
            // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
            // map.centerAndZoom("福州",15);                 
            // map.enableScrollWheelZoom(true);                 //启用滚轮放大缩小
            var point=new BMap.Point(116.331398,39.897445)
            var BMAP_STATUS_SUCCESS=window.BMAP_STATUS_SUCCESS
            map.centerAndZoom(point,12)
            var geolocation=new BMap.Geolocation()
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus()==BMAP_STATUS_SUCCESS){    //根据浏览器定位
                    var mk=new BMap.Marker(r.point)
                    map.addOverlay(mk)
                    map.panTo(r.point)
                     
                }else{
                    alert('failed'+this.getStatus())
                }
            },{enableHighAccuracy:true})
                    });
                }
        
    render(){
  
        
        //添加地图类型控件
        return(
            <div>
              <div id='allmap' style={{width:375,height:523}}></div>
            </div>
        )
    }
}