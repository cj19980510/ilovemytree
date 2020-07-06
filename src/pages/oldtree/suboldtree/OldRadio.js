import { List, Checkbox, Flex } from 'antd-mobile';
import React from 'react'
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

export default class OldRadio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checkboxFlag: false
        }
    }

    onChange = (value) => {
        this.setState({
            checkboxFlag: value
        });
        this.props.changeRadioFlag(value)
    };

    render() {

        return (
            <Flex>
                <Flex.Item>
                    <AgreeItem data-seed="logId" onChange={(e) => { this.onChange(e.target.checked) }}>
                        您已阅读 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}></a>
                    </AgreeItem>
                </Flex.Item>
            </Flex>
        );
    }
}

// ReactDOM.render(<Test />, mountNode);