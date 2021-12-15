import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  TypeSelector,
} from "react-yandex-maps";
import Button from "../components/Button";
const MapForChoose = () => {
  const [state, setstate] = React.useState(false);

  return (
    <YMaps>
      <div
        className={
          state ? "map_choosingLoaction done_Map" : "map_choosingLoaction"
        }
      >
        <Map
          defaultState={{ center: [38.838338, 65.795126], zoom: 17.5 }}
          width={980}
          height={500}
        >
          <div className="map_inside">
            <Placemark geometry={[38.838338, 65.795126]} />
            <FullscreenControl />
            <ZoomControl options={{ float: "left" }} />
            <TypeSelector options={{ float: "right" }} />
            <Button className="map_btn" onClick={() => setstate(() => true)}>
              Manzil Tasdiqlash
            </Button>
          </div>
        </Map>
      </div>
    </YMaps>
  );
};
export default MapForChoose;
