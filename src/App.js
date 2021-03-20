// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Cписок задач на React</h1>
            <div class="flex mt-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500" placeholder="Добавить задачу" />
                <button className="flex-no-shrink p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Добавить</button>
            </div>
        </div>
        <div>
            <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">Первая задача</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Готово</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Удалить</button>
            </div>
          	<div className="flex mb-4 items-center">
                <p className="w-full line-through text-green">Вторая задача</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Не готово</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Удалить</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
