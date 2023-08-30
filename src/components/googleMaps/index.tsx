import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

interface GoogleMapProps {
    google: typeof google;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ google }) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <Map
            google={google}
            zoom={16}
            style={mapStyles}
            initialCenter={{
                lat: -27.6297138,
                lng: -48.5271286,
            }}
        />
    );
};



export default function GoogleMaps() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return <div>Error: Chave de API não encontrada</div>;
    }

    const WrappedGoogleMap = GoogleApiWrapper({
        apiKey,
    })(GoogleMap);

    return <WrappedGoogleMap />;
}

