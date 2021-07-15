import React, { Component } from 'react'
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false,
            showPreview: false,
            isPlaying: false
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.favorite = this.favorite.bind(this)
    }
    mouseEnter(e) {
        e.preventDefault()
        this.setState({ showPreview: true })
    }
    mouseLeave(e) {
        e.preventDefault()
        this.setState({ showPreview: false })
    }
    togglePlay(){
        this.setState({isPlaying: !this.state.isPlaying})
    }
    favorite(){
        this.setState({isFavorite: !this.state.isFavorite})
    }
    render() {
        const imageUrl = this.props.data['im:image'][2].label;
        const formattedDate = moment(this.props.data.releaseDate).format('DD MMM YY');
        const name = this.props.data['im:name'].label;
        // const audiolink = this.props.link;
        // console.log(audiolink)
        return (
            <div className='col-lg-2 col-md-4 col-sm-6' style={{ marginTop: '20px' }}>
                <Card className='artist-card' style={{ position: 'relative' }}>
                    <CardImg top width="100%" height='220px' src={imageUrl} alt="Card image cap" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
                    {this.state.showPreview ? (<div className='preview'  onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <Button 
                        className='btn-sm' 
                        color='primary' 
                        style={{marginTop:'75px'}}
                        onClick={this.togglePlay}
                        >{this.state.isPlaying ? 'Stop' : 'Preview Album'}</Button><br></br>
                        <Button 
                        className='btn-sm' 
                        color='primary' 
                        style={{marginTop:'10px'}}
                        onClick={this.favorite}
                        >{this.state.isFavorite ? 'Remove from Favorite' : 'Add to favorite'}</Button>
                    </div>) : null}
                    <CardBody style={{ height: '150px' }}>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted">{formattedDate}</CardSubtitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </div >
        )
    }
}