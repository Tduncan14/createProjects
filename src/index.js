import ReactDOM from 'react-dom/client'
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
function App(){
    


    return(
        <div className="container-fluid">
 
            <nav className="navbar sticky-top navbar-light bg-dark" >

                <h1 className="navbar-brand text-light">
                <h1>Rick and Morty</h1>
                </h1>
            </nav>
            <List />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)


root.render(<App />)