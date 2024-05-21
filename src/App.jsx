import Player from "./components/Player.jsx";

function App() {


    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="Player-01" symbol="X"/>
                    <Player initialName="Player-02" symbol="O"/>
                    {/*<li>*/}
                    {/*    <span className="player">*/}
                    {/*        <span className="player-name">Player 01</span>*/}
                    {/*        <span className="player-symbol">X</span>*/}
                    {/*    </span>*/}
                    {/*    <button>Edit</button>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <span className="player">*/}
                    {/*        <span className="player-name">Player 02</span>*/}
                    {/*        <span className="player-symbol">O</span>*/}
                    {/*    </span>*/}
                    {/*    <button>Edit</button>*/}
                    {/*</li>*/}
                </ol>
                GAME BOARD
            </div>
            LOG
        </main>
    )
}

export default App
