import './App.css';
import Header from './components/Header/Header'
import Desc from './components/Desc/Desc'

function App() {


  const descriptionItems = [

    {
      id: "1",
      title: "Professionalism",
      txt: "We deliver the final work with great professional way.",
      more: "more info"
    },

    {
      id: "2",
      title: "Smooth workflow",
      txt: 'We provide the most easy smooth workflow of interior design.',
      more: "more info"
    },

    {
      id: "3",
      title: "Trusted Platform",
      txt: "People trust us since we openend the company",
      more: "more info"
    },

    {
      id: "4",
      title: "Qualified employee",
      txt: "Our employees are the best of the field from the city",
      more: "more info"
    }

  ]

  return (
    <div className="App">
      <Header />

      <section className='sectionInfo'>
      <div className="secTitle">
        <h1>Why Choosing Us</h1>
      </div>
        <div className="infoItems">
          {descriptionItems.map(el => <Desc key={el.id} title={el.title} txt={el.txt} more={el.more} />)}
        </div>
      </section>
      
    </div>
  );
}

export default App;