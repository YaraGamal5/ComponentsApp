import Button from '../components/Button';
import {GoBell, GoArchive, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log ('Click!');
  };

  return <div>
    <div>
      <Button success rounded outline className="mb-5" onClick={handleClick} >
        <GoBell/>
        Click here!
        </Button>
    </div>
    <div>
      <Button danger outline>
      <GoArchive/>
        Click me!
        </Button>
    </div>
    <div>
      <Button warning>
        <GoDatabase/>
        Start!
        </Button>
    </div>
    <div>
      <Button secondary outline >
        End!
        </Button>
    </div>
    <div>
      <Button primary rounded>
        Done!
        </Button>
    </div>

   </div>;
}

export default ButtonPage;
