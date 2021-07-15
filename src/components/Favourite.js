import React, { Component } from 'react'

import NoFavorite from './NoFavorite'
import Artist from './Artist'
import { element } from 'prop-types'

let favorites = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []
export default class Favourite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: favorites
        }
    }

    removeFavorite(item) {
        console.log(item)
        const key = item.key
        const favorites = this.state.data
        favorites.filter(element => {
            if(element.key == item.key){
                const pos = favorites.indexOf(element)
                favorites.splice(pos, 1)
            }
        })
        this.setState({data: favorites})
        localStorage.setItem('favorite', JSON.stringify(favorites))
    }

    render() {
        const data = this.state.data
        return (
            <div>
                {Object.keys(this.state.data).length == 0 ? <NoFavorite /> : null}
                <div className='container-fluid'>
                    <div className='row'>
                        {data ? (data.map((item, key) => {
                            return <Artist data={item.data} id={key} checkFavorite={this.removeFavorite.bind(this, item)} />
                        })) : null}
                    </div>
                </div>
            </div>
        )
    }
}