import React from "react";
import Location from "../Components/Location";
import Title from "../Components/Title";

function Locations() {
  const Maps = require("../Aset/Maps.png");

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-10">
      <div className="pb-10">
        <Title title="Locations" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <Location
          image={Maps}
          title="Senopati, Petogogan"
          address="Santa Modern Market, Lt.1, Blok CKS 5, Jl Cipaku I No. 1, Petogogan, Jakarta Selatan"
          link="https://maps.app.goo.gl/B4m6ZGZ5ACApbF648"
        />
        <Location
          image={Maps}
          title="Kebun Jeruk/ Tanjung Duren"
          address="Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat"
          link="https://maps.app.goo.gl/TLYLStESYwGEVhrt9"
        />
        <Location
          image={Maps}
          title="Food Plaza PIK"
          address="Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara"
          link="https://maps.app.goo.gl/v1uVREN64cBKshm2A"
        />
        <Location
          image={Maps}
          title="Kuningan - D'Kanteen"
          address="D Kanteen, Jl. Komando Raya No.18, DKI Jakarya 12920"
          link="https://maps.app.goo.gl/MAVvKu2rTzWsgEF88"
        />
        <Location
          image={Maps}
          title="Bintaro, Thelapan Square"
          address="JL Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten"
          link="https://maps.app.goo.gl/bSv6iyAe8ySEXNEKA"
        />
        <Location
          image={Maps}
          title="Gading Serpong"
          address="Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No. 25, Pakulonan"
          link="https://maps.app.goo.gl/8sYRBoWQE2mN7xaU9"
        />
        <Location
          image={Maps}
          title="Cipete"
          address="Jl. Cipete Raya No. 74, RW.3, Cipete Jakarta Selatan 12410"
          link="https://maps.app.goo.gl/xEfk9DJbHboiUWFx6"
        />
        <Location
          image={Maps}
          title="Menteng"
          address="JL. H. Agus Salim No. 60, Menteng, Jakarta Pusat 10350"
          link="https://maps.app.goo.gl/wF53ZPcQrtBk74Kg8"
        />
      </div>
    </div>
  );
}

export default Locations;
