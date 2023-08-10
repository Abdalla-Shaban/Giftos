import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function Map() {
  const position = [48.8566, 2.3522];
  const markers = [
    {
      position: [48.86, 2.3522],
      popup: "Hello, I'am Popup 1",
    },
    {
      position: [48.85, 2.3522],
      popup: "Helll, I'am Popup 2",
    },
    {
      position: [48.855, 2.3391],
      popup: "Helll, I'am Popup 3",
    },
  ];
  const markerIcon = new Icon({
    iconUrl: require("../images/marker-icon.png"),
    iconSize: [38, 38],
  });
  return (
    <MapContainer
      className="flex-1 min-w-[350px] min-h-[350px]"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {markers.map((marker) => (
          <Marker
            key={marker.position}
            position={marker.position}
            icon={markerIcon}
          >
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
