import './mainpage.css'
import {Link} from 'react-router-dom';


export default function Mainpage() {


  return (
    <>
      <div className='mainpagecontianer'>

        <h1 className='mainpagetext'>Welcome to My Pokemon React App</h1>
        <div className='grid'>
          <div className='item1'>
            <div className="item1">
              <p className='mainpagep'>Build a Pokemon Team</p>

            </div>

              <Link to="/pokemonbuilder">
              <div className='ball'>
                <div className="ballcontainer">

                  <div className="pokieball">
                    <div className="halfred">
                      <div className="line">
                        <div className="darkcircleslightlycirclesml">
                          <div className="slightlycirclesml">
                            <div className="innercirclesml">
                           
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

          </div>
       

        <div className="item2">
          <div className="item2">
            <p className='mainpagep'>Play Pokemon browser game </p>
          </div>

          <Link to={"/Pokemongame"}>

          <div class="gameboycontainer">
            <div class="canvascontainer">
              <p className='gamboytext'>Play Now</p>

            </div>
            <div class="redcircle">
              <p>A</p>
            </div>
            <div class="bluecircle">
              <p>B</p>
            </div>
            <div class="cross">

            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
            <div class="greybuttonleft">
              <div class="greybuttonright"></div>
            </div>
          </div>
          </Link>

        </div>
      </div>
    </div >

    </>
  );

}