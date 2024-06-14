import './pokemonbuilder.css'


function Pokemonbuilder() {

    return ( <> <div className="buildercontianer"> <h1>Lets build your pokemon team</h1>
    <div>

        <button type="button" className="builderbutton builderbounce" name="pokiebutton" onClick="generateTeam()">

            <div className="builderpokieball">
                <div className="builderhalfred">
                    <div className="builderline">
                        <div className="builderdarkcircleslightlycirclesml">
                            <div className="builderslightlycirclesml">
                                <div className="builderinnercirclesml">

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </button>



        <div id="pokiemon">



        </div>



    </div></div></> );
}

export default Pokemonbuilder;