import React from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer} from 'react-leaflet';
export {
    LayersControl,
    MapLayer,
    GridLayer,
    WMSTileLayer,
    ImageOverlay,
    LayerGroup,
    Marker,
    Path,
    Circle,
    CircleMarker,
    FeatureGroup,
    GeoJSON,
    Polygon,
    Polyline,
    Rectangle,
    Popup,
    Tooltip,
} from 'react-leaflet';

class OSMap extends React.Component {
    state = {
        isLoaded: false,
    };
    componentDidMount() {
        this.setState({loaded: true});
    }

    render() {
        // Avoid to load Leaflet on SSR or in NodeJS
        if (!this.state.loaded) {
            return null;
        }

        const {children, height, ...rest} = this.props;

        return (
            <Map {...rest} style={{height: `${height}px`}}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                {children}
            </Map>
        );
    }
}

OSMap.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
};

export default OSMap;
