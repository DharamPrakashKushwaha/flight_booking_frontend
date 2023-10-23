import './App.css';
import navigation from './components/navigation';

function App() {

  return (
    <>
      {/* navigation code start */}
         <navigation/>
      {/* navigation code end */}

      <section className="flex mx-[9%]">
        <div className="fixed w-2/5 h-screen my-[20px] rounded-lg shadow-md shadow-cyan-500/50 p-5">

          <div>Book Flight Tickets Online</div>

          <ul className="flex space-x-4 mt-[3%] font-bold">
            <li className="border-2 rounded-[4px] border-orange-950 px-3 py-2 cursor-pointer text-[10px]">ONE WAY</li>
            <li className="border-2 rounded-[4px] border-orange-950 px-3 py-2 cursor-pointer text-[10px]">ROUNDED TRIP</li>
          </ul>

          <div className="flex space-x-4 mt-[3%] font-bold">
            <select name="from">
              <option>Lucknow</option>
            </select>
            <select name="to">
              <option>Delhi</option>
            </select>
          </div>

          <div className="flex space-x-4 mt-[3%] font-bold">
            <input name="start" type="date" />
            <input name="return" type="date" />
          </div>

          <div className="flex space-x-4 mt-[3%] font-bold">
            <label for="passanger"> Passanger:
              <select id="passanger" name="passanger">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
          </div>

          <div className="flex space-x-4 mt-[3%] font-bold">
            <div>Class: </div>
            <label for="economy"> <input type="radio" id="economy" name="flight_class" value="1" /> Economy</label><br />

            <label for="premium"><input type="radio" id="premium" name="flight_class" value="2" /> Premium Economy</label><br />

            <label for="business"> <input type="radio" id="business" name="flight_class" value="3" /> Business</label>
          </div>

          <button className="bg-gray-400 px-4 py-2 mt-4">Search</button>

        </div>
      </section>

    </>
  )
}

export default App;
