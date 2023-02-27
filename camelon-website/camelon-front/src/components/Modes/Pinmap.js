import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "../../css/Pinmap.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { useSelector } from "react-redux";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Pinmap() {
  const { locations } = useSelector((state) => state.data);
  const { news_info } = useSelector((state) => state.data);
  const { user_current_location } = useSelector((state) => state.data);

  function SetView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    // var newMarker = new L.circle(coords).addTo(map);
    // var marker = L.circle(coords, 1609.34, {
    //   color: "blue",
    //   fillColor: "blue",
    // }).addTo(map);
    return null;
  }

  return (
    <>
      <div class="sm" style={{ marginTop: 16 }}>
        <div class="p-1 border-2 border-gray-200 border rounded dark:border-gray-700">
          <MapContainer center={[13.751, 100.492]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <SetView
              coords={[
                user_current_location.latitude,
                user_current_location.longitude,
              ]}
            />

            <MarkerClusterGroup chunkedLoading>
              {locations.map((location) => (
                <Marker position={[location.latitude, location.longitude]}>
                  <Popup>
                    <div>
                      {" "}
                      Criminal:{" "}
                      {
                        news_info.find(
                          (news) => news.info_id === location.info_id
                        ).criminal
                      }
                    </div>
                    <div>
                      {" "}
                      Action:{" "}
                      {
                        news_info.find(
                          (news) => news.info_id === location.info_id
                        ).action
                      }
                    </div>
                    <div>
                      {" "}
                      Victim:{" "}
                      {
                        news_info.find(
                          (news) => news.info_id === location.info_id
                        ).victim
                      }
                    </div>
                    <div> Address: {location.formatted_address}</div>
                    <div className="popup-action">
                      <button onClick={() => console.log("hello")}>
                        Read more...
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      </div>
    </>
  );
}
