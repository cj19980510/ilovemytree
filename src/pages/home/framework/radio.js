import { Checkbox, Flex } from 'antd-mobile';
import React from 'react'
const AgreeItem = Checkbox.AgreeItem;

 export default class Radio extends React.Component {
  onChange = (e) => {
     this.props.checkFlag(e.target.checked)
  }
  render() {
    
    return (<div>
      <Flex>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={this.onChange}>
          您已阅读 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}></a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>);
  }
}

// ReactDOM.render(<Test />, mountNode);