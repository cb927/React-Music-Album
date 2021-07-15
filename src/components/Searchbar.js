import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap';

export default class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            sortSelected: 0,
            key: ''
        }
        this.sorts = ['Music', 'Album']
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.enterKeyPress = this.enterKeyPress.bind(this)
    }
    async handleClick(id){
        await this.setState({sortSelected: id})
        this.props.search(this.state)
    }

    handleInputChange(e){
        this.setState({key: e.target.value})
    }
    enterKeyPress(e){
        if(e.keyCode == 13){
            this.props.search(this.state)
        }
    }
    render() {
        return (
            <div style={{ padding: '20px 20px 0 20', backgroundColor: '#058ce1' }}>
                <div style={{ width: '80%', margin: '0 auto 0 auto' }}>
                    <FormGroup>
                        <Input type='text' placeholder='Search iTune Music' onChange={this.handleInputChange} onKeyDown={this.enterKeyPress}/>
                    </FormGroup>
                    <div>
                        <ul className="sorter">
                            {this.sorts.map((item, id) => {
                                return <li key={id} className={(this.state.sortSelected == id ? 'active' : '')}>
                                    <a href="javascript:;" onClick={e => this.handleClick(id)}>
                                        {item}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}