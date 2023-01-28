import React from "react";
import TitleTextImage from "../../img/title-white-gujarati.png";
import LocationImage from "../../img/location.png";
import BgImage from "../../img/bg.jpg";

function Header() {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg m-3 p-3 shadow-xl flex justify-center">
        <img src={TitleTextImage} />
      </div>
      <div className="bg-orange-50 m-3 p-3 rounded-lg shadow-xl">
        <center>
          <p className="font-bold text-2xl">
            Gunatit Mandal Invites you to get the labh of Pragat Guruhari
            Prabodhswamiji
          </p>
          <br />
          <p className="font-bold text-xl">Friday, 3rd Feb 2023</p>
          <p className="font-bold text-lg">Mahaprasadam: 6 PM to 7.30 PM</p>
          <p className="font-bold text-lg">Sabha: 7.30 PM to 10 PM</p>
          <br></br>
          <p>
            Laxminarayan Prasad Lawn, Shubhash Road, Opp Mahila Sangh School,
            Vile Parle East
          </p>
          <p className="flex justify-center mb-2 text-lg">
            <a
              href="https://goo.gl/maps/bpqcJDnbsX7ASTMy9"
              className="text-blue-800 mt-5 font-bold"
            >
              Google Map Location
            </a>
          </p>
        </center>
      </div>
    </>
  );
}

export default Header;
