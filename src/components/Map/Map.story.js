import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

const position = [41.9, 12.49];
const icon = L.divIcon({
    html:
        '<div style="background: blue; width: 55px; padding-left: 2px;"><img src="https://italia.github.io/design-web-toolkit/theme/docs/logo-it.svg" height="42" width="42"/></div>',
});

const NiceMap = ({attribution, tilesUrl}) => (
    <Map center={position} zoom={10} style={{height: 500}}>
        <TileLayer attribution={attribution} url={tilesUrl} />
        <Marker position={position} icon={icon}>
            <Popup>
                <span>
                    I'm here and I'm a component.<br /> With OpenStreet Map
                    tiles.
                </span>
            </Popup>
        </Marker>
    </Map>
);

storiesOf('Map', module)
    .add(
        'OpenStreet Layer',
        withInfo('OpenStreet Layer')(() => (
            <NiceMap
                tilesUrl={'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
                attribution={
                    '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
                }
            />
        ))
    )
    .add(
        'Stamen.Toner',
        withInfo('Stamen.Toner')(() => (
            <NiceMap
                attribution={
                    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }
                tilesUrl={
                    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
                }
            />
        ))
    )
    .add(
        'CartoDB Positron',
        withInfo('CartoDB Positron')(() => (
            <NiceMap
                attribution={
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                }
                tilesUrl={
                    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
                }
            />
        ))
    )
    .add(
        'Stamen Watercolor',
        withInfo('Stamen Watercolor')(() => (
            <NiceMap
                attribution={
                    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }
                tilesUrl={
                    'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'
                }
            />
        ))
    );
