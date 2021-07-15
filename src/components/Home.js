import React, { Component } from 'react'
import axios from 'axios'

import Searchbar from './Searchbar'
import Result from './Result'

let localFavorite = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            entry: [],
            favorite: localFavorite
        }
        this.search = this.search.bind(this)
        const cat = 0
    }

    async search(state) {
        const sortSelected = state.sortSelected
        this.cat = sortSelected
        const key = state.key.toLowerCase()
        if (sortSelected == 0) {
            await axios.get('https://itunes.apple.com/us/rss/topsongs/limit=100/json').then(res => {
                const entry = res.data.feed.entry;
                this.setState({ ent: entry })
            })
        } else if (sortSelected == 1) {
            await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(res => {
                const entry = res.data.feed.entry;
                this.setState({ ent: entry })
            })
        }
        const entrys = this.state.ent
        const filtered = entrys.filter(entry => (
            entry['im:name'].label.toLowerCase().includes(key)
        ));
        await this.setState({ data: filtered })
        console.log(this.state.data)
    }

    checkFavorite(item) {
        if(item.isFavorite){
            this.addFavorite(item)
        } else {
            this.removeFavorite(item)
        }
    }

    removeFavorite(data){
        console.log('remove favorite function')
    }

    async addFavorite(data){
        // localStorage.removeItem('favorite')
        console.log('add favorite function')
        const key = data.title.label
        const newItem = {key, data}
        const array = this.state.favorite
        array.push(newItem);
        const favorites = JSON.stringify(array)
        localStorage.setItem('favorite', favorites)
        const fMusic = JSON.parse(localStorage.getItem('favorite'))
        await this.setState({favorite: fMusic})
        console.log(this.state.favorite)
    }

    render() {
        return (
            <div>
                <Searchbar search={this.search} />
                <Result data={this.state.data} checkFavorite={this.checkFavorite.bind(this)} />
            </div>
        )
    }
}