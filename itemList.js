import React, { Component } from 'react';
import './styles.css';
import menuData from './menudata.json';
import Radium, { StyleRoot } from 'radium';


class ItemList extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        // this.setState({ data: menuData });

        var mdata = menuData[0];
        var items = [];

        for (var key in mdata) {
            if (mdata.hasOwnProperty(key)) {
                items.push(mdata[key]);
            }

            this.setState({ data: items })
        }
    }

    selectionHandler=(itemId, image, price, available, Name)=> {
      
        this.props.history.push(`/selectedItem/${itemId}`,{image: image, price: price, available: available, itemName: Name })


       /* console.log(itemId,image, price, available, Name);*/

    }


    render() {

        const style = {
            '@media (min-width:500px)': {
                width: '450px'
            },
            ':hover': {
                backgroundColor: 'lightGreen',
                color: 'black'
            }
        };

        //

        return (

            <StyleRoot>
                <div >
                    <div>
                        {
                            this.state.data.map((item) => {
                                /*console.log(item)*/
                                return (<div className="App"
                                    style={style}
                                    key={item.name}
                                    onClick={this.selectionHandler.bind(this, item.itemId, item.imageUrl, item.price, item.available, item.name)}
                                >
									<ul>
                                        {item.name}
										</ul>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </StyleRoot>

        );
    }
}

export default Radium(ItemList);
