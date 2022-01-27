import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="contenedor">
     <ReactPlayer
        // url='https://www.youtube.com/watch?v=Zdc3shRvumk' dedes de youtube
        url={require('./videos/gato.mp4')} // local
        width="100%"
        height="100%"
        controls
        volumen={0.8}
        className="react-player"
     />
    </div>
  );
}

export default App;
