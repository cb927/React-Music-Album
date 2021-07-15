import React, { Component } from 'react'

import Artist from './Artist'
import Album from './Album'
import Noresult from './Noresult'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.checkFavorite = this.props.checkFavorite
    }
    render() {
        const data = this.props.data
        const cat = this.props.cat
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {Object.keys(data).length == 0 ? (<Noresult />) : null}
                    {data ? (data.map((item, key) => {
                        return <Artist data={item} id={key} checkFavorite={this.checkFavorite.bind(this, item)} />
                    })) : null}
                </div>
            </div>
        )
    }
}